// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  HunyuanMotionFastInput,
  HunyuanMotionInput,
  Hunyuan3dV3TextTo3dInput,
  MeshyV6PreviewTextTo3dInput,
  HunyuanMotionFastOutput,
  HunyuanMotionOutput,
  Hunyuan3dV3TextTo3dOutput,
  MeshyV6PreviewTextTo3dOutput,
} from './types.gen'

export type TextTo3dEndpointMap = {
  'fal-ai/hunyuan-motion/fast': {
    input: HunyuanMotionFastInput
    output: HunyuanMotionFastOutput
  }
  'fal-ai/hunyuan-motion': {
    input: HunyuanMotionInput
    output: HunyuanMotionOutput
  }
  'fal-ai/hunyuan3d-v3/text-to-3d': {
    input: Hunyuan3dV3TextTo3dInput
    output: Hunyuan3dV3TextTo3dOutput
  }
  'fal-ai/meshy/v6-preview/text-to-3d': {
    input: MeshyV6PreviewTextTo3dInput
    output: MeshyV6PreviewTextTo3dOutput
  }
}

/** Union type of all text-to-3d model endpoint IDs */
export type TextTo3dModel = keyof TextTo3dEndpointMap

/** Get the input type for a specific text-to-3d model */
export type TextTo3dModelInput<T extends TextTo3dModel> = TextTo3dEndpointMap[T]['input']

/** Get the output type for a specific text-to-3d model */
export type TextTo3dModelOutput<T extends TextTo3dModel> = TextTo3dEndpointMap[T]['output']
