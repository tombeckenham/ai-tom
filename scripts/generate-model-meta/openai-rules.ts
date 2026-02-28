import type { ProviderConfig } from './types'

/**
 * OpenAI capability rules.
 *
 * Maps OpenRouter model metadata (supported_parameters, features, etc.)
 * to TanStack AI provider option interfaces.
 *
 * These ~30 lines of rules replace ~500 lines of manual type mapping.
 */
export const openaiConfig: ProviderConfig = {
  providerPrefix: 'openai',
  exportPrefix: 'OPENAI',
  providerOptionsTypeName: 'OpenAIChatModelProviderOptionsByName',
  inputModalitiesTypeName: 'OpenAIModelInputModalitiesByName',
  runtimeMetaName: 'OPENAI_MODEL_META',

  optionImports: `import type {
  OpenAIBaseOptions,
  OpenAIMetadataOptions,
  OpenAIReasoningOptions,
  OpenAIStructuredOutputOptions,
  OpenAIToolsOptions,
} from './text/text-provider-options'`,

  modelMetaDefinition: `interface ModelMeta<TProviderOptions = unknown> {
  name: string
  supports: {
    input: Array<'text' | 'image' | 'audio' | 'video'>
    output: Array<'text' | 'image' | 'audio' | 'video'>
  }
  context_window?: number
  max_output_tokens?: number
  knowledge_cutoff?: string
  pricing: {
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

  // OpenAI doesn't support 'document' modality
  allowedInputModalities: ['text', 'image', 'audio', 'video'],

  extractModelName: (model) => model.id.replace('openai/', ''),

  filter: (model) => {
    const id = model.id.replace('openai/', '')
    // Exclude realtime, transcribe, tts, embedding models
    if (
      id.includes('realtime') ||
      id.includes('transcribe') ||
      id.includes('tts') ||
      id.includes('whisper') ||
      id.includes('text-embedding') ||
      id.includes('moderation')
    ) {
      return false
    }
    return true
  },

  capabilityRules: [
    // All models get base options
    { match: () => true, optionInterface: 'OpenAIBaseOptions' },

    // Reasoning models (o-series, gpt-5+) get reasoning options
    {
      match: (m) =>
        m.supported_parameters?.includes('reasoning_effort') ?? false,
      optionInterface: 'OpenAIReasoningOptions',
    },

    // Models with structured output support
    {
      match: (m) =>
        m.supported_parameters?.includes('response_format') ?? false,
      optionInterface: 'OpenAIStructuredOutputOptions',
    },

    // Models with tool/function calling
    {
      match: (m) => m.supported_parameters?.includes('tools') ?? false,
      optionInterface: 'OpenAIToolsOptions',
    },

    // All models get metadata options
    { match: () => true, optionInterface: 'OpenAIMetadataOptions' },
  ],
}
