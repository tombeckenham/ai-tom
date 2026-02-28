import type { ProviderConfig } from './types'

/**
 * Gemini capability rules.
 *
 * Maps OpenRouter model metadata to TanStack AI Gemini provider option interfaces.
 */
export const geminiConfig: ProviderConfig = {
  providerPrefix: 'google',
  exportPrefix: 'GEMINI',
  providerOptionsTypeName: 'GeminiChatModelProviderOptionsByName',
  inputModalitiesTypeName: 'GeminiModelInputModalitiesByName',
  runtimeMetaName: 'GEMINI_MODEL_META',

  optionImports: `import type {
  GeminiCachedContentOptions,
  GeminiCommonConfigOptions,
  GeminiSafetyOptions,
  GeminiStructuredOutputOptions,
  GeminiThinkingAdvancedOptions,
  GeminiThinkingOptions,
  GeminiToolConfigOptions,
} from './text/text-provider-options'`,

  modelMetaDefinition: `interface ModelMeta<TProviderOptions = unknown> {
  name: string
  supports: {
    input: Array<'text' | 'image' | 'audio' | 'video' | 'document'>
    output: Array<'text' | 'image' | 'audio' | 'video'>
    capabilities?: Array<
      | 'audio_generation'
      | 'batch_api'
      | 'caching'
      | 'code_execution'
      | 'file_search'
      | 'function_calling'
      | 'grounding_with_gmaps'
      | 'image_generation'
      | 'live_api'
      | 'search_grounding'
      | 'structured_output'
      | 'thinking'
      | 'url_context'
    >
  }
  max_input_tokens?: number
  max_output_tokens?: number
  knowledge_cutoff?: string
  pricing?: {
    input: {
      normal: number
      cached?: number
    }
    output: {
      normal: number
    }
  }
  providerOptions?: TProviderOptions
}`,

  extractModelName: (model) => {
    // Google models on OpenRouter use IDs like 'google/gemini-2.5-pro'
    return model.id.replace('google/', '')
  },

  filter: (model) => {
    const id = model.id.replace('google/', '')
    // Include gemini and imagen models, exclude embedding models
    if (id.includes('embedding')) return false
    if (id.includes('text-embedding')) return false
    return id.startsWith('gemini') || id.startsWith('imagen')
  },

  // Gemini uses max_input_tokens instead of context_window
  contextWindowField: 'max_input_tokens',

  capabilityRules: [
    // All Gemini models get base tool config, safety, common config, and cached content options
    { match: () => true, optionInterface: 'GeminiToolConfigOptions' },
    { match: () => true, optionInterface: 'GeminiSafetyOptions' },
    { match: () => true, optionInterface: 'GeminiCommonConfigOptions' },
    { match: () => true, optionInterface: 'GeminiCachedContentOptions' },

    // Structured output support (models with response_format or json_mode)
    {
      match: (m) =>
        m.supported_parameters?.includes('response_format') ?? false,
      optionInterface: 'GeminiStructuredOutputOptions',
    },

    // Thinking/reasoning support
    {
      match: (m) =>
        m.supported_parameters?.includes('reasoning') ?? false,
      optionInterface: 'GeminiThinkingOptions',
    },

    // Advanced thinking (gemini-3 series)
    {
      match: (m) => {
        const id = m.id.replace('google/', '')
        return id.startsWith('gemini-3')
      },
      optionInterface: 'GeminiThinkingAdvancedOptions',
    },
  ],
}
