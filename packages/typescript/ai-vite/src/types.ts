export interface ProviderConfig {
  /** OpenAPI spec URL or local file path */
  specUrl?: string
  /** Models list endpoint URL (for generating model union types) */
  modelsEndpoint?: string
  /** API key for fetching models (optional, uses env var if not set) */
  apiKey?: string
  /** API key environment variable name */
  apiKeyEnvVar?: string
}

export interface TanStackAIPluginOptions {
  /** Providers to generate types for */
  providers: Array<ProviderName | ProviderEntry>
  /** Output directory for generated files (relative to project root) */
  outputDir?: string
  /** Whether to run codegen on dev server start */
  runOnDevStart?: boolean
  /** Cache directory for downloaded specs */
  cacheDir?: string
}

export type ProviderName = 'openai' | 'anthropic' | 'gemini' | 'fal' | 'openrouter' | 'ollama'

export interface ProviderEntry {
  name: ProviderName | string
  config?: ProviderConfig
}

export interface ResolvedProviderConfig {
  name: string
  specUrl: string
  modelsEndpoint?: string
  apiKey?: string
  apiKeyEnvVar: string
}

export interface ModelInfo {
  id: string
  created?: number
  owned_by?: string
  object?: string
}

export interface GeneratedModelMeta {
  /** All model IDs as string literals */
  modelNames: Array<string>
  /** Generated TypeScript source for the model union and metadata */
  typeSource: string
}
