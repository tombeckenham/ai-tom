#!/usr/bin/env tsx
/**
 * Generate category-based OpenAPI specs from fal.models.json
 *
 * This script:
 * 1. Reads fal.models.json (1098 models with OpenAPI specs)
 * 2. Groups models by metadata.category (25 categories)
 * 3. For each category, generates a unified OpenAPI 3.0 spec
 * 4. Outputs to scripts/openapi/{category}.json
 * 5. Creates fal-endpoint-mapping.json with endpoint -> schema -> category mapping
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Sanitize a schema name to be a valid TypeScript identifier
 */
function sanitizeSchemaName(name: string): string {
  // Replace any invalid characters (anything except letters, numbers, underscores) with nothing
  // Split on the invalid parts to create word boundaries
  const parts = name.split(/[^a-zA-Z0-9_]+/).filter(Boolean)

  // If it already looks like PascalCase or camelCase, return as-is (with invalid chars removed)
  if (!parts[0]) return ''
  if (parts.length === 1 && /^[A-Z]/.test(parts[0])) {
    return parts[0]
  }

  // Otherwise, convert to PascalCase
  const pascalCase = parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')

  // If it starts with a number, prefix with underscore
  if (/^\d/.test(pascalCase)) {
    return '_' + pascalCase
  }

  return pascalCase
}

interface FalModelData {
  endpoint_id: string
  metadata: {
    category: string
    display_name: string
    description: string
    status: string
    [key: string]: any
  }
  openapi: {
    openapi: string
    info: any
    components: {
      schemas: Record<string, any>
      securitySchemes?: any
    }
    [key: string]: any
  }
}

interface FalModelsFile {
  generated_at: string
  total_models: number
  models: Array<FalModelData>
}

interface EndpointMapping {
  [endpointId: string]: {
    input: string
    output: string
    category: string
    displayName: string
  }
}

// Common schemas that appear in most Fal models
const COMMON_SCHEMAS = {
  File: {
    type: 'object',
    properties: {
      url: { type: 'string', format: 'uri' },
      content_type: { type: 'string' },
      file_name: { type: 'string' },
      file_size: { type: 'integer' },
    },
    required: ['url'],
  },
  QueueStatus: {
    type: 'object',
    properties: {
      status: {
        type: 'string',
        enum: ['IN_PROGRESS', 'COMPLETED', 'FAILED'],
      },
      response_url: { type: 'string', format: 'uri' },
    },
    required: ['status'],
  },
}

function main() {
  console.log('Reading fal.models.json...')
  const falModelsPath = join(__dirname, 'fal.models.json')
  const falModels: FalModelsFile = JSON.parse(
    readFileSync(falModelsPath, 'utf-8'),
  )

  console.log(`Found ${falModels.total_models} models`)

  // Group models by category
  const categoriesMap = new Map<string, Array<FalModelData>>()
  const endpointMapping: EndpointMapping = {}

  for (const model of falModels.models) {
    const category = model.metadata.category || 'uncategorized'

    if (!categoriesMap.has(category)) {
      categoriesMap.set(category, [])
    }
    categoriesMap.get(category)!.push(model)
  }

  console.log(`Found ${categoriesMap.size} categories:`)
  for (const [category, models] of categoriesMap.entries()) {
    console.log(`  - ${category}: ${models.length} models`)
  }

  // Create openapi directory
  const openapiDir = join(__dirname, 'openapi')
  mkdirSync(openapiDir, { recursive: true })

  // Helper function to collect all schema names referenced in a schema (recursively)
  // Returns { found: Set<string>, missing: Set<string> }
  function collectDependencies(
    schema: any,
    allSchemas: Record<string, any>,
    collected: { found: Set<string>; missing: Set<string> } = {
      found: new Set(),
      missing: new Set(),
    },
  ): { found: Set<string>; missing: Set<string> } {
    if (!schema || typeof schema !== 'object') return collected

    // Check for $ref
    if (schema.$ref && typeof schema.$ref === 'string') {
      const match = schema.$ref.match(/#\/components\/schemas\/(.+)/)
      if (match) {
        const refName = match[1]!
        if (!collected.found.has(refName) && !collected.missing.has(refName)) {
          if (allSchemas[refName]) {
            collected.found.add(refName)
            // Recursively collect dependencies of this schema
            collectDependencies(allSchemas[refName], allSchemas, collected)
          } else {
            collected.missing.add(refName)
          }
        }
      }
    }

    // Recursively check all properties
    if (Array.isArray(schema)) {
      for (const item of schema) {
        collectDependencies(item, allSchemas, collected)
      }
    } else {
      for (const value of Object.values(schema)) {
        if (typeof value === 'object' && value !== null) {
          collectDependencies(value, allSchemas, collected)
        }
      }
    }

    return collected
  }

  // Helper function to update all $ref pointers in a schema
  function updateRefs(schema: any, nameMap: Map<string, string>): any {
    if (!schema || typeof schema !== 'object') return schema

    if (Array.isArray(schema)) {
      return schema.map((item) => updateRefs(item, nameMap))
    }

    const result: any = {}
    for (const [key, value] of Object.entries(schema)) {
      if (key === '$ref' && typeof value === 'string') {
        const match = value.match(/#\/components\/schemas\/(.+)/)
        if (match && nameMap.has(match[1]!)) {
          result[key] = `#/components/schemas/${nameMap.get(match[1]!)!}`
        } else {
          result[key] = value
        }
      } else if (typeof value === 'object' && value !== null) {
        result[key] = updateRefs(value, nameMap)
      } else {
        result[key] = value
      }
    }
    return result
  }

  // Generate OpenAPI spec for each category
  for (const [category, models] of categoriesMap.entries()) {
    console.log(`\nGenerating OpenAPI spec for category: ${category}`)

    const categorySchemas: Record<string, any> = {
      ...COMMON_SCHEMAS,
    }

    // Process each model in this category
    for (const model of models) {
      const endpointId = model.endpoint_id

      const schemas = model.openapi.components.schemas

      // Find Input and Output schemas
      let inputSchemaName: string | null = null
      let outputSchemaName: string | null = null

      for (const schemaName of Object.keys(schemas)) {
        if (schemaName.endsWith('Input')) {
          inputSchemaName = schemaName
        } else if (schemaName.endsWith('Output')) {
          outputSchemaName = schemaName
        }
      }

      // Collect all schemas needed (Input/Output + their dependencies)
      const schemasToInclude = new Set<string>()
      const missingRefs = new Set<string>()

      if (inputSchemaName) {
        schemasToInclude.add(inputSchemaName)
        const deps = collectDependencies(schemas[inputSchemaName], schemas)
        for (const dep of deps.found) {
          schemasToInclude.add(dep)
        }
        for (const dep of deps.missing) {
          missingRefs.add(dep)
        }
      }
      if (outputSchemaName) {
        schemasToInclude.add(outputSchemaName)
        const deps = collectDependencies(schemas[outputSchemaName], schemas)
        for (const dep of deps.found) {
          schemasToInclude.add(dep)
        }
        for (const dep of deps.missing) {
          missingRefs.add(dep)
        }
      }

      // Build name mapping for schemas we're including (+ missing refs)
      const nameMap = new Map<string, string>()
      const usedNames = new Set<string>(Object.keys(categorySchemas))

      // Add mappings for existing schemas
      for (const oldName of schemasToInclude) {
        const sanitizedName = sanitizeSchemaName(oldName)
        let finalName = sanitizedName

        // Check if this sanitized name is already used by a different schema
        if (usedNames.has(sanitizedName)) {
          const existingMapping = Array.from(nameMap.entries()).find(
            ([_, v]) => v === sanitizedName,
          )
          if (!existingMapping || existingMapping[0] !== oldName) {
            // Collision - use endpoint prefix
            const endpointPrefix = endpointId
              .split(/[^a-zA-Z0-9]+/)
              .filter(Boolean)
              .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
              .join('')
            finalName = endpointPrefix + '_' + sanitizedName
          }
        }

        nameMap.set(oldName, finalName)
        usedNames.add(finalName)
      }

      // Add mappings for missing refs (so updateRefs can find them)
      for (const missingRef of missingRefs) {
        if (!nameMap.has(missingRef)) {
          const sanitizedName = sanitizeSchemaName(missingRef)
          nameMap.set(missingRef, sanitizedName)
        }
      }

      // Update refs and add schemas to category
      for (const oldName of schemasToInclude) {
        const schema = schemas[oldName]
        if (!schema) continue

        const finalName = nameMap.get(oldName)!
        const updatedSchema = updateRefs(schema, nameMap)
        categorySchemas[finalName] = updatedSchema

        // Track Input/Output for endpoint mapping
        if (oldName === inputSchemaName) inputSchemaName = finalName
        if (oldName === outputSchemaName) outputSchemaName = finalName
      }

      // Create placeholder schemas for missing references
      for (const missingRef of missingRefs) {
        const finalName = nameMap.get(missingRef)!
        if (!categorySchemas[finalName]) {
          categorySchemas[finalName] = {
            type: 'object',
            description: `Placeholder for missing schema ${missingRef} (referenced but not defined in source OpenAPI spec)`,
            additionalProperties: true,
          }
        }
      }

      // Record endpoint mapping
      if (inputSchemaName && outputSchemaName) {
        endpointMapping[endpointId] = {
          input: inputSchemaName,
          output: outputSchemaName,
          category,
          displayName: model.metadata.display_name,
        }
      } else {
        console.warn(
          `  Warning: Could not find Input/Output schemas for ${endpointId}`,
        )
      }
    }

    // Create OpenAPI spec for this category
    const openApiSpec = {
      openapi: '3.0.4',
      info: {
        title: `Fal.ai ${category} Models`,
        version: '1.0.0',
        description: `OpenAPI schemas for all fal.ai ${category} models (${models.length} models total)`,
        'x-generated-at': new Date().toISOString(),
      },
      components: {
        schemas: categorySchemas,
        securitySchemes: {
          apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
          },
        },
      },
    }

    // Write category OpenAPI spec
    const outputPath = join(openapiDir, `${category}.json`)
    writeFileSync(outputPath, JSON.stringify(openApiSpec, null, 2))
    console.log(
      `  ✓ Written ${Object.keys(categorySchemas).length} schemas to ${category}.json`,
    )
  }

  // Write endpoint mapping
  const mappingPath = join(__dirname, 'fal-endpoint-mapping.json')
  writeFileSync(
    mappingPath,
    JSON.stringify(
      {
        generated_at: new Date().toISOString(),
        total_endpoints: Object.keys(endpointMapping).length,
        endpoints: endpointMapping,
      },
      null,
      2,
    ),
  )
  console.log(
    `\n✓ Written endpoint mapping to fal-endpoint-mapping.json (${Object.keys(endpointMapping).length} endpoints)`,
  )

  console.log('\nDone! OpenAPI specs generated in scripts/openapi/')
  console.log(
    'Note: openapi-ts.config.ts is manually maintained - update it if new categories are added',
  )
}

main()
