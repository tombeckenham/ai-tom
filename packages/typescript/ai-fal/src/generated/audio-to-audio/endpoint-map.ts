// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  ElevenlabsVoiceChangerInput,
  NovaSrInput,
  Deepfilternet3Input,
  SamAudioSeparateInput,
  SamAudioSpanSeparateInput,
  FfmpegApiMergeAudiosInput,
  KlingVideoCreateVoiceInput,
  DemucsInput,
  AudioUnderstandingInput,
  StableAudio25AudioToAudioInput,
  StableAudio25InpaintInput,
  V2ExtendInput,
  AceStepAudioOutpaintInput,
  AceStepAudioInpaintInput,
  AceStepAudioToAudioInput,
  DiaTtsVoiceCloneInput,
  ElevenlabsAudioIsolationInput,
  ElevenlabsVoiceChangerOutput,
  NovaSrOutput,
  Deepfilternet3Output,
  SamAudioSeparateOutput,
  SamAudioSpanSeparateOutput,
  FfmpegApiMergeAudiosOutput,
  KlingVideoCreateVoiceOutput,
  DemucsOutput,
  AudioUnderstandingOutput,
  StableAudio25AudioToAudioOutput,
  StableAudio25InpaintOutput,
  V2ExtendOutput,
  AceStepAudioOutpaintOutput,
  AceStepAudioInpaintOutput,
  AceStepAudioToAudioOutput,
  DiaTtsVoiceCloneOutput,
  ElevenlabsAudioIsolationOutput,
} from './types.gen'

export type AudioToAudioEndpointMap = {
  'fal-ai/elevenlabs/voice-changer': {
    input: ElevenlabsVoiceChangerInput
    output: ElevenlabsVoiceChangerOutput
  }
  'fal-ai/nova-sr': {
    input: NovaSrInput
    output: NovaSrOutput
  }
  'fal-ai/deepfilternet3': {
    input: Deepfilternet3Input
    output: Deepfilternet3Output
  }
  'fal-ai/sam-audio/separate': {
    input: SamAudioSeparateInput
    output: SamAudioSeparateOutput
  }
  'fal-ai/sam-audio/span-separate': {
    input: SamAudioSpanSeparateInput
    output: SamAudioSpanSeparateOutput
  }
  'fal-ai/ffmpeg-api/merge-audios': {
    input: FfmpegApiMergeAudiosInput
    output: FfmpegApiMergeAudiosOutput
  }
  'fal-ai/kling-video/create-voice': {
    input: KlingVideoCreateVoiceInput
    output: KlingVideoCreateVoiceOutput
  }
  'fal-ai/demucs': {
    input: DemucsInput
    output: DemucsOutput
  }
  'fal-ai/audio-understanding': {
    input: AudioUnderstandingInput
    output: AudioUnderstandingOutput
  }
  'fal-ai/stable-audio-25/audio-to-audio': {
    input: StableAudio25AudioToAudioInput
    output: StableAudio25AudioToAudioOutput
  }
  'fal-ai/stable-audio-25/inpaint': {
    input: StableAudio25InpaintInput
    output: StableAudio25InpaintOutput
  }
  'sonauto/v2/extend': {
    input: V2ExtendInput
    output: V2ExtendOutput
  }
  'fal-ai/ace-step/audio-outpaint': {
    input: AceStepAudioOutpaintInput
    output: AceStepAudioOutpaintOutput
  }
  'fal-ai/ace-step/audio-inpaint': {
    input: AceStepAudioInpaintInput
    output: AceStepAudioInpaintOutput
  }
  'fal-ai/ace-step/audio-to-audio': {
    input: AceStepAudioToAudioInput
    output: AceStepAudioToAudioOutput
  }
  'fal-ai/dia-tts/voice-clone': {
    input: DiaTtsVoiceCloneInput
    output: DiaTtsVoiceCloneOutput
  }
  'fal-ai/elevenlabs/audio-isolation': {
    input: ElevenlabsAudioIsolationInput
    output: ElevenlabsAudioIsolationOutput
  }
}

/** Union type of all audio-to-audio model endpoint IDs */
export type AudioToAudioModel = keyof AudioToAudioEndpointMap

/** Get the input type for a specific audio-to-audio model */
export type AudioToAudioModelInput<T extends AudioToAudioModel> = AudioToAudioEndpointMap[T]['input']

/** Get the output type for a specific audio-to-audio model */
export type AudioToAudioModelOutput<T extends AudioToAudioModel> = AudioToAudioEndpointMap[T]['output']
