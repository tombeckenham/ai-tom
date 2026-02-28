#!/usr/bin/env tsx
/**
 * Generate model-meta.ts files for all provider adapter packages.
 *
 * Usage:
 *   pnpm generate:model-meta                 # Use cached OpenRouter data
 *   pnpm generate:model-meta --fetch         # Fetch fresh data from OpenRouter API
 *   pnpm generate:model-meta --dry-run       # Print output without writing files
 *
 * This script:
 * 1. Loads OpenRouter model data (from cache or API)
 * 2. Applies per-provider capability rules to determine provider options
 * 3. Generates model-meta.ts files into each adapter package
 */

import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { processModels, generateModelMetaFile } from './engine'
import { openaiConfig } from './openai-rules'
import { anthropicConfig } from './anthropic-rules'
import { geminiConfig } from './gemini-rules'
import { grokConfig } from './grok-rules'
import type { ProviderConfig } from './types'
import type { OpenRouterModel } from '../openrouter.models'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '../..')

interface ProviderTarget {
  config: ProviderConfig
  outputPath: string
}

const providers: Array<ProviderTarget> = [
  {
    config: openaiConfig,
    outputPath: path.join(
      ROOT,
      'packages/typescript/ai-openai/src/model-meta.generated.ts',
    ),
  },
  {
    config: anthropicConfig,
    outputPath: path.join(
      ROOT,
      'packages/typescript/ai-anthropic/src/model-meta.generated.ts',
    ),
  },
  {
    config: geminiConfig,
    outputPath: path.join(
      ROOT,
      'packages/typescript/ai-gemini/src/model-meta.generated.ts',
    ),
  },
  {
    config: grokConfig,
    outputPath: path.join(
      ROOT,
      'packages/typescript/ai-grok/src/model-meta.generated.ts',
    ),
  },
]

async function fetchOpenRouterModels(): Promise<Array<OpenRouterModel>> {
  console.log('Fetching models from OpenRouter API...')
  const response = await fetch('https://openrouter.ai/api/v1/models')
  if (!response.ok) {
    throw new Error(
      `OpenRouter API request failed: ${response.status} ${response.statusText}`,
    )
  }
  const data = (await response.json()) as { data: Array<OpenRouterModel> }
  console.log(`Fetched ${data.data.length} models from OpenRouter`)
  return data.data
}

function loadCachedModels(): Array<OpenRouterModel> {
  const cachedPath = path.join(__dirname, '..', 'openrouter.models.ts')
  // We can't dynamically import the TS file easily, so read and parse
  // The file exports `models` array - import it via tsx
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require(cachedPath)
  return mod.models as Array<OpenRouterModel>
}

async function loadModels(
  fetchFresh: boolean,
): Promise<Array<OpenRouterModel>> {
  if (fetchFresh) {
    return fetchOpenRouterModels()
  }
  // Use dynamic import for the cached models file
  const cachedPath = path.join(__dirname, '..', 'openrouter.models.ts')
  const mod = await import(cachedPath)
  return mod.models as Array<OpenRouterModel>
}

async function main() {
  const args = process.argv.slice(2)
  const fetchFresh = args.includes('--fetch')
  const dryRun = args.includes('--dry-run')

  const allModels = await loadModels(fetchFresh)
  console.log(`Loaded ${allModels.length} total models`)

  for (const { config, outputPath } of providers) {
    const models = processModels(allModels, config)
    const chatCount = models.filter((m) => m.isChat).length
    const imageCount = models.filter((m) => m.isImage).length

    console.log(
      `\n${config.exportPrefix}: ${models.length} models (${chatCount} chat, ${imageCount} image)`,
    )

    const content = generateModelMetaFile(models, config)

    if (dryRun) {
      console.log(`--- ${outputPath} ---`)
      console.log(content.slice(0, 500))
      console.log('...')
    } else {
      fs.writeFileSync(outputPath, content + '\n', 'utf-8')
      console.log(`  Wrote ${outputPath}`)
    }
  }

  if (!dryRun) {
    console.log('\nDone! Generated model-meta files for all providers.')
    console.log(
      'Review the .generated.ts files and compare with existing model-meta.ts files.',
    )
  }
}

main().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
