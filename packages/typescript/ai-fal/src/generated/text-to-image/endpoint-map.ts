// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  FluxProV11UltraInput,
  RecraftV3TextToImageInput,
  LoRaInput,
  Flux2Input,
  Flux2ProInput,
  TextToImage32Input,
  Imagen4PreviewFastInput,
  Imagen4PreviewInput,
  HidreamI1FullInput,
  HidreamI1DevInput,
  HidreamI1FastInput,
  FluxDevInput,
  IdeogramV2Input,
  StableDiffusionV35LargeInput,
  ControlNetUnionInput,
  FluxLoraInput,
  FalAiFlux2KleinLoRaInput,
  FalAiFlux2Klein4bBaseLoraFalAiFlux2KleinLoRaInput,
  Flux2Klein9bBaseInput,
  Flux2Klein4bBaseInput,
  Flux2Klein9bInput,
  Flux2Klein4bInput,
  Imagineart15ProPreviewTextToImageInput,
  GlmImageInput,
  QwenImage2512LoraInput,
  QwenImage2512Input,
  V26TextToImageInput,
  Flux2FlashInput,
  GptImage15Input,
  FiboLiteGenerateInput,
  Flux2TurboInput,
  Flux2MaxInput,
  LongcatImageInput,
  BytedanceSeedreamV45TextToImageInput,
  ViduQ2TextToImageInput,
  FalAiZImageTurboLoraLoRaInput,
  OvisImageInput,
  ZImageTurboInput,
  Flux2LoraGallerySepiaVintageInput,
  Flux2LoraGallerySatelliteViewStyleInput,
  Flux2LoraGalleryRealismInput,
  Flux2LoraGalleryHdrStyleInput,
  Flux2LoraGalleryDigitalComicArtInput,
  Flux2LoraGalleryBallpointPenSketchInput,
  Imagineart15PreviewTextToImageInput,
  Flux2FlexInput,
  Gemini3ProImagePreviewInput,
  NanoBananaProInput,
  Emu35ImageTextToImageInput,
  FiboGenerateInput,
  PiflowInput,
  GptImage1MiniInput,
  ReveTextToImageInput,
  HunyuanImageV3TextToImageInput,
  Wan25PreviewTextToImageInput,
  FluxSrpoInput,
  Flux1SrpoInput,
  HunyuanImageV21TextToImageInput,
  BytedanceSeedreamV4TextToImageInput,
  Gemini25FlashImageInput,
  NanoBananaInput,
  BytedanceDreaminaV31TextToImageInput,
  WanV22A14bTextToImageLoraInput,
  WanV225bTextToImageInput,
  WanV22A14bTextToImageInput,
  QwenImageInput,
  FluxKreaLoraStreamInput,
  FluxKreaLoraInput,
  FluxKreaInput,
  Flux1KreaInput,
  SkyRaccoonInput,
  FluxKontextLoraTextToImageInput,
  OmnigenV2Input,
  BytedanceSeedreamV3TextToImageInput,
  Flux1SchnellInput,
  Flux1DevInput,
  FluxProKontextMaxTextToImageInput,
  FluxProKontextTextToImageInput,
  BagelInput,
  Imagen4PreviewUltraInput,
  DreamoInput,
  FluxLoraStreamInput,
  MinimaxImage01Input,
  PonyV7Input,
  IdeogramV3Input,
  FLiteStandardInput,
  FLiteTextureInput,
  GptImage1TextToImageInput,
  SanaV1516bInput,
  SanaV1548bInput,
  SanaSprintInput,
  JuggernautFluxLightningInput,
  RundiffusionPhotoFluxInput,
  JuggernautFluxLoraInput,
  JuggernautFluxProInput,
  JuggernautFluxBaseInput,
  Cogview4Input,
  IdeogramV2aTurboInput,
  IdeogramV2aInput,
  FluxControlLoraCannyInput,
  FluxControlLoraDepthInput,
  Imagen3Input,
  Imagen3FastInput,
  LuminaImageV2Input,
  JanusInput,
  FluxProV11Input,
  FluxProV11UltraFinetunedInput,
  SwittiInput,
  Switti512Input,
  GuidanceInput,
  FalAiBriaTextToImageBaseGuidanceInput,
  FalAiBriaTextToImageHdGuidanceInput,
  Recraft20bInput,
  IdeogramV2TurboInput,
  LumaPhotonFlashInput,
  AuraFlowInput,
  OmnigenV1Input,
  FluxSchnellInput,
  StableDiffusionV35MediumInput,
  FluxLoraInpaintingInput,
  StableDiffusionV3MediumInput,
  FooocusUpscaleOrVaryInput,
  FluxSubjectInput,
  SanaInput,
  PixartSigmaInput,
  SdxlControlnetUnionInput,
  KolorsInput,
  StableCascadeInput,
  FastSdxlInput,
  StableCascadeSoteDiffusionInput,
  LumaPhotonInput,
  LightningModelsInput,
  PlaygroundV25Input,
  RealisticVisionInput,
  DreamshaperInput,
  StableDiffusionV15Input,
  LayerDiffusionInput,
  FastLightningSdxlInput,
  FastFooocusSdxlImageToImageInput,
  FastSdxlControlnetCannyInput,
  FastLcmDiffusionInput,
  FastFooocusSdxlInput,
  IllusionDiffusionInput,
  FooocusImagePromptInput,
  FooocusInpaintInput,
  LcmInput,
  DiffusionEdgeInput,
  FooocusInput,
  TimestepsInput,
  FluxProV11UltraOutput,
  RecraftV3TextToImageOutput,
  Flux2LoraOutput,
  Flux2Output,
  Flux2ProOutput,
  TextToImage32Output,
  Imagen4PreviewFastOutput,
  Imagen4PreviewOutput,
  HidreamI1FullOutput,
  HidreamI1DevOutput,
  HidreamI1FastOutput,
  FluxDevOutput,
  IdeogramV2Output,
  StableDiffusionV35LargeOutput,
  FluxGeneralOutput,
  FluxLoraOutput,
  Flux2Klein9bBaseLoraOutput,
  Flux2Klein4bBaseLoraOutput,
  Flux2Klein9bBaseOutput,
  Flux2Klein4bBaseOutput,
  Flux2Klein9bOutput,
  Flux2Klein4bOutput,
  Imagineart15ProPreviewTextToImageOutput,
  GlmImageOutput,
  QwenImage2512LoraOutput,
  QwenImage2512Output,
  V26TextToImageOutput,
  Flux2FlashOutput,
  GptImage15Output,
  FiboLiteGenerateOutput,
  Flux2TurboOutput,
  Flux2MaxOutput,
  LongcatImageOutput,
  BytedanceSeedreamV45TextToImageOutput,
  ViduQ2TextToImageOutput,
  ZImageTurboLoraOutput,
  OvisImageOutput,
  ZImageTurboOutput,
  Flux2LoraGallerySepiaVintageOutput,
  Flux2LoraGallerySatelliteViewStyleOutput,
  Flux2LoraGalleryRealismOutput,
  Flux2LoraGalleryHdrStyleOutput,
  Flux2LoraGalleryDigitalComicArtOutput,
  Flux2LoraGalleryBallpointPenSketchOutput,
  ImageOutput,
  Flux2FlexOutput,
  Gemini3ProImagePreviewOutput,
  NanoBananaProOutput,
  Emu35ImageTextToImageOutput,
  FiboGenerateOutput,
  PiflowOutput,
  GptImage1MiniOutput,
  ReveTextToImageOutput,
  HunyuanImageV3TextToImageOutput,
  Wan25PreviewTextToImageOutput,
  FluxSrpoOutput,
  Flux1SrpoOutput,
  HunyuanImageV21TextToImageOutput,
  BytedanceSeedreamV4TextToImageOutput,
  Gemini25FlashImageOutput,
  NanoBananaOutput,
  BytedanceDreaminaV31TextToImageOutput,
  WanV22A14bTextToImageLoraOutput,
  WanV225bTextToImageOutput,
  WanV22A14bTextToImageOutput,
  QwenImageOutput,
  FluxKreaLoraStreamOutput,
  FluxKreaLoraOutput,
  FluxKreaOutput,
  Flux1KreaOutput,
  SkyRaccoonOutput,
  FluxKontextLoraTextToImageOutput,
  OmnigenV2Output,
  BytedanceSeedreamV3TextToImageOutput,
  Flux1SchnellOutput,
  Flux1DevOutput,
  FluxProKontextMaxTextToImageOutput,
  FluxProKontextTextToImageOutput,
  BagelOutput,
  Imagen4PreviewUltraOutput,
  DreamoOutput,
  FluxLoraStreamOutput,
  MinimaxImage01Output,
  PonyV7Output,
  IdeogramV3Output,
  FLiteStandardOutput,
  FLiteTextureOutput,
  GptImage1TextToImageOutput,
  SanaV1516bOutput,
  SanaV1548bOutput,
  SanaSprintOutput,
  JuggernautFluxLightningOutput,
  RundiffusionPhotoFluxOutput,
  JuggernautFluxLoraOutput,
  JuggernautFluxProOutput,
  JuggernautFluxBaseOutput,
  Cogview4Output,
  IdeogramV2aTurboOutput,
  IdeogramV2aOutput,
  FluxControlLoraCannyOutput,
  FluxControlLoraDepthOutput,
  Imagen3Output,
  Imagen3FastOutput,
  LuminaImageV2Output,
  JanusOutput,
  FluxProV11Output,
  FluxProV11UltraFinetunedOutput,
  SwittiOutput,
  Switti512Output,
  BriaTextToImageFastOutput,
  BriaTextToImageBaseOutput,
  BriaTextToImageHdOutput,
  Recraft20bOutput,
  IdeogramV2TurboOutput,
  LumaPhotonFlashOutput,
  AuraFlowOutput,
  OmnigenV1Output,
  FluxSchnellOutput,
  StableDiffusionV35MediumOutput,
  FluxLoraInpaintingOutput,
  StableDiffusionV3MediumOutput,
  FooocusUpscaleOrVaryOutput,
  FluxSubjectOutput,
  SanaOutput,
  PixartSigmaOutput,
  SdxlControlnetUnionOutput,
  KolorsOutput,
  StableCascadeOutput,
  FastSdxlOutput,
  StableCascadeSoteDiffusionOutput,
  LumaPhotonOutput,
  LightningModelsOutput,
  PlaygroundV25Output,
  RealisticVisionOutput,
  DreamshaperOutput,
  StableDiffusionV15Output,
  LayerDiffusionOutput,
  FastLightningSdxlOutput,
  FastFooocusSdxlImageToImageOutput,
  FastSdxlControlnetCannyOutput,
  FastLcmDiffusionOutput,
  FastFooocusSdxlOutput,
  IllusionDiffusionOutput,
  FooocusImagePromptOutput,
  FooocusInpaintOutput,
  LcmOutput,
  DiffusionEdgeOutput,
  FooocusOutput,
  LoraOutput,
} from './types.gen'

export type TextToImageEndpointMap = {
  'fal-ai/flux-pro/v1.1-ultra': {
    input: FluxProV11UltraInput
    output: FluxProV11UltraOutput
  }
  'fal-ai/recraft/v3/text-to-image': {
    input: RecraftV3TextToImageInput
    output: RecraftV3TextToImageOutput
  }
  'fal-ai/flux-2/lora': {
    input: LoRaInput
    output: Flux2LoraOutput
  }
  'fal-ai/flux-2': {
    input: Flux2Input
    output: Flux2Output
  }
  'fal-ai/flux-2-pro': {
    input: Flux2ProInput
    output: Flux2ProOutput
  }
  'bria/text-to-image/3.2': {
    input: TextToImage32Input
    output: TextToImage32Output
  }
  'fal-ai/imagen4/preview/fast': {
    input: Imagen4PreviewFastInput
    output: Imagen4PreviewFastOutput
  }
  'fal-ai/imagen4/preview': {
    input: Imagen4PreviewInput
    output: Imagen4PreviewOutput
  }
  'fal-ai/hidream-i1-full': {
    input: HidreamI1FullInput
    output: HidreamI1FullOutput
  }
  'fal-ai/hidream-i1-dev': {
    input: HidreamI1DevInput
    output: HidreamI1DevOutput
  }
  'fal-ai/hidream-i1-fast': {
    input: HidreamI1FastInput
    output: HidreamI1FastOutput
  }
  'fal-ai/flux/dev': {
    input: FluxDevInput
    output: FluxDevOutput
  }
  'fal-ai/ideogram/v2': {
    input: IdeogramV2Input
    output: IdeogramV2Output
  }
  'fal-ai/stable-diffusion-v35-large': {
    input: StableDiffusionV35LargeInput
    output: StableDiffusionV35LargeOutput
  }
  'fal-ai/flux-general': {
    input: ControlNetUnionInput
    output: FluxGeneralOutput
  }
  'fal-ai/flux-lora': {
    input: FluxLoraInput
    output: FluxLoraOutput
  }
  'fal-ai/flux-2/klein/9b/base/lora': {
    input: FalAiFlux2KleinLoRaInput
    output: Flux2Klein9bBaseLoraOutput
  }
  'fal-ai/flux-2/klein/4b/base/lora': {
    input: FalAiFlux2Klein4bBaseLoraFalAiFlux2KleinLoRaInput
    output: Flux2Klein4bBaseLoraOutput
  }
  'fal-ai/flux-2/klein/9b/base': {
    input: Flux2Klein9bBaseInput
    output: Flux2Klein9bBaseOutput
  }
  'fal-ai/flux-2/klein/4b/base': {
    input: Flux2Klein4bBaseInput
    output: Flux2Klein4bBaseOutput
  }
  'fal-ai/flux-2/klein/9b': {
    input: Flux2Klein9bInput
    output: Flux2Klein9bOutput
  }
  'fal-ai/flux-2/klein/4b': {
    input: Flux2Klein4bInput
    output: Flux2Klein4bOutput
  }
  'imagineart/imagineart-1.5-pro-preview/text-to-image': {
    input: Imagineart15ProPreviewTextToImageInput
    output: Imagineart15ProPreviewTextToImageOutput
  }
  'fal-ai/glm-image': {
    input: GlmImageInput
    output: GlmImageOutput
  }
  'fal-ai/qwen-image-2512/lora': {
    input: QwenImage2512LoraInput
    output: QwenImage2512LoraOutput
  }
  'fal-ai/qwen-image-2512': {
    input: QwenImage2512Input
    output: QwenImage2512Output
  }
  'wan/v2.6/text-to-image': {
    input: V26TextToImageInput
    output: V26TextToImageOutput
  }
  'fal-ai/flux-2/flash': {
    input: Flux2FlashInput
    output: Flux2FlashOutput
  }
  'fal-ai/gpt-image-1.5': {
    input: GptImage15Input
    output: GptImage15Output
  }
  'bria/fibo-lite/generate': {
    input: FiboLiteGenerateInput
    output: FiboLiteGenerateOutput
  }
  'fal-ai/flux-2/turbo': {
    input: Flux2TurboInput
    output: Flux2TurboOutput
  }
  'fal-ai/flux-2-max': {
    input: Flux2MaxInput
    output: Flux2MaxOutput
  }
  'fal-ai/longcat-image': {
    input: LongcatImageInput
    output: LongcatImageOutput
  }
  'fal-ai/bytedance/seedream/v4.5/text-to-image': {
    input: BytedanceSeedreamV45TextToImageInput
    output: BytedanceSeedreamV45TextToImageOutput
  }
  'fal-ai/vidu/q2/text-to-image': {
    input: ViduQ2TextToImageInput
    output: ViduQ2TextToImageOutput
  }
  'fal-ai/z-image/turbo/lora': {
    input: FalAiZImageTurboLoraLoRaInput
    output: ZImageTurboLoraOutput
  }
  'fal-ai/ovis-image': {
    input: OvisImageInput
    output: OvisImageOutput
  }
  'fal-ai/z-image/turbo': {
    input: ZImageTurboInput
    output: ZImageTurboOutput
  }
  'fal-ai/flux-2-lora-gallery/sepia-vintage': {
    input: Flux2LoraGallerySepiaVintageInput
    output: Flux2LoraGallerySepiaVintageOutput
  }
  'fal-ai/flux-2-lora-gallery/satellite-view-style': {
    input: Flux2LoraGallerySatelliteViewStyleInput
    output: Flux2LoraGallerySatelliteViewStyleOutput
  }
  'fal-ai/flux-2-lora-gallery/realism': {
    input: Flux2LoraGalleryRealismInput
    output: Flux2LoraGalleryRealismOutput
  }
  'fal-ai/flux-2-lora-gallery/hdr-style': {
    input: Flux2LoraGalleryHdrStyleInput
    output: Flux2LoraGalleryHdrStyleOutput
  }
  'fal-ai/flux-2-lora-gallery/digital-comic-art': {
    input: Flux2LoraGalleryDigitalComicArtInput
    output: Flux2LoraGalleryDigitalComicArtOutput
  }
  'fal-ai/flux-2-lora-gallery/ballpoint-pen-sketch': {
    input: Flux2LoraGalleryBallpointPenSketchInput
    output: Flux2LoraGalleryBallpointPenSketchOutput
  }
  'imagineart/imagineart-1.5-preview/text-to-image': {
    input: Imagineart15PreviewTextToImageInput
    output: ImageOutput
  }
  'fal-ai/flux-2-flex': {
    input: Flux2FlexInput
    output: Flux2FlexOutput
  }
  'fal-ai/gemini-3-pro-image-preview': {
    input: Gemini3ProImagePreviewInput
    output: Gemini3ProImagePreviewOutput
  }
  'fal-ai/nano-banana-pro': {
    input: NanoBananaProInput
    output: NanoBananaProOutput
  }
  'fal-ai/emu-3.5-image/text-to-image': {
    input: Emu35ImageTextToImageInput
    output: Emu35ImageTextToImageOutput
  }
  'bria/fibo/generate': {
    input: FiboGenerateInput
    output: FiboGenerateOutput
  }
  'fal-ai/piflow': {
    input: PiflowInput
    output: PiflowOutput
  }
  'fal-ai/gpt-image-1-mini': {
    input: GptImage1MiniInput
    output: GptImage1MiniOutput
  }
  'fal-ai/reve/text-to-image': {
    input: ReveTextToImageInput
    output: ReveTextToImageOutput
  }
  'fal-ai/hunyuan-image/v3/text-to-image': {
    input: HunyuanImageV3TextToImageInput
    output: HunyuanImageV3TextToImageOutput
  }
  'fal-ai/wan-25-preview/text-to-image': {
    input: Wan25PreviewTextToImageInput
    output: Wan25PreviewTextToImageOutput
  }
  'fal-ai/flux/srpo': {
    input: FluxSrpoInput
    output: FluxSrpoOutput
  }
  'fal-ai/flux-1/srpo': {
    input: Flux1SrpoInput
    output: Flux1SrpoOutput
  }
  'fal-ai/hunyuan-image/v2.1/text-to-image': {
    input: HunyuanImageV21TextToImageInput
    output: HunyuanImageV21TextToImageOutput
  }
  'fal-ai/bytedance/seedream/v4/text-to-image': {
    input: BytedanceSeedreamV4TextToImageInput
    output: BytedanceSeedreamV4TextToImageOutput
  }
  'fal-ai/gemini-25-flash-image': {
    input: Gemini25FlashImageInput
    output: Gemini25FlashImageOutput
  }
  'fal-ai/nano-banana': {
    input: NanoBananaInput
    output: NanoBananaOutput
  }
  'fal-ai/bytedance/dreamina/v3.1/text-to-image': {
    input: BytedanceDreaminaV31TextToImageInput
    output: BytedanceDreaminaV31TextToImageOutput
  }
  'fal-ai/wan/v2.2-a14b/text-to-image/lora': {
    input: WanV22A14bTextToImageLoraInput
    output: WanV22A14bTextToImageLoraOutput
  }
  'fal-ai/wan/v2.2-5b/text-to-image': {
    input: WanV225bTextToImageInput
    output: WanV225bTextToImageOutput
  }
  'fal-ai/wan/v2.2-a14b/text-to-image': {
    input: WanV22A14bTextToImageInput
    output: WanV22A14bTextToImageOutput
  }
  'fal-ai/qwen-image': {
    input: QwenImageInput
    output: QwenImageOutput
  }
  'fal-ai/flux-krea-lora/stream': {
    input: FluxKreaLoraStreamInput
    output: FluxKreaLoraStreamOutput
  }
  'fal-ai/flux-krea-lora': {
    input: FluxKreaLoraInput
    output: FluxKreaLoraOutput
  }
  'fal-ai/flux/krea': {
    input: FluxKreaInput
    output: FluxKreaOutput
  }
  'fal-ai/flux-1/krea': {
    input: Flux1KreaInput
    output: Flux1KreaOutput
  }
  'fal-ai/sky-raccoon': {
    input: SkyRaccoonInput
    output: SkyRaccoonOutput
  }
  'fal-ai/flux-kontext-lora/text-to-image': {
    input: FluxKontextLoraTextToImageInput
    output: FluxKontextLoraTextToImageOutput
  }
  'fal-ai/omnigen-v2': {
    input: OmnigenV2Input
    output: OmnigenV2Output
  }
  'fal-ai/bytedance/seedream/v3/text-to-image': {
    input: BytedanceSeedreamV3TextToImageInput
    output: BytedanceSeedreamV3TextToImageOutput
  }
  'fal-ai/flux-1/schnell': {
    input: Flux1SchnellInput
    output: Flux1SchnellOutput
  }
  'fal-ai/flux-1/dev': {
    input: Flux1DevInput
    output: Flux1DevOutput
  }
  'fal-ai/flux-pro/kontext/max/text-to-image': {
    input: FluxProKontextMaxTextToImageInput
    output: FluxProKontextMaxTextToImageOutput
  }
  'fal-ai/flux-pro/kontext/text-to-image': {
    input: FluxProKontextTextToImageInput
    output: FluxProKontextTextToImageOutput
  }
  'fal-ai/bagel': {
    input: BagelInput
    output: BagelOutput
  }
  'fal-ai/imagen4/preview/ultra': {
    input: Imagen4PreviewUltraInput
    output: Imagen4PreviewUltraOutput
  }
  'fal-ai/dreamo': {
    input: DreamoInput
    output: DreamoOutput
  }
  'fal-ai/flux-lora/stream': {
    input: FluxLoraStreamInput
    output: FluxLoraStreamOutput
  }
  'fal-ai/minimax/image-01': {
    input: MinimaxImage01Input
    output: MinimaxImage01Output
  }
  'fal-ai/pony-v7': {
    input: PonyV7Input
    output: PonyV7Output
  }
  'fal-ai/ideogram/v3': {
    input: IdeogramV3Input
    output: IdeogramV3Output
  }
  'fal-ai/f-lite/standard': {
    input: FLiteStandardInput
    output: FLiteStandardOutput
  }
  'fal-ai/f-lite/texture': {
    input: FLiteTextureInput
    output: FLiteTextureOutput
  }
  'fal-ai/gpt-image-1/text-to-image': {
    input: GptImage1TextToImageInput
    output: GptImage1TextToImageOutput
  }
  'fal-ai/sana/v1.5/1.6b': {
    input: SanaV1516bInput
    output: SanaV1516bOutput
  }
  'fal-ai/sana/v1.5/4.8b': {
    input: SanaV1548bInput
    output: SanaV1548bOutput
  }
  'fal-ai/sana/sprint': {
    input: SanaSprintInput
    output: SanaSprintOutput
  }
  'rundiffusion-fal/juggernaut-flux/lightning': {
    input: JuggernautFluxLightningInput
    output: JuggernautFluxLightningOutput
  }
  'rundiffusion-fal/rundiffusion-photo-flux': {
    input: RundiffusionPhotoFluxInput
    output: RundiffusionPhotoFluxOutput
  }
  'rundiffusion-fal/juggernaut-flux-lora': {
    input: JuggernautFluxLoraInput
    output: JuggernautFluxLoraOutput
  }
  'rundiffusion-fal/juggernaut-flux/pro': {
    input: JuggernautFluxProInput
    output: JuggernautFluxProOutput
  }
  'rundiffusion-fal/juggernaut-flux/base': {
    input: JuggernautFluxBaseInput
    output: JuggernautFluxBaseOutput
  }
  'fal-ai/cogview4': {
    input: Cogview4Input
    output: Cogview4Output
  }
  'fal-ai/ideogram/v2a/turbo': {
    input: IdeogramV2aTurboInput
    output: IdeogramV2aTurboOutput
  }
  'fal-ai/ideogram/v2a': {
    input: IdeogramV2aInput
    output: IdeogramV2aOutput
  }
  'fal-ai/flux-control-lora-canny': {
    input: FluxControlLoraCannyInput
    output: FluxControlLoraCannyOutput
  }
  'fal-ai/flux-control-lora-depth': {
    input: FluxControlLoraDepthInput
    output: FluxControlLoraDepthOutput
  }
  'fal-ai/imagen3': {
    input: Imagen3Input
    output: Imagen3Output
  }
  'fal-ai/imagen3/fast': {
    input: Imagen3FastInput
    output: Imagen3FastOutput
  }
  'fal-ai/lumina-image/v2': {
    input: LuminaImageV2Input
    output: LuminaImageV2Output
  }
  'fal-ai/janus': {
    input: JanusInput
    output: JanusOutput
  }
  'fal-ai/flux-pro/v1.1': {
    input: FluxProV11Input
    output: FluxProV11Output
  }
  'fal-ai/flux-pro/v1.1-ultra-finetuned': {
    input: FluxProV11UltraFinetunedInput
    output: FluxProV11UltraFinetunedOutput
  }
  'fal-ai/switti': {
    input: SwittiInput
    output: SwittiOutput
  }
  'fal-ai/switti/512': {
    input: Switti512Input
    output: Switti512Output
  }
  'fal-ai/bria/text-to-image/fast': {
    input: GuidanceInput
    output: BriaTextToImageFastOutput
  }
  'fal-ai/bria/text-to-image/base': {
    input: FalAiBriaTextToImageBaseGuidanceInput
    output: BriaTextToImageBaseOutput
  }
  'fal-ai/bria/text-to-image/hd': {
    input: FalAiBriaTextToImageHdGuidanceInput
    output: BriaTextToImageHdOutput
  }
  'fal-ai/recraft-20b': {
    input: Recraft20bInput
    output: Recraft20bOutput
  }
  'fal-ai/ideogram/v2/turbo': {
    input: IdeogramV2TurboInput
    output: IdeogramV2TurboOutput
  }
  'fal-ai/luma-photon/flash': {
    input: LumaPhotonFlashInput
    output: LumaPhotonFlashOutput
  }
  'fal-ai/aura-flow': {
    input: AuraFlowInput
    output: AuraFlowOutput
  }
  'fal-ai/omnigen-v1': {
    input: OmnigenV1Input
    output: OmnigenV1Output
  }
  'fal-ai/flux/schnell': {
    input: FluxSchnellInput
    output: FluxSchnellOutput
  }
  'fal-ai/stable-diffusion-v35-medium': {
    input: StableDiffusionV35MediumInput
    output: StableDiffusionV35MediumOutput
  }
  'fal-ai/flux-lora/inpainting': {
    input: FluxLoraInpaintingInput
    output: FluxLoraInpaintingOutput
  }
  'fal-ai/stable-diffusion-v3-medium': {
    input: StableDiffusionV3MediumInput
    output: StableDiffusionV3MediumOutput
  }
  'fal-ai/fooocus/upscale-or-vary': {
    input: FooocusUpscaleOrVaryInput
    output: FooocusUpscaleOrVaryOutput
  }
  'fal-ai/flux-subject': {
    input: FluxSubjectInput
    output: FluxSubjectOutput
  }
  'fal-ai/sana': {
    input: SanaInput
    output: SanaOutput
  }
  'fal-ai/pixart-sigma': {
    input: PixartSigmaInput
    output: PixartSigmaOutput
  }
  'fal-ai/sdxl-controlnet-union': {
    input: SdxlControlnetUnionInput
    output: SdxlControlnetUnionOutput
  }
  'fal-ai/kolors': {
    input: KolorsInput
    output: KolorsOutput
  }
  'fal-ai/stable-cascade': {
    input: StableCascadeInput
    output: StableCascadeOutput
  }
  'fal-ai/fast-sdxl': {
    input: FastSdxlInput
    output: FastSdxlOutput
  }
  'fal-ai/stable-cascade/sote-diffusion': {
    input: StableCascadeSoteDiffusionInput
    output: StableCascadeSoteDiffusionOutput
  }
  'fal-ai/luma-photon': {
    input: LumaPhotonInput
    output: LumaPhotonOutput
  }
  'fal-ai/lightning-models': {
    input: LightningModelsInput
    output: LightningModelsOutput
  }
  'fal-ai/playground-v25': {
    input: PlaygroundV25Input
    output: PlaygroundV25Output
  }
  'fal-ai/realistic-vision': {
    input: RealisticVisionInput
    output: RealisticVisionOutput
  }
  'fal-ai/dreamshaper': {
    input: DreamshaperInput
    output: DreamshaperOutput
  }
  'fal-ai/stable-diffusion-v15': {
    input: StableDiffusionV15Input
    output: StableDiffusionV15Output
  }
  'fal-ai/layer-diffusion': {
    input: LayerDiffusionInput
    output: LayerDiffusionOutput
  }
  'fal-ai/fast-lightning-sdxl': {
    input: FastLightningSdxlInput
    output: FastLightningSdxlOutput
  }
  'fal-ai/fast-fooocus-sdxl/image-to-image': {
    input: FastFooocusSdxlImageToImageInput
    output: FastFooocusSdxlImageToImageOutput
  }
  'fal-ai/fast-sdxl-controlnet-canny': {
    input: FastSdxlControlnetCannyInput
    output: FastSdxlControlnetCannyOutput
  }
  'fal-ai/fast-lcm-diffusion': {
    input: FastLcmDiffusionInput
    output: FastLcmDiffusionOutput
  }
  'fal-ai/fast-fooocus-sdxl': {
    input: FastFooocusSdxlInput
    output: FastFooocusSdxlOutput
  }
  'fal-ai/illusion-diffusion': {
    input: IllusionDiffusionInput
    output: IllusionDiffusionOutput
  }
  'fal-ai/fooocus/image-prompt': {
    input: FooocusImagePromptInput
    output: FooocusImagePromptOutput
  }
  'fal-ai/fooocus/inpaint': {
    input: FooocusInpaintInput
    output: FooocusInpaintOutput
  }
  'fal-ai/lcm': {
    input: LcmInput
    output: LcmOutput
  }
  'fal-ai/diffusion-edge': {
    input: DiffusionEdgeInput
    output: DiffusionEdgeOutput
  }
  'fal-ai/fooocus': {
    input: FooocusInput
    output: FooocusOutput
  }
  'fal-ai/lora': {
    input: TimestepsInput
    output: LoraOutput
  }
}

/** Union type of all text-to-image model endpoint IDs */
export type TextToImageModel = keyof TextToImageEndpointMap

/** Get the input type for a specific text-to-image model */
export type TextToImageModelInput<T extends TextToImageModel> = TextToImageEndpointMap[T]['input']

/** Get the output type for a specific text-to-image model */
export type TextToImageModelOutput<T extends TextToImageModel> = TextToImageEndpointMap[T]['output']
