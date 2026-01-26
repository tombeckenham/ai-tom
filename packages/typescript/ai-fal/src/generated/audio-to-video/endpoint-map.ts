// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  ElevenlabsDubbingInput,
  LongcatMultiAvatarImageAudioToVideoInput,
  LongcatSingleAvatarImageAudioToVideoInput,
  LongcatSingleAvatarAudioToVideoInput,
  AvatarsAudioToVideoInput,
  WanV2214bSpeechToVideoInput,
  StableAvatarInput,
  EchomimicV3Input,
  VeedAvatarsAudioToVideoAvatarsAudioToVideoInput,
  ElevenlabsDubbingOutput,
  LongcatMultiAvatarImageAudioToVideoOutput,
  LongcatSingleAvatarImageAudioToVideoOutput,
  LongcatSingleAvatarAudioToVideoOutput,
  AvatarsAudioToVideoOutput,
  WanV2214bSpeechToVideoOutput,
  StableAvatarOutput,
  EchomimicV3Output,
  VeedAvatarsAudioToVideoAvatarsAudioToVideoOutput,
} from './types.gen'

export type AudioToVideoEndpointMap = {
  'fal-ai/elevenlabs/dubbing': {
    input: ElevenlabsDubbingInput
    output: ElevenlabsDubbingOutput
  }
  'fal-ai/longcat-multi-avatar/image-audio-to-video': {
    input: LongcatMultiAvatarImageAudioToVideoInput
    output: LongcatMultiAvatarImageAudioToVideoOutput
  }
  'fal-ai/longcat-single-avatar/image-audio-to-video': {
    input: LongcatSingleAvatarImageAudioToVideoInput
    output: LongcatSingleAvatarImageAudioToVideoOutput
  }
  'fal-ai/longcat-single-avatar/audio-to-video': {
    input: LongcatSingleAvatarAudioToVideoInput
    output: LongcatSingleAvatarAudioToVideoOutput
  }
  'argil/avatars/audio-to-video': {
    input: AvatarsAudioToVideoInput
    output: AvatarsAudioToVideoOutput
  }
  'fal-ai/wan/v2.2-14b/speech-to-video': {
    input: WanV2214bSpeechToVideoInput
    output: WanV2214bSpeechToVideoOutput
  }
  'fal-ai/stable-avatar': {
    input: StableAvatarInput
    output: StableAvatarOutput
  }
  'fal-ai/echomimic-v3': {
    input: EchomimicV3Input
    output: EchomimicV3Output
  }
  'veed/avatars/audio-to-video': {
    input: VeedAvatarsAudioToVideoAvatarsAudioToVideoInput
    output: VeedAvatarsAudioToVideoAvatarsAudioToVideoOutput
  }
}

/** Union type of all audio-to-video model endpoint IDs */
export type AudioToVideoModel = keyof AudioToVideoEndpointMap

/** Get the input type for a specific audio-to-video model */
export type AudioToVideoModelInput<T extends AudioToVideoModel> = AudioToVideoEndpointMap[T]['input']

/** Get the output type for a specific audio-to-video model */
export type AudioToVideoModelOutput<T extends AudioToVideoModel> = AudioToVideoEndpointMap[T]['output']
