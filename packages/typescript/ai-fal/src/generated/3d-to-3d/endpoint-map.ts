// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  UltrashapeInput,
  Sam33dAlignInput,
  MeshyV5RetextureInput,
  MeshyV5RemeshInput,
  HunyuanPartInput,
  UltrashapeOutput,
  Sam33dAlignOutput,
  MeshyV5RetextureOutput,
  MeshyV5RemeshOutput,
  HunyuanPartOutput,
} from './types.gen'

export type _3dTo3dEndpointMap = {
  'fal-ai/ultrashape': {
    input: UltrashapeInput
    output: UltrashapeOutput
  }
  'fal-ai/sam-3/3d-align': {
    input: Sam33dAlignInput
    output: Sam33dAlignOutput
  }
  'fal-ai/meshy/v5/retexture': {
    input: MeshyV5RetextureInput
    output: MeshyV5RetextureOutput
  }
  'fal-ai/meshy/v5/remesh': {
    input: MeshyV5RemeshInput
    output: MeshyV5RemeshOutput
  }
  'fal-ai/hunyuan-part': {
    input: HunyuanPartInput
    output: HunyuanPartOutput
  }
}

/** Union type of all 3d-to-3d model endpoint IDs */
export type _3dTo3dModel = keyof _3dTo3dEndpointMap

/** Get the input type for a specific 3d-to-3d model */
export type _3dTo3dModelInput<T extends _3dTo3dModel> = _3dTo3dEndpointMap[T]['input']

/** Get the output type for a specific 3d-to-3d model */
export type _3dTo3dModelOutput<T extends _3dTo3dModel> = _3dTo3dEndpointMap[T]['output']
