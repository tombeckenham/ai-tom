// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  FiboEditEditStructuredInstructionInput,
  FiboLiteGenerateStructuredPromptInput,
  FiboLiteGenerateStructuredPromptLiteInput,
  FiboGenerateStructuredPromptInput,
  FiboEditEditStructuredInstructionOutput,
  FiboLiteGenerateStructuredPromptOutput,
  FiboLiteGenerateStructuredPromptLiteOutput,
  FiboGenerateStructuredPromptOutput,
} from './types.gen'

export type TextToJsonEndpointMap = {
  'bria/fibo-edit/edit/structured_instruction': {
    input: FiboEditEditStructuredInstructionInput
    output: FiboEditEditStructuredInstructionOutput
  }
  'bria/fibo-lite/generate/structured_prompt': {
    input: FiboLiteGenerateStructuredPromptInput
    output: FiboLiteGenerateStructuredPromptOutput
  }
  'bria/fibo-lite/generate/structured_prompt/lite': {
    input: FiboLiteGenerateStructuredPromptLiteInput
    output: FiboLiteGenerateStructuredPromptLiteOutput
  }
  'bria/fibo/generate/structured_prompt': {
    input: FiboGenerateStructuredPromptInput
    output: FiboGenerateStructuredPromptOutput
  }
}

/** Union type of all text-to-json model endpoint IDs */
export type TextToJsonModel = keyof TextToJsonEndpointMap

/** Get the input type for a specific text-to-json model */
export type TextToJsonModelInput<T extends TextToJsonModel> = TextToJsonEndpointMap[T]['input']

/** Get the output type for a specific text-to-json model */
export type TextToJsonModelOutput<T extends TextToJsonModel> = TextToJsonEndpointMap[T]['output']
