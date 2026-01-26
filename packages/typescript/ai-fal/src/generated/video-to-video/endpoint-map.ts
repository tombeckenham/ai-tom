// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  VideoBackgroundRemovalInput,
  MmaudioV2Input,
  AiFaceSwapFaceswapvideoInput,
  LoRaInput,
  Ltx219bDistilledVideoToVideoInput,
  FalAiLtx219bVideoToVideoLoraLoRaInput,
  Ltx219bVideoToVideoInput,
  FalAiLtx219bDistilledExtendVideoLoraLoRaInput,
  Ltx219bDistilledExtendVideoInput,
  FalAiLtx219bExtendVideoLoraLoRaInput,
  Ltx219bExtendVideoInput,
  VideoEraseKeypointsInput,
  VideoErasePromptInput,
  VideoEraseMaskInput,
  LightxRelightInput,
  LightxRecameraInput,
  KlingVideoV26StandardMotionControlInput,
  KlingVideoV26ProMotionControlInput,
  LucyRestyleInput,
  ScailInput,
  CrystalVideoUpscalerInput,
  V26ReferenceToVideoInput,
  Veo31FastExtendVideoInput,
  Veo31ExtendVideoInput,
  OmniVideoElementInput,
  FalAiKlingVideoO1StandardVideoToVideoEditOmniVideoElementInput,
  SteadyDancerInput,
  OneToAllAnimation13bInput,
  OneToAllAnimation14bInput,
  WanVisionEnhancerInput,
  SyncLipsyncReact1Input,
  VideoBackgroundRemovalFastInput,
  FalAiKlingVideoO1VideoToVideoEditOmniVideoElementInput,
  FalAiKlingVideoO1VideoToVideoReferenceOmniVideoElementInput,
  VeedVideoBackgroundRemovalVideoBackgroundRemovalInput,
  VideoBackgroundRemovalGreenScreenInput,
  Ltx2RetakeVideoInput,
  LucyEditFastInput,
  Sam3VideoRleInput,
  Sam3VideoInput,
  EdittoInput,
  FlashvsrUpscaleVideoInput,
  WorkflowUtilitiesAutoSubtitleInput,
  BytedanceUpscalerUpscaleVideoInput,
  VideoAsPromptInput,
  BirefnetV2VideoInput,
  ViduQ2VideoExtensionProInput,
  SfxV15VideoToVideoInput,
  KreaWan14bVideoToVideoInput,
  Sora2VideoToVideoRemixInput,
  WanVaceAppsLongReframeInput,
  InfinitalkVideoToVideoInput,
  SeedvrUpscaleVideoInput,
  WanVaceAppsVideoEditInput,
  WanV2214bAnimateReplaceInput,
  WanV2214bAnimateMoveInput,
  LucyEditProInput,
  LucyEditDevInput,
  Wan22VaceFunA14bReframeInput,
  Wan22VaceFunA14bOutpaintingInput,
  Wan22VaceFunA14bInpaintingInput,
  Wan22VaceFunA14bDepthInput,
  Wan22VaceFunA14bPoseInput,
  HunyuanVideoFoleyInput,
  SyncLipsyncV2ProInput,
  WanFunControlInput,
  VideoIncreaseResolutionInput,
  InfinitalkInput,
  SfxV1VideoToVideoInput,
  MareyPoseTransferInput,
  MareyMotionTransferInput,
  FfmpegApiMergeVideosInput,
  WanV22A14bVideoToVideoInput,
  ExtendVideoConditioningInput,
  RifeVideoInput,
  FilmVideoInput,
  LumaDreamMachineRay2FlashModifyInput,
  VideoConditioningInput,
  PixverseSoundEffectsInput,
  ThinksoundAudioInput,
  ThinksoundInput,
  PixverseExtendFastInput,
  PixverseExtendInput,
  PixverseLipsyncInput,
  LumaDreamMachineRay2ModifyInput,
  WanVace14bReframeInput,
  WanVace14bOutpaintingInput,
  WanVace14bInpaintingInput,
  WanVace14bPoseInput,
  WanVace14bDepthInput,
  DwposeVideoInput,
  FfmpegApiMergeAudioVideoInput,
  WanVace13bInput,
  LumaDreamMachineRay2FlashReframeInput,
  LumaDreamMachineRay2ReframeInput,
  LipsyncInput,
  WanVace14bInput,
  FalAiLtxVideo13bDistilledExtendVideoConditioningInput,
  FalAiLtxVideo13bDistilledMulticonditioningVideoConditioningInput,
  FalAiLtxVideo13bDevMulticonditioningVideoConditioningInput,
  FalAiLtxVideo13bDevExtendVideoConditioningInput,
  LtxVideoLoraMulticonditioningInput,
  MagiExtendVideoInput,
  MagiDistilledExtendVideoInput,
  WanVaceInput,
  VideoSoundEffectsGeneratorInput,
  SyncLipsyncV2Input,
  LatentsyncInput,
  PikaV2PikadditionsInput,
  FalAiLtxVideoV095MulticonditioningVideoConditioningInput,
  FalAiLtxVideoV095ExtendVideoConditioningInput,
  TopazUpscaleVideoInput,
  BenV2VideoInput,
  HunyuanVideoVideoToVideoInput,
  HunyuanVideoLoraVideoToVideoInput,
  FfmpegApiComposeInput,
  SyncLipsyncInput,
  AutoCaptionInput,
  DubbingInput,
  VideoUpscalerInput,
  Cogvideox5bVideoToVideoInput,
  ControlnextInput,
  Sam2VideoInput,
  AmtInterpolationInput,
  FastAnimatediffTurboVideoToVideoInput,
  FastAnimatediffVideoToVideoInput,
  VideoBackgroundRemovalOutput,
  MmaudioV2Output,
  AiFaceSwapFaceswapvideoOutput,
  Ltx219bDistilledVideoToVideoLoraOutput,
  Ltx219bDistilledVideoToVideoOutput,
  Ltx219bVideoToVideoLoraOutput,
  Ltx219bVideoToVideoOutput,
  Ltx219bDistilledExtendVideoLoraOutput,
  Ltx219bDistilledExtendVideoOutput,
  Ltx219bExtendVideoLoraOutput,
  Ltx219bExtendVideoOutput,
  VideoEraseKeypointsOutput,
  VideoErasePromptOutput,
  VideoEraseMaskOutput,
  LightxRelightOutput,
  LightxRecameraOutput,
  KlingVideoV26StandardMotionControlOutput,
  KlingVideoV26ProMotionControlOutput,
  LucyRestyleOutput,
  ScailOutput,
  CrystalVideoUpscalerOutput,
  V26ReferenceToVideoOutput,
  Veo31FastExtendVideoOutput,
  Veo31ExtendVideoOutput,
  KlingVideoO1StandardVideoToVideoReferenceOutput,
  KlingVideoO1StandardVideoToVideoEditOutput,
  SteadyDancerOutput,
  OneToAllAnimation13bOutput,
  OneToAllAnimation14bOutput,
  WanVisionEnhancerOutput,
  SyncLipsyncReact1Output,
  VideoBackgroundRemovalFastOutput,
  KlingVideoO1VideoToVideoEditOutput,
  KlingVideoO1VideoToVideoReferenceOutput,
  VeedVideoBackgroundRemovalVideoBackgroundRemovalOutput,
  VideoBackgroundRemovalGreenScreenOutput,
  Ltx2RetakeVideoOutput,
  LucyEditFastOutput,
  Sam3VideoRleOutput,
  Sam3VideoOutput,
  EdittoOutput,
  FlashvsrUpscaleVideoOutput,
  WorkflowUtilitiesAutoSubtitleOutput,
  BytedanceUpscalerUpscaleVideoOutput,
  VideoAsPromptOutput,
  BirefnetV2VideoOutput,
  ViduQ2VideoExtensionProOutput,
  VideoOutput,
  KreaWan14bVideoToVideoOutput,
  Sora2VideoToVideoRemixOutput,
  WanVaceAppsLongReframeOutput,
  InfinitalkVideoToVideoOutput,
  SeedvrUpscaleVideoOutput,
  WanVaceAppsVideoEditOutput,
  WanV2214bAnimateReplaceOutput,
  WanV2214bAnimateMoveOutput,
  LucyEditProOutput,
  LucyEditDevOutput,
  Wan22VaceFunA14bReframeOutput,
  Wan22VaceFunA14bOutpaintingOutput,
  Wan22VaceFunA14bInpaintingOutput,
  Wan22VaceFunA14bDepthOutput,
  Wan22VaceFunA14bPoseOutput,
  HunyuanVideoFoleyOutput,
  SyncLipsyncV2ProOutput,
  WanFunControlOutput,
  VideoIncreaseResolutionOutput,
  InfinitalkOutput,
  SfxV1VideoToVideoOutput,
  MareyPoseTransferOutput,
  MareyMotionTransferOutput,
  FfmpegApiMergeVideosOutput,
  WanV22A14bVideoToVideoOutput,
  Ltxv13B098DistilledExtendOutput,
  RifeVideoOutput,
  FilmVideoOutput,
  LumaDreamMachineRay2FlashModifyOutput,
  Ltxv13B098DistilledMulticonditioningOutput,
  PixverseSoundEffectsOutput,
  ThinksoundAudioOutput,
  ThinksoundOutput,
  PixverseExtendFastOutput,
  PixverseExtendOutput,
  PixverseLipsyncOutput,
  LumaDreamMachineRay2ModifyOutput,
  WanVace14bReframeOutput,
  WanVace14bOutpaintingOutput,
  WanVace14bInpaintingOutput,
  WanVace14bPoseOutput,
  WanVace14bDepthOutput,
  DwposeVideoOutput,
  FfmpegApiMergeAudioVideoOutput,
  WanVace13bOutput,
  LumaDreamMachineRay2FlashReframeOutput,
  LumaDreamMachineRay2ReframeOutput,
  LipsyncOutput,
  WanVace14bOutput,
  LtxVideo13bDistilledExtendOutput,
  LtxVideo13bDistilledMulticonditioningOutput,
  LtxVideo13bDevMulticonditioningOutput,
  LtxVideo13bDevExtendOutput,
  LtxVideoLoraMulticonditioningOutput,
  MagiExtendVideoOutput,
  MagiDistilledExtendVideoOutput,
  WanVaceOutput,
  VideoSoundEffectsGeneratorOutput,
  SyncLipsyncV2Output,
  LatentsyncOutput,
  PikaV2PikadditionsOutput,
  LtxVideoV095MulticonditioningOutput,
  LtxVideoV095ExtendOutput,
  TopazUpscaleVideoOutput,
  BenV2VideoOutput,
  HunyuanVideoVideoToVideoOutput,
  HunyuanVideoLoraVideoToVideoOutput,
  FfmpegApiComposeOutput,
  SyncLipsyncOutput,
  AutoCaptionOutput,
  DubbingOutput,
  VideoUpscalerOutput,
  Cogvideox5bVideoToVideoOutput,
  ControlnextOutput,
  Sam2VideoOutput,
  AmtInterpolationOutput,
  FastAnimatediffTurboVideoToVideoOutput,
  FastAnimatediffVideoToVideoOutput,
} from './types.gen'

export type VideoToVideoEndpointMap = {
  'bria/video/background-removal': {
    input: VideoBackgroundRemovalInput
    output: VideoBackgroundRemovalOutput
  }
  'fal-ai/mmaudio-v2': {
    input: MmaudioV2Input
    output: MmaudioV2Output
  }
  'half-moon-ai/ai-face-swap/faceswapvideo': {
    input: AiFaceSwapFaceswapvideoInput
    output: AiFaceSwapFaceswapvideoOutput
  }
  'fal-ai/ltx-2-19b/distilled/video-to-video/lora': {
    input: LoRaInput
    output: Ltx219bDistilledVideoToVideoLoraOutput
  }
  'fal-ai/ltx-2-19b/distilled/video-to-video': {
    input: Ltx219bDistilledVideoToVideoInput
    output: Ltx219bDistilledVideoToVideoOutput
  }
  'fal-ai/ltx-2-19b/video-to-video/lora': {
    input: FalAiLtx219bVideoToVideoLoraLoRaInput
    output: Ltx219bVideoToVideoLoraOutput
  }
  'fal-ai/ltx-2-19b/video-to-video': {
    input: Ltx219bVideoToVideoInput
    output: Ltx219bVideoToVideoOutput
  }
  'fal-ai/ltx-2-19b/distilled/extend-video/lora': {
    input: FalAiLtx219bDistilledExtendVideoLoraLoRaInput
    output: Ltx219bDistilledExtendVideoLoraOutput
  }
  'fal-ai/ltx-2-19b/distilled/extend-video': {
    input: Ltx219bDistilledExtendVideoInput
    output: Ltx219bDistilledExtendVideoOutput
  }
  'fal-ai/ltx-2-19b/extend-video/lora': {
    input: FalAiLtx219bExtendVideoLoraLoRaInput
    output: Ltx219bExtendVideoLoraOutput
  }
  'fal-ai/ltx-2-19b/extend-video': {
    input: Ltx219bExtendVideoInput
    output: Ltx219bExtendVideoOutput
  }
  'bria/video/erase/keypoints': {
    input: VideoEraseKeypointsInput
    output: VideoEraseKeypointsOutput
  }
  'bria/video/erase/prompt': {
    input: VideoErasePromptInput
    output: VideoErasePromptOutput
  }
  'bria/video/erase/mask': {
    input: VideoEraseMaskInput
    output: VideoEraseMaskOutput
  }
  'fal-ai/lightx/relight': {
    input: LightxRelightInput
    output: LightxRelightOutput
  }
  'fal-ai/lightx/recamera': {
    input: LightxRecameraInput
    output: LightxRecameraOutput
  }
  'fal-ai/kling-video/v2.6/standard/motion-control': {
    input: KlingVideoV26StandardMotionControlInput
    output: KlingVideoV26StandardMotionControlOutput
  }
  'fal-ai/kling-video/v2.6/pro/motion-control': {
    input: KlingVideoV26ProMotionControlInput
    output: KlingVideoV26ProMotionControlOutput
  }
  'decart/lucy-restyle': {
    input: LucyRestyleInput
    output: LucyRestyleOutput
  }
  'fal-ai/scail': {
    input: ScailInput
    output: ScailOutput
  }
  'clarityai/crystal-video-upscaler': {
    input: CrystalVideoUpscalerInput
    output: CrystalVideoUpscalerOutput
  }
  'wan/v2.6/reference-to-video': {
    input: V26ReferenceToVideoInput
    output: V26ReferenceToVideoOutput
  }
  'fal-ai/veo3.1/fast/extend-video': {
    input: Veo31FastExtendVideoInput
    output: Veo31FastExtendVideoOutput
  }
  'fal-ai/veo3.1/extend-video': {
    input: Veo31ExtendVideoInput
    output: Veo31ExtendVideoOutput
  }
  'fal-ai/kling-video/o1/standard/video-to-video/reference': {
    input: OmniVideoElementInput
    output: KlingVideoO1StandardVideoToVideoReferenceOutput
  }
  'fal-ai/kling-video/o1/standard/video-to-video/edit': {
    input: FalAiKlingVideoO1StandardVideoToVideoEditOmniVideoElementInput
    output: KlingVideoO1StandardVideoToVideoEditOutput
  }
  'fal-ai/steady-dancer': {
    input: SteadyDancerInput
    output: SteadyDancerOutput
  }
  'fal-ai/one-to-all-animation/1.3b': {
    input: OneToAllAnimation13bInput
    output: OneToAllAnimation13bOutput
  }
  'fal-ai/one-to-all-animation/14b': {
    input: OneToAllAnimation14bInput
    output: OneToAllAnimation14bOutput
  }
  'fal-ai/wan-vision-enhancer': {
    input: WanVisionEnhancerInput
    output: WanVisionEnhancerOutput
  }
  'fal-ai/sync-lipsync/react-1': {
    input: SyncLipsyncReact1Input
    output: SyncLipsyncReact1Output
  }
  'veed/video-background-removal/fast': {
    input: VideoBackgroundRemovalFastInput
    output: VideoBackgroundRemovalFastOutput
  }
  'fal-ai/kling-video/o1/video-to-video/edit': {
    input: FalAiKlingVideoO1VideoToVideoEditOmniVideoElementInput
    output: KlingVideoO1VideoToVideoEditOutput
  }
  'fal-ai/kling-video/o1/video-to-video/reference': {
    input: FalAiKlingVideoO1VideoToVideoReferenceOmniVideoElementInput
    output: KlingVideoO1VideoToVideoReferenceOutput
  }
  'veed/video-background-removal': {
    input: VeedVideoBackgroundRemovalVideoBackgroundRemovalInput
    output: VeedVideoBackgroundRemovalVideoBackgroundRemovalOutput
  }
  'veed/video-background-removal/green-screen': {
    input: VideoBackgroundRemovalGreenScreenInput
    output: VideoBackgroundRemovalGreenScreenOutput
  }
  'fal-ai/ltx-2/retake-video': {
    input: Ltx2RetakeVideoInput
    output: Ltx2RetakeVideoOutput
  }
  'decart/lucy-edit/fast': {
    input: LucyEditFastInput
    output: LucyEditFastOutput
  }
  'fal-ai/sam-3/video-rle': {
    input: Sam3VideoRleInput
    output: Sam3VideoRleOutput
  }
  'fal-ai/sam-3/video': {
    input: Sam3VideoInput
    output: Sam3VideoOutput
  }
  'fal-ai/editto': {
    input: EdittoInput
    output: EdittoOutput
  }
  'fal-ai/flashvsr/upscale/video': {
    input: FlashvsrUpscaleVideoInput
    output: FlashvsrUpscaleVideoOutput
  }
  'fal-ai/workflow-utilities/auto-subtitle': {
    input: WorkflowUtilitiesAutoSubtitleInput
    output: WorkflowUtilitiesAutoSubtitleOutput
  }
  'fal-ai/bytedance-upscaler/upscale/video': {
    input: BytedanceUpscalerUpscaleVideoInput
    output: BytedanceUpscalerUpscaleVideoOutput
  }
  'fal-ai/video-as-prompt': {
    input: VideoAsPromptInput
    output: VideoAsPromptOutput
  }
  'fal-ai/birefnet/v2/video': {
    input: BirefnetV2VideoInput
    output: BirefnetV2VideoOutput
  }
  'fal-ai/vidu/q2/video-extension/pro': {
    input: ViduQ2VideoExtensionProInput
    output: ViduQ2VideoExtensionProOutput
  }
  'mirelo-ai/sfx-v1.5/video-to-video': {
    input: SfxV15VideoToVideoInput
    output: VideoOutput
  }
  'fal-ai/krea-wan-14b/video-to-video': {
    input: KreaWan14bVideoToVideoInput
    output: KreaWan14bVideoToVideoOutput
  }
  'fal-ai/sora-2/video-to-video/remix': {
    input: Sora2VideoToVideoRemixInput
    output: Sora2VideoToVideoRemixOutput
  }
  'fal-ai/wan-vace-apps/long-reframe': {
    input: WanVaceAppsLongReframeInput
    output: WanVaceAppsLongReframeOutput
  }
  'fal-ai/infinitalk/video-to-video': {
    input: InfinitalkVideoToVideoInput
    output: InfinitalkVideoToVideoOutput
  }
  'fal-ai/seedvr/upscale/video': {
    input: SeedvrUpscaleVideoInput
    output: SeedvrUpscaleVideoOutput
  }
  'fal-ai/wan-vace-apps/video-edit': {
    input: WanVaceAppsVideoEditInput
    output: WanVaceAppsVideoEditOutput
  }
  'fal-ai/wan/v2.2-14b/animate/replace': {
    input: WanV2214bAnimateReplaceInput
    output: WanV2214bAnimateReplaceOutput
  }
  'fal-ai/wan/v2.2-14b/animate/move': {
    input: WanV2214bAnimateMoveInput
    output: WanV2214bAnimateMoveOutput
  }
  'decart/lucy-edit/pro': {
    input: LucyEditProInput
    output: LucyEditProOutput
  }
  'decart/lucy-edit/dev': {
    input: LucyEditDevInput
    output: LucyEditDevOutput
  }
  'fal-ai/wan-22-vace-fun-a14b/reframe': {
    input: Wan22VaceFunA14bReframeInput
    output: Wan22VaceFunA14bReframeOutput
  }
  'fal-ai/wan-22-vace-fun-a14b/outpainting': {
    input: Wan22VaceFunA14bOutpaintingInput
    output: Wan22VaceFunA14bOutpaintingOutput
  }
  'fal-ai/wan-22-vace-fun-a14b/inpainting': {
    input: Wan22VaceFunA14bInpaintingInput
    output: Wan22VaceFunA14bInpaintingOutput
  }
  'fal-ai/wan-22-vace-fun-a14b/depth': {
    input: Wan22VaceFunA14bDepthInput
    output: Wan22VaceFunA14bDepthOutput
  }
  'fal-ai/wan-22-vace-fun-a14b/pose': {
    input: Wan22VaceFunA14bPoseInput
    output: Wan22VaceFunA14bPoseOutput
  }
  'fal-ai/hunyuan-video-foley': {
    input: HunyuanVideoFoleyInput
    output: HunyuanVideoFoleyOutput
  }
  'fal-ai/sync-lipsync/v2/pro': {
    input: SyncLipsyncV2ProInput
    output: SyncLipsyncV2ProOutput
  }
  'fal-ai/wan-fun-control': {
    input: WanFunControlInput
    output: WanFunControlOutput
  }
  'bria/video/increase-resolution': {
    input: VideoIncreaseResolutionInput
    output: VideoIncreaseResolutionOutput
  }
  'fal-ai/infinitalk': {
    input: InfinitalkInput
    output: InfinitalkOutput
  }
  'mirelo-ai/sfx-v1/video-to-video': {
    input: SfxV1VideoToVideoInput
    output: SfxV1VideoToVideoOutput
  }
  'moonvalley/marey/pose-transfer': {
    input: MareyPoseTransferInput
    output: MareyPoseTransferOutput
  }
  'moonvalley/marey/motion-transfer': {
    input: MareyMotionTransferInput
    output: MareyMotionTransferOutput
  }
  'fal-ai/ffmpeg-api/merge-videos': {
    input: FfmpegApiMergeVideosInput
    output: FfmpegApiMergeVideosOutput
  }
  'fal-ai/wan/v2.2-a14b/video-to-video': {
    input: WanV22A14bVideoToVideoInput
    output: WanV22A14bVideoToVideoOutput
  }
  'fal-ai/ltxv-13b-098-distilled/extend': {
    input: ExtendVideoConditioningInput
    output: Ltxv13B098DistilledExtendOutput
  }
  'fal-ai/rife/video': {
    input: RifeVideoInput
    output: RifeVideoOutput
  }
  'fal-ai/film/video': {
    input: FilmVideoInput
    output: FilmVideoOutput
  }
  'fal-ai/luma-dream-machine/ray-2-flash/modify': {
    input: LumaDreamMachineRay2FlashModifyInput
    output: LumaDreamMachineRay2FlashModifyOutput
  }
  'fal-ai/ltxv-13b-098-distilled/multiconditioning': {
    input: VideoConditioningInput
    output: Ltxv13B098DistilledMulticonditioningOutput
  }
  'fal-ai/pixverse/sound-effects': {
    input: PixverseSoundEffectsInput
    output: PixverseSoundEffectsOutput
  }
  'fal-ai/thinksound/audio': {
    input: ThinksoundAudioInput
    output: ThinksoundAudioOutput
  }
  'fal-ai/thinksound': {
    input: ThinksoundInput
    output: ThinksoundOutput
  }
  'fal-ai/pixverse/extend/fast': {
    input: PixverseExtendFastInput
    output: PixverseExtendFastOutput
  }
  'fal-ai/pixverse/extend': {
    input: PixverseExtendInput
    output: PixverseExtendOutput
  }
  'fal-ai/pixverse/lipsync': {
    input: PixverseLipsyncInput
    output: PixverseLipsyncOutput
  }
  'fal-ai/luma-dream-machine/ray-2/modify': {
    input: LumaDreamMachineRay2ModifyInput
    output: LumaDreamMachineRay2ModifyOutput
  }
  'fal-ai/wan-vace-14b/reframe': {
    input: WanVace14bReframeInput
    output: WanVace14bReframeOutput
  }
  'fal-ai/wan-vace-14b/outpainting': {
    input: WanVace14bOutpaintingInput
    output: WanVace14bOutpaintingOutput
  }
  'fal-ai/wan-vace-14b/inpainting': {
    input: WanVace14bInpaintingInput
    output: WanVace14bInpaintingOutput
  }
  'fal-ai/wan-vace-14b/pose': {
    input: WanVace14bPoseInput
    output: WanVace14bPoseOutput
  }
  'fal-ai/wan-vace-14b/depth': {
    input: WanVace14bDepthInput
    output: WanVace14bDepthOutput
  }
  'fal-ai/dwpose/video': {
    input: DwposeVideoInput
    output: DwposeVideoOutput
  }
  'fal-ai/ffmpeg-api/merge-audio-video': {
    input: FfmpegApiMergeAudioVideoInput
    output: FfmpegApiMergeAudioVideoOutput
  }
  'fal-ai/wan-vace-1-3b': {
    input: WanVace13bInput
    output: WanVace13bOutput
  }
  'fal-ai/luma-dream-machine/ray-2-flash/reframe': {
    input: LumaDreamMachineRay2FlashReframeInput
    output: LumaDreamMachineRay2FlashReframeOutput
  }
  'fal-ai/luma-dream-machine/ray-2/reframe': {
    input: LumaDreamMachineRay2ReframeInput
    output: LumaDreamMachineRay2ReframeOutput
  }
  'veed/lipsync': {
    input: LipsyncInput
    output: LipsyncOutput
  }
  'fal-ai/wan-vace-14b': {
    input: WanVace14bInput
    output: WanVace14bOutput
  }
  'fal-ai/ltx-video-13b-distilled/extend': {
    input: FalAiLtxVideo13bDistilledExtendVideoConditioningInput
    output: LtxVideo13bDistilledExtendOutput
  }
  'fal-ai/ltx-video-13b-distilled/multiconditioning': {
    input: FalAiLtxVideo13bDistilledMulticonditioningVideoConditioningInput
    output: LtxVideo13bDistilledMulticonditioningOutput
  }
  'fal-ai/ltx-video-13b-dev/multiconditioning': {
    input: FalAiLtxVideo13bDevMulticonditioningVideoConditioningInput
    output: LtxVideo13bDevMulticonditioningOutput
  }
  'fal-ai/ltx-video-13b-dev/extend': {
    input: FalAiLtxVideo13bDevExtendVideoConditioningInput
    output: LtxVideo13bDevExtendOutput
  }
  'fal-ai/ltx-video-lora/multiconditioning': {
    input: LtxVideoLoraMulticonditioningInput
    output: LtxVideoLoraMulticonditioningOutput
  }
  'fal-ai/magi/extend-video': {
    input: MagiExtendVideoInput
    output: MagiExtendVideoOutput
  }
  'fal-ai/magi-distilled/extend-video': {
    input: MagiDistilledExtendVideoInput
    output: MagiDistilledExtendVideoOutput
  }
  'fal-ai/wan-vace': {
    input: WanVaceInput
    output: WanVaceOutput
  }
  'cassetteai/video-sound-effects-generator': {
    input: VideoSoundEffectsGeneratorInput
    output: VideoSoundEffectsGeneratorOutput
  }
  'fal-ai/sync-lipsync/v2': {
    input: SyncLipsyncV2Input
    output: SyncLipsyncV2Output
  }
  'fal-ai/latentsync': {
    input: LatentsyncInput
    output: LatentsyncOutput
  }
  'fal-ai/pika/v2/pikadditions': {
    input: PikaV2PikadditionsInput
    output: PikaV2PikadditionsOutput
  }
  'fal-ai/ltx-video-v095/multiconditioning': {
    input: FalAiLtxVideoV095MulticonditioningVideoConditioningInput
    output: LtxVideoV095MulticonditioningOutput
  }
  'fal-ai/ltx-video-v095/extend': {
    input: FalAiLtxVideoV095ExtendVideoConditioningInput
    output: LtxVideoV095ExtendOutput
  }
  'fal-ai/topaz/upscale/video': {
    input: TopazUpscaleVideoInput
    output: TopazUpscaleVideoOutput
  }
  'fal-ai/ben/v2/video': {
    input: BenV2VideoInput
    output: BenV2VideoOutput
  }
  'fal-ai/hunyuan-video/video-to-video': {
    input: HunyuanVideoVideoToVideoInput
    output: HunyuanVideoVideoToVideoOutput
  }
  'fal-ai/hunyuan-video-lora/video-to-video': {
    input: HunyuanVideoLoraVideoToVideoInput
    output: HunyuanVideoLoraVideoToVideoOutput
  }
  'fal-ai/ffmpeg-api/compose': {
    input: FfmpegApiComposeInput
    output: FfmpegApiComposeOutput
  }
  'fal-ai/sync-lipsync': {
    input: SyncLipsyncInput
    output: SyncLipsyncOutput
  }
  'fal-ai/auto-caption': {
    input: AutoCaptionInput
    output: AutoCaptionOutput
  }
  'fal-ai/dubbing': {
    input: DubbingInput
    output: DubbingOutput
  }
  'fal-ai/video-upscaler': {
    input: VideoUpscalerInput
    output: VideoUpscalerOutput
  }
  'fal-ai/cogvideox-5b/video-to-video': {
    input: Cogvideox5bVideoToVideoInput
    output: Cogvideox5bVideoToVideoOutput
  }
  'fal-ai/controlnext': {
    input: ControlnextInput
    output: ControlnextOutput
  }
  'fal-ai/sam2/video': {
    input: Sam2VideoInput
    output: Sam2VideoOutput
  }
  'fal-ai/amt-interpolation': {
    input: AmtInterpolationInput
    output: AmtInterpolationOutput
  }
  'fal-ai/fast-animatediff/turbo/video-to-video': {
    input: FastAnimatediffTurboVideoToVideoInput
    output: FastAnimatediffTurboVideoToVideoOutput
  }
  'fal-ai/fast-animatediff/video-to-video': {
    input: FastAnimatediffVideoToVideoInput
    output: FastAnimatediffVideoToVideoOutput
  }
}

/** Union type of all video-to-video model endpoint IDs */
export type VideoToVideoModel = keyof VideoToVideoEndpointMap

/** Get the input type for a specific video-to-video model */
export type VideoToVideoModelInput<T extends VideoToVideoModel> = VideoToVideoEndpointMap[T]['input']

/** Get the output type for a specific video-to-video model */
export type VideoToVideoModelOutput<T extends VideoToVideoModel> = VideoToVideoEndpointMap[T]['output']
