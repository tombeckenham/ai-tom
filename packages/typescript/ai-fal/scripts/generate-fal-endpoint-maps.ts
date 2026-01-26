#!/usr/bin/env tsx
/**
 * Generate category-specific EndpointTypeMap files
 *
 * This script:
 * 1. Reads fal-endpoint-mapping.json
 * 2. Groups endpoints by category
 * 3. For each category, generates {category}/endpoint-map.ts with:
 *    - CategoryEndpointMap type
 *    - CategoryModel utility type
 *    - CategoryInput<T> utility type
 *    - CategoryOutput<T> utility type
 * 4. Generates unified index.ts that re-exports all categories
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

interface EndpointData {
  input: string
  output: string
  category: string
  displayName: string
}

interface EndpointMappingFile {
  generated_at: string
  total_endpoints: number
  endpoints: Record<string, EndpointData>
}

/**
 * Read actual generated type names from types.gen.ts file
 */
function getGeneratedTypeNames(categoryPath: string): Set<string> {
  const typesPath = join(categoryPath, 'types.gen.ts')
  if (!existsSync(typesPath)) {
    return new Set()
  }

  const content = readFileSync(typesPath, 'utf-8')
  const typeNames = new Set<string>()

  // Match: export type TypeName = {
  const typeRegex = /export type (\w+) =/g
  let match
  while ((match = typeRegex.exec(content)) !== null) {
    typeNames.add(match[1]!)
  }

  return typeNames
}

/**
 * Find the closest matching type name from generated types
 */
function findClosestTypeName(
  targetName: string,
  availableTypes: Set<string>,
): string | null {
  // First try exact match
  if (availableTypes.has(targetName)) {
    return targetName
  }

  // Normalize target name (remove underscores, convert to lowercase)
  const normalizedTarget = targetName.replace(/_/g, '').toLowerCase()

  // Find best match by normalized comparison
  for (const typeName of availableTypes) {
    const normalized = typeName.toLowerCase()
    if (normalized === normalizedTarget) {
      return typeName
    }
  }

  return null
}

function toPascalCase(str: string): string {
  const pascalCase = str
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  // TypeScript identifiers cannot start with a number
  // Prefix with underscore if it starts with a digit
  if (/^\d/.test(pascalCase)) {
    return '_' + pascalCase
  }

  return pascalCase
}

function main() {
  const mappingPath = join(__dirname, 'fal-endpoint-mapping.json')

  if (!existsSync(mappingPath)) {
    console.error('Error: fal-endpoint-mapping.json not found.')
    console.error('Run generate-fal-openapi.ts first.')
    process.exit(1)
  }

  console.log('Reading fal-endpoint-mapping.json...')
  const mappingFile: EndpointMappingFile = JSON.parse(
    readFileSync(mappingPath, 'utf-8'),
  )
  const endpoints = mappingFile.endpoints

  console.log(`Found ${Object.keys(endpoints).length} endpoints`)

  // Group endpoints by category
  const byCategory: Record<
    string,
    Array<{ endpointId: string } & EndpointData>
  > = {}

  for (const [endpointId, data] of Object.entries(endpoints)) {
    if (!byCategory[data.category]) {
      byCategory[data.category] = []
    }
    byCategory[data.category]!.push({ endpointId, ...data })
  }

  console.log(`\nGrouped into ${Object.keys(byCategory).length} categories:`)
  for (const [category, items] of Object.entries(byCategory)) {
    console.log(`  - ${category}: ${items.length} endpoints`)
  }

  const generatedDir = join(__dirname, '..', 'src', 'generated')
  const categoryNames: Array<string> = []

  // Generate endpoint-map.ts for each category
  console.log('\nGenerating endpoint maps...')
  for (const [category, endpoints] of Object.entries(byCategory)) {
    const typeName = toPascalCase(category)
    categoryNames.push(category)

    const categoryPath = join(generatedDir, category)

    // Read actual generated type names
    const generatedTypes = getGeneratedTypeNames(categoryPath)

    if (generatedTypes.size === 0) {
      console.warn(`  Warning: No types found for ${category}, skipping`)
      continue
    }

    // Collect unique input and output type names, matching with generated types
    const inputTypes = new Set<string>()
    const outputTypes = new Set<string>()
    const resolvedEndpoints: Array<{
      endpointId: string
      input: string
      output: string
    }> = []

    for (const { endpointId, input, output } of endpoints) {
      // Find closest matching type names in generated files
      const resolvedInput = findClosestTypeName(input, generatedTypes)
      const resolvedOutput = findClosestTypeName(output, generatedTypes)

      if (!resolvedInput || !resolvedOutput) {
        console.warn(
          `  Warning: Could not resolve types for ${endpointId}: ${input} -> ${resolvedInput}, ${output} -> ${resolvedOutput}`,
        )
        continue
      }

      inputTypes.add(resolvedInput)
      outputTypes.add(resolvedOutput)
      resolvedEndpoints.push({
        endpointId,
        input: resolvedInput,
        output: resolvedOutput,
      })
    }

    // Generate imports
    const imports = [
      `// AUTO-GENERATED - Do not edit manually`,
      `// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts`,
      ``,
      `import type {`,
      ...Array.from(new Set([...inputTypes, ...outputTypes])).map(
        (t) => `  ${t},`,
      ),
      `} from './types.gen'`,
      ``,
    ]

    // Generate EndpointTypeMap
    const typeMapLines = [`export type ${typeName}EndpointMap = {`]

    for (const { endpointId, input, output } of resolvedEndpoints) {
      typeMapLines.push(`  '${endpointId}': {`)
      typeMapLines.push(`    input: ${input}`)
      typeMapLines.push(`    output: ${output}`)
      typeMapLines.push(`  }`)
    }

    typeMapLines.push(`}`)

    // Generate utility types
    const utilityTypes = [
      ``,
      `/** Union type of all ${category} model endpoint IDs */`,
      `export type ${typeName}Model = keyof ${typeName}EndpointMap`,
      ``,
      `/** Get the input type for a specific ${category} model */`,
      `export type ${typeName}ModelInput<T extends ${typeName}Model> = ${typeName}EndpointMap[T]['input']`,
      ``,
      `/** Get the output type for a specific ${category} model */`,
      `export type ${typeName}ModelOutput<T extends ${typeName}Model> = ${typeName}EndpointMap[T]['output']`,
      ``,
    ]

    // Combine all parts
    const content = [...imports, ...typeMapLines, ...utilityTypes].join('\n')

    // Write to file
    const outputPath = join(generatedDir, category, 'endpoint-map.ts')
    writeFileSync(outputPath, content)
    console.log(`  ✓ Generated ${category}/endpoint-map.ts`)
  }

  // Generate unified index.ts
  console.log('\nGenerating unified index.ts...')
  const indexLines = [
    `// AUTO-GENERATED - Do not edit manually`,
    `// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts`,
    ``,
    `// Re-export all category endpoint maps`,
  ]

  for (const category of categoryNames) {
    indexLines.push(`export * from './${category}/endpoint-map'`)
  }

  indexLines.push(``)
  indexLines.push(`// Create a union type of all models across categories`)
  indexLines.push(`import type {`)
  for (const category of categoryNames) {
    indexLines.push(`  ${toPascalCase(category)}Model,`)
  }
  indexLines.push(`} from './index'`)
  indexLines.push(``)
  indexLines.push(`/**`)
  indexLines.push(
    ` * Union type of all Fal.ai model endpoint IDs across all categories.`,
  )
  indexLines.push(` * `)
  indexLines.push(
    ` * Note: Using this union type loses some type precision. For better type safety,`,
  )
  indexLines.push(
    ` * import category-specific types like ImageToImageModel, TextToImageModel, etc.`,
  )
  indexLines.push(` */`)
  indexLines.push(`export type FalModel =`)
  for (let i = 0; i < categoryNames.length; i++) {
    const category = categoryNames[i]
    const isLast = i === categoryNames.length - 1
    indexLines.push(`  | ${toPascalCase(category!)}Model${isLast ? '' : ''}`)
  }
  indexLines.push(``)

  const indexPath = join(generatedDir, 'index.ts')
  writeFileSync(indexPath, indexLines.join('\n'))
  console.log(`  ✓ Generated index.ts`)

  console.log(`\n✓ Done! Generated endpoint maps in src/generated/`)
  console.log(`\nCategories generated:`)
  for (const category of categoryNames) {
    console.log(`  - ${category} (${toPascalCase(category)}Model)`)
  }
}

main()
