// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  KlingVideoV25TurboProTextToVideoInput,
  Veo3FastInput,
  MinimaxHailuo02StandardTextToVideoInput,
  Veo3Input,
  KlingVideoV2MasterTextToVideoInput,
  LoRaInput,
  Ltx219bDistilledTextToVideoInput,
  FalAiLtx219bTextToVideoLoraLoRaInput,
  Ltx219bTextToVideoInput,
  Kandinsky5ProTextToVideoInput,
  BytedanceSeedanceV15ProTextToVideoInput,
  V26TextToVideoInput,
  Fabric10TextInput,
  KlingVideoV26ProTextToVideoInput,
  PixverseV55TextToVideoInput,
  Ltx2TextToVideoFastInput,
  Ltx2TextToVideoInput,
  HunyuanVideoV15TextToVideoInput,
  InfinityStarTextToVideoInput,
  SanaVideoInput,
  LongcatVideoTextToVideo720pInput,
  LongcatVideoTextToVideo480pInput,
  LongcatVideoDistilledTextToVideo720pInput,
  LongcatVideoDistilledTextToVideo480pInput,
  MinimaxHailuo23StandardTextToVideoInput,
  MinimaxHailuo23ProTextToVideoInput,
  BytedanceSeedanceV1ProFastTextToVideoInput,
  ViduQ2TextToVideoInput,
  KreaWan14bTextToVideoInput,
  WanAlphaInput,
  Kandinsky5TextToVideoDistillInput,
  Kandinsky5TextToVideoInput,
  Veo31FastInput,
  Veo31Input,
  Sora2TextToVideoProInput,
  Sora2TextToVideoInput,
  OviInput,
  Wan25PreviewTextToVideoInput,
  AvatarsTextToVideoInput,
  PixverseV5TextToVideoInput,
  InfinitalkSingleTextInput,
  MareyT2vInput,
  WanV22A14bTextToVideoLoraInput,
  WanV225bTextToVideoDistillInput,
  WanV225bTextToVideoFastWanInput,
  WanV22A14bTextToVideoTurboInput,
  WanV225bTextToVideoInput,
  WanV22A14bTextToVideoInput,
  Ltxv13B098DistilledInput,
  MinimaxHailuo02ProTextToVideoInput,
  BytedanceSeedanceV1ProTextToVideoInput,
  BytedanceSeedanceV1LiteTextToVideoInput,
  KlingVideoV21MasterTextToVideoInput,
  VeedAvatarsTextToVideoAvatarsTextToVideoInput,
  LtxVideo13bDevInput,
  LtxVideo13bDistilledInput,
  PixverseV45TextToVideoFastInput,
  PixverseV45TextToVideoInput,
  ViduQ1TextToVideoInput,
  MagiInput,
  MagiDistilledInput,
  PixverseV4TextToVideoInput,
  PixverseV4TextToVideoFastInput,
  KlingVideoLipsyncAudioToVideoInput,
  KlingVideoLipsyncTextToVideoInput,
  WanT2vLoraInput,
  LumaDreamMachineRay2FlashInput,
  PikaV2TurboTextToVideoInput,
  PikaV22TextToVideoInput,
  PikaV21TextToVideoInput,
  WanProTextToVideoInput,
  KlingVideoV15ProEffectsInput,
  KlingVideoV16ProEffectsInput,
  KlingVideoV1StandardEffectsInput,
  KlingVideoV16StandardEffectsInput,
  LtxVideoV095Input,
  KlingVideoV16ProTextToVideoInput,
  WanT2vInput,
  Veo2Input,
  MinimaxVideo01DirectorInput,
  PixverseV35TextToVideoInput,
  PixverseV35TextToVideoFastInput,
  LumaDreamMachineRay2Input,
  HunyuanVideoLoraInput,
  TranspixarInput,
  Cogvideox5bInput,
  KlingVideoV16StandardTextToVideoInput,
  MinimaxVideo01LiveInput,
  KlingVideoV1StandardTextToVideoInput,
  KlingVideoV15ProTextToVideoInput,
  MochiV1Input,
  HunyuanVideoInput,
  LtxVideoInput,
  FastSvdTextToVideoInput,
  FastSvdLcmTextToVideoInput,
  T2vTurboInput,
  FastAnimatediffTextToVideoInput,
  FastAnimatediffTurboTextToVideoInput,
  MinimaxVideo01Input,
  AnimatediffSparsectrlLcmInput,
  KlingVideoV25TurboProTextToVideoOutput,
  Veo3FastOutput,
  MinimaxHailuo02StandardTextToVideoOutput,
  Veo3Output,
  KlingVideoV2MasterTextToVideoOutput,
  Ltx219bDistilledTextToVideoLoraOutput,
  Ltx219bDistilledTextToVideoOutput,
  Ltx219bTextToVideoLoraOutput,
  Ltx219bTextToVideoOutput,
  Kandinsky5ProTextToVideoOutput,
  BytedanceSeedanceV15ProTextToVideoOutput,
  V26TextToVideoOutput,
  Fabric10TextOutput,
  KlingVideoV26ProTextToVideoOutput,
  PixverseV55TextToVideoOutput,
  Ltx2TextToVideoFastOutput,
  Ltx2TextToVideoOutput,
  HunyuanVideoV15TextToVideoOutput,
  InfinityStarTextToVideoOutput,
  SanaVideoOutput,
  LongcatVideoTextToVideo720pOutput,
  LongcatVideoTextToVideo480pOutput,
  LongcatVideoDistilledTextToVideo720pOutput,
  LongcatVideoDistilledTextToVideo480pOutput,
  MinimaxHailuo23StandardTextToVideoOutput,
  MinimaxHailuo23ProTextToVideoOutput,
  BytedanceSeedanceV1ProFastTextToVideoOutput,
  ViduQ2TextToVideoOutput,
  KreaWan14bTextToVideoOutput,
  WanAlphaOutput,
  Kandinsky5TextToVideoDistillOutput,
  Kandinsky5TextToVideoOutput,
  Veo31FastOutput,
  Veo31Output,
  Sora2TextToVideoProOutput,
  Sora2TextToVideoOutput,
  OviOutput,
  Wan25PreviewTextToVideoOutput,
  AvatarsTextToVideoOutput,
  PixverseV5TextToVideoOutput,
  InfinitalkSingleTextOutput,
  MareyT2vOutput,
  WanV22A14bTextToVideoLoraOutput,
  WanV225bTextToVideoDistillOutput,
  WanV225bTextToVideoFastWanOutput,
  WanV22A14bTextToVideoTurboOutput,
  WanV225bTextToVideoOutput,
  WanV22A14bTextToVideoOutput,
  Ltxv13B098DistilledOutput,
  MinimaxHailuo02ProTextToVideoOutput,
  BytedanceSeedanceV1ProTextToVideoOutput,
  BytedanceSeedanceV1LiteTextToVideoOutput,
  KlingVideoV21MasterTextToVideoOutput,
  VeedAvatarsTextToVideoAvatarsTextToVideoOutput,
  LtxVideo13bDevOutput,
  LtxVideo13bDistilledOutput,
  PixverseV45TextToVideoFastOutput,
  PixverseV45TextToVideoOutput,
  ViduQ1TextToVideoOutput,
  MagiOutput,
  MagiDistilledOutput,
  PixverseV4TextToVideoOutput,
  PixverseV4TextToVideoFastOutput,
  KlingVideoLipsyncAudioToVideoOutput,
  KlingVideoLipsyncTextToVideoOutput,
  WanT2vLoraOutput,
  LumaDreamMachineRay2FlashOutput,
  PikaV2TurboTextToVideoOutput,
  PikaV22TextToVideoOutput,
  PikaV21TextToVideoOutput,
  WanProTextToVideoOutput,
  KlingVideoV15ProEffectsOutput,
  KlingVideoV16ProEffectsOutput,
  KlingVideoV1StandardEffectsOutput,
  KlingVideoV16StandardEffectsOutput,
  LtxVideoV095Output,
  KlingVideoV16ProTextToVideoOutput,
  WanT2vOutput,
  Veo2Output,
  MinimaxVideo01DirectorOutput,
  PixverseV35TextToVideoOutput,
  PixverseV35TextToVideoFastOutput,
  LumaDreamMachineRay2Output,
  HunyuanVideoLoraOutput,
  TranspixarOutput,
  Cogvideox5bOutput,
  KlingVideoV16StandardTextToVideoOutput,
  MinimaxVideo01LiveOutput,
  KlingVideoV1StandardTextToVideoOutput,
  KlingVideoV15ProTextToVideoOutput,
  MochiV1Output,
  HunyuanVideoOutput,
  LtxVideoOutput,
  FastSvdTextToVideoOutput,
  FastSvdLcmTextToVideoOutput,
  T2vTurboOutput,
  FastAnimatediffTextToVideoOutput,
  FastAnimatediffTurboTextToVideoOutput,
  MinimaxVideo01Output,
  AnimatediffSparsectrlLcmOutput,
} from './types.gen'

export type TextToVideoEndpointMap = {
  'fal-ai/kling-video/v2.5-turbo/pro/text-to-video': {
    input: KlingVideoV25TurboProTextToVideoInput
    output: KlingVideoV25TurboProTextToVideoOutput
  }
  'fal-ai/veo3/fast': {
    input: Veo3FastInput
    output: Veo3FastOutput
  }
  'fal-ai/minimax/hailuo-02/standard/text-to-video': {
    input: MinimaxHailuo02StandardTextToVideoInput
    output: MinimaxHailuo02StandardTextToVideoOutput
  }
  'fal-ai/veo3': {
    input: Veo3Input
    output: Veo3Output
  }
  'fal-ai/kling-video/v2/master/text-to-video': {
    input: KlingVideoV2MasterTextToVideoInput
    output: KlingVideoV2MasterTextToVideoOutput
  }
  'fal-ai/ltx-2-19b/distilled/text-to-video/lora': {
    input: LoRaInput
    output: Ltx219bDistilledTextToVideoLoraOutput
  }
  'fal-ai/ltx-2-19b/distilled/text-to-video': {
    input: Ltx219bDistilledTextToVideoInput
    output: Ltx219bDistilledTextToVideoOutput
  }
  'fal-ai/ltx-2-19b/text-to-video/lora': {
    input: FalAiLtx219bTextToVideoLoraLoRaInput
    output: Ltx219bTextToVideoLoraOutput
  }
  'fal-ai/ltx-2-19b/text-to-video': {
    input: Ltx219bTextToVideoInput
    output: Ltx219bTextToVideoOutput
  }
  'fal-ai/kandinsky5-pro/text-to-video': {
    input: Kandinsky5ProTextToVideoInput
    output: Kandinsky5ProTextToVideoOutput
  }
  'fal-ai/bytedance/seedance/v1.5/pro/text-to-video': {
    input: BytedanceSeedanceV15ProTextToVideoInput
    output: BytedanceSeedanceV15ProTextToVideoOutput
  }
  'wan/v2.6/text-to-video': {
    input: V26TextToVideoInput
    output: V26TextToVideoOutput
  }
  'veed/fabric-1.0/text': {
    input: Fabric10TextInput
    output: Fabric10TextOutput
  }
  'fal-ai/kling-video/v2.6/pro/text-to-video': {
    input: KlingVideoV26ProTextToVideoInput
    output: KlingVideoV26ProTextToVideoOutput
  }
  'fal-ai/pixverse/v5.5/text-to-video': {
    input: PixverseV55TextToVideoInput
    output: PixverseV55TextToVideoOutput
  }
  'fal-ai/ltx-2/text-to-video/fast': {
    input: Ltx2TextToVideoFastInput
    output: Ltx2TextToVideoFastOutput
  }
  'fal-ai/ltx-2/text-to-video': {
    input: Ltx2TextToVideoInput
    output: Ltx2TextToVideoOutput
  }
  'fal-ai/hunyuan-video-v1.5/text-to-video': {
    input: HunyuanVideoV15TextToVideoInput
    output: HunyuanVideoV15TextToVideoOutput
  }
  'fal-ai/infinity-star/text-to-video': {
    input: InfinityStarTextToVideoInput
    output: InfinityStarTextToVideoOutput
  }
  'fal-ai/sana-video': {
    input: SanaVideoInput
    output: SanaVideoOutput
  }
  'fal-ai/longcat-video/text-to-video/720p': {
    input: LongcatVideoTextToVideo720pInput
    output: LongcatVideoTextToVideo720pOutput
  }
  'fal-ai/longcat-video/text-to-video/480p': {
    input: LongcatVideoTextToVideo480pInput
    output: LongcatVideoTextToVideo480pOutput
  }
  'fal-ai/longcat-video/distilled/text-to-video/720p': {
    input: LongcatVideoDistilledTextToVideo720pInput
    output: LongcatVideoDistilledTextToVideo720pOutput
  }
  'fal-ai/longcat-video/distilled/text-to-video/480p': {
    input: LongcatVideoDistilledTextToVideo480pInput
    output: LongcatVideoDistilledTextToVideo480pOutput
  }
  'fal-ai/minimax/hailuo-2.3/standard/text-to-video': {
    input: MinimaxHailuo23StandardTextToVideoInput
    output: MinimaxHailuo23StandardTextToVideoOutput
  }
  'fal-ai/minimax/hailuo-2.3/pro/text-to-video': {
    input: MinimaxHailuo23ProTextToVideoInput
    output: MinimaxHailuo23ProTextToVideoOutput
  }
  'fal-ai/bytedance/seedance/v1/pro/fast/text-to-video': {
    input: BytedanceSeedanceV1ProFastTextToVideoInput
    output: BytedanceSeedanceV1ProFastTextToVideoOutput
  }
  'fal-ai/vidu/q2/text-to-video': {
    input: ViduQ2TextToVideoInput
    output: ViduQ2TextToVideoOutput
  }
  'fal-ai/krea-wan-14b/text-to-video': {
    input: KreaWan14bTextToVideoInput
    output: KreaWan14bTextToVideoOutput
  }
  'fal-ai/wan-alpha': {
    input: WanAlphaInput
    output: WanAlphaOutput
  }
  'fal-ai/kandinsky5/text-to-video/distill': {
    input: Kandinsky5TextToVideoDistillInput
    output: Kandinsky5TextToVideoDistillOutput
  }
  'fal-ai/kandinsky5/text-to-video': {
    input: Kandinsky5TextToVideoInput
    output: Kandinsky5TextToVideoOutput
  }
  'fal-ai/veo3.1/fast': {
    input: Veo31FastInput
    output: Veo31FastOutput
  }
  'fal-ai/veo3.1': {
    input: Veo31Input
    output: Veo31Output
  }
  'fal-ai/sora-2/text-to-video/pro': {
    input: Sora2TextToVideoProInput
    output: Sora2TextToVideoProOutput
  }
  'fal-ai/sora-2/text-to-video': {
    input: Sora2TextToVideoInput
    output: Sora2TextToVideoOutput
  }
  'fal-ai/ovi': {
    input: OviInput
    output: OviOutput
  }
  'fal-ai/wan-25-preview/text-to-video': {
    input: Wan25PreviewTextToVideoInput
    output: Wan25PreviewTextToVideoOutput
  }
  'argil/avatars/text-to-video': {
    input: AvatarsTextToVideoInput
    output: AvatarsTextToVideoOutput
  }
  'fal-ai/pixverse/v5/text-to-video': {
    input: PixverseV5TextToVideoInput
    output: PixverseV5TextToVideoOutput
  }
  'fal-ai/infinitalk/single-text': {
    input: InfinitalkSingleTextInput
    output: InfinitalkSingleTextOutput
  }
  'moonvalley/marey/t2v': {
    input: MareyT2vInput
    output: MareyT2vOutput
  }
  'fal-ai/wan/v2.2-a14b/text-to-video/lora': {
    input: WanV22A14bTextToVideoLoraInput
    output: WanV22A14bTextToVideoLoraOutput
  }
  'fal-ai/wan/v2.2-5b/text-to-video/distill': {
    input: WanV225bTextToVideoDistillInput
    output: WanV225bTextToVideoDistillOutput
  }
  'fal-ai/wan/v2.2-5b/text-to-video/fast-wan': {
    input: WanV225bTextToVideoFastWanInput
    output: WanV225bTextToVideoFastWanOutput
  }
  'fal-ai/wan/v2.2-a14b/text-to-video/turbo': {
    input: WanV22A14bTextToVideoTurboInput
    output: WanV22A14bTextToVideoTurboOutput
  }
  'fal-ai/wan/v2.2-5b/text-to-video': {
    input: WanV225bTextToVideoInput
    output: WanV225bTextToVideoOutput
  }
  'fal-ai/wan/v2.2-a14b/text-to-video': {
    input: WanV22A14bTextToVideoInput
    output: WanV22A14bTextToVideoOutput
  }
  'fal-ai/ltxv-13b-098-distilled': {
    input: Ltxv13B098DistilledInput
    output: Ltxv13B098DistilledOutput
  }
  'fal-ai/minimax/hailuo-02/pro/text-to-video': {
    input: MinimaxHailuo02ProTextToVideoInput
    output: MinimaxHailuo02ProTextToVideoOutput
  }
  'fal-ai/bytedance/seedance/v1/pro/text-to-video': {
    input: BytedanceSeedanceV1ProTextToVideoInput
    output: BytedanceSeedanceV1ProTextToVideoOutput
  }
  'fal-ai/bytedance/seedance/v1/lite/text-to-video': {
    input: BytedanceSeedanceV1LiteTextToVideoInput
    output: BytedanceSeedanceV1LiteTextToVideoOutput
  }
  'fal-ai/kling-video/v2.1/master/text-to-video': {
    input: KlingVideoV21MasterTextToVideoInput
    output: KlingVideoV21MasterTextToVideoOutput
  }
  'veed/avatars/text-to-video': {
    input: VeedAvatarsTextToVideoAvatarsTextToVideoInput
    output: VeedAvatarsTextToVideoAvatarsTextToVideoOutput
  }
  'fal-ai/ltx-video-13b-dev': {
    input: LtxVideo13bDevInput
    output: LtxVideo13bDevOutput
  }
  'fal-ai/ltx-video-13b-distilled': {
    input: LtxVideo13bDistilledInput
    output: LtxVideo13bDistilledOutput
  }
  'fal-ai/pixverse/v4.5/text-to-video/fast': {
    input: PixverseV45TextToVideoFastInput
    output: PixverseV45TextToVideoFastOutput
  }
  'fal-ai/pixverse/v4.5/text-to-video': {
    input: PixverseV45TextToVideoInput
    output: PixverseV45TextToVideoOutput
  }
  'fal-ai/vidu/q1/text-to-video': {
    input: ViduQ1TextToVideoInput
    output: ViduQ1TextToVideoOutput
  }
  'fal-ai/magi': {
    input: MagiInput
    output: MagiOutput
  }
  'fal-ai/magi-distilled': {
    input: MagiDistilledInput
    output: MagiDistilledOutput
  }
  'fal-ai/pixverse/v4/text-to-video': {
    input: PixverseV4TextToVideoInput
    output: PixverseV4TextToVideoOutput
  }
  'fal-ai/pixverse/v4/text-to-video/fast': {
    input: PixverseV4TextToVideoFastInput
    output: PixverseV4TextToVideoFastOutput
  }
  'fal-ai/kling-video/lipsync/audio-to-video': {
    input: KlingVideoLipsyncAudioToVideoInput
    output: KlingVideoLipsyncAudioToVideoOutput
  }
  'fal-ai/kling-video/lipsync/text-to-video': {
    input: KlingVideoLipsyncTextToVideoInput
    output: KlingVideoLipsyncTextToVideoOutput
  }
  'fal-ai/wan-t2v-lora': {
    input: WanT2vLoraInput
    output: WanT2vLoraOutput
  }
  'fal-ai/luma-dream-machine/ray-2-flash': {
    input: LumaDreamMachineRay2FlashInput
    output: LumaDreamMachineRay2FlashOutput
  }
  'fal-ai/pika/v2/turbo/text-to-video': {
    input: PikaV2TurboTextToVideoInput
    output: PikaV2TurboTextToVideoOutput
  }
  'fal-ai/pika/v2.2/text-to-video': {
    input: PikaV22TextToVideoInput
    output: PikaV22TextToVideoOutput
  }
  'fal-ai/pika/v2.1/text-to-video': {
    input: PikaV21TextToVideoInput
    output: PikaV21TextToVideoOutput
  }
  'fal-ai/wan-pro/text-to-video': {
    input: WanProTextToVideoInput
    output: WanProTextToVideoOutput
  }
  'fal-ai/kling-video/v1.5/pro/effects': {
    input: KlingVideoV15ProEffectsInput
    output: KlingVideoV15ProEffectsOutput
  }
  'fal-ai/kling-video/v1.6/pro/effects': {
    input: KlingVideoV16ProEffectsInput
    output: KlingVideoV16ProEffectsOutput
  }
  'fal-ai/kling-video/v1/standard/effects': {
    input: KlingVideoV1StandardEffectsInput
    output: KlingVideoV1StandardEffectsOutput
  }
  'fal-ai/kling-video/v1.6/standard/effects': {
    input: KlingVideoV16StandardEffectsInput
    output: KlingVideoV16StandardEffectsOutput
  }
  'fal-ai/ltx-video-v095': {
    input: LtxVideoV095Input
    output: LtxVideoV095Output
  }
  'fal-ai/kling-video/v1.6/pro/text-to-video': {
    input: KlingVideoV16ProTextToVideoInput
    output: KlingVideoV16ProTextToVideoOutput
  }
  'fal-ai/wan-t2v': {
    input: WanT2vInput
    output: WanT2vOutput
  }
  'fal-ai/veo2': {
    input: Veo2Input
    output: Veo2Output
  }
  'fal-ai/minimax/video-01-director': {
    input: MinimaxVideo01DirectorInput
    output: MinimaxVideo01DirectorOutput
  }
  'fal-ai/pixverse/v3.5/text-to-video': {
    input: PixverseV35TextToVideoInput
    output: PixverseV35TextToVideoOutput
  }
  'fal-ai/pixverse/v3.5/text-to-video/fast': {
    input: PixverseV35TextToVideoFastInput
    output: PixverseV35TextToVideoFastOutput
  }
  'fal-ai/luma-dream-machine/ray-2': {
    input: LumaDreamMachineRay2Input
    output: LumaDreamMachineRay2Output
  }
  'fal-ai/hunyuan-video-lora': {
    input: HunyuanVideoLoraInput
    output: HunyuanVideoLoraOutput
  }
  'fal-ai/transpixar': {
    input: TranspixarInput
    output: TranspixarOutput
  }
  'fal-ai/cogvideox-5b': {
    input: Cogvideox5bInput
    output: Cogvideox5bOutput
  }
  'fal-ai/kling-video/v1.6/standard/text-to-video': {
    input: KlingVideoV16StandardTextToVideoInput
    output: KlingVideoV16StandardTextToVideoOutput
  }
  'fal-ai/minimax/video-01-live': {
    input: MinimaxVideo01LiveInput
    output: MinimaxVideo01LiveOutput
  }
  'fal-ai/kling-video/v1/standard/text-to-video': {
    input: KlingVideoV1StandardTextToVideoInput
    output: KlingVideoV1StandardTextToVideoOutput
  }
  'fal-ai/kling-video/v1.5/pro/text-to-video': {
    input: KlingVideoV15ProTextToVideoInput
    output: KlingVideoV15ProTextToVideoOutput
  }
  'fal-ai/mochi-v1': {
    input: MochiV1Input
    output: MochiV1Output
  }
  'fal-ai/hunyuan-video': {
    input: HunyuanVideoInput
    output: HunyuanVideoOutput
  }
  'fal-ai/ltx-video': {
    input: LtxVideoInput
    output: LtxVideoOutput
  }
  'fal-ai/fast-svd/text-to-video': {
    input: FastSvdTextToVideoInput
    output: FastSvdTextToVideoOutput
  }
  'fal-ai/fast-svd-lcm/text-to-video': {
    input: FastSvdLcmTextToVideoInput
    output: FastSvdLcmTextToVideoOutput
  }
  'fal-ai/t2v-turbo': {
    input: T2vTurboInput
    output: T2vTurboOutput
  }
  'fal-ai/fast-animatediff/text-to-video': {
    input: FastAnimatediffTextToVideoInput
    output: FastAnimatediffTextToVideoOutput
  }
  'fal-ai/fast-animatediff/turbo/text-to-video': {
    input: FastAnimatediffTurboTextToVideoInput
    output: FastAnimatediffTurboTextToVideoOutput
  }
  'fal-ai/minimax/video-01': {
    input: MinimaxVideo01Input
    output: MinimaxVideo01Output
  }
  'fal-ai/animatediff-sparsectrl-lcm': {
    input: AnimatediffSparsectrlLcmInput
    output: AnimatediffSparsectrlLcmOutput
  }
}

/** Union type of all text-to-video model endpoint IDs */
export type TextToVideoModel = keyof TextToVideoEndpointMap

/** Get the input type for a specific text-to-video model */
export type TextToVideoModelInput<T extends TextToVideoModel> = TextToVideoEndpointMap[T]['input']

/** Get the output type for a specific text-to-video model */
export type TextToVideoModelOutput<T extends TextToVideoModel> = TextToVideoEndpointMap[T]['output']
