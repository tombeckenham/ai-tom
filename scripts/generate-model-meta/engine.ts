import type { OpenRouterModel } from '../openrouter.models'
import type {
  CapabilityRule,
  GeneratedModel,
  InputModality,
  OutputModality,
  ProviderConfig,
} from './types'

function mapModality(modality: string): InputModality | null {
  const mapping: Record<string, InputModality> = {
    text: 'text',
    image: 'image',
    audio: 'audio',
    video: 'video',
    file: 'document',
    document: 'document',
  }
  return mapping[modality.toLowerCase()] ?? null
}

function toConstName(modelName: string): string {
  return modelName
    .replace(/[/.:-]/g, '_')
    .replace(/\s+/g, '_')
    .toUpperCase()
}

function convertPrice(priceStr: string): number {
  const price = parseFloat(priceStr)
  if (isNaN(price)) return 0
  const result = price * 1_000_000
  return Math.round(result * 1e10) / 1e10
}

function resolveProviderOptions(
  model: OpenRouterModel,
  rules: Array<CapabilityRule>,
): string {
  const matched = rules
    .filter((rule) => rule.match(model))
    .map((rule) => rule.optionInterface)

  // Deduplicate
  const unique = [...new Set(matched)]
  return unique.length > 0 ? unique.join(' &\n    ') : 'unknown'
}

function generateConstDeclaration(
  constName: string,
  modelName: string,
  model: OpenRouterModel,
  inputModalities: Array<InputModality>,
  outputModalities: Array<OutputModality>,
  providerOptions: string,
  config: ProviderConfig,
): string {
  const inputPrice = convertPrice(model.pricing.prompt)
  const outputPrice = convertPrice(model.pricing.completion)
  const cachedPrice = convertPrice(model.pricing.input_cache_read ?? '0')

  const lines: Array<string> = []
  lines.push(`const ${constName} = {`)
  lines.push(`  name: '${modelName}',`)

  // Provider-specific extra fields (e.g., Anthropic needs 'id')
  if (config.extraConstFields) {
    for (const field of config.extraConstFields(model, modelName)) {
      lines.push(`  ${field}`)
    }
  }

  const contextField = config.contextWindowField ?? 'context_window'
  if (model.context_length) {
    lines.push(`  ${contextField}: ${model.context_length},`)
  }
  if (model.top_provider.max_completion_tokens) {
    lines.push(
      `  max_output_tokens: ${model.top_provider.max_completion_tokens},`,
    )
  }

  lines.push(`  pricing: {`)
  lines.push(`    input: {`)
  lines.push(`      normal: ${inputPrice},`)
  if (cachedPrice > 0) {
    lines.push(`      cached: ${cachedPrice},`)
  }
  lines.push(`    },`)
  lines.push(`    output: {`)
  lines.push(`      normal: ${outputPrice},`)
  lines.push(`    },`)
  lines.push(`  },`)

  lines.push(`  supports: {`)
  lines.push(
    `    input: [${inputModalities.map((m) => `'${m}'`).join(', ')}],`,
  )
  if (config.emitOutputModalities !== false) {
    lines.push(
      `    output: [${outputModalities.map((m) => `'${m}'`).join(', ')}],`,
    )
  }

  // Provider-specific extra fields in supports block
  if (config.extraSupportsFields) {
    for (const field of config.extraSupportsFields(model)) {
      lines.push(`    ${field}`)
    }
  }

  lines.push(`  },`)

  if (config.isModelMetaGeneric === false) {
    lines.push(`} as const satisfies ModelMeta`)
  } else {
    lines.push(`} as const satisfies ModelMeta<`)
    lines.push(`  ${providerOptions}`)
    lines.push(`>`)
  }

  return lines.join('\n')
}

export function processModels(
  allModels: Array<OpenRouterModel>,
  config: ProviderConfig,
): Array<GeneratedModel> {
  // Filter models for this provider
  const providerModels = allModels.filter((model) => {
    const matchesPrefix = model.id
      .toLowerCase()
      .startsWith(`${config.providerPrefix}/`)
    if (config.filter) {
      return matchesPrefix && config.filter(model)
    }
    return matchesPrefix
  })

  return providerModels.map((model) => {
    const modelName = config.extractModelName
      ? config.extractModelName(model)
      : model.id.replace(`${config.providerPrefix}/`, '')

    const constName = toConstName(modelName)

    const allowed = config.allowedInputModalities
    const inputModalities = model.architecture.input_modalities
      .map(mapModality)
      .filter(
        (m): m is InputModality =>
          m !== null && (!allowed || allowed.includes(m)),
      )
    const outputModalities = model.architecture.output_modalities
      .map(mapModality)
      .filter((m): m is OutputModality => m !== null)

    // Ensure at least 'text' input
    if (!inputModalities.includes('text')) {
      inputModalities.unshift('text')
    }

    const providerOptions = resolveProviderOptions(
      model,
      config.capabilityRules,
    )
    const constDeclaration = generateConstDeclaration(
      constName,
      modelName,
      model,
      inputModalities,
      outputModalities,
      providerOptions,
      config,
    )

    return {
      constName,
      modelName,
      openRouterModel: model,
      inputModalities,
      outputModalities,
      providerOptions,
      constDeclaration,
      isChat: outputModalities.includes('text'),
      isImage: outputModalities.includes('image'),
      isVideo: outputModalities.includes('video'),
    }
  })
}

export function generateModelMetaFile(
  models: Array<GeneratedModel>,
  config: ProviderConfig,
): string {
  const chatModels = models.filter((m) => m.isChat)
  const imageModels = models.filter((m) => m.isImage)

  const sections: Array<string> = []

  // Imports
  sections.push(config.optionImports)
  sections.push('')

  // ModelMeta interface
  if (config.modelMetaDefinition) {
    sections.push(config.modelMetaDefinition)
  } else {
    sections.push(`interface ModelMeta<TProviderOptions = unknown> {
  name: string
  supports: {
    input: Array<'text' | 'image' | 'audio' | 'video' | 'document'>
    output: Array<'text' | 'image' | 'audio' | 'video'>
  }
  context_window?: number
  max_output_tokens?: number
  knowledge_cutoff?: string
  pricing: {
    input: {
      normal: number
      cached?: number
    }
    output: {
      normal: number
    }
  }
  providerOptions?: TProviderOptions
}`)
  }
  sections.push('')

  // Model const declarations
  for (const model of models) {
    sections.push(model.constDeclaration)
    sections.push('')
  }

  // Runtime metadata map
  sections.push(`/**
 * Runtime model metadata map.
 * Provides access to model capabilities, context windows, pricing, and modalities at runtime.
 */
export const ${config.runtimeMetaName} = {`)
  for (const model of models) {
    sections.push(`  [${model.constName}.name]: ${model.constName},`)
  }
  sections.push(`} as const`)
  sections.push('')

  // Chat models array
  if (chatModels.length > 0) {
    sections.push(`export const ${config.exportPrefix}_CHAT_MODELS = [`)
    for (const model of chatModels) {
      sections.push(`  ${model.constName}.name,`)
    }
    sections.push(`] as const`)
    sections.push('')
    sections.push(
      `export type ${config.exportPrefix.charAt(0)}${config.exportPrefix.slice(1).toLowerCase()}ChatModel = (typeof ${config.exportPrefix}_CHAT_MODELS)[number]`,
    )
    sections.push('')
  }

  // Image models array
  if (imageModels.length > 0) {
    sections.push(`export const ${config.exportPrefix}_IMAGE_MODELS = [`)
    for (const model of imageModels) {
      sections.push(`  ${model.constName}.name,`)
    }
    sections.push(`] as const`)
    sections.push('')
    sections.push(
      `export type ${config.exportPrefix.charAt(0)}${config.exportPrefix.slice(1).toLowerCase()}ImageModel = (typeof ${config.exportPrefix}_IMAGE_MODELS)[number]`,
    )
    sections.push('')
  }

  // Provider options type map (interface for augmentation)
  sections.push(
    `export interface ${config.providerOptionsTypeName} {`,
  )
  for (const model of chatModels) {
    sections.push(
      `  [${model.constName}.name]: ${model.providerOptions}`,
    )
  }
  sections.push(`}`)
  sections.push('')

  // Input modalities type map (interface for augmentation)
  sections.push(
    `export interface ${config.inputModalitiesTypeName} {`,
  )
  for (const model of chatModels) {
    sections.push(
      `  [${model.constName}.name]: typeof ${model.constName}.supports.input`,
    )
  }
  sections.push(`}`)

  return sections.join('\n')
}
