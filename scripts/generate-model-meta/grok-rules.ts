import type { ProviderConfig } from './types'

/**
 * Grok (xAI) capability rules.
 *
 * Maps OpenRouter model metadata to TanStack AI Grok provider option interfaces.
 * Grok uses a single GrokProviderOptions for all models (OpenAI-compatible API).
 */
export const grokConfig: ProviderConfig = {
  providerPrefix: 'x-ai',
  exportPrefix: 'GROK',
  providerOptionsTypeName: 'GrokChatModelProviderOptionsByName',
  inputModalitiesTypeName: 'GrokModelInputModalitiesByName',
  runtimeMetaName: 'GROK_MODEL_META',

  optionImports: `import type {
  GrokProviderOptions,
} from './model-meta'`,

  modelMetaDefinition: `interface ModelMeta {
  name: string
  supports: {
    input: Array<'text' | 'image' | 'audio' | 'video' | 'document'>
    output: Array<'text' | 'image' | 'audio' | 'video'>
    capabilities?: Array<'reasoning' | 'tool_calling' | 'structured_outputs'>
  }
  max_input_tokens?: number
  max_output_tokens?: number
  context_window?: number
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
}`,

  extractModelName: (model) => {
    return model.id.replace('x-ai/', '')
  },

  filter: (model) => {
    const id = model.id.replace('x-ai/', '')
    return id.startsWith('grok')
  },

  // Grok's ModelMeta is not generic
  isModelMetaGeneric: false,

  capabilityRules: [
    // All Grok models use the same provider options (OpenAI-compatible API)
    { match: () => true, optionInterface: 'GrokProviderOptions' },
  ],
}
