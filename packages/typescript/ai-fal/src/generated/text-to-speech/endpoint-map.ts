// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  Vibevoice05bInput,
  ChatterboxTextToSpeechTurboInput,
  MayaBatchInput,
  MayaStreamInput,
  MayaInput,
  MinimaxSpeech26TurboInput,
  MinimaxSpeech26HdInput,
  IndexTts2TextToSpeechInput,
  KlingVideoV1TtsInput,
  ChatterboxTextToSpeechMultilingualInput,
  Vibevoice7bInput,
  VibevoiceInput,
  MinimaxPreviewSpeech25HdInput,
  MinimaxPreviewSpeech25TurboInput,
  MinimaxVoiceDesignInput,
  ChatterboxhdTextToSpeechInput,
  ChatterboxTextToSpeechInput,
  MinimaxVoiceCloneInput,
  MinimaxSpeech02TurboInput,
  MinimaxSpeech02HdInput,
  DiaTtsInput,
  OrpheusTtsInput,
  ElevenlabsTtsTurboV25Input,
  Vibevoice05bOutput,
  ChatterboxTextToSpeechTurboOutput,
  MayaBatchOutput,
  MayaStreamOutput,
  MayaOutput,
  MinimaxSpeech26TurboOutput,
  MinimaxSpeech26HdOutput,
  IndexTts2TextToSpeechOutput,
  KlingVideoV1TtsOutput,
  ChatterboxTextToSpeechMultilingualOutput,
  Vibevoice7bOutput,
  VibevoiceOutput,
  MinimaxPreviewSpeech25HdOutput,
  MinimaxPreviewSpeech25TurboOutput,
  MinimaxVoiceDesignOutput,
  ChatterboxhdTextToSpeechOutput,
  ChatterboxTextToSpeechOutput,
  MinimaxVoiceCloneOutput,
  MinimaxSpeech02TurboOutput,
  MinimaxSpeech02HdOutput,
  DiaTtsOutput,
  OrpheusTtsOutput,
  ElevenlabsTtsTurboV25Output,
} from './types.gen'

export type TextToSpeechEndpointMap = {
  'fal-ai/vibevoice/0.5b': {
    input: Vibevoice05bInput
    output: Vibevoice05bOutput
  }
  'fal-ai/chatterbox/text-to-speech/turbo': {
    input: ChatterboxTextToSpeechTurboInput
    output: ChatterboxTextToSpeechTurboOutput
  }
  'fal-ai/maya/batch': {
    input: MayaBatchInput
    output: MayaBatchOutput
  }
  'fal-ai/maya/stream': {
    input: MayaStreamInput
    output: MayaStreamOutput
  }
  'fal-ai/maya': {
    input: MayaInput
    output: MayaOutput
  }
  'fal-ai/minimax/speech-2.6-turbo': {
    input: MinimaxSpeech26TurboInput
    output: MinimaxSpeech26TurboOutput
  }
  'fal-ai/minimax/speech-2.6-hd': {
    input: MinimaxSpeech26HdInput
    output: MinimaxSpeech26HdOutput
  }
  'fal-ai/index-tts-2/text-to-speech': {
    input: IndexTts2TextToSpeechInput
    output: IndexTts2TextToSpeechOutput
  }
  'fal-ai/kling-video/v1/tts': {
    input: KlingVideoV1TtsInput
    output: KlingVideoV1TtsOutput
  }
  'fal-ai/chatterbox/text-to-speech/multilingual': {
    input: ChatterboxTextToSpeechMultilingualInput
    output: ChatterboxTextToSpeechMultilingualOutput
  }
  'fal-ai/vibevoice/7b': {
    input: Vibevoice7bInput
    output: Vibevoice7bOutput
  }
  'fal-ai/vibevoice': {
    input: VibevoiceInput
    output: VibevoiceOutput
  }
  'fal-ai/minimax/preview/speech-2.5-hd': {
    input: MinimaxPreviewSpeech25HdInput
    output: MinimaxPreviewSpeech25HdOutput
  }
  'fal-ai/minimax/preview/speech-2.5-turbo': {
    input: MinimaxPreviewSpeech25TurboInput
    output: MinimaxPreviewSpeech25TurboOutput
  }
  'fal-ai/minimax/voice-design': {
    input: MinimaxVoiceDesignInput
    output: MinimaxVoiceDesignOutput
  }
  'resemble-ai/chatterboxhd/text-to-speech': {
    input: ChatterboxhdTextToSpeechInput
    output: ChatterboxhdTextToSpeechOutput
  }
  'fal-ai/chatterbox/text-to-speech': {
    input: ChatterboxTextToSpeechInput
    output: ChatterboxTextToSpeechOutput
  }
  'fal-ai/minimax/voice-clone': {
    input: MinimaxVoiceCloneInput
    output: MinimaxVoiceCloneOutput
  }
  'fal-ai/minimax/speech-02-turbo': {
    input: MinimaxSpeech02TurboInput
    output: MinimaxSpeech02TurboOutput
  }
  'fal-ai/minimax/speech-02-hd': {
    input: MinimaxSpeech02HdInput
    output: MinimaxSpeech02HdOutput
  }
  'fal-ai/dia-tts': {
    input: DiaTtsInput
    output: DiaTtsOutput
  }
  'fal-ai/orpheus-tts': {
    input: OrpheusTtsInput
    output: OrpheusTtsOutput
  }
  'fal-ai/elevenlabs/tts/turbo-v2.5': {
    input: ElevenlabsTtsTurboV25Input
    output: ElevenlabsTtsTurboV25Output
  }
}

/** Union type of all text-to-speech model endpoint IDs */
export type TextToSpeechModel = keyof TextToSpeechEndpointMap

/** Get the input type for a specific text-to-speech model */
export type TextToSpeechModelInput<T extends TextToSpeechModel> = TextToSpeechEndpointMap[T]['input']

/** Get the output type for a specific text-to-speech model */
export type TextToSpeechModelOutput<T extends TextToSpeechModel> = TextToSpeechEndpointMap[T]['output']
