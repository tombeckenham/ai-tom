import type { ProviderConfig } from './types'

/**
 * Anthropic capability rules.
 *
 * Maps OpenRouter model metadata to TanStack AI Anthropic provider option interfaces.
 */
export const anthropicConfig: ProviderConfig = {
  providerPrefix: 'anthropic',
  exportPrefix: 'ANTHROPIC',
  providerOptionsTypeName: 'AnthropicChatModelProviderOptionsByName',
  inputModalitiesTypeName: 'AnthropicModelInputModalitiesByName',
  runtimeMetaName: 'ANTHROPIC_MODEL_META',

  optionImports: `import type {
  AnthropicContainerOptions,
  AnthropicContextManagementOptions,
  AnthropicMCPOptions,
  AnthropicSamplingOptions,
  AnthropicServiceTierOptions,
  AnthropicStopSequencesOptions,
  AnthropicThinkingOptions,
  AnthropicToolChoiceOptions,
} from './text/text-provider-options'`,

  modelMetaDefinition: `interface ModelMeta<
  TProviderOptions = unknown,
  TToolCapabilities = unknown,
  TMessageCapabilities = unknown,
> {
  name: string
  id: string
  supports: {
    input: Array<'text' | 'image' | 'audio' | 'video' | 'document'>
    extended_thinking?: boolean
    adaptive_thinking?: boolean
    priority_tier?: boolean
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
  toolCapabilities?: TToolCapabilities
  messageCapabilities?: TMessageCapabilities
}`,

  extractModelName: (model) => {
    // Anthropic models on OpenRouter use IDs like 'anthropic/claude-3.5-sonnet'
    // but the actual API model ID might differ
    return model.id.replace('anthropic/', '')
  },

  extraConstFields: (model, modelName) => [
    `id: '${modelName}',`,
  ],

  // Anthropic's ModelMeta supports block doesn't include output modalities
  emitOutputModalities: false,

  filter: (model) => {
    // Only include Claude models
    const id = model.id.replace('anthropic/', '')
    return id.startsWith('claude')
  },

  capabilityRules: [
    // All Claude models get base container and context management options
    { match: () => true, optionInterface: 'AnthropicContainerOptions' },
    {
      match: () => true,
      optionInterface: 'AnthropicContextManagementOptions',
    },
    { match: () => true, optionInterface: 'AnthropicMCPOptions' },
    { match: () => true, optionInterface: 'AnthropicStopSequencesOptions' },
    { match: () => true, optionInterface: 'AnthropicToolChoiceOptions' },
    { match: () => true, optionInterface: 'AnthropicSamplingOptions' },

    // Models with extended thinking (reasoning) support
    {
      match: (m) =>
        m.supported_parameters?.includes('reasoning') ?? false,
      optionInterface: 'AnthropicThinkingOptions',
    },

    // Service tier support (newer models)
    {
      match: (m) => {
        const id = m.id.replace('anthropic/', '')
        // Newer Claude models support service tier
        return !id.includes('claude-3-haiku') && !id.includes('instant')
      },
      optionInterface: 'AnthropicServiceTierOptions',
    },
  ],
}
