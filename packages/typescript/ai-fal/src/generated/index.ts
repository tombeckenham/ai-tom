// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

// Re-export all category endpoint maps
export * from './image-to-video/endpoint-map'
export * from './text-to-image/endpoint-map'
export * from './image-to-image/endpoint-map'
export * from './text-to-video/endpoint-map'
export * from './training/endpoint-map'
export * from './video-to-video/endpoint-map'
export * from './text-to-json/endpoint-map'
export * from './audio-to-text/endpoint-map'
export * from './audio-to-audio/endpoint-map'
export * from './audio-to-video/endpoint-map'
export * from './speech-to-text/endpoint-map'
export * from './video-to-text/endpoint-map'
export * from './3d-to-3d/endpoint-map'
export * from './video-to-audio/endpoint-map'
export * from './text-to-3d/endpoint-map'
export * from './vision/endpoint-map'
export * from './unknown/endpoint-map'
export * from './text-to-audio/endpoint-map'
export * from './image-to-3d/endpoint-map'
export * from './text-to-speech/endpoint-map'
export * from './text-to-text/endpoint-map'
export * from './llm/endpoint-map'
export * from './json/endpoint-map'
export * from './speech-to-speech/endpoint-map'
export * from './image-to-json/endpoint-map'

// Create a union type of all models across categories
import type {
  ImageToVideoModel,
  TextToImageModel,
  ImageToImageModel,
  TextToVideoModel,
  TrainingModel,
  VideoToVideoModel,
  TextToJsonModel,
  AudioToTextModel,
  AudioToAudioModel,
  AudioToVideoModel,
  SpeechToTextModel,
  VideoToTextModel,
  _3dTo3dModel,
  VideoToAudioModel,
  TextTo3dModel,
  VisionModel,
  UnknownModel,
  TextToAudioModel,
  ImageTo3dModel,
  TextToSpeechModel,
  TextToTextModel,
  LlmModel,
  JsonModel,
  SpeechToSpeechModel,
  ImageToJsonModel,
} from './index'

/**
 * Union type of all Fal.ai model endpoint IDs across all categories.
 * 
 * Note: Using this union type loses some type precision. For better type safety,
 * import category-specific types like ImageToImageModel, TextToImageModel, etc.
 */
export type FalModel =
  | ImageToVideoModel
  | TextToImageModel
  | ImageToImageModel
  | TextToVideoModel
  | TrainingModel
  | VideoToVideoModel
  | TextToJsonModel
  | AudioToTextModel
  | AudioToAudioModel
  | AudioToVideoModel
  | SpeechToTextModel
  | VideoToTextModel
  | _3dTo3dModel
  | VideoToAudioModel
  | TextTo3dModel
  | VisionModel
  | UnknownModel
  | TextToAudioModel
  | ImageTo3dModel
  | TextToSpeechModel
  | TextToTextModel
  | LlmModel
  | JsonModel
  | SpeechToSpeechModel
  | ImageToJsonModel
