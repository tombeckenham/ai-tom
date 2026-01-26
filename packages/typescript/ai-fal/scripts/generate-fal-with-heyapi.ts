#!/usr/bin/env tsx
/**
 * Generate TypeScript types and Zod schemas using @hey-api/openapi-ts
 *
 * This script runs the Hey API CLI which auto-discovers openapi-ts.config.ts
 * and processes all jobs (25 categories) with Zod schema generation and Prettier formatting.
 */

import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

function main() {
  const configPath = join(__dirname, '..', 'openapi-ts.config.ts')

  if (!existsSync(configPath)) {
    console.error('Error: openapi-ts.config.ts not found.')
    console.error('Run generate-fal-openapi.ts first to create the config.')
    process.exit(1)
  }

  console.log('Generating types and schemas using Hey API...\n')

  // Run Hey API CLI - it will auto-discover openapi-ts.config.ts
  const result = spawnSync('npx', ['@hey-api/openapi-ts'], {
    stdio: 'inherit',
    shell: true,
    cwd: join(__dirname, '..'),
  })

  if (result.status === 0) {
    console.log('\n✓ Generation complete!')
  } else {
    console.error('\n✗ Generation failed')
    process.exit(1)
  }
}

main()
