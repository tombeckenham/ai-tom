// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  NemotronAsrStreamInput,
  NemotronAsrInput,
  SileroVadInput,
  NemotronAsrStreamOutput,
  NemotronAsrOutput,
  SileroVadOutput,
} from './types.gen'

export type AudioToTextEndpointMap = {
  'fal-ai/nemotron/asr/stream': {
    input: NemotronAsrStreamInput
    output: NemotronAsrStreamOutput
  }
  'fal-ai/nemotron/asr': {
    input: NemotronAsrInput
    output: NemotronAsrOutput
  }
  'fal-ai/silero-vad': {
    input: SileroVadInput
    output: SileroVadOutput
  }
}

/** Union type of all audio-to-text model endpoint IDs */
export type AudioToTextModel = keyof AudioToTextEndpointMap

/** Get the input type for a specific audio-to-text model */
export type AudioToTextModelInput<T extends AudioToTextModel> = AudioToTextEndpointMap[T]['input']

/** Get the output type for a specific audio-to-text model */
export type AudioToTextModelOutput<T extends AudioToTextModel> = AudioToTextEndpointMap[T]['output']
