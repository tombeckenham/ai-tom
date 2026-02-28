#!/usr/bin/env node
import * as fs from 'node:fs'
import * as path from 'node:path'
import { generate } from './index'
import type { TanStackAIPluginOptions } from './types'

async function main(): Promise<void> {
  // Look for a config file
  const configPaths = [
    'ai-vite.config.ts',
    'ai-vite.config.js',
    'ai-vite.config.json',
  ]

  let options: TanStackAIPluginOptions | undefined

  for (const configPath of configPaths) {
    const fullPath = path.resolve(process.cwd(), configPath)
    if (fs.existsSync(fullPath)) {
      if (configPath.endsWith('.json')) {
        options = JSON.parse(fs.readFileSync(fullPath, 'utf-8'))
      } else {
        const mod = await import(fullPath)
        options = mod.default ?? mod
      }
      console.log(`[ai-vite] Using config from ${configPath}`)
      break
    }
  }

  // Fall back to CLI args
  if (!options) {
    const providers = process.argv.slice(2)
    if (providers.length === 0) {
      console.error('Usage: ai-vite [providers...]')
      console.error('Example: ai-vite openai')
      console.error('')
      console.error('Or create an ai-vite.config.json file:')
      console.error('  { "providers": ["openai"] }')
      process.exit(1)
    }

    options = {
      providers: providers as Array<any>,
    }
  }

  await generate(options)
}

main().catch((err) => {
  console.error('[ai-vite] Fatal error:', err)
  process.exit(1)
})
