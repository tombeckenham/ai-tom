// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  RouterAudioInput,
  RouterAudioOutput,
} from './types.gen'

export type UnknownEndpointMap = {
  'openrouter/router/audio': {
    input: RouterAudioInput
    output: RouterAudioOutput
  }
}

/** Union type of all unknown model endpoint IDs */
export type UnknownModel = keyof UnknownEndpointMap

/** Get the input type for a specific unknown model */
export type UnknownModelInput<T extends UnknownModel> = UnknownEndpointMap[T]['input']

/** Get the output type for a specific unknown model */
export type UnknownModelOutput<T extends UnknownModel> = UnknownEndpointMap[T]['output']
