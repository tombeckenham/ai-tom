import type { OPENROUTER_CHAT_MODELS } from '../model-meta'

type OpenRouterChatModel = (typeof OPENROUTER_CHAT_MODELS)[number]
export interface WebPlugin {
  /**
   * The plugin identifier. Currently only 'web' is supported.
   */
  id: 'web'
  /**
   * The search engine to use for web search.
   * @default 'native'
   */
  engine?: 'native' | 'exa'
  /**
   * Maximum number of search results to return.
   */
  maxResults?: number
  /**
   * Custom search prompt to guide the web search.
   */
  searchPrompt?: string
}

export interface PluginResponseHealing {
  id: 'response-healing'
  enabled?: boolean
}

export interface PdfParserOptions {
  engine?: 'native' | 'mistral-ocr' | 'pdf-text'
}

export interface PluginFileParser {
  id: 'file-parser'
  enabled?: boolean
  pdf?: PdfParserOptions
}

export interface PluginModeration {
  id: 'moderation'
}

export interface PluginAutoRouter {
  id: 'auto-router'
  enabled?: boolean
  allowedModels?: Array<string>
}

export type Plugin =
  | WebPlugin
  | PluginResponseHealing
  | PluginFileParser
  | PluginModeration
  | PluginAutoRouter

export interface ProviderPreferences {
  /**
   * An ordered list of provider names. The router will attempt to use the first available provider from this list.
   * https://openrouter.ai/docs/guides/routing/provider-selection
   */
  order?: Array<string>
  /**
   * Whether to allow fallback to other providers if the preferred ones are unavailable.
   * @default true
   */
  allowFallbacks?: boolean
  /**
   * Whether to require all parameters to be supported by the provider.
   * @default false
   */
  requireParameters?: boolean
  /**
   * Controls whether to allow providers that may collect data.
   * 'allow' - Allow all providers
   * 'deny' - Only use providers that don't collect data
   */
  dataCollection?: 'allow' | 'deny'
  /**
   * Whether to prefer Zero Data Retention (ZDR) providers.
   */
  zdr?: boolean
  /**
   * An exclusive list of provider names to use. Only these providers will be considered.
   */
  only?: Array<string>
  /**
   * A list of provider names to exclude from consideration.
   */
  ignore?: Array<string>
  /**
   * A list of quantization levels to allow (e.g., 'int4', 'int8', 'fp8', 'fp16', 'bf16').
   */
  quantizations?: Array<'int4' | 'int8' | 'fp4' | 'fp6' | 'fp8' | 'fp16' | 'bf16' | 'fp32' | 'unknown'>
  /**
   * How to sort/prioritize providers.
   * 'price' - Sort by lowest price
   * 'throughput' - Sort by highest throughput
   * 'latency' - Sort by lowest latency
   * Or an object with 'by' and optional 'partition' fields.
   */
  sort?:
    | 'price'
    | 'throughput'
    | 'latency'
    | { by: 'price' | 'throughput' | 'latency'; partition?: 'model' | 'none' }
  /**
   * Maximum price limits.
   */
  maxPrice?: {
    prompt?: string
    completion?: string
    image?: string
    audio?: string
    request?: string
  }
  /**
   * Whether to enforce distillable text for provider selection.
   */
  enforceDistillableText?: boolean
  /**
   * Preferred minimum throughput (tokens/second).
   * Can be a single number or an object with percentile targets.
   */
  preferredMinThroughput?:
    | number
    | { p50?: number; p75?: number; p90?: number; p99?: number }
  /**
   * Preferred maximum latency (milliseconds).
   * Can be a single number or an object with percentile targets.
   */
  preferredMaxLatency?:
    | number
    | { p50?: number; p75?: number; p90?: number; p99?: number }
}

export interface ReasoningOptions {
  /**
   * The level of reasoning effort the model should apply.
   * Higher values produce more thorough reasoning but use more tokens.
   */
  effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh'
}

export interface StreamOptions {
  /**
   * Whether to include token usage information in the stream.
   */
  includeUsage?: boolean
}

export type ImageConfig = {
  /**
   * The aspect ratio for generated images.
   */
  aspect_ratio?: '1:1' | '16:9' | '9:16' | '4:3' | '3:4' | string

  image_size?: '1k' | '2k' | '4k'
}

export type OpenRouterCommonOptions = {
  /**
   * A list of model IDs to use as fallbacks if the primary model is unavailable.
   */
  models?: Array<OpenRouterChatModel>
  /**
   * The model variant to use, if supported by the model.
   * Will be appended to the model ID.
   */
  variant?: 'free' | 'nitro' | 'online' | 'exacto' | 'extended' | 'thinking'
  /**
   * Provider routing preferences.
   * https://openrouter.ai/docs/guides/routing/provider-selection
   */
  provider?: ProviderPreferences
  /**
   * A unique identifier representing your end-user for abuse monitoring.
   */
  user?: string
  /**
   * Metadata to attach to the request for tracking and analytics.
   */
  metadata?: Record<string, string>

  /**
   * Plugins to enable for the request (e.g., web search, response healing, file parser).
   * https://openrouter.ai/docs/features/web-search
   */
  plugins?: Array<Plugin>
  /**
   * Debug options for troubleshooting.
   */
  debug?: {
    /**
     * Whether to echo the upstream request body in the response for debugging.
     */
    echoUpstreamBody?: boolean
  }
  /**
   * Trace metadata for observability and analytics integrations.
   */
  trace?: {
    traceId?: string
    traceName?: string
    spanName?: string
    generationName?: string
    parentSpanId?: string
    [key: string]: unknown
  }
  /**
   * A unique session identifier for grouping related requests.
   */
  sessionId?: string
  /**
   * Options for streaming responses.
   */
  streamOptions?: StreamOptions
  /**
   * Whether to allow the model to call multiple tools in parallel.
   * @default true
   */
  parallelToolCalls?: boolean

  /**
   * The modalities to enable for the response.
   */
  modalities?: Array<'text' | 'image'>
}

export interface OpenRouterBaseOptions {
  /**
   * Up to 4 sequences where the API will stop generating further tokens.
   */
  stop?: string | Array<string>

  /**
   * The maximum number of tokens to generate in the completion.
   */
  maxCompletionTokens?: number
  /**
   * What sampling temperature to use, between 0 and 2. Higher values make output more random.
   * @default 1
   */
  temperature?: number
  /**
   * Nucleus sampling: only consider tokens with topP cumulative probability.
   * @default 1
   */
  topP?: number
  /**
   * Penalizes new tokens based on their existing frequency in the text so far.
   * Range: -2.0 to 2.0
   */
  frequencyPenalty?: number
  /**
   * Penalizes new tokens based on whether they appear in the text so far.
   * Range: -2.0 to 2.0
   */
  presencePenalty?: number
  /**
   * Modify the likelihood of specified tokens appearing in the completion.
   * Maps token IDs to bias values from -100 to 100.
   */
  logitBias?: { [key: number]: number }
  /**
   * Whether to return log probabilities of the output tokens.
   */
  logprobs?: boolean
  /**
   * Number of most likely tokens to return at each position (0-20). Requires logprobs: true.
   */
  topLogprobs?: number
  /**
   * Random seed for deterministic sampling. Same seed should produce same results.
   */
  seed?: number
  /**
   * Force the model to respond in a specific format.
   */
  responseFormat?:
    | { type: 'json_object' }
    | {
        type: 'json_schema'
        jsonSchema: {
          name: string
          description?: string
          schema?: Record<string, unknown>
          strict?: boolean | null
        }
      }

  /**
   * Reasoning configuration for models that support chain-of-thought reasoning.
   */
  reasoning?: ReasoningOptions

  /**
   * Controls which (if any) tool the model should use.
   * 'none' - Don't call any tools
   * 'auto' - Model decides whether to call tools
   * 'required' - Model must call at least one tool
   * Or specify a specific function to call
   */
  toolChoice?:
    | 'none'
    | 'auto'
    | 'required'
    | {
        type: 'function'
        function: {
          name: string
        }
      }
}

export type ExternalTextProviderOptions = OpenRouterCommonOptions &
  OpenRouterBaseOptions
