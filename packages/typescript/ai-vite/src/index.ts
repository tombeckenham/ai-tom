import * as path from 'node:path'
import { downloadSpec, runHeyApiCodegen, writeGeneratedFile } from './codegen'
import {
  fetchOpenAIModels,
  filterChatModels,
  filterImageModels,
  generateModelUnionSource,
  resolveOpenAIConfig,
} from './providers/openai'
import {
  fetchOpenRouterModels,
  generateAugmentationDts,
  generateRuntimeMeta,
  getAugmentationConfig,
} from './model-meta-augmentation'
import type { Plugin, ResolvedConfig } from 'vite'
import type {
  ProviderEntry,
  ProviderName,
  ResolvedProviderConfig,
  TanStackAIPluginOptions,
} from './types'

export type {
  TanStackAIPluginOptions,
  ProviderConfig,
  ProviderName,
  ProviderEntry,
} from './types'

export type { AugmentationConfig, CapabilityRule } from './model-meta-augmentation'

/**
 * Try to load known model names from the library's shipped model-meta exports.
 * Returns an empty set if the package isn't installed or can't be loaded.
 */
async function loadKnownModelNames(
  providerName: string,
): Promise<Set<string>> {
  const moduleMap: Record<string, { pkg: string; chatModels: string; imageModels?: string }> = {
    openai: {
      pkg: '@tanstack/ai-openai',
      chatModels: 'OPENAI_CHAT_MODELS',
      imageModels: 'OPENAI_IMAGE_MODELS',
    },
    anthropic: {
      pkg: '@tanstack/ai-anthropic',
      chatModels: 'ANTHROPIC_CHAT_MODELS',
    },
    gemini: {
      pkg: '@tanstack/ai-gemini',
      chatModels: 'GEMINI_MODELS',
      imageModels: 'GEMINI_IMAGE_MODELS',
    },
    grok: {
      pkg: '@tanstack/ai-grok',
      chatModels: 'GROK_CHAT_MODELS',
      imageModels: 'GROK_IMAGE_MODELS',
    },
  }

  const info = moduleMap[providerName]
  if (!info) return new Set()

  try {
    const mod = await import(info.pkg)
    const names = new Set<string>()
    const chatModels = mod[info.chatModels] as ReadonlyArray<string> | undefined
    if (chatModels) {
      for (const name of chatModels) names.add(name)
    }
    if (info.imageModels) {
      const imageModels = mod[info.imageModels] as ReadonlyArray<string> | undefined
      if (imageModels) {
        for (const name of imageModels) names.add(name)
      }
    }
    console.log(
      `[ai-vite] Loaded ${names.size} known models from ${info.pkg}`,
    )
    return names
  } catch {
    console.log(
      `[ai-vite] Could not load ${info.pkg} — all models will be included in augmentation`,
    )
    return new Set()
  }
}

/**
 * Resolve a provider name or entry into a full config.
 */
function resolveProvider(
  provider: ProviderName | ProviderEntry,
): ResolvedProviderConfig {
  const name = typeof provider === 'string' ? provider : provider.name
  const overrides = typeof provider === 'string' ? undefined : provider.config

  switch (name) {
    case 'openai':
      return resolveOpenAIConfig(overrides as any)
    default:
      throw new Error(
        `[ai-vite] Unsupported provider: "${name}". Currently supported: openai`,
      )
  }
}

/**
 * Run the full codegen pipeline for a single provider.
 */
async function generateForProvider(
  config: ResolvedProviderConfig,
  outputDir: string,
  cacheDir: string,
  generatedFiles: Array<string>,
  env?: Record<string, string>,
): Promise<void> {
  const providerOutputDir = path.join(outputDir, config.name)

  // Step 1: Download/cache the OpenAPI spec
  const specPath = await downloadSpec(config, cacheDir)

  // Step 2: Run hey-api codegen (generates types.gen.ts, zod.gen.ts, etc.)
  const codegenFiles = await runHeyApiCodegen({
    specPath,
    outputDir: providerOutputDir,
    providerName: config.name,
  })
  generatedFiles.push(...codegenFiles)

  // Step 3: Fetch models from API and generate model unions
  if (config.name === 'openai') {
    const allModels = await fetchOpenAIModels(config, env)
    if (allModels.length > 0) {
      const chatModels = filterChatModels(allModels)
      const imageModels = filterImageModels(allModels)
      const modelSource = generateModelUnionSource(chatModels, imageModels)
      const modelsPath = path.join(providerOutputDir, 'models.gen.ts')
      writeGeneratedFile(modelsPath, modelSource)
      generatedFiles.push(modelsPath)
      console.log(
        `[ai-vite] Generated model unions: ${chatModels.length} chat models, ${imageModels.length} image models`,
      )
    }
  }
}

/**
 * Run codegen for all configured providers.
 */
export async function generate(
  options: TanStackAIPluginOptions,
  projectRoot?: string,
  env?: Record<string, string>,
): Promise<void> {
  const root = projectRoot ?? process.cwd()
  const outputDir = path.resolve(root, options.outputDir ?? 'src/generated')
  const cacheDir = path.resolve(
    root,
    options.cacheDir ?? 'node_modules/.cache/ai-vite',
  )

  console.log(`[ai-vite] Starting codegen...`)
  console.log(`[ai-vite] Output: ${outputDir}`)

  const generatedFiles: Array<string> = []

  for (const provider of options.providers) {
    const config = resolveProvider(provider)
    await generateForProvider(config, outputDir, cacheDir, generatedFiles, env)
  }

  // Step 4: Generate model-meta augmentation and runtime metadata from OpenRouter
  const providerNames = options.providers.map((p) =>
    typeof p === 'string' ? p : p.name,
  )
  const augmentableProviders = providerNames.filter(
    (name) => getAugmentationConfig(name) !== undefined,
  )

  if (augmentableProviders.length > 0) {
    try {
      const openRouterModels = await fetchOpenRouterModels(cacheDir)

      for (const providerName of augmentableProviders) {
        const augConfig = getAugmentationConfig(providerName)!
        const providerOutputDir = path.join(outputDir, providerName)

        // Try to load known model names from the library's shipped types
        const knownModels = await loadKnownModelNames(providerName)

        // Generate augmentation .d.ts for models not in the library
        const augSource = generateAugmentationDts(
          augConfig,
          openRouterModels,
          knownModels,
        )
        if (augSource) {
          const augPath = path.join(
            providerOutputDir,
            'model-meta-augmentation.d.ts',
          )
          writeGeneratedFile(augPath, augSource)
          generatedFiles.push(augPath)
          console.log(
            `[ai-vite] Generated model-meta augmentation for ${providerName}`,
          )
        } else {
          console.log(
            `[ai-vite] No new models to augment for ${providerName}`,
          )
        }

        // Generate runtime metadata
        const metaExportName = `${providerName.toUpperCase()}_RUNTIME_MODEL_META`
        const metaSource = generateRuntimeMeta(
          augConfig,
          openRouterModels,
          metaExportName,
        )
        const metaPath = path.join(
          providerOutputDir,
          'model-runtime-meta.gen.ts',
        )
        writeGeneratedFile(metaPath, metaSource)
        generatedFiles.push(metaPath)
      }
    } catch (err) {
      console.warn(
        `[ai-vite] Could not fetch OpenRouter models for augmentation:`,
        (err as Error).message,
      )
      console.warn(
        `[ai-vite] Skipping model-meta augmentation. Previously generated files may still be valid.`,
      )
    }
  }

  // Generate index.ts re-exports
  const indexLines = [
    '// Auto-generated by @tanstack/ai-vite',
    '// Do not edit manually',
    '',
  ]

  for (const provider of options.providers) {
    const name = typeof provider === 'string' ? provider : provider.name
    indexLines.push(`export * from './${name}/models.gen'`)
  }

  indexLines.push('')
  const indexPath = path.join(outputDir, 'index.ts')
  writeGeneratedFile(indexPath, indexLines.join('\n'))
  generatedFiles.push(indexPath)

  console.log(
    `[ai-vite] Codegen complete! Generated ${generatedFiles.length} files:`,
  )
  for (const file of generatedFiles) {
    console.log(`[ai-vite]   - ${path.relative(root, file)}`)
  }
}

/**
 * Vite plugin for generating AI model types from OpenAPI specs.
 *
 * @example
 * ```ts
 * import { tanstackAI } from '@tanstack/ai-vite'
 *
 * export default defineConfig({
 *   plugins: [
 *     tanstackAI({
 *       providers: ['openai'],
 *     })
 *   ]
 * })
 * ```
 */
export function tanstackAI(options: TanStackAIPluginOptions): Plugin {
  let resolvedConfig: ResolvedConfig

  return {
    name: 'tanstack-ai',
    enforce: 'pre',
    configResolved(config) {
      resolvedConfig = config
    },
    async buildStart() {
      if (options.runOnDevStart !== false) {
        try {
          // Load all env vars from .env files (not just VITE_-prefixed ones)
          // so API keys like OPENAI_API_KEY in .env.local are available
          const { loadEnv } = await import('vite')
          const env = loadEnv(resolvedConfig.mode, resolvedConfig.root, '')
          await generate(options, resolvedConfig.root, env)
        } catch (err) {
          const providerNames = options.providers
            .map((p) => (typeof p === 'string' ? p : p.name))
            .join(', ')
          console.error(
            `[ai-vite] Codegen failed for provider(s): ${providerNames}`,
          )
          console.error(
            `[ai-vite] Check that your API key environment variable is set (e.g. OPENAI_API_KEY) and that you have network access.`,
          )
          console.error(`[ai-vite] Error:`, err)
          // Don't fail the build - types may already be generated
        }
      }
    },
  }
}
