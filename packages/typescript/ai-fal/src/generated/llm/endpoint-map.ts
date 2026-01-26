// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  RouterInput,
  Qwen3GuardInput,
  VideoPromptGeneratorInput,
  RouterOutput,
  Qwen3GuardOutput,
  VideoPromptGeneratorOutput,
} from './types.gen'

export type LlmEndpointMap = {
  'openrouter/router': {
    input: RouterInput
    output: RouterOutput
  }
  'fal-ai/qwen-3-guard': {
    input: Qwen3GuardInput
    output: Qwen3GuardOutput
  }
  'fal-ai/video-prompt-generator': {
    input: VideoPromptGeneratorInput
    output: VideoPromptGeneratorOutput
  }
}

/** Union type of all llm model endpoint IDs */
export type LlmModel = keyof LlmEndpointMap

/** Get the input type for a specific llm model */
export type LlmModelInput<T extends LlmModel> = LlmEndpointMap[T]['input']

/** Get the output type for a specific llm model */
export type LlmModelOutput<T extends LlmModel> = LlmEndpointMap[T]['output']
