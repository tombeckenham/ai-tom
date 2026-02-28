import * as fs from 'node:fs'
import * as path from 'node:path'
import { createClient } from '@hey-api/openapi-ts'
import type { ResolvedProviderConfig } from './types'

/**
 * Download an OpenAPI spec to a local cache directory.
 * Returns the local file path.
 */
export async function downloadSpec(
  config: ResolvedProviderConfig,
  cacheDir: string,
): Promise<string> {
  const specUrl = config.specUrl
  const ext =
    specUrl.endsWith('.yaml') || specUrl.endsWith('.yml') ? '.yaml' : '.json'
  const cachedPath = path.join(cacheDir, `${config.name}-openapi${ext}`)

  // If cached file exists and is less than 24 hours old, use it
  if (fs.existsSync(cachedPath)) {
    const stat = fs.statSync(cachedPath)
    const ageMs = Date.now() - stat.mtimeMs
    const twentyFourHours = 24 * 60 * 60 * 1000
    if (ageMs < twentyFourHours) {
      console.log(
        `[ai-vite] Using cached spec for ${config.name}: ${cachedPath}`,
      )
      return cachedPath
    }
  }

  console.log(
    `[ai-vite] Downloading ${config.name} OpenAPI spec from ${specUrl}...`,
  )

  let response: Response
  try {
    response = await fetch(specUrl)
  } catch (err) {
    throw new Error(
      `[ai-vite] Failed to download OpenAPI spec for "${config.name}" from ${specUrl}. ` +
        `Check your network connection and that the URL is reachable.\n` +
        `Cause: ${(err as Error).message}`,
    )
  }
  if (!response.ok) {
    throw new Error(
      `[ai-vite] Failed to download OpenAPI spec for "${config.name}": HTTP ${response.status} ${response.statusText}. ` +
        `URL: ${specUrl}`,
    )
  }

  const content = await response.text()

  fs.mkdirSync(cacheDir, { recursive: true })
  fs.writeFileSync(cachedPath, content, 'utf-8')

  console.log(`[ai-vite] Cached ${config.name} spec to ${cachedPath}`)
  return cachedPath
}

/**
 * Run hey-api codegen for a provider's OpenAPI spec.
 * Generates TypeScript types and optionally Zod schemas.
 */
export async function runHeyApiCodegen(opts: {
  specPath: string
  outputDir: string
  providerName: string
  plugins?: Array<string | Record<string, unknown>>
}): Promise<Array<string>> {
  const { specPath, outputDir, providerName, plugins } = opts

  console.log(`[ai-vite] Running codegen for ${providerName}...`)
  console.log(`[ai-vite]   Spec: ${specPath}`)
  console.log(`[ai-vite]   Output: ${outputDir}`)

  // Ensure output directory exists
  fs.mkdirSync(outputDir, { recursive: true })

  const resolvedPlugins = plugins ?? [
    {
      name: '@hey-api/typescript',
      // Generate only type definitions, not runtime code
      style: 'PascalCase',
    },
    {
      name: 'zod',
      definitions: true,
    },
  ]

  try {
    await createClient({
      input: specPath,
      output: outputDir,
      plugins: resolvedPlugins as any,
    })
  } catch (err) {
    throw new Error(
      `[ai-vite] hey-api codegen failed for "${providerName}". ` +
        `The OpenAPI spec at ${specPath} may be invalid or unsupported.\n` +
        `Cause: ${(err as Error).message}`,
    )
  }

  // Collect generated files
  const generatedFiles: Array<string> = []
  if (fs.existsSync(outputDir)) {
    for (const file of fs.readdirSync(outputDir)) {
      if (file.endsWith('.ts')) {
        generatedFiles.push(path.join(outputDir, file))
      }
    }
  }

  console.log(`[ai-vite] Codegen complete for ${providerName}`)
  return generatedFiles
}

/**
 * Write a generated TypeScript file to disk.
 */
export function writeGeneratedFile(filePath: string, content: string): void {
  const dir = path.dirname(filePath)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(filePath, content, 'utf-8')
  console.log(`[ai-vite] Wrote ${filePath}`)
}
