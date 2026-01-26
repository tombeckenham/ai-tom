// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  ElevenlabsSpeechToTextScribeV2Input,
  SmartTurnInput,
  SpeechToTextTurboInput,
  SpeechToTextTurboStreamInput,
  SpeechToTextStreamInput,
  SpeechToTextInput,
  ElevenlabsSpeechToTextInput,
  WizperInput,
  WhisperInput,
  ElevenlabsSpeechToTextScribeV2Output,
  SmartTurnOutput,
  SpeechToTextTurboOutput,
  SpeechToTextTurboStreamOutput,
  SpeechToTextStreamOutput,
  SpeechToTextOutput,
  ElevenlabsSpeechToTextOutput,
  WizperOutput,
  WhisperOutput,
} from './types.gen'

export type SpeechToTextEndpointMap = {
  'fal-ai/elevenlabs/speech-to-text/scribe-v2': {
    input: ElevenlabsSpeechToTextScribeV2Input
    output: ElevenlabsSpeechToTextScribeV2Output
  }
  'fal-ai/smart-turn': {
    input: SmartTurnInput
    output: SmartTurnOutput
  }
  'fal-ai/speech-to-text/turbo': {
    input: SpeechToTextTurboInput
    output: SpeechToTextTurboOutput
  }
  'fal-ai/speech-to-text/turbo/stream': {
    input: SpeechToTextTurboStreamInput
    output: SpeechToTextTurboStreamOutput
  }
  'fal-ai/speech-to-text/stream': {
    input: SpeechToTextStreamInput
    output: SpeechToTextStreamOutput
  }
  'fal-ai/speech-to-text': {
    input: SpeechToTextInput
    output: SpeechToTextOutput
  }
  'fal-ai/elevenlabs/speech-to-text': {
    input: ElevenlabsSpeechToTextInput
    output: ElevenlabsSpeechToTextOutput
  }
  'fal-ai/wizper': {
    input: WizperInput
    output: WizperOutput
  }
  'fal-ai/whisper': {
    input: WhisperInput
    output: WhisperOutput
  }
}

/** Union type of all speech-to-text model endpoint IDs */
export type SpeechToTextModel = keyof SpeechToTextEndpointMap

/** Get the input type for a specific speech-to-text model */
export type SpeechToTextModelInput<T extends SpeechToTextModel> = SpeechToTextEndpointMap[T]['input']

/** Get the output type for a specific speech-to-text model */
export type SpeechToTextModelOutput<T extends SpeechToTextModel> = SpeechToTextEndpointMap[T]['output']
