// AUTO-GENERATED - Do not edit manually
// Generated from fal.models.json via scripts/generate-fal-endpoint-maps.ts

import type {
  LoRaInput,
  Flux2EditInput,
  Flux2ProEditInput,
  FluxDevImageToImageInput,
  AuraSrInput,
  ClarityUpscalerInput,
  AiFaceSwapFaceswapimageInput,
  FiboEditReplaceObjectByTextInput,
  FiboEditSketchToColoredImageInput,
  FiboEditRestoreInput,
  FiboEditReseasonInput,
  FiboEditRelightInput,
  FiboEditRestyleInput,
  FiboEditRewriteTextInput,
  FiboEditEraseByTextInput,
  FiboEditEditInput,
  FiboEditAddObjectByTextInput,
  FiboEditBlendInput,
  FiboEditColorizeInput,
  FalAiFlux2KleinLoRaInput,
  FalAiFlux2Klein4bBaseEditLoraFalAiFlux2KleinLoRaInput,
  Flux2Klein4bBaseEditInput,
  Flux2Klein9bBaseEditInput,
  Flux2Klein4bEditInput,
  Flux2Klein9bEditInput,
  GlmImageImageToImageInput,
  QwenImageEdit2511MultipleAnglesInput,
  QwenImageEdit2511LoraInput,
  AiHomeStyleInput,
  AiHomeEditInput,
  FalAiQwenImageLayeredLoraLoRaInput,
  V26ImageToImageInput,
  QwenImageEdit2511Input,
  QwenImageLayeredInput,
  FalAiZImageTurboInpaintLoraLoRaInput,
  ZImageTurboInpaintInput,
  Flux2FlashEditInput,
  GptImage15EditInput,
  Flux2TurboEditInput,
  Flux2MaxEditInput,
  AiBabyAndAgingGeneratorMultiInput,
  AiBabyAndAgingGeneratorSingleInput,
  QwenImageEdit2509LoraGalleryShirtDesignInput,
  QwenImageEdit2509LoraGalleryRemoveLightingInput,
  QwenImageEdit2509LoraGalleryRemoveElementInput,
  QwenImageEdit2509LoraGalleryLightingRestorationInput,
  QwenImageEdit2509LoraGalleryIntegrateProductInput,
  QwenImageEdit2509LoraGalleryGroupPhotoInput,
  QwenImageEdit2509LoraGalleryFaceToFullPortraitInput,
  QwenImageEdit2509LoraGalleryAddBackgroundInput,
  QwenImageEdit2509LoraGalleryNextSceneInput,
  QwenImageEdit2509LoraGalleryMultipleAnglesInput,
  QwenImageEdit2509LoraInput,
  QwenImageEdit2509Input,
  QwenImageEditPlusLoraGalleryLightingRestorationInput,
  Moondream3PreviewSegmentInput,
  StepxEdit2Input,
  FalAiZImageTurboControlnetLoraLoRaInput,
  ZImageTurboControlnetInput,
  FalAiZImageTurboImageToImageLoraLoRaInput,
  ZImageTurboImageToImageInput,
  LongcatImageEditInput,
  BytedanceSeedreamV45EditInput,
  ViduQ2ReferenceToImageInput,
  OmniImageElementInput,
  Flux2LoraGalleryVirtualTryonInput,
  Flux2LoraGalleryMultipleAnglesInput,
  Flux2LoraGalleryFaceToFullPortraitInput,
  Flux2LoraGalleryApartmentStagingInput,
  Flux2LoraGalleryAddBackgroundInput,
  CrystalUpscalerInput,
  Flux2FlexEditInput,
  ChronoEditLoraInput,
  ChronoEditLoraGalleryPaintbrushInput,
  ChronoEditLoraGalleryUpscalerInput,
  Sam3ImageRleInput,
  Sam3ImageInput,
  Gemini3ProImagePreviewEditInput,
  NanoBananaProEditInput,
  QwenImageEditPlusLoraGalleryMultipleAnglesInput,
  QwenImageEditPlusLoraGalleryShirtDesignInput,
  QwenImageEditPlusLoraGalleryRemoveLightingInput,
  QwenImageEditPlusLoraGalleryRemoveElementInput,
  QwenImageEditPlusLoraGalleryNextSceneInput,
  QwenImageEditPlusLoraGalleryIntegrateProductInput,
  QwenImageEditPlusLoraGalleryGroupPhotoInput,
  QwenImageEditPlusLoraGalleryFaceToFullPortraitInput,
  QwenImageEditPlusLoraGalleryAddBackgroundInput,
  ReveFastRemixInput,
  ReveFastEditInput,
  ImageAppsV2OutpaintInput,
  FluxVisionUpscalerInput,
  Emu35ImageEditImageInput,
  ChronoEditInput,
  GptImage1MiniEditInput,
  ReveRemixInput,
  ReveEditInput,
  Image2PixelInput,
  Dreamomni2EditInput,
  QwenImageEditPlusLoraInput,
  LucidfluxInput,
  QwenImageEditImageToImageInput,
  Wan25PreviewImageToImageInput,
  QwenImageEditPlusInput,
  SeedvrUpscaleImageInput,
  ImageAppsV2ProductHoldingInput,
  ImageAppsV2ProductPhotographyInput,
  ImageAppsV2VirtualTryOnInput,
  ImageAppsV2TextureTransformInput,
  ImageAppsV2RelightingInput,
  ImageAppsV2StyleTransferInput,
  ImageAppsV2PhotoRestorationInput,
  ImageAppsV2PortraitEnhanceInput,
  ImageAppsV2PhotographyEffectsInput,
  ImageAppsV2PerspectiveInput,
  ImageAppsV2ObjectRemovalInput,
  ImageAppsV2HeadshotPhotoInput,
  ImageAppsV2HairChangeInput,
  ImageAppsV2ExpressionChangeInput,
  ImageAppsV2CityTeleportInput,
  ImageAppsV2AgeModifyInput,
  ImageAppsV2MakeupApplicationInput,
  QwenImageEditInpaintInput,
  FluxSrpoImageToImageInput,
  Flux1SrpoImageToImageInput,
  QwenImageEditLoraInput,
  ViduReferenceToImageInput,
  BytedanceSeedreamV4EditInput,
  WanV22A14bImageToImageInput,
  UsoInput,
  Gemini25FlashImageEditInput,
  QwenImageImageToImageInput,
  Reimagine32Input,
  NanoBananaEditInput,
  Nextstep1Input,
  QwenImageEditInput,
  IdeogramCharacterEditInput,
  IdeogramCharacterInput,
  IdeogramCharacterRemixInput,
  FluxKreaLoraInpaintingInput,
  FluxKreaLoraImageToImageInput,
  FluxKreaImageToImageInput,
  FluxKreaReduxInput,
  Flux1KreaImageToImageInput,
  Flux1KreaReduxInput,
  FluxKontextLoraInpaintInput,
  HunyuanWorldInput,
  ImageEditingRetouchInput,
  HidreamE11Input,
  RifeInput,
  FilmInput,
  CalligrapherInput,
  BriaReimagineInput,
  ImageEditingRealismInput,
  PostProcessingVignetteInput,
  PostProcessingSolarizeInput,
  PostProcessingSharpenInput,
  PostProcessingParabolizeInput,
  PostProcessingGrainInput,
  PostProcessingDodgeBurnInput,
  PostProcessingDissolveInput,
  PostProcessingDesaturateInput,
  PostProcessingColorTintInput,
  PostProcessingColorCorrectionInput,
  PostProcessingChromaticAberrationInput,
  PostProcessingBlurInput,
  ImageEditingYoutubeThumbnailsInput,
  TopazUpscaleImageInput,
  ImageEditingBroccoliHaircutInput,
  ImageEditingWojakStyleInput,
  ImageEditingPlushieStyleInput,
  FluxKontextLoraInput,
  FashnTryonV16Input,
  ChainOfZoomInput,
  PasdInput,
  ObjectRemovalBboxInput,
  ObjectRemovalMaskInput,
  ObjectRemovalInput,
  RecraftVectorizeInput,
  FfmpegApiExtractFrameInput,
  LumaPhotonFlashModifyInput,
  LumaPhotonModifyInput,
  ImageEditingReframeInput,
  ImageEditingBabyVersionInput,
  LumaPhotonFlashReframeInput,
  LumaPhotonReframeInput,
  Flux1SchnellReduxInput,
  Flux1DevReduxInput,
  Flux1DevImageToImageInput,
  ImageEditingTextRemovalInput,
  ImageEditingPhotoRestorationInput,
  ImageEditingWeatherEffectInput,
  ImageEditingTimeOfDayInput,
  ImageEditingStyleTransferInput,
  ImageEditingSceneCompositionInput,
  ImageEditingProfessionalPhotoInput,
  ImageEditingObjectRemovalInput,
  ImageEditingHairChangeInput,
  ImageEditingFaceEnhancementInput,
  ImageEditingExpressionChangeInput,
  ImageEditingColorCorrectionInput,
  ImageEditingCartoonifyInput,
  ImageEditingBackgroundChangeInput,
  ImageEditingAgeProgressionInput,
  FluxProKontextMaxMultiInput,
  FluxProKontextMultiInput,
  FluxProKontextMaxInput,
  FluxKontextDevInput,
  FluxProKontextInput,
  BagelEditInput,
  RembgEnhanceInput,
  RecraftUpscaleCreativeInput,
  RecraftUpscaleCrispInput,
  RecraftV3ImageToImageInput,
  MinimaxImage01SubjectReferenceInput,
  HidreamI1FullImageToImageInput,
  IdeogramV3ReframeInput,
  IdeogramV3ReplaceBackgroundInput,
  IdeogramV3RemixInput,
  IdeogramV3EditInput,
  Step1xEditInput,
  Image2SvgInput,
  UnoInput,
  GptImage1EditImageInput,
  JuggernautFluxLoraInpaintingInput,
  FashnTryonV15Input,
  PlushifyInput,
  InstantCharacterInput,
  CartoonifyInput,
  FinegrainEraserMaskInput,
  FinegrainEraserBboxInput,
  FinegrainEraserInput,
  StarVectorInput,
  GhiblifyInput,
  TheraInput,
  MixDehazeNetInput,
  GeminiFlashEditInput,
  GeminiFlashEditMultiInput,
  InvisibleWatermarkInput,
  JuggernautFluxProImageToImageInput,
  JuggernautFluxBaseImageToImageInput,
  DocresDewarpInput,
  DocresInput,
  Swin2SrInput,
  IdeogramV2aRemixInput,
  IdeogramV2aTurboRemixInput,
  EvfSamInput,
  DdcolorInput,
  Sam2AutoSegmentInput,
  DrctSuperResolutionInput,
  NafnetDenoiseInput,
  NafnetDeblurInput,
  PostProcessingInput,
  FloweditInput,
  FluxControlLoraCannyImageToImageInput,
  FluxControlLoraDepthImageToImageInput,
  BenV2ImageInput,
  IdeogramUpscaleInput,
  CodeformerInput,
  KlingV15KolorsVirtualTryOnInput,
  FluxLoraCannyInput,
  FluxProV1FillFinetunedInput,
  MoondreamNextDetectionInput,
  BriaExpandInput,
  BriaGenfillInput,
  BriaEraserInput,
  BriaBackgroundReplaceInput,
  ImageFillInput,
  BriaProductShotInput,
  BriaBackgroundRemoveInput,
  CatVtonInput,
  LeffaPoseTransferInput,
  LeffaVirtualTryonInput,
  IdeogramV2EditInput,
  IdeogramV2TurboRemixInput,
  IdeogramV2TurboEditInput,
  IdeogramV2RemixInput,
  FluxSchnellReduxInput,
  FluxProV11ReduxInput,
  FluxDevReduxInput,
  FluxLoraDepthInput,
  FluxProV11UltraReduxInput,
  FluxProV1FillInput,
  KolorsImageToImageInput,
  IclightV2Input,
  FluxDifferentialDiffusionInput,
  FluxPulidInput,
  BirefnetV2Input,
  LivePortraitImageInput,
  ControlNetUnionInput,
  ImagePreprocessorsHedInput,
  ImagePreprocessorsScribbleInput,
  ImagePreprocessorsDepthAnythingV2Input,
  ImagePreprocessorsZoeInput,
  ImagePreprocessorsTeedInput,
  ImagePreprocessorsMlsdInput,
  ImagePreprocessorsLineartInput,
  ImagePreprocessorsSamInput,
  ImagePreprocessorsMidasInput,
  ImagePreprocessorsPidiInput,
  Sam2ImageInput,
  FalAiFluxGeneralImageToImageControlNetUnionInput,
  FalAiFluxGeneralInpaintingControlNetUnionInput,
  FalAiFluxGeneralDifferentialDiffusionControlNetUnionInput,
  FluxLoraImageToImageInput,
  SdxlControlnetUnionInpaintingInput,
  SdxlControlnetUnionImageToImageInput,
  Era3dInput,
  Florence2LargeReferringExpressionSegmentationInput,
  Florence2LargeDenseRegionCaptionInput,
  Florence2LargeObjectDetectionInput,
  Florence2LargeOpenVocabularyDetectionInput,
  Florence2LargeCaptionToPhraseGroundingInput,
  Florence2LargeOcrWithRegionInput,
  Florence2LargeRegionProposalInput,
  Florence2LargeRegionToSegmentationInput,
  StableDiffusionV3MediumImageToImageInput,
  DwposeInput,
  Sd15DepthControlnetInput,
  CcsrInput,
  OmniZeroInput,
  IpAdapterFaceIdInput,
  TimestepsInput,
  FalAiLoraImageToImageTimestepsInput,
  FastSdxlImageToImageInput,
  FastSdxlInpaintingInput,
  FaceToStickerInput,
  PhotomakerInput,
  CreativeUpscalerInput,
  BirefnetInput,
  FastLightningSdxlImageToImageInput,
  PlaygroundV25InpaintingInput,
  PlaygroundV25ImageToImageInput,
  FastLightningSdxlInpaintingInput,
  FastLcmDiffusionInpaintingInput,
  FastLcmDiffusionImageToImageInput,
  ImageutilsDepthInput,
  RetoucherInput,
  ImageutilsMarigoldDepthInput,
  PulidInput,
  FastSdxlControlnetCannyInpaintingInput,
  FastSdxlControlnetCannyImageToImageInput,
  LcmSd15I2iInput,
  InpaintInput,
  EsrganInput,
  ImageutilsRembgInput,
  Flux2LoraEditOutput,
  Flux2EditOutput,
  Flux2ProEditOutput,
  FluxDevImageToImageOutput,
  AuraSrOutput,
  ClarityUpscalerOutput,
  AiFaceSwapFaceswapimageOutput,
  FiboEditReplaceObjectByTextOutput,
  FiboEditSketchToColoredImageOutput,
  FiboEditRestoreOutput,
  FiboEditReseasonOutput,
  FiboEditRelightOutput,
  FiboEditRestyleOutput,
  FiboEditRewriteTextOutput,
  FiboEditEraseByTextOutput,
  FiboEditEditOutput,
  FiboEditAddObjectByTextOutput,
  FiboEditBlendOutput,
  FiboEditColorizeOutput,
  Flux2Klein9bBaseEditLoraOutput,
  Flux2Klein4bBaseEditLoraOutput,
  Flux2Klein4bBaseEditOutput,
  Flux2Klein9bBaseEditOutput,
  Flux2Klein4bEditOutput,
  Flux2Klein9bEditOutput,
  GlmImageImageToImageOutput,
  QwenImageEdit2511MultipleAnglesOutput,
  QwenImageEdit2511LoraOutput,
  AiHomeStyleOutput,
  AiHomeEditOutput,
  QwenImageLayeredLoraOutput,
  V26ImageToImageOutput,
  QwenImageEdit2511Output,
  QwenImageLayeredOutput,
  ZImageTurboInpaintLoraOutput,
  ZImageTurboInpaintOutput,
  Flux2FlashEditOutput,
  GptImage15EditOutput,
  Flux2TurboEditOutput,
  Flux2MaxEditOutput,
  AiBabyAndAgingGeneratorMultiOutput,
  AiBabyAndAgingGeneratorSingleOutput,
  QwenImageEdit2509LoraGalleryShirtDesignOutput,
  QwenImageEdit2509LoraGalleryRemoveLightingOutput,
  QwenImageEdit2509LoraGalleryRemoveElementOutput,
  QwenImageEdit2509LoraGalleryLightingRestorationOutput,
  QwenImageEdit2509LoraGalleryIntegrateProductOutput,
  QwenImageEdit2509LoraGalleryGroupPhotoOutput,
  QwenImageEdit2509LoraGalleryFaceToFullPortraitOutput,
  QwenImageEdit2509LoraGalleryAddBackgroundOutput,
  QwenImageEdit2509LoraGalleryNextSceneOutput,
  QwenImageEdit2509LoraGalleryMultipleAnglesOutput,
  QwenImageEdit2509LoraOutput,
  QwenImageEdit2509Output,
  QwenImageEditPlusLoraGalleryLightingRestorationOutput,
  Moondream3PreviewSegmentOutput,
  StepxEdit2Output,
  ZImageTurboControlnetLoraOutput,
  ZImageTurboControlnetOutput,
  ZImageTurboImageToImageLoraOutput,
  ZImageTurboImageToImageOutput,
  LongcatImageEditOutput,
  BytedanceSeedreamV45EditOutput,
  ViduQ2ReferenceToImageOutput,
  KlingImageO1Output,
  Flux2LoraGalleryVirtualTryonOutput,
  Flux2LoraGalleryMultipleAnglesOutput,
  Flux2LoraGalleryFaceToFullPortraitOutput,
  Flux2LoraGalleryApartmentStagingOutput,
  Flux2LoraGalleryAddBackgroundOutput,
  CrystalUpscalerOutput,
  Flux2FlexEditOutput,
  ChronoEditLoraOutput,
  ChronoEditLoraGalleryPaintbrushOutput,
  ChronoEditLoraGalleryUpscalerOutput,
  Sam3ImageRleOutput,
  Sam3ImageOutput,
  Gemini3ProImagePreviewEditOutput,
  NanoBananaProEditOutput,
  QwenImageEditPlusLoraGalleryMultipleAnglesOutput,
  QwenImageEditPlusLoraGalleryShirtDesignOutput,
  QwenImageEditPlusLoraGalleryRemoveLightingOutput,
  QwenImageEditPlusLoraGalleryRemoveElementOutput,
  QwenImageEditPlusLoraGalleryNextSceneOutput,
  QwenImageEditPlusLoraGalleryIntegrateProductOutput,
  QwenImageEditPlusLoraGalleryGroupPhotoOutput,
  QwenImageEditPlusLoraGalleryFaceToFullPortraitOutput,
  QwenImageEditPlusLoraGalleryAddBackgroundOutput,
  ReveFastRemixOutput,
  ReveFastEditOutput,
  ImageAppsV2OutpaintOutput,
  FluxVisionUpscalerOutput,
  Emu35ImageEditImageOutput,
  ChronoEditOutput,
  GptImage1MiniEditOutput,
  ReveRemixOutput,
  ReveEditOutput,
  Image2PixelOutput,
  Dreamomni2EditOutput,
  QwenImageEditPlusLoraOutput,
  LucidfluxOutput,
  QwenImageEditImageToImageOutput,
  Wan25PreviewImageToImageOutput,
  QwenImageEditPlusOutput,
  SeedvrUpscaleImageOutput,
  ImageAppsV2ProductHoldingOutput,
  ImageAppsV2ProductPhotographyOutput,
  ImageAppsV2VirtualTryOnOutput,
  ImageAppsV2TextureTransformOutput,
  ImageAppsV2RelightingOutput,
  ImageAppsV2StyleTransferOutput,
  ImageAppsV2PhotoRestorationOutput,
  ImageAppsV2PortraitEnhanceOutput,
  ImageAppsV2PhotographyEffectsOutput,
  ImageAppsV2PerspectiveOutput,
  ImageAppsV2ObjectRemovalOutput,
  ImageAppsV2HeadshotPhotoOutput,
  ImageAppsV2HairChangeOutput,
  ImageAppsV2ExpressionChangeOutput,
  ImageAppsV2CityTeleportOutput,
  ImageAppsV2AgeModifyOutput,
  ImageAppsV2MakeupApplicationOutput,
  QwenImageEditInpaintOutput,
  FluxSrpoImageToImageOutput,
  Flux1SrpoImageToImageOutput,
  QwenImageEditLoraOutput,
  ViduReferenceToImageOutput,
  BytedanceSeedreamV4EditOutput,
  WanV22A14bImageToImageOutput,
  UsoOutput,
  Gemini25FlashImageEditOutput,
  QwenImageImageToImageOutput,
  Reimagine32Output,
  NanoBananaEditOutput,
  Nextstep1Output,
  QwenImageEditOutput,
  IdeogramCharacterEditOutput,
  IdeogramCharacterOutput,
  IdeogramCharacterRemixOutput,
  FluxKreaLoraInpaintingOutput,
  FluxKreaLoraImageToImageOutput,
  FluxKreaImageToImageOutput,
  FluxKreaReduxOutput,
  Flux1KreaImageToImageOutput,
  Flux1KreaReduxOutput,
  FluxKontextLoraInpaintOutput,
  HunyuanWorldOutput,
  ImageEditingRetouchOutput,
  HidreamE11Output,
  RifeOutput,
  FilmOutput,
  CalligrapherOutput,
  BriaReimagineOutput,
  ImageEditingRealismOutput,
  PostProcessingVignetteOutput,
  PostProcessingSolarizeOutput,
  PostProcessingSharpenOutput,
  PostProcessingParabolizeOutput,
  PostProcessingGrainOutput,
  PostProcessingDodgeBurnOutput,
  PostProcessingDissolveOutput,
  PostProcessingDesaturateOutput,
  PostProcessingColorTintOutput,
  PostProcessingColorCorrectionOutput,
  PostProcessingChromaticAberrationOutput,
  PostProcessingBlurOutput,
  ImageEditingYoutubeThumbnailsOutput,
  TopazUpscaleImageOutput,
  ImageEditingBroccoliHaircutOutput,
  ImageEditingWojakStyleOutput,
  ImageEditingPlushieStyleOutput,
  FluxKontextLoraOutput,
  FashnTryonV16Output,
  ChainOfZoomOutput,
  PasdOutput,
  ObjectRemovalBboxOutput,
  ObjectRemovalMaskOutput,
  ObjectRemovalOutput,
  RecraftVectorizeOutput,
  FfmpegApiExtractFrameOutput,
  LumaPhotonFlashModifyOutput,
  LumaPhotonModifyOutput,
  ImageEditingReframeOutput,
  ImageEditingBabyVersionOutput,
  LumaPhotonFlashReframeOutput,
  LumaPhotonReframeOutput,
  Flux1SchnellReduxOutput,
  Flux1DevReduxOutput,
  Flux1DevImageToImageOutput,
  ImageEditingTextRemovalOutput,
  ImageEditingPhotoRestorationOutput,
  ImageEditingWeatherEffectOutput,
  ImageEditingTimeOfDayOutput,
  ImageEditingStyleTransferOutput,
  ImageEditingSceneCompositionOutput,
  ImageEditingProfessionalPhotoOutput,
  ImageEditingObjectRemovalOutput,
  ImageEditingHairChangeOutput,
  ImageEditingFaceEnhancementOutput,
  ImageEditingExpressionChangeOutput,
  ImageEditingColorCorrectionOutput,
  ImageEditingCartoonifyOutput,
  ImageEditingBackgroundChangeOutput,
  ImageEditingAgeProgressionOutput,
  FluxProKontextMaxMultiOutput,
  FluxProKontextMultiOutput,
  FluxProKontextMaxOutput,
  FluxKontextDevOutput,
  FluxProKontextOutput,
  BagelEditOutput,
  RembgEnhanceOutput,
  RecraftUpscaleCreativeOutput,
  RecraftUpscaleCrispOutput,
  RecraftV3ImageToImageOutput,
  MinimaxImage01SubjectReferenceOutput,
  HidreamI1FullImageToImageOutput,
  IdeogramV3ReframeOutput,
  IdeogramV3ReplaceBackgroundOutput,
  IdeogramV3RemixOutput,
  IdeogramV3EditOutput,
  Step1xEditOutput,
  Image2SvgOutput,
  UnoOutput,
  GptImage1EditImageOutput,
  JuggernautFluxLoraInpaintingOutput,
  FashnTryonV15Output,
  PlushifyOutput,
  InstantCharacterOutput,
  CartoonifyOutput,
  FinegrainEraserMaskOutput,
  FinegrainEraserBboxOutput,
  FinegrainEraserOutput,
  StarVectorOutput,
  GhiblifyOutput,
  TheraOutput,
  MixDehazeNetOutput,
  GeminiFlashEditOutput,
  GeminiFlashEditMultiOutput,
  InvisibleWatermarkOutput,
  JuggernautFluxProImageToImageOutput,
  JuggernautFluxBaseImageToImageOutput,
  DocresDewarpOutput,
  DocresOutput,
  Swin2SrOutput,
  IdeogramV2aRemixOutput,
  IdeogramV2aTurboRemixOutput,
  EvfSamOutput,
  DdcolorOutput,
  Sam2AutoSegmentOutput,
  DrctSuperResolutionOutput,
  NafnetDenoiseOutput,
  NafnetDeblurOutput,
  PostProcessingOutput,
  FloweditOutput,
  FluxControlLoraCannyImageToImageOutput,
  FluxControlLoraDepthImageToImageOutput,
  BenV2ImageOutput,
  IdeogramUpscaleOutput,
  CodeformerOutput,
  KlingV15KolorsVirtualTryOnOutput,
  FluxLoraCannyOutput,
  FluxProV1FillFinetunedOutput,
  MoondreamNextDetectionOutput,
  BriaExpandOutput,
  BriaGenfillOutput,
  BriaEraserOutput,
  BriaBackgroundReplaceOutput,
  FluxLoraFillOutput,
  BriaProductShotOutput,
  BriaBackgroundRemoveOutput,
  CatVtonOutput,
  LeffaPoseTransferOutput,
  LeffaVirtualTryonOutput,
  IdeogramV2EditOutput,
  IdeogramV2TurboRemixOutput,
  IdeogramV2TurboEditOutput,
  IdeogramV2RemixOutput,
  FluxSchnellReduxOutput,
  FluxProV11ReduxOutput,
  FluxDevReduxOutput,
  FluxLoraDepthOutput,
  FluxProV11UltraReduxOutput,
  FluxProV1FillOutput,
  KolorsImageToImageOutput,
  IclightV2Output,
  FluxDifferentialDiffusionOutput,
  FluxPulidOutput,
  BirefnetV2Output,
  LivePortraitImageOutput,
  FluxGeneralRfInversionOutput,
  ImagePreprocessorsHedOutput,
  ImagePreprocessorsScribbleOutput,
  ImagePreprocessorsDepthAnythingV2Output,
  ImagePreprocessorsZoeOutput,
  ImagePreprocessorsTeedOutput,
  ImagePreprocessorsMlsdOutput,
  ImagePreprocessorsLineartOutput,
  ImagePreprocessorsSamOutput,
  ImagePreprocessorsMidasOutput,
  ImagePreprocessorsPidiOutput,
  Sam2ImageOutput,
  FluxGeneralImageToImageOutput,
  FluxGeneralInpaintingOutput,
  FluxGeneralDifferentialDiffusionOutput,
  FluxLoraImageToImageOutput,
  SdxlControlnetUnionInpaintingOutput,
  SdxlControlnetUnionImageToImageOutput,
  Era3dOutput,
  PolygonOutput,
  Florence2LargeDenseRegionCaptionOutput,
  Florence2LargeObjectDetectionOutput,
  Florence2LargeOpenVocabularyDetectionOutput,
  Florence2LargeCaptionToPhraseGroundingOutput,
  Florence2LargeOcrWithRegionOutput,
  Florence2LargeRegionProposalOutput,
  FalAiFlorence2LargeRegionToSegmentationPolygonOutput,
  StableDiffusionV3MediumImageToImageOutput,
  DwposeOutput,
  Sd15DepthControlnetOutput,
  CcsrOutput,
  OmniZeroOutput,
  IpAdapterFaceIdOutput,
  LoraInpaintOutput,
  LoraImageToImageOutput,
  FastSdxlImageToImageOutput,
  FastSdxlInpaintingOutput,
  FaceToStickerOutput,
  PhotomakerOutput,
  CreativeUpscalerOutput,
  BirefnetOutput,
  FastLightningSdxlImageToImageOutput,
  PlaygroundV25InpaintingOutput,
  PlaygroundV25ImageToImageOutput,
  FastLightningSdxlInpaintingOutput,
  FastLcmDiffusionInpaintingOutput,
  FastLcmDiffusionImageToImageOutput,
  ImageutilsDepthOutput,
  RetoucherOutput,
  ImageutilsMarigoldDepthOutput,
  PulidOutput,
  FastSdxlControlnetCannyInpaintingOutput,
  FastSdxlControlnetCannyImageToImageOutput,
  LcmSd15I2iOutput,
  InpaintOutput,
  EsrganOutput,
  ImageutilsRembgOutput,
} from './types.gen'

export type ImageToImageEndpointMap = {
  'fal-ai/flux-2/lora/edit': {
    input: LoRaInput
    output: Flux2LoraEditOutput
  }
  'fal-ai/flux-2/edit': {
    input: Flux2EditInput
    output: Flux2EditOutput
  }
  'fal-ai/flux-2-pro/edit': {
    input: Flux2ProEditInput
    output: Flux2ProEditOutput
  }
  'fal-ai/flux/dev/image-to-image': {
    input: FluxDevImageToImageInput
    output: FluxDevImageToImageOutput
  }
  'fal-ai/aura-sr': {
    input: AuraSrInput
    output: AuraSrOutput
  }
  'fal-ai/clarity-upscaler': {
    input: ClarityUpscalerInput
    output: ClarityUpscalerOutput
  }
  'half-moon-ai/ai-face-swap/faceswapimage': {
    input: AiFaceSwapFaceswapimageInput
    output: AiFaceSwapFaceswapimageOutput
  }
  'bria/fibo-edit/replace_object_by_text': {
    input: FiboEditReplaceObjectByTextInput
    output: FiboEditReplaceObjectByTextOutput
  }
  'bria/fibo-edit/sketch_to_colored_image': {
    input: FiboEditSketchToColoredImageInput
    output: FiboEditSketchToColoredImageOutput
  }
  'bria/fibo-edit/restore': {
    input: FiboEditRestoreInput
    output: FiboEditRestoreOutput
  }
  'bria/fibo-edit/reseason': {
    input: FiboEditReseasonInput
    output: FiboEditReseasonOutput
  }
  'bria/fibo-edit/relight': {
    input: FiboEditRelightInput
    output: FiboEditRelightOutput
  }
  'bria/fibo-edit/restyle': {
    input: FiboEditRestyleInput
    output: FiboEditRestyleOutput
  }
  'bria/fibo-edit/rewrite_text': {
    input: FiboEditRewriteTextInput
    output: FiboEditRewriteTextOutput
  }
  'bria/fibo-edit/erase_by_text': {
    input: FiboEditEraseByTextInput
    output: FiboEditEraseByTextOutput
  }
  'bria/fibo-edit/edit': {
    input: FiboEditEditInput
    output: FiboEditEditOutput
  }
  'bria/fibo-edit/add_object_by_text': {
    input: FiboEditAddObjectByTextInput
    output: FiboEditAddObjectByTextOutput
  }
  'bria/fibo-edit/blend': {
    input: FiboEditBlendInput
    output: FiboEditBlendOutput
  }
  'bria/fibo-edit/colorize': {
    input: FiboEditColorizeInput
    output: FiboEditColorizeOutput
  }
  'fal-ai/flux-2/klein/9b/base/edit/lora': {
    input: FalAiFlux2KleinLoRaInput
    output: Flux2Klein9bBaseEditLoraOutput
  }
  'fal-ai/flux-2/klein/4b/base/edit/lora': {
    input: FalAiFlux2Klein4bBaseEditLoraFalAiFlux2KleinLoRaInput
    output: Flux2Klein4bBaseEditLoraOutput
  }
  'fal-ai/flux-2/klein/4b/base/edit': {
    input: Flux2Klein4bBaseEditInput
    output: Flux2Klein4bBaseEditOutput
  }
  'fal-ai/flux-2/klein/9b/base/edit': {
    input: Flux2Klein9bBaseEditInput
    output: Flux2Klein9bBaseEditOutput
  }
  'fal-ai/flux-2/klein/4b/edit': {
    input: Flux2Klein4bEditInput
    output: Flux2Klein4bEditOutput
  }
  'fal-ai/flux-2/klein/9b/edit': {
    input: Flux2Klein9bEditInput
    output: Flux2Klein9bEditOutput
  }
  'fal-ai/glm-image/image-to-image': {
    input: GlmImageImageToImageInput
    output: GlmImageImageToImageOutput
  }
  'fal-ai/qwen-image-edit-2511-multiple-angles': {
    input: QwenImageEdit2511MultipleAnglesInput
    output: QwenImageEdit2511MultipleAnglesOutput
  }
  'fal-ai/qwen-image-edit-2511/lora': {
    input: QwenImageEdit2511LoraInput
    output: QwenImageEdit2511LoraOutput
  }
  'half-moon-ai/ai-home/style': {
    input: AiHomeStyleInput
    output: AiHomeStyleOutput
  }
  'half-moon-ai/ai-home/edit': {
    input: AiHomeEditInput
    output: AiHomeEditOutput
  }
  'fal-ai/qwen-image-layered/lora': {
    input: FalAiQwenImageLayeredLoraLoRaInput
    output: QwenImageLayeredLoraOutput
  }
  'wan/v2.6/image-to-image': {
    input: V26ImageToImageInput
    output: V26ImageToImageOutput
  }
  'fal-ai/qwen-image-edit-2511': {
    input: QwenImageEdit2511Input
    output: QwenImageEdit2511Output
  }
  'fal-ai/qwen-image-layered': {
    input: QwenImageLayeredInput
    output: QwenImageLayeredOutput
  }
  'fal-ai/z-image/turbo/inpaint/lora': {
    input: FalAiZImageTurboInpaintLoraLoRaInput
    output: ZImageTurboInpaintLoraOutput
  }
  'fal-ai/z-image/turbo/inpaint': {
    input: ZImageTurboInpaintInput
    output: ZImageTurboInpaintOutput
  }
  'fal-ai/flux-2/flash/edit': {
    input: Flux2FlashEditInput
    output: Flux2FlashEditOutput
  }
  'fal-ai/gpt-image-1.5/edit': {
    input: GptImage15EditInput
    output: GptImage15EditOutput
  }
  'fal-ai/flux-2/turbo/edit': {
    input: Flux2TurboEditInput
    output: Flux2TurboEditOutput
  }
  'fal-ai/flux-2-max/edit': {
    input: Flux2MaxEditInput
    output: Flux2MaxEditOutput
  }
  'half-moon-ai/ai-baby-and-aging-generator/multi': {
    input: AiBabyAndAgingGeneratorMultiInput
    output: AiBabyAndAgingGeneratorMultiOutput
  }
  'half-moon-ai/ai-baby-and-aging-generator/single': {
    input: AiBabyAndAgingGeneratorSingleInput
    output: AiBabyAndAgingGeneratorSingleOutput
  }
  'fal-ai/qwen-image-edit-2509-lora-gallery/shirt-design': {
    input: QwenImageEdit2509LoraGalleryShirtDesignInput
    output: QwenImageEdit2509LoraGalleryShirtDesignOutput
  }
  'fal-ai/qwen-image-edit-2509-lora-gallery/remove-lighting': {
    input: QwenImageEdit2509LoraGalleryRemoveLightingInput
    output: QwenImageEdit2509LoraGalleryRemoveLightingOutput
  }
  'fal-ai/qwen-image-edit-2509-lora-gallery/remove-element': {
    input: QwenImageEdit2509LoraGalleryRemoveElementInput
    output: QwenImageEdit2509LoraGalleryRemoveElementOutput
  }
  'fal-ai/qwen-image-edit-2509-lora-gallery/lighting-restoration': {
    input: QwenImageEdit2509LoraGalleryLightingRestorationInput
    output: QwenImageEdit2509LoraGalleryLightingRestorationOutput
  }
  'fal-ai/qwen-image-edit-2509-lora-gallery/integrate-product': {
    input: QwenImageEdit2509LoraGalleryIntegrateProductInput
    output: QwenImageEdit2509LoraGalleryIntegrateProductOutput
  }
  'fal-ai/qwen-image-edit-2509-lora-gallery/group-photo': {
    input: QwenImageEdit2509LoraGalleryGroupPhotoInput
    output: QwenImageEdit2509LoraGalleryGroupPhotoOutput
  }
  'fal-ai/qwen-image-edit-2509-lora-gallery/face-to-full-portrait': {
    input: QwenImageEdit2509LoraGalleryFaceToFullPortraitInput
    output: QwenImageEdit2509LoraGalleryFaceToFullPortraitOutput
  }
  'fal-ai/qwen-image-edit-2509-lora-gallery/add-background': {
    input: QwenImageEdit2509LoraGalleryAddBackgroundInput
    output: QwenImageEdit2509LoraGalleryAddBackgroundOutput
  }
  'fal-ai/qwen-image-edit-2509-lora-gallery/next-scene': {
    input: QwenImageEdit2509LoraGalleryNextSceneInput
    output: QwenImageEdit2509LoraGalleryNextSceneOutput
  }
  'fal-ai/qwen-image-edit-2509-lora-gallery/multiple-angles': {
    input: QwenImageEdit2509LoraGalleryMultipleAnglesInput
    output: QwenImageEdit2509LoraGalleryMultipleAnglesOutput
  }
  'fal-ai/qwen-image-edit-2509-lora': {
    input: QwenImageEdit2509LoraInput
    output: QwenImageEdit2509LoraOutput
  }
  'fal-ai/qwen-image-edit-2509': {
    input: QwenImageEdit2509Input
    output: QwenImageEdit2509Output
  }
  'fal-ai/qwen-image-edit-plus-lora-gallery/lighting-restoration': {
    input: QwenImageEditPlusLoraGalleryLightingRestorationInput
    output: QwenImageEditPlusLoraGalleryLightingRestorationOutput
  }
  'fal-ai/moondream3-preview/segment': {
    input: Moondream3PreviewSegmentInput
    output: Moondream3PreviewSegmentOutput
  }
  'fal-ai/stepx-edit2': {
    input: StepxEdit2Input
    output: StepxEdit2Output
  }
  'fal-ai/z-image/turbo/controlnet/lora': {
    input: FalAiZImageTurboControlnetLoraLoRaInput
    output: ZImageTurboControlnetLoraOutput
  }
  'fal-ai/z-image/turbo/controlnet': {
    input: ZImageTurboControlnetInput
    output: ZImageTurboControlnetOutput
  }
  'fal-ai/z-image/turbo/image-to-image/lora': {
    input: FalAiZImageTurboImageToImageLoraLoRaInput
    output: ZImageTurboImageToImageLoraOutput
  }
  'fal-ai/z-image/turbo/image-to-image': {
    input: ZImageTurboImageToImageInput
    output: ZImageTurboImageToImageOutput
  }
  'fal-ai/longcat-image/edit': {
    input: LongcatImageEditInput
    output: LongcatImageEditOutput
  }
  'fal-ai/bytedance/seedream/v4.5/edit': {
    input: BytedanceSeedreamV45EditInput
    output: BytedanceSeedreamV45EditOutput
  }
  'fal-ai/vidu/q2/reference-to-image': {
    input: ViduQ2ReferenceToImageInput
    output: ViduQ2ReferenceToImageOutput
  }
  'fal-ai/kling-image/o1': {
    input: OmniImageElementInput
    output: KlingImageO1Output
  }
  'fal-ai/flux-2-lora-gallery/virtual-tryon': {
    input: Flux2LoraGalleryVirtualTryonInput
    output: Flux2LoraGalleryVirtualTryonOutput
  }
  'fal-ai/flux-2-lora-gallery/multiple-angles': {
    input: Flux2LoraGalleryMultipleAnglesInput
    output: Flux2LoraGalleryMultipleAnglesOutput
  }
  'fal-ai/flux-2-lora-gallery/face-to-full-portrait': {
    input: Flux2LoraGalleryFaceToFullPortraitInput
    output: Flux2LoraGalleryFaceToFullPortraitOutput
  }
  'fal-ai/flux-2-lora-gallery/apartment-staging': {
    input: Flux2LoraGalleryApartmentStagingInput
    output: Flux2LoraGalleryApartmentStagingOutput
  }
  'fal-ai/flux-2-lora-gallery/add-background': {
    input: Flux2LoraGalleryAddBackgroundInput
    output: Flux2LoraGalleryAddBackgroundOutput
  }
  'clarityai/crystal-upscaler': {
    input: CrystalUpscalerInput
    output: CrystalUpscalerOutput
  }
  'fal-ai/flux-2-flex/edit': {
    input: Flux2FlexEditInput
    output: Flux2FlexEditOutput
  }
  'fal-ai/chrono-edit-lora': {
    input: ChronoEditLoraInput
    output: ChronoEditLoraOutput
  }
  'fal-ai/chrono-edit-lora-gallery/paintbrush': {
    input: ChronoEditLoraGalleryPaintbrushInput
    output: ChronoEditLoraGalleryPaintbrushOutput
  }
  'fal-ai/chrono-edit-lora-gallery/upscaler': {
    input: ChronoEditLoraGalleryUpscalerInput
    output: ChronoEditLoraGalleryUpscalerOutput
  }
  'fal-ai/sam-3/image-rle': {
    input: Sam3ImageRleInput
    output: Sam3ImageRleOutput
  }
  'fal-ai/sam-3/image': {
    input: Sam3ImageInput
    output: Sam3ImageOutput
  }
  'fal-ai/gemini-3-pro-image-preview/edit': {
    input: Gemini3ProImagePreviewEditInput
    output: Gemini3ProImagePreviewEditOutput
  }
  'fal-ai/nano-banana-pro/edit': {
    input: NanoBananaProEditInput
    output: NanoBananaProEditOutput
  }
  'fal-ai/qwen-image-edit-plus-lora-gallery/multiple-angles': {
    input: QwenImageEditPlusLoraGalleryMultipleAnglesInput
    output: QwenImageEditPlusLoraGalleryMultipleAnglesOutput
  }
  'fal-ai/qwen-image-edit-plus-lora-gallery/shirt-design': {
    input: QwenImageEditPlusLoraGalleryShirtDesignInput
    output: QwenImageEditPlusLoraGalleryShirtDesignOutput
  }
  'fal-ai/qwen-image-edit-plus-lora-gallery/remove-lighting': {
    input: QwenImageEditPlusLoraGalleryRemoveLightingInput
    output: QwenImageEditPlusLoraGalleryRemoveLightingOutput
  }
  'fal-ai/qwen-image-edit-plus-lora-gallery/remove-element': {
    input: QwenImageEditPlusLoraGalleryRemoveElementInput
    output: QwenImageEditPlusLoraGalleryRemoveElementOutput
  }
  'fal-ai/qwen-image-edit-plus-lora-gallery/next-scene': {
    input: QwenImageEditPlusLoraGalleryNextSceneInput
    output: QwenImageEditPlusLoraGalleryNextSceneOutput
  }
  'fal-ai/qwen-image-edit-plus-lora-gallery/integrate-product': {
    input: QwenImageEditPlusLoraGalleryIntegrateProductInput
    output: QwenImageEditPlusLoraGalleryIntegrateProductOutput
  }
  'fal-ai/qwen-image-edit-plus-lora-gallery/group-photo': {
    input: QwenImageEditPlusLoraGalleryGroupPhotoInput
    output: QwenImageEditPlusLoraGalleryGroupPhotoOutput
  }
  'fal-ai/qwen-image-edit-plus-lora-gallery/face-to-full-portrait': {
    input: QwenImageEditPlusLoraGalleryFaceToFullPortraitInput
    output: QwenImageEditPlusLoraGalleryFaceToFullPortraitOutput
  }
  'fal-ai/qwen-image-edit-plus-lora-gallery/add-background': {
    input: QwenImageEditPlusLoraGalleryAddBackgroundInput
    output: QwenImageEditPlusLoraGalleryAddBackgroundOutput
  }
  'fal-ai/reve/fast/remix': {
    input: ReveFastRemixInput
    output: ReveFastRemixOutput
  }
  'fal-ai/reve/fast/edit': {
    input: ReveFastEditInput
    output: ReveFastEditOutput
  }
  'fal-ai/image-apps-v2/outpaint': {
    input: ImageAppsV2OutpaintInput
    output: ImageAppsV2OutpaintOutput
  }
  'fal-ai/flux-vision-upscaler': {
    input: FluxVisionUpscalerInput
    output: FluxVisionUpscalerOutput
  }
  'fal-ai/emu-3.5-image/edit-image': {
    input: Emu35ImageEditImageInput
    output: Emu35ImageEditImageOutput
  }
  'fal-ai/chrono-edit': {
    input: ChronoEditInput
    output: ChronoEditOutput
  }
  'fal-ai/gpt-image-1-mini/edit': {
    input: GptImage1MiniEditInput
    output: GptImage1MiniEditOutput
  }
  'fal-ai/reve/remix': {
    input: ReveRemixInput
    output: ReveRemixOutput
  }
  'fal-ai/reve/edit': {
    input: ReveEditInput
    output: ReveEditOutput
  }
  'fal-ai/image2pixel': {
    input: Image2PixelInput
    output: Image2PixelOutput
  }
  'fal-ai/dreamomni2/edit': {
    input: Dreamomni2EditInput
    output: Dreamomni2EditOutput
  }
  'fal-ai/qwen-image-edit-plus-lora': {
    input: QwenImageEditPlusLoraInput
    output: QwenImageEditPlusLoraOutput
  }
  'fal-ai/lucidflux': {
    input: LucidfluxInput
    output: LucidfluxOutput
  }
  'fal-ai/qwen-image-edit/image-to-image': {
    input: QwenImageEditImageToImageInput
    output: QwenImageEditImageToImageOutput
  }
  'fal-ai/wan-25-preview/image-to-image': {
    input: Wan25PreviewImageToImageInput
    output: Wan25PreviewImageToImageOutput
  }
  'fal-ai/qwen-image-edit-plus': {
    input: QwenImageEditPlusInput
    output: QwenImageEditPlusOutput
  }
  'fal-ai/seedvr/upscale/image': {
    input: SeedvrUpscaleImageInput
    output: SeedvrUpscaleImageOutput
  }
  'fal-ai/image-apps-v2/product-holding': {
    input: ImageAppsV2ProductHoldingInput
    output: ImageAppsV2ProductHoldingOutput
  }
  'fal-ai/image-apps-v2/product-photography': {
    input: ImageAppsV2ProductPhotographyInput
    output: ImageAppsV2ProductPhotographyOutput
  }
  'fal-ai/image-apps-v2/virtual-try-on': {
    input: ImageAppsV2VirtualTryOnInput
    output: ImageAppsV2VirtualTryOnOutput
  }
  'fal-ai/image-apps-v2/texture-transform': {
    input: ImageAppsV2TextureTransformInput
    output: ImageAppsV2TextureTransformOutput
  }
  'fal-ai/image-apps-v2/relighting': {
    input: ImageAppsV2RelightingInput
    output: ImageAppsV2RelightingOutput
  }
  'fal-ai/image-apps-v2/style-transfer': {
    input: ImageAppsV2StyleTransferInput
    output: ImageAppsV2StyleTransferOutput
  }
  'fal-ai/image-apps-v2/photo-restoration': {
    input: ImageAppsV2PhotoRestorationInput
    output: ImageAppsV2PhotoRestorationOutput
  }
  'fal-ai/image-apps-v2/portrait-enhance': {
    input: ImageAppsV2PortraitEnhanceInput
    output: ImageAppsV2PortraitEnhanceOutput
  }
  'fal-ai/image-apps-v2/photography-effects': {
    input: ImageAppsV2PhotographyEffectsInput
    output: ImageAppsV2PhotographyEffectsOutput
  }
  'fal-ai/image-apps-v2/perspective': {
    input: ImageAppsV2PerspectiveInput
    output: ImageAppsV2PerspectiveOutput
  }
  'fal-ai/image-apps-v2/object-removal': {
    input: ImageAppsV2ObjectRemovalInput
    output: ImageAppsV2ObjectRemovalOutput
  }
  'fal-ai/image-apps-v2/headshot-photo': {
    input: ImageAppsV2HeadshotPhotoInput
    output: ImageAppsV2HeadshotPhotoOutput
  }
  'fal-ai/image-apps-v2/hair-change': {
    input: ImageAppsV2HairChangeInput
    output: ImageAppsV2HairChangeOutput
  }
  'fal-ai/image-apps-v2/expression-change': {
    input: ImageAppsV2ExpressionChangeInput
    output: ImageAppsV2ExpressionChangeOutput
  }
  'fal-ai/image-apps-v2/city-teleport': {
    input: ImageAppsV2CityTeleportInput
    output: ImageAppsV2CityTeleportOutput
  }
  'fal-ai/image-apps-v2/age-modify': {
    input: ImageAppsV2AgeModifyInput
    output: ImageAppsV2AgeModifyOutput
  }
  'fal-ai/image-apps-v2/makeup-application': {
    input: ImageAppsV2MakeupApplicationInput
    output: ImageAppsV2MakeupApplicationOutput
  }
  'fal-ai/qwen-image-edit/inpaint': {
    input: QwenImageEditInpaintInput
    output: QwenImageEditInpaintOutput
  }
  'fal-ai/flux/srpo/image-to-image': {
    input: FluxSrpoImageToImageInput
    output: FluxSrpoImageToImageOutput
  }
  'fal-ai/flux-1/srpo/image-to-image': {
    input: Flux1SrpoImageToImageInput
    output: Flux1SrpoImageToImageOutput
  }
  'fal-ai/qwen-image-edit-lora': {
    input: QwenImageEditLoraInput
    output: QwenImageEditLoraOutput
  }
  'fal-ai/vidu/reference-to-image': {
    input: ViduReferenceToImageInput
    output: ViduReferenceToImageOutput
  }
  'fal-ai/bytedance/seedream/v4/edit': {
    input: BytedanceSeedreamV4EditInput
    output: BytedanceSeedreamV4EditOutput
  }
  'fal-ai/wan/v2.2-a14b/image-to-image': {
    input: WanV22A14bImageToImageInput
    output: WanV22A14bImageToImageOutput
  }
  'fal-ai/uso': {
    input: UsoInput
    output: UsoOutput
  }
  'fal-ai/gemini-25-flash-image/edit': {
    input: Gemini25FlashImageEditInput
    output: Gemini25FlashImageEditOutput
  }
  'fal-ai/qwen-image/image-to-image': {
    input: QwenImageImageToImageInput
    output: QwenImageImageToImageOutput
  }
  'bria/reimagine/3.2': {
    input: Reimagine32Input
    output: Reimagine32Output
  }
  'fal-ai/nano-banana/edit': {
    input: NanoBananaEditInput
    output: NanoBananaEditOutput
  }
  'fal-ai/nextstep-1': {
    input: Nextstep1Input
    output: Nextstep1Output
  }
  'fal-ai/qwen-image-edit': {
    input: QwenImageEditInput
    output: QwenImageEditOutput
  }
  'fal-ai/ideogram/character/edit': {
    input: IdeogramCharacterEditInput
    output: IdeogramCharacterEditOutput
  }
  'fal-ai/ideogram/character': {
    input: IdeogramCharacterInput
    output: IdeogramCharacterOutput
  }
  'fal-ai/ideogram/character/remix': {
    input: IdeogramCharacterRemixInput
    output: IdeogramCharacterRemixOutput
  }
  'fal-ai/flux-krea-lora/inpainting': {
    input: FluxKreaLoraInpaintingInput
    output: FluxKreaLoraInpaintingOutput
  }
  'fal-ai/flux-krea-lora/image-to-image': {
    input: FluxKreaLoraImageToImageInput
    output: FluxKreaLoraImageToImageOutput
  }
  'fal-ai/flux/krea/image-to-image': {
    input: FluxKreaImageToImageInput
    output: FluxKreaImageToImageOutput
  }
  'fal-ai/flux/krea/redux': {
    input: FluxKreaReduxInput
    output: FluxKreaReduxOutput
  }
  'fal-ai/flux-1/krea/image-to-image': {
    input: Flux1KreaImageToImageInput
    output: Flux1KreaImageToImageOutput
  }
  'fal-ai/flux-1/krea/redux': {
    input: Flux1KreaReduxInput
    output: Flux1KreaReduxOutput
  }
  'fal-ai/flux-kontext-lora/inpaint': {
    input: FluxKontextLoraInpaintInput
    output: FluxKontextLoraInpaintOutput
  }
  'fal-ai/hunyuan_world': {
    input: HunyuanWorldInput
    output: HunyuanWorldOutput
  }
  'fal-ai/image-editing/retouch': {
    input: ImageEditingRetouchInput
    output: ImageEditingRetouchOutput
  }
  'fal-ai/hidream-e1-1': {
    input: HidreamE11Input
    output: HidreamE11Output
  }
  'fal-ai/rife': {
    input: RifeInput
    output: RifeOutput
  }
  'fal-ai/film': {
    input: FilmInput
    output: FilmOutput
  }
  'fal-ai/calligrapher': {
    input: CalligrapherInput
    output: CalligrapherOutput
  }
  'fal-ai/bria/reimagine': {
    input: BriaReimagineInput
    output: BriaReimagineOutput
  }
  'fal-ai/image-editing/realism': {
    input: ImageEditingRealismInput
    output: ImageEditingRealismOutput
  }
  'fal-ai/post-processing/vignette': {
    input: PostProcessingVignetteInput
    output: PostProcessingVignetteOutput
  }
  'fal-ai/post-processing/solarize': {
    input: PostProcessingSolarizeInput
    output: PostProcessingSolarizeOutput
  }
  'fal-ai/post-processing/sharpen': {
    input: PostProcessingSharpenInput
    output: PostProcessingSharpenOutput
  }
  'fal-ai/post-processing/parabolize': {
    input: PostProcessingParabolizeInput
    output: PostProcessingParabolizeOutput
  }
  'fal-ai/post-processing/grain': {
    input: PostProcessingGrainInput
    output: PostProcessingGrainOutput
  }
  'fal-ai/post-processing/dodge-burn': {
    input: PostProcessingDodgeBurnInput
    output: PostProcessingDodgeBurnOutput
  }
  'fal-ai/post-processing/dissolve': {
    input: PostProcessingDissolveInput
    output: PostProcessingDissolveOutput
  }
  'fal-ai/post-processing/desaturate': {
    input: PostProcessingDesaturateInput
    output: PostProcessingDesaturateOutput
  }
  'fal-ai/post-processing/color-tint': {
    input: PostProcessingColorTintInput
    output: PostProcessingColorTintOutput
  }
  'fal-ai/post-processing/color-correction': {
    input: PostProcessingColorCorrectionInput
    output: PostProcessingColorCorrectionOutput
  }
  'fal-ai/post-processing/chromatic-aberration': {
    input: PostProcessingChromaticAberrationInput
    output: PostProcessingChromaticAberrationOutput
  }
  'fal-ai/post-processing/blur': {
    input: PostProcessingBlurInput
    output: PostProcessingBlurOutput
  }
  'fal-ai/image-editing/youtube-thumbnails': {
    input: ImageEditingYoutubeThumbnailsInput
    output: ImageEditingYoutubeThumbnailsOutput
  }
  'fal-ai/topaz/upscale/image': {
    input: TopazUpscaleImageInput
    output: TopazUpscaleImageOutput
  }
  'fal-ai/image-editing/broccoli-haircut': {
    input: ImageEditingBroccoliHaircutInput
    output: ImageEditingBroccoliHaircutOutput
  }
  'fal-ai/image-editing/wojak-style': {
    input: ImageEditingWojakStyleInput
    output: ImageEditingWojakStyleOutput
  }
  'fal-ai/image-editing/plushie-style': {
    input: ImageEditingPlushieStyleInput
    output: ImageEditingPlushieStyleOutput
  }
  'fal-ai/flux-kontext-lora': {
    input: FluxKontextLoraInput
    output: FluxKontextLoraOutput
  }
  'fal-ai/fashn/tryon/v1.6': {
    input: FashnTryonV16Input
    output: FashnTryonV16Output
  }
  'fal-ai/chain-of-zoom': {
    input: ChainOfZoomInput
    output: ChainOfZoomOutput
  }
  'fal-ai/pasd': {
    input: PasdInput
    output: PasdOutput
  }
  'fal-ai/object-removal/bbox': {
    input: ObjectRemovalBboxInput
    output: ObjectRemovalBboxOutput
  }
  'fal-ai/object-removal/mask': {
    input: ObjectRemovalMaskInput
    output: ObjectRemovalMaskOutput
  }
  'fal-ai/object-removal': {
    input: ObjectRemovalInput
    output: ObjectRemovalOutput
  }
  'fal-ai/recraft/vectorize': {
    input: RecraftVectorizeInput
    output: RecraftVectorizeOutput
  }
  'fal-ai/ffmpeg-api/extract-frame': {
    input: FfmpegApiExtractFrameInput
    output: FfmpegApiExtractFrameOutput
  }
  'fal-ai/luma-photon/flash/modify': {
    input: LumaPhotonFlashModifyInput
    output: LumaPhotonFlashModifyOutput
  }
  'fal-ai/luma-photon/modify': {
    input: LumaPhotonModifyInput
    output: LumaPhotonModifyOutput
  }
  'fal-ai/image-editing/reframe': {
    input: ImageEditingReframeInput
    output: ImageEditingReframeOutput
  }
  'fal-ai/image-editing/baby-version': {
    input: ImageEditingBabyVersionInput
    output: ImageEditingBabyVersionOutput
  }
  'fal-ai/luma-photon/flash/reframe': {
    input: LumaPhotonFlashReframeInput
    output: LumaPhotonFlashReframeOutput
  }
  'fal-ai/luma-photon/reframe': {
    input: LumaPhotonReframeInput
    output: LumaPhotonReframeOutput
  }
  'fal-ai/flux-1/schnell/redux': {
    input: Flux1SchnellReduxInput
    output: Flux1SchnellReduxOutput
  }
  'fal-ai/flux-1/dev/redux': {
    input: Flux1DevReduxInput
    output: Flux1DevReduxOutput
  }
  'fal-ai/flux-1/dev/image-to-image': {
    input: Flux1DevImageToImageInput
    output: Flux1DevImageToImageOutput
  }
  'fal-ai/image-editing/text-removal': {
    input: ImageEditingTextRemovalInput
    output: ImageEditingTextRemovalOutput
  }
  'fal-ai/image-editing/photo-restoration': {
    input: ImageEditingPhotoRestorationInput
    output: ImageEditingPhotoRestorationOutput
  }
  'fal-ai/image-editing/weather-effect': {
    input: ImageEditingWeatherEffectInput
    output: ImageEditingWeatherEffectOutput
  }
  'fal-ai/image-editing/time-of-day': {
    input: ImageEditingTimeOfDayInput
    output: ImageEditingTimeOfDayOutput
  }
  'fal-ai/image-editing/style-transfer': {
    input: ImageEditingStyleTransferInput
    output: ImageEditingStyleTransferOutput
  }
  'fal-ai/image-editing/scene-composition': {
    input: ImageEditingSceneCompositionInput
    output: ImageEditingSceneCompositionOutput
  }
  'fal-ai/image-editing/professional-photo': {
    input: ImageEditingProfessionalPhotoInput
    output: ImageEditingProfessionalPhotoOutput
  }
  'fal-ai/image-editing/object-removal': {
    input: ImageEditingObjectRemovalInput
    output: ImageEditingObjectRemovalOutput
  }
  'fal-ai/image-editing/hair-change': {
    input: ImageEditingHairChangeInput
    output: ImageEditingHairChangeOutput
  }
  'fal-ai/image-editing/face-enhancement': {
    input: ImageEditingFaceEnhancementInput
    output: ImageEditingFaceEnhancementOutput
  }
  'fal-ai/image-editing/expression-change': {
    input: ImageEditingExpressionChangeInput
    output: ImageEditingExpressionChangeOutput
  }
  'fal-ai/image-editing/color-correction': {
    input: ImageEditingColorCorrectionInput
    output: ImageEditingColorCorrectionOutput
  }
  'fal-ai/image-editing/cartoonify': {
    input: ImageEditingCartoonifyInput
    output: ImageEditingCartoonifyOutput
  }
  'fal-ai/image-editing/background-change': {
    input: ImageEditingBackgroundChangeInput
    output: ImageEditingBackgroundChangeOutput
  }
  'fal-ai/image-editing/age-progression': {
    input: ImageEditingAgeProgressionInput
    output: ImageEditingAgeProgressionOutput
  }
  'fal-ai/flux-pro/kontext/max/multi': {
    input: FluxProKontextMaxMultiInput
    output: FluxProKontextMaxMultiOutput
  }
  'fal-ai/flux-pro/kontext/multi': {
    input: FluxProKontextMultiInput
    output: FluxProKontextMultiOutput
  }
  'fal-ai/flux-pro/kontext/max': {
    input: FluxProKontextMaxInput
    output: FluxProKontextMaxOutput
  }
  'fal-ai/flux-kontext/dev': {
    input: FluxKontextDevInput
    output: FluxKontextDevOutput
  }
  'fal-ai/flux-pro/kontext': {
    input: FluxProKontextInput
    output: FluxProKontextOutput
  }
  'fal-ai/bagel/edit': {
    input: BagelEditInput
    output: BagelEditOutput
  }
  'smoretalk-ai/rembg-enhance': {
    input: RembgEnhanceInput
    output: RembgEnhanceOutput
  }
  'fal-ai/recraft/upscale/creative': {
    input: RecraftUpscaleCreativeInput
    output: RecraftUpscaleCreativeOutput
  }
  'fal-ai/recraft/upscale/crisp': {
    input: RecraftUpscaleCrispInput
    output: RecraftUpscaleCrispOutput
  }
  'fal-ai/recraft/v3/image-to-image': {
    input: RecraftV3ImageToImageInput
    output: RecraftV3ImageToImageOutput
  }
  'fal-ai/minimax/image-01/subject-reference': {
    input: MinimaxImage01SubjectReferenceInput
    output: MinimaxImage01SubjectReferenceOutput
  }
  'fal-ai/hidream-i1-full/image-to-image': {
    input: HidreamI1FullImageToImageInput
    output: HidreamI1FullImageToImageOutput
  }
  'fal-ai/ideogram/v3/reframe': {
    input: IdeogramV3ReframeInput
    output: IdeogramV3ReframeOutput
  }
  'fal-ai/ideogram/v3/replace-background': {
    input: IdeogramV3ReplaceBackgroundInput
    output: IdeogramV3ReplaceBackgroundOutput
  }
  'fal-ai/ideogram/v3/remix': {
    input: IdeogramV3RemixInput
    output: IdeogramV3RemixOutput
  }
  'fal-ai/ideogram/v3/edit': {
    input: IdeogramV3EditInput
    output: IdeogramV3EditOutput
  }
  'fal-ai/step1x-edit': {
    input: Step1xEditInput
    output: Step1xEditOutput
  }
  'fal-ai/image2svg': {
    input: Image2SvgInput
    output: Image2SvgOutput
  }
  'fal-ai/uno': {
    input: UnoInput
    output: UnoOutput
  }
  'fal-ai/gpt-image-1/edit-image': {
    input: GptImage1EditImageInput
    output: GptImage1EditImageOutput
  }
  'rundiffusion-fal/juggernaut-flux-lora/inpainting': {
    input: JuggernautFluxLoraInpaintingInput
    output: JuggernautFluxLoraInpaintingOutput
  }
  'fal-ai/fashn/tryon/v1.5': {
    input: FashnTryonV15Input
    output: FashnTryonV15Output
  }
  'fal-ai/plushify': {
    input: PlushifyInput
    output: PlushifyOutput
  }
  'fal-ai/instant-character': {
    input: InstantCharacterInput
    output: InstantCharacterOutput
  }
  'fal-ai/cartoonify': {
    input: CartoonifyInput
    output: CartoonifyOutput
  }
  'fal-ai/finegrain-eraser/mask': {
    input: FinegrainEraserMaskInput
    output: FinegrainEraserMaskOutput
  }
  'fal-ai/finegrain-eraser/bbox': {
    input: FinegrainEraserBboxInput
    output: FinegrainEraserBboxOutput
  }
  'fal-ai/finegrain-eraser': {
    input: FinegrainEraserInput
    output: FinegrainEraserOutput
  }
  'fal-ai/star-vector': {
    input: StarVectorInput
    output: StarVectorOutput
  }
  'fal-ai/ghiblify': {
    input: GhiblifyInput
    output: GhiblifyOutput
  }
  'fal-ai/thera': {
    input: TheraInput
    output: TheraOutput
  }
  'fal-ai/mix-dehaze-net': {
    input: MixDehazeNetInput
    output: MixDehazeNetOutput
  }
  'fal-ai/gemini-flash-edit': {
    input: GeminiFlashEditInput
    output: GeminiFlashEditOutput
  }
  'fal-ai/gemini-flash-edit/multi': {
    input: GeminiFlashEditMultiInput
    output: GeminiFlashEditMultiOutput
  }
  'fal-ai/invisible-watermark': {
    input: InvisibleWatermarkInput
    output: InvisibleWatermarkOutput
  }
  'rundiffusion-fal/juggernaut-flux/pro/image-to-image': {
    input: JuggernautFluxProImageToImageInput
    output: JuggernautFluxProImageToImageOutput
  }
  'rundiffusion-fal/juggernaut-flux/base/image-to-image': {
    input: JuggernautFluxBaseImageToImageInput
    output: JuggernautFluxBaseImageToImageOutput
  }
  'fal-ai/docres/dewarp': {
    input: DocresDewarpInput
    output: DocresDewarpOutput
  }
  'fal-ai/docres': {
    input: DocresInput
    output: DocresOutput
  }
  'fal-ai/swin2sr': {
    input: Swin2SrInput
    output: Swin2SrOutput
  }
  'fal-ai/ideogram/v2a/remix': {
    input: IdeogramV2aRemixInput
    output: IdeogramV2aRemixOutput
  }
  'fal-ai/ideogram/v2a/turbo/remix': {
    input: IdeogramV2aTurboRemixInput
    output: IdeogramV2aTurboRemixOutput
  }
  'fal-ai/evf-sam': {
    input: EvfSamInput
    output: EvfSamOutput
  }
  'fal-ai/ddcolor': {
    input: DdcolorInput
    output: DdcolorOutput
  }
  'fal-ai/sam2/auto-segment': {
    input: Sam2AutoSegmentInput
    output: Sam2AutoSegmentOutput
  }
  'fal-ai/drct-super-resolution': {
    input: DrctSuperResolutionInput
    output: DrctSuperResolutionOutput
  }
  'fal-ai/nafnet/denoise': {
    input: NafnetDenoiseInput
    output: NafnetDenoiseOutput
  }
  'fal-ai/nafnet/deblur': {
    input: NafnetDeblurInput
    output: NafnetDeblurOutput
  }
  'fal-ai/post-processing': {
    input: PostProcessingInput
    output: PostProcessingOutput
  }
  'fal-ai/flowedit': {
    input: FloweditInput
    output: FloweditOutput
  }
  'fal-ai/flux-control-lora-canny/image-to-image': {
    input: FluxControlLoraCannyImageToImageInput
    output: FluxControlLoraCannyImageToImageOutput
  }
  'fal-ai/flux-control-lora-depth/image-to-image': {
    input: FluxControlLoraDepthImageToImageInput
    output: FluxControlLoraDepthImageToImageOutput
  }
  'fal-ai/ben/v2/image': {
    input: BenV2ImageInput
    output: BenV2ImageOutput
  }
  'fal-ai/ideogram/upscale': {
    input: IdeogramUpscaleInput
    output: IdeogramUpscaleOutput
  }
  'fal-ai/codeformer': {
    input: CodeformerInput
    output: CodeformerOutput
  }
  'fal-ai/kling/v1-5/kolors-virtual-try-on': {
    input: KlingV15KolorsVirtualTryOnInput
    output: KlingV15KolorsVirtualTryOnOutput
  }
  'fal-ai/flux-lora-canny': {
    input: FluxLoraCannyInput
    output: FluxLoraCannyOutput
  }
  'fal-ai/flux-pro/v1/fill-finetuned': {
    input: FluxProV1FillFinetunedInput
    output: FluxProV1FillFinetunedOutput
  }
  'fal-ai/moondream-next/detection': {
    input: MoondreamNextDetectionInput
    output: MoondreamNextDetectionOutput
  }
  'fal-ai/bria/expand': {
    input: BriaExpandInput
    output: BriaExpandOutput
  }
  'fal-ai/bria/genfill': {
    input: BriaGenfillInput
    output: BriaGenfillOutput
  }
  'fal-ai/bria/eraser': {
    input: BriaEraserInput
    output: BriaEraserOutput
  }
  'fal-ai/bria/background/replace': {
    input: BriaBackgroundReplaceInput
    output: BriaBackgroundReplaceOutput
  }
  'fal-ai/flux-lora-fill': {
    input: ImageFillInput
    output: FluxLoraFillOutput
  }
  'fal-ai/bria/product-shot': {
    input: BriaProductShotInput
    output: BriaProductShotOutput
  }
  'fal-ai/bria/background/remove': {
    input: BriaBackgroundRemoveInput
    output: BriaBackgroundRemoveOutput
  }
  'fal-ai/cat-vton': {
    input: CatVtonInput
    output: CatVtonOutput
  }
  'fal-ai/leffa/pose-transfer': {
    input: LeffaPoseTransferInput
    output: LeffaPoseTransferOutput
  }
  'fal-ai/leffa/virtual-tryon': {
    input: LeffaVirtualTryonInput
    output: LeffaVirtualTryonOutput
  }
  'fal-ai/ideogram/v2/edit': {
    input: IdeogramV2EditInput
    output: IdeogramV2EditOutput
  }
  'fal-ai/ideogram/v2/turbo/remix': {
    input: IdeogramV2TurboRemixInput
    output: IdeogramV2TurboRemixOutput
  }
  'fal-ai/ideogram/v2/turbo/edit': {
    input: IdeogramV2TurboEditInput
    output: IdeogramV2TurboEditOutput
  }
  'fal-ai/ideogram/v2/remix': {
    input: IdeogramV2RemixInput
    output: IdeogramV2RemixOutput
  }
  'fal-ai/flux/schnell/redux': {
    input: FluxSchnellReduxInput
    output: FluxSchnellReduxOutput
  }
  'fal-ai/flux-pro/v1.1/redux': {
    input: FluxProV11ReduxInput
    output: FluxProV11ReduxOutput
  }
  'fal-ai/flux/dev/redux': {
    input: FluxDevReduxInput
    output: FluxDevReduxOutput
  }
  'fal-ai/flux-lora-depth': {
    input: FluxLoraDepthInput
    output: FluxLoraDepthOutput
  }
  'fal-ai/flux-pro/v1.1-ultra/redux': {
    input: FluxProV11UltraReduxInput
    output: FluxProV11UltraReduxOutput
  }
  'fal-ai/flux-pro/v1/fill': {
    input: FluxProV1FillInput
    output: FluxProV1FillOutput
  }
  'fal-ai/kolors/image-to-image': {
    input: KolorsImageToImageInput
    output: KolorsImageToImageOutput
  }
  'fal-ai/iclight-v2': {
    input: IclightV2Input
    output: IclightV2Output
  }
  'fal-ai/flux-differential-diffusion': {
    input: FluxDifferentialDiffusionInput
    output: FluxDifferentialDiffusionOutput
  }
  'fal-ai/flux-pulid': {
    input: FluxPulidInput
    output: FluxPulidOutput
  }
  'fal-ai/birefnet/v2': {
    input: BirefnetV2Input
    output: BirefnetV2Output
  }
  'fal-ai/live-portrait/image': {
    input: LivePortraitImageInput
    output: LivePortraitImageOutput
  }
  'fal-ai/flux-general/rf-inversion': {
    input: ControlNetUnionInput
    output: FluxGeneralRfInversionOutput
  }
  'fal-ai/image-preprocessors/hed': {
    input: ImagePreprocessorsHedInput
    output: ImagePreprocessorsHedOutput
  }
  'fal-ai/image-preprocessors/scribble': {
    input: ImagePreprocessorsScribbleInput
    output: ImagePreprocessorsScribbleOutput
  }
  'fal-ai/image-preprocessors/depth-anything/v2': {
    input: ImagePreprocessorsDepthAnythingV2Input
    output: ImagePreprocessorsDepthAnythingV2Output
  }
  'fal-ai/image-preprocessors/zoe': {
    input: ImagePreprocessorsZoeInput
    output: ImagePreprocessorsZoeOutput
  }
  'fal-ai/image-preprocessors/teed': {
    input: ImagePreprocessorsTeedInput
    output: ImagePreprocessorsTeedOutput
  }
  'fal-ai/image-preprocessors/mlsd': {
    input: ImagePreprocessorsMlsdInput
    output: ImagePreprocessorsMlsdOutput
  }
  'fal-ai/image-preprocessors/lineart': {
    input: ImagePreprocessorsLineartInput
    output: ImagePreprocessorsLineartOutput
  }
  'fal-ai/image-preprocessors/sam': {
    input: ImagePreprocessorsSamInput
    output: ImagePreprocessorsSamOutput
  }
  'fal-ai/image-preprocessors/midas': {
    input: ImagePreprocessorsMidasInput
    output: ImagePreprocessorsMidasOutput
  }
  'fal-ai/image-preprocessors/pidi': {
    input: ImagePreprocessorsPidiInput
    output: ImagePreprocessorsPidiOutput
  }
  'fal-ai/sam2/image': {
    input: Sam2ImageInput
    output: Sam2ImageOutput
  }
  'fal-ai/flux-general/image-to-image': {
    input: FalAiFluxGeneralImageToImageControlNetUnionInput
    output: FluxGeneralImageToImageOutput
  }
  'fal-ai/flux-general/inpainting': {
    input: FalAiFluxGeneralInpaintingControlNetUnionInput
    output: FluxGeneralInpaintingOutput
  }
  'fal-ai/flux-general/differential-diffusion': {
    input: FalAiFluxGeneralDifferentialDiffusionControlNetUnionInput
    output: FluxGeneralDifferentialDiffusionOutput
  }
  'fal-ai/flux-lora/image-to-image': {
    input: FluxLoraImageToImageInput
    output: FluxLoraImageToImageOutput
  }
  'fal-ai/sdxl-controlnet-union/inpainting': {
    input: SdxlControlnetUnionInpaintingInput
    output: SdxlControlnetUnionInpaintingOutput
  }
  'fal-ai/sdxl-controlnet-union/image-to-image': {
    input: SdxlControlnetUnionImageToImageInput
    output: SdxlControlnetUnionImageToImageOutput
  }
  'fal-ai/era-3d': {
    input: Era3dInput
    output: Era3dOutput
  }
  'fal-ai/florence-2-large/referring-expression-segmentation': {
    input: Florence2LargeReferringExpressionSegmentationInput
    output: PolygonOutput
  }
  'fal-ai/florence-2-large/dense-region-caption': {
    input: Florence2LargeDenseRegionCaptionInput
    output: Florence2LargeDenseRegionCaptionOutput
  }
  'fal-ai/florence-2-large/object-detection': {
    input: Florence2LargeObjectDetectionInput
    output: Florence2LargeObjectDetectionOutput
  }
  'fal-ai/florence-2-large/open-vocabulary-detection': {
    input: Florence2LargeOpenVocabularyDetectionInput
    output: Florence2LargeOpenVocabularyDetectionOutput
  }
  'fal-ai/florence-2-large/caption-to-phrase-grounding': {
    input: Florence2LargeCaptionToPhraseGroundingInput
    output: Florence2LargeCaptionToPhraseGroundingOutput
  }
  'fal-ai/florence-2-large/ocr-with-region': {
    input: Florence2LargeOcrWithRegionInput
    output: Florence2LargeOcrWithRegionOutput
  }
  'fal-ai/florence-2-large/region-proposal': {
    input: Florence2LargeRegionProposalInput
    output: Florence2LargeRegionProposalOutput
  }
  'fal-ai/florence-2-large/region-to-segmentation': {
    input: Florence2LargeRegionToSegmentationInput
    output: FalAiFlorence2LargeRegionToSegmentationPolygonOutput
  }
  'fal-ai/stable-diffusion-v3-medium/image-to-image': {
    input: StableDiffusionV3MediumImageToImageInput
    output: StableDiffusionV3MediumImageToImageOutput
  }
  'fal-ai/dwpose': {
    input: DwposeInput
    output: DwposeOutput
  }
  'fal-ai/sd15-depth-controlnet': {
    input: Sd15DepthControlnetInput
    output: Sd15DepthControlnetOutput
  }
  'fal-ai/ccsr': {
    input: CcsrInput
    output: CcsrOutput
  }
  'fal-ai/omni-zero': {
    input: OmniZeroInput
    output: OmniZeroOutput
  }
  'fal-ai/ip-adapter-face-id': {
    input: IpAdapterFaceIdInput
    output: IpAdapterFaceIdOutput
  }
  'fal-ai/lora/inpaint': {
    input: TimestepsInput
    output: LoraInpaintOutput
  }
  'fal-ai/lora/image-to-image': {
    input: FalAiLoraImageToImageTimestepsInput
    output: LoraImageToImageOutput
  }
  'fal-ai/fast-sdxl/image-to-image': {
    input: FastSdxlImageToImageInput
    output: FastSdxlImageToImageOutput
  }
  'fal-ai/fast-sdxl/inpainting': {
    input: FastSdxlInpaintingInput
    output: FastSdxlInpaintingOutput
  }
  'fal-ai/face-to-sticker': {
    input: FaceToStickerInput
    output: FaceToStickerOutput
  }
  'fal-ai/photomaker': {
    input: PhotomakerInput
    output: PhotomakerOutput
  }
  'fal-ai/creative-upscaler': {
    input: CreativeUpscalerInput
    output: CreativeUpscalerOutput
  }
  'fal-ai/birefnet': {
    input: BirefnetInput
    output: BirefnetOutput
  }
  'fal-ai/fast-lightning-sdxl/image-to-image': {
    input: FastLightningSdxlImageToImageInput
    output: FastLightningSdxlImageToImageOutput
  }
  'fal-ai/playground-v25/inpainting': {
    input: PlaygroundV25InpaintingInput
    output: PlaygroundV25InpaintingOutput
  }
  'fal-ai/playground-v25/image-to-image': {
    input: PlaygroundV25ImageToImageInput
    output: PlaygroundV25ImageToImageOutput
  }
  'fal-ai/fast-lightning-sdxl/inpainting': {
    input: FastLightningSdxlInpaintingInput
    output: FastLightningSdxlInpaintingOutput
  }
  'fal-ai/fast-lcm-diffusion/inpainting': {
    input: FastLcmDiffusionInpaintingInput
    output: FastLcmDiffusionInpaintingOutput
  }
  'fal-ai/fast-lcm-diffusion/image-to-image': {
    input: FastLcmDiffusionImageToImageInput
    output: FastLcmDiffusionImageToImageOutput
  }
  'fal-ai/imageutils/depth': {
    input: ImageutilsDepthInput
    output: ImageutilsDepthOutput
  }
  'fal-ai/retoucher': {
    input: RetoucherInput
    output: RetoucherOutput
  }
  'fal-ai/imageutils/marigold-depth': {
    input: ImageutilsMarigoldDepthInput
    output: ImageutilsMarigoldDepthOutput
  }
  'fal-ai/pulid': {
    input: PulidInput
    output: PulidOutput
  }
  'fal-ai/fast-sdxl-controlnet-canny/inpainting': {
    input: FastSdxlControlnetCannyInpaintingInput
    output: FastSdxlControlnetCannyInpaintingOutput
  }
  'fal-ai/fast-sdxl-controlnet-canny/image-to-image': {
    input: FastSdxlControlnetCannyImageToImageInput
    output: FastSdxlControlnetCannyImageToImageOutput
  }
  'fal-ai/lcm-sd15-i2i': {
    input: LcmSd15I2iInput
    output: LcmSd15I2iOutput
  }
  'fal-ai/inpaint': {
    input: InpaintInput
    output: InpaintOutput
  }
  'fal-ai/esrgan': {
    input: EsrganInput
    output: EsrganOutput
  }
  'fal-ai/imageutils/rembg': {
    input: ImageutilsRembgInput
    output: ImageutilsRembgOutput
  }
}

/** Union type of all image-to-image model endpoint IDs */
export type ImageToImageModel = keyof ImageToImageEndpointMap

/** Get the input type for a specific image-to-image model */
export type ImageToImageModelInput<T extends ImageToImageModel> = ImageToImageEndpointMap[T]['input']

/** Get the output type for a specific image-to-image model */
export type ImageToImageModelOutput<T extends ImageToImageModel> = ImageToImageEndpointMap[T]['output']
