// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  SamAudioVisualSeparateInput,
  SfxV15VideoToAudioInput,
  KlingVideoVideoToAudioInput,
  SfxV1VideoToAudioInput,
  SamAudioVisualSeparateOutput,
  AudioOutput,
  KlingVideoVideoToAudioOutput,
  SfxV1VideoToAudioOutput,
} from './types.gen'

export type VideoToAudioEndpointMap = {
  'fal-ai/sam-audio/visual-separate': {
    input: SamAudioVisualSeparateInput
    output: SamAudioVisualSeparateOutput
  }
  'mirelo-ai/sfx-v1.5/video-to-audio': {
    input: SfxV15VideoToAudioInput
    output: AudioOutput
  }
  'fal-ai/kling-video/video-to-audio': {
    input: KlingVideoVideoToAudioInput
    output: KlingVideoVideoToAudioOutput
  }
  'mirelo-ai/sfx-v1/video-to-audio': {
    input: SfxV1VideoToAudioInput
    output: SfxV1VideoToAudioOutput
  }
}

/** Union type of all video-to-audio model endpoint IDs */
export type VideoToAudioModel = keyof VideoToAudioEndpointMap

/** Get the input type for a specific video-to-audio model */
export type VideoToAudioModelInput<T extends VideoToAudioModel> = VideoToAudioEndpointMap[T]['input']

/** Get the output type for a specific video-to-audio model */
export type VideoToAudioModelOutput<T extends VideoToAudioModel> = VideoToAudioEndpointMap[T]['output']
