import type { OpenRouterModel } from '../openrouter.models'

/**
 * A declarative rule that maps OpenRouter model data to a TypeScript provider option interface.
 * When `match` returns true for a model, the `optionInterface` is included in that model's
 * provider options type.
 */
export interface CapabilityRule {
  match: (model: OpenRouterModel) => boolean
  optionInterface: string
}

/**
 * Configuration for a provider's model-meta generation.
 */
export interface ProviderConfig {
  /** Provider name used to filter OpenRouter models (e.g., 'openai' matches 'openai/gpt-4o') */
  providerPrefix: string
  /** Import statement for provider option types */
  optionImports: string
  /** Capability rules that determine per-model provider options */
  capabilityRules: Array<CapabilityRule>
  /** Name of the ModelMeta interface (defaults to 'ModelMeta') */
  modelMetaInterface?: string
  /** How to extract the model name from the OpenRouter model ID */
  extractModelName?: (model: OpenRouterModel) => string
  /** Filter function to determine which models to include */
  filter?: (model: OpenRouterModel) => boolean
  /** Provider-specific ModelMeta interface definition (if different from default) */
  modelMetaDefinition?: string
  /** Name prefix for exports (e.g., 'OPENAI' → OPENAI_CHAT_MODELS, OpenAIChatModel, etc.) */
  exportPrefix: string
  /** Name for the provider options type map (e.g., 'OpenAIChatModelProviderOptionsByName') */
  providerOptionsTypeName: string
  /** Name for the input modalities type map (e.g., 'OpenAIModelInputModalitiesByName') */
  inputModalitiesTypeName: string
  /** Name for the runtime metadata export (e.g., 'OPENAI_MODEL_META') */
  runtimeMetaName: string
}

export type InputModality = 'text' | 'image' | 'audio' | 'video' | 'document'
export type OutputModality = 'text' | 'image' | 'audio' | 'video'

export interface GeneratedModel {
  constName: string
  modelName: string
  openRouterModel: OpenRouterModel
  inputModalities: Array<InputModality>
  outputModalities: Array<OutputModality>
  providerOptions: string
  constDeclaration: string
  isChat: boolean
  isImage: boolean
  isVideo: boolean
}
