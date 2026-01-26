// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  Trellis2Input,
  Hunyuan3dV3SketchTo3dInput,
  Hunyuan3dV3ImageTo3dInput,
  Sam33dBodyInput,
  Sam33dObjectsInput,
  OmnipartInput,
  BytedanceSeed3dImageTo3dInput,
  MeshyV5MultiImageTo3dInput,
  MeshyV6PreviewImageTo3dInput,
  Hyper3dRodinV2Input,
  PshumanInput,
  HunyuanWorldImageToWorldInput,
  TripoV25MultiviewTo3dInput,
  Hunyuan3dV21Input,
  TrellisMultiInput,
  TripoV25ImageTo3dInput,
  Hunyuan3dV2MultiViewTurboInput,
  Hunyuan3dV2Input,
  Hunyuan3dV2MiniInput,
  Hunyuan3dV2MultiViewInput,
  Hunyuan3dV2TurboInput,
  Hunyuan3dV2MiniTurboInput,
  Hyper3dRodinInput,
  TrellisInput,
  TriposrInput,
  Trellis2Output,
  Hunyuan3dV3SketchTo3dOutput,
  Hunyuan3dV3ImageTo3dOutput,
  Sam33dBodyOutput,
  Sam33dObjectsOutput,
  OmnipartOutput,
  BytedanceSeed3dImageTo3dOutput,
  MeshyV5MultiImageTo3dOutput,
  MeshyV6PreviewImageTo3dOutput,
  Hyper3dRodinV2Output,
  PshumanOutput,
  HunyuanWorldImageToWorldOutput,
  TripoV25MultiviewTo3dOutput,
  Hunyuan3dV21Output,
  TrellisMultiOutput,
  TripoV25ImageTo3dOutput,
  Hunyuan3dV2MultiViewTurboOutput,
  Hunyuan3dV2Output,
  Hunyuan3dV2MiniOutput,
  Hunyuan3dV2MultiViewOutput,
  Hunyuan3dV2TurboOutput,
  Hunyuan3dV2MiniTurboOutput,
  Hyper3dRodinOutput,
  TrellisOutput,
  TriposrOutput,
} from './types.gen'

export type ImageTo3dEndpointMap = {
  'fal-ai/trellis-2': {
    input: Trellis2Input
    output: Trellis2Output
  }
  'fal-ai/hunyuan3d-v3/sketch-to-3d': {
    input: Hunyuan3dV3SketchTo3dInput
    output: Hunyuan3dV3SketchTo3dOutput
  }
  'fal-ai/hunyuan3d-v3/image-to-3d': {
    input: Hunyuan3dV3ImageTo3dInput
    output: Hunyuan3dV3ImageTo3dOutput
  }
  'fal-ai/sam-3/3d-body': {
    input: Sam33dBodyInput
    output: Sam33dBodyOutput
  }
  'fal-ai/sam-3/3d-objects': {
    input: Sam33dObjectsInput
    output: Sam33dObjectsOutput
  }
  'fal-ai/omnipart': {
    input: OmnipartInput
    output: OmnipartOutput
  }
  'fal-ai/bytedance/seed3d/image-to-3d': {
    input: BytedanceSeed3dImageTo3dInput
    output: BytedanceSeed3dImageTo3dOutput
  }
  'fal-ai/meshy/v5/multi-image-to-3d': {
    input: MeshyV5MultiImageTo3dInput
    output: MeshyV5MultiImageTo3dOutput
  }
  'fal-ai/meshy/v6-preview/image-to-3d': {
    input: MeshyV6PreviewImageTo3dInput
    output: MeshyV6PreviewImageTo3dOutput
  }
  'fal-ai/hyper3d/rodin/v2': {
    input: Hyper3dRodinV2Input
    output: Hyper3dRodinV2Output
  }
  'fal-ai/pshuman': {
    input: PshumanInput
    output: PshumanOutput
  }
  'fal-ai/hunyuan_world/image-to-world': {
    input: HunyuanWorldImageToWorldInput
    output: HunyuanWorldImageToWorldOutput
  }
  'tripo3d/tripo/v2.5/multiview-to-3d': {
    input: TripoV25MultiviewTo3dInput
    output: TripoV25MultiviewTo3dOutput
  }
  'fal-ai/hunyuan3d-v21': {
    input: Hunyuan3dV21Input
    output: Hunyuan3dV21Output
  }
  'fal-ai/trellis/multi': {
    input: TrellisMultiInput
    output: TrellisMultiOutput
  }
  'tripo3d/tripo/v2.5/image-to-3d': {
    input: TripoV25ImageTo3dInput
    output: TripoV25ImageTo3dOutput
  }
  'fal-ai/hunyuan3d/v2/multi-view/turbo': {
    input: Hunyuan3dV2MultiViewTurboInput
    output: Hunyuan3dV2MultiViewTurboOutput
  }
  'fal-ai/hunyuan3d/v2': {
    input: Hunyuan3dV2Input
    output: Hunyuan3dV2Output
  }
  'fal-ai/hunyuan3d/v2/mini': {
    input: Hunyuan3dV2MiniInput
    output: Hunyuan3dV2MiniOutput
  }
  'fal-ai/hunyuan3d/v2/multi-view': {
    input: Hunyuan3dV2MultiViewInput
    output: Hunyuan3dV2MultiViewOutput
  }
  'fal-ai/hunyuan3d/v2/turbo': {
    input: Hunyuan3dV2TurboInput
    output: Hunyuan3dV2TurboOutput
  }
  'fal-ai/hunyuan3d/v2/mini/turbo': {
    input: Hunyuan3dV2MiniTurboInput
    output: Hunyuan3dV2MiniTurboOutput
  }
  'fal-ai/hyper3d/rodin': {
    input: Hyper3dRodinInput
    output: Hyper3dRodinOutput
  }
  'fal-ai/trellis': {
    input: TrellisInput
    output: TrellisOutput
  }
  'fal-ai/triposr': {
    input: TriposrInput
    output: TriposrOutput
  }
}

/** Union type of all image-to-3d model endpoint IDs */
export type ImageTo3dModel = keyof ImageTo3dEndpointMap

/** Get the input type for a specific image-to-3d model */
export type ImageTo3dModelInput<T extends ImageTo3dModel> = ImageTo3dEndpointMap[T]['input']

/** Get the output type for a specific image-to-3d model */
export type ImageTo3dModelOutput<T extends ImageTo3dModel> = ImageTo3dEndpointMap[T]['output']
