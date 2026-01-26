// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  ChatterboxhdSpeechToSpeechInput,
  ChatterboxSpeechToSpeechInput,
  ChatterboxhdSpeechToSpeechOutput,
  ChatterboxSpeechToSpeechOutput,
} from './types.gen'

export type SpeechToSpeechEndpointMap = {
  'resemble-ai/chatterboxhd/speech-to-speech': {
    input: ChatterboxhdSpeechToSpeechInput
    output: ChatterboxhdSpeechToSpeechOutput
  }
  'fal-ai/chatterbox/speech-to-speech': {
    input: ChatterboxSpeechToSpeechInput
    output: ChatterboxSpeechToSpeechOutput
  }
}

/** Union type of all speech-to-speech model endpoint IDs */
export type SpeechToSpeechModel = keyof SpeechToSpeechEndpointMap

/** Get the input type for a specific speech-to-speech model */
export type SpeechToSpeechModelInput<T extends SpeechToSpeechModel> = SpeechToSpeechEndpointMap[T]['input']

/** Get the output type for a specific speech-to-speech model */
export type SpeechToSpeechModelOutput<T extends SpeechToSpeechModel> = SpeechToSpeechEndpointMap[T]['output']
