// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  FfmpegApiLoudnormInput,
  FfmpegApiWaveformInput,
  FfmpegApiMetadataInput,
  FfmpegApiLoudnormOutput,
  FfmpegApiWaveformOutput,
  FfmpegApiMetadataOutput,
} from './types.gen'

export type JsonEndpointMap = {
  'fal-ai/ffmpeg-api/loudnorm': {
    input: FfmpegApiLoudnormInput
    output: FfmpegApiLoudnormOutput
  }
  'fal-ai/ffmpeg-api/waveform': {
    input: FfmpegApiWaveformInput
    output: FfmpegApiWaveformOutput
  }
  'fal-ai/ffmpeg-api/metadata': {
    input: FfmpegApiMetadataInput
    output: FfmpegApiMetadataOutput
  }
}

/** Union type of all json model endpoint IDs */
export type JsonModel = keyof JsonEndpointMap

/** Get the input type for a specific json model */
export type JsonModelInput<T extends JsonModel> = JsonEndpointMap[T]['input']

/** Get the output type for a specific json model */
export type JsonModelOutput<T extends JsonModel> = JsonEndpointMap[T]['output']
