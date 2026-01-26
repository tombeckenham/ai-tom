// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  RouterVideoEnterpriseInput,
  RouterVideoInput,
  RouterVideoEnterpriseOutput,
  RouterVideoOutput,
} from './types.gen'

export type VideoToTextEndpointMap = {
  'openrouter/router/video/enterprise': {
    input: RouterVideoEnterpriseInput
    output: RouterVideoEnterpriseOutput
  }
  'openrouter/router/video': {
    input: RouterVideoInput
    output: RouterVideoOutput
  }
}

/** Union type of all video-to-text model endpoint IDs */
export type VideoToTextModel = keyof VideoToTextEndpointMap

/** Get the input type for a specific video-to-text model */
export type VideoToTextModelInput<T extends VideoToTextModel> = VideoToTextEndpointMap[T]['input']

/** Get the output type for a specific video-to-text model */
export type VideoToTextModelOutput<T extends VideoToTextModel> = VideoToTextEndpointMap[T]['output']
