// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  AiDetectorDetectTextInput,
  AiDetectorDetectTextOutput,
} from './types.gen'

export type TextToTextEndpointMap = {
  'half-moon-ai/ai-detector/detect-text': {
    input: AiDetectorDetectTextInput
    output: AiDetectorDetectTextOutput
  }
}

/** Union type of all text-to-text model endpoint IDs */
export type TextToTextModel = keyof TextToTextEndpointMap

/** Get the input type for a specific text-to-text model */
export type TextToTextModelInput<T extends TextToTextModel> = TextToTextEndpointMap[T]['input']

/** Get the output type for a specific text-to-text model */
export type TextToTextModelOutput<T extends TextToTextModel> = TextToTextEndpointMap[T]['output']
