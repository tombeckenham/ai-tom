import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackAI } from '@tanstack/ai-vite'

export default defineConfig({
  plugins: [
    tanstackAI({
      providers: ['openai'],
      outputDir: 'src/generated',
    }),
    react(),
  ],
})
