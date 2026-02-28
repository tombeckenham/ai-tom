import * as fs from 'node:fs'
import * as path from 'node:path'

/**
 * OpenRouter model shape (subset of fields we need).
 */
interface OpenRouterModel {
  id: string
  name: string
  context_length: number
  architecture: {
    input_modalities: Array<string>
    output_modalities: Array<string>
  }
  pricing: {
    prompt: string
    completion: string
    input_cache_read?: string
  }
  top_provider: {
    max_completion_tokens: number | null
  }
  supported_parameters?: Array<string> | null
}

/**
 * A declarative rule that maps model data to a TypeScript provider option interface.
 */
export interface CapabilityRule {
  match: (model: OpenRouterModel) => boolean
  optionInterface: string
}

/**
 * Configuration for augmenting a provider's model-meta types.
 */
export interface AugmentationConfig {
  /** Provider prefix on OpenRouter (e.g., 'openai') */
  openRouterPrefix: string
  /** Module path for the declaration merge (e.g., '@tanstack/ai-openai/model-meta') */
  moduleSpecifier: string
  /** Name of the provider options interface to augment */
  providerOptionsInterfaceName: string
  /** Name of the input modalities interface to augment */
  inputModalitiesInterfaceName: string
  /** Capability rules for determining provider options */
  capabilityRules: Array<CapabilityRule>
  /** Extract model name from OpenRouter ID */
  extractModelName: (id: string) => string
  /** Filter function for which models to include */
  filter?: (model: OpenRouterModel) => boolean
  /** Modalities to allow in input (default: all) */
  allowedInputModalities?: Array<string>
}

// Built-in augmentation configs for all supported providers
export const OPENAI_AUGMENTATION: AugmentationConfig = {
  openRouterPrefix: 'openai',
  moduleSpecifier: '@tanstack/ai-openai/model-meta',
  providerOptionsInterfaceName: 'OpenAIChatModelProviderOptionsByName',
  inputModalitiesInterfaceName: 'OpenAIModelInputModalitiesByName',
  extractModelName: (id) => id.replace('openai/', ''),
  allowedInputModalities: ['text', 'image', 'audio', 'video'],
  filter: (model) => {
    const id = model.id.replace('openai/', '')
    return (
      !id.includes('realtime') &&
      !id.includes('transcribe') &&
      !id.includes('tts') &&
      !id.includes('whisper') &&
      !id.includes('text-embedding') &&
      !id.includes('moderation')
    )
  },
  capabilityRules: [
    { match: () => true, optionInterface: 'OpenAIBaseOptions' },
    {
      match: (m) =>
        m.supported_parameters?.includes('reasoning_effort') ?? false,
      optionInterface: 'OpenAIReasoningOptions',
    },
    {
      match: (m) =>
        m.supported_parameters?.includes('response_format') ?? false,
      optionInterface: 'OpenAIStructuredOutputOptions',
    },
    {
      match: (m) => m.supported_parameters?.includes('tools') ?? false,
      optionInterface: 'OpenAIToolsOptions',
    },
    { match: () => true, optionInterface: 'OpenAIMetadataOptions' },
  ],
}

export const ANTHROPIC_AUGMENTATION: AugmentationConfig = {
  openRouterPrefix: 'anthropic',
  moduleSpecifier: '@tanstack/ai-anthropic/model-meta',
  providerOptionsInterfaceName: 'AnthropicChatModelProviderOptionsByName',
  inputModalitiesInterfaceName: 'AnthropicModelInputModalitiesByName',
  extractModelName: (id) => id.replace('anthropic/', ''),
  filter: (model) => model.id.replace('anthropic/', '').startsWith('claude'),
  capabilityRules: [
    { match: () => true, optionInterface: 'AnthropicContainerOptions' },
    {
      match: () => true,
      optionInterface: 'AnthropicContextManagementOptions',
    },
    { match: () => true, optionInterface: 'AnthropicMCPOptions' },
    { match: () => true, optionInterface: 'AnthropicStopSequencesOptions' },
    { match: () => true, optionInterface: 'AnthropicToolChoiceOptions' },
    { match: () => true, optionInterface: 'AnthropicSamplingOptions' },
    {
      match: (m) =>
        m.supported_parameters?.includes('reasoning') ?? false,
      optionInterface: 'AnthropicThinkingOptions',
    },
    {
      match: (m) => {
        const id = m.id.replace('anthropic/', '')
        return !id.includes('claude-3-haiku') && !id.includes('instant')
      },
      optionInterface: 'AnthropicServiceTierOptions',
    },
  ],
}

export const GEMINI_AUGMENTATION: AugmentationConfig = {
  openRouterPrefix: 'google',
  moduleSpecifier: '@tanstack/ai-gemini/model-meta',
  providerOptionsInterfaceName: 'GeminiChatModelProviderOptionsByName',
  inputModalitiesInterfaceName: 'GeminiModelInputModalitiesByName',
  extractModelName: (id) => id.replace('google/', ''),
  filter: (model) => {
    const id = model.id.replace('google/', '')
    if (id.includes('embedding')) return false
    return id.startsWith('gemini') || id.startsWith('imagen')
  },
  capabilityRules: [
    { match: () => true, optionInterface: 'GeminiToolConfigOptions' },
    { match: () => true, optionInterface: 'GeminiSafetyOptions' },
    { match: () => true, optionInterface: 'GeminiCommonConfigOptions' },
    { match: () => true, optionInterface: 'GeminiCachedContentOptions' },
    {
      match: (m) =>
        m.supported_parameters?.includes('response_format') ?? false,
      optionInterface: 'GeminiStructuredOutputOptions',
    },
    {
      match: (m) =>
        m.supported_parameters?.includes('reasoning') ?? false,
      optionInterface: 'GeminiThinkingOptions',
    },
    {
      match: (m) => m.id.replace('google/', '').startsWith('gemini-3'),
      optionInterface: 'GeminiThinkingAdvancedOptions',
    },
  ],
}

export const GROK_AUGMENTATION: AugmentationConfig = {
  openRouterPrefix: 'x-ai',
  moduleSpecifier: '@tanstack/ai-grok/model-meta',
  providerOptionsInterfaceName: 'GrokChatModelProviderOptionsByName',
  inputModalitiesInterfaceName: 'GrokModelInputModalitiesByName',
  extractModelName: (id) => id.replace('x-ai/', ''),
  filter: (model) => model.id.replace('x-ai/', '').startsWith('grok'),
  capabilityRules: [
    { match: () => true, optionInterface: 'GrokProviderOptions' },
  ],
}

const AUGMENTATION_CONFIGS: Record<string, AugmentationConfig> = {
  openai: OPENAI_AUGMENTATION,
  anthropic: ANTHROPIC_AUGMENTATION,
  gemini: GEMINI_AUGMENTATION,
  grok: GROK_AUGMENTATION,
}

/**
 * Resolve capability rules for a model into a provider options type string.
 */
function resolveProviderOptions(
  model: OpenRouterModel,
  rules: Array<CapabilityRule>,
): string {
  const matched = rules
    .filter((rule) => rule.match(model))
    .map((rule) => rule.optionInterface)
  const unique = [...new Set(matched)]
  return unique.length > 0 ? unique.join(' & ') : 'unknown'
}

/**
 * Map an OpenRouter modality string to our standard modality type.
 */
function mapModality(
  modality: string,
  allowed?: Array<string>,
): string | null {
  const mapping: Record<string, string> = {
    text: 'text',
    image: 'image',
    audio: 'audio',
    video: 'video',
    file: 'document',
    document: 'document',
  }
  const result = mapping[modality.toLowerCase()] ?? null
  if (result && allowed && !allowed.includes(result)) return null
  return result
}

function convertPrice(priceStr: string): number {
  const price = parseFloat(priceStr)
  if (isNaN(price)) return 0
  const result = price * 1_000_000
  return Math.round(result * 1e10) / 1e10
}

/**
 * Fetch models from OpenRouter API with caching.
 */
export async function fetchOpenRouterModels(
  cacheDir: string,
): Promise<Array<OpenRouterModel>> {
  const cachedPath = path.join(cacheDir, 'openrouter-models.json')

  // Check cache (24 hour TTL)
  if (fs.existsSync(cachedPath)) {
    const stat = fs.statSync(cachedPath)
    const ageMs = Date.now() - stat.mtimeMs
    const twentyFourHours = 24 * 60 * 60 * 1000
    if (ageMs < twentyFourHours) {
      console.log(`[ai-vite] Using cached OpenRouter models: ${cachedPath}`)
      const data = JSON.parse(fs.readFileSync(cachedPath, 'utf-8'))
      return data as Array<OpenRouterModel>
    }
  }

  console.log(`[ai-vite] Fetching models from OpenRouter API...`)
  const response = await fetch('https://openrouter.ai/api/v1/models')
  if (!response.ok) {
    throw new Error(
      `[ai-vite] OpenRouter API request failed: ${response.status} ${response.statusText}`,
    )
  }
  const data = (await response.json()) as { data: Array<OpenRouterModel> }
  console.log(`[ai-vite] Fetched ${data.data.length} models from OpenRouter`)

  fs.mkdirSync(cacheDir, { recursive: true })
  fs.writeFileSync(cachedPath, JSON.stringify(data.data), 'utf-8')

  return data.data
}

/**
 * Generate a module augmentation .d.ts file for models not in the library.
 *
 * This file extends the library's type interfaces via declaration merging,
 * so new models automatically get correct provider options and input modalities.
 */
export function generateAugmentationDts(
  config: AugmentationConfig,
  allModels: Array<OpenRouterModel>,
  knownModelNames: Set<string>,
): string | null {
  // Filter to this provider's models
  const providerModels = allModels.filter((model) => {
    if (!model.id.toLowerCase().startsWith(`${config.openRouterPrefix}/`))
      return false
    if (config.filter && !config.filter(model)) return false
    return true
  })

  // Find models NOT in the library
  const newModels = providerModels.filter((model) => {
    const name = config.extractModelName(model.id)
    return !knownModelNames.has(name)
  })

  if (newModels.length === 0) return null

  const lines = [
    '// Auto-generated by @tanstack/ai-vite',
    '// Module augmentation for models not yet in the shipped library types.',
    '// Do not edit manually.',
    '',
    `declare module '${config.moduleSpecifier}' {`,
    `  interface ${config.providerOptionsInterfaceName} {`,
  ]

  for (const model of newModels) {
    const name = config.extractModelName(model.id)
    const options = resolveProviderOptions(model, config.capabilityRules)
    lines.push(`    '${name}': ${options}`)
  }

  lines.push(`  }`)
  lines.push(`  interface ${config.inputModalitiesInterfaceName} {`)

  for (const model of newModels) {
    const name = config.extractModelName(model.id)
    const modalities = model.architecture.input_modalities
      .map((m) => mapModality(m, config.allowedInputModalities))
      .filter((m): m is string => m !== null)
    if (!modalities.includes('text')) modalities.unshift('text')
    lines.push(
      `    '${name}': readonly [${modalities.map((m) => `'${m}'`).join(', ')}]`,
    )
  }

  lines.push(`  }`)
  lines.push(`}`)
  lines.push('')

  return lines.join('\n')
}

/**
 * Generate a runtime metadata file with model capabilities, pricing, etc.
 */
export function generateRuntimeMeta(
  config: AugmentationConfig,
  allModels: Array<OpenRouterModel>,
  exportName: string,
): string {
  const providerModels = allModels.filter((model) => {
    if (!model.id.toLowerCase().startsWith(`${config.openRouterPrefix}/`))
      return false
    if (config.filter && !config.filter(model)) return false
    return true
  })

  const lines = [
    '// Auto-generated by @tanstack/ai-vite',
    '// Runtime model metadata from OpenRouter API.',
    '// Do not edit manually.',
    '',
    `export const ${exportName} = {`,
  ]

  for (const model of providerModels) {
    const name = config.extractModelName(model.id)
    const inputModalities = model.architecture.input_modalities
      .map((m) => mapModality(m, config.allowedInputModalities))
      .filter((m): m is string => m !== null)
    if (!inputModalities.includes('text')) inputModalities.unshift('text')
    const outputModalities = model.architecture.output_modalities
      .map((m) => mapModality(m))
      .filter((m): m is string => m !== null)

    const inputPrice = convertPrice(model.pricing.prompt)
    const outputPrice = convertPrice(model.pricing.completion)
    const cachedPrice = convertPrice(model.pricing.input_cache_read ?? '0')

    lines.push(`  '${name}': {`)
    lines.push(`    name: '${name}',`)
    if (model.context_length) {
      lines.push(`    context_window: ${model.context_length},`)
    }
    if (model.top_provider.max_completion_tokens) {
      lines.push(
        `    max_output_tokens: ${model.top_provider.max_completion_tokens},`,
      )
    }
    lines.push(`    pricing: {`)
    lines.push(`      input: { normal: ${inputPrice}${cachedPrice > 0 ? `, cached: ${cachedPrice}` : ''} },`)
    lines.push(`      output: { normal: ${outputPrice} },`)
    lines.push(`    },`)
    lines.push(
      `    input: [${inputModalities.map((m) => `'${m}'`).join(', ')}] as const,`,
    )
    lines.push(
      `    output: [${outputModalities.map((m) => `'${m}'`).join(', ')}] as const,`,
    )
    lines.push(`  },`)
  }

  lines.push(`} as const`)
  lines.push('')

  return lines.join('\n')
}

/**
 * Get the augmentation config for a provider name.
 */
export function getAugmentationConfig(
  providerName: string,
): AugmentationConfig | undefined {
  return AUGMENTATION_CONFIGS[providerName]
}
