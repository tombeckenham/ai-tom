# Porting from Vercel AI SDK to TanStack AI

This document explains how this TanStack Start application was ported from Vercel's AI SDK to TanStack AI.

## Changes Made

### 1. Package Dependencies

**Removed:**

- `ai` (Vercel AI SDK)
- `@ai-sdk/react`
- `@ai-sdk/anthropic`
- `@modelcontextprotocol/sdk` (not needed for basic tool calling)

**Added:**

- `@tanstack/ai` - Core library
- `@tanstack/ai-react` - React hooks
- `@tanstack/ai-anthropic` - Anthropic adapter

### 2. Frontend (React Component)

**Before (Vercel AI SDK v5):**

```typescript
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

const { messages, sendMessage } = useChat({
  transport: new DefaultChatTransport({
    api: "/demo/api/tanchat",
  }),
});

// Sending messages
sendMessage({ text: input });

// Messages format
messages.map(({ id, role, parts }) =>
  parts.map((part) => {
    if (part.type === "text") {
      return <div>{part.text}</div>;
    }
  })
);
```

**After (TanStack AI):**

```typescript
import { useChat } from '@tanstack/ai-react'

const { messages, sendMessage, isLoading } = useChat({
  api: '/demo/api/tanchat',
})

// Sending messages
sendMessage(input)

// Messages format
messages.map(({ id, role, content, toolCalls }) => (
  <>
    {content && <div>{content}</div>}
    {toolCalls?.map(toolCall => ...)}
  </>
))
```

**Key Differences:**

- ✅ Simpler `sendMessage(content)` instead of `sendMessage({ text })`
- ✅ No `DefaultChatTransport` - just pass API endpoint
- ✅ Messages have `content` not `parts`
- ✅ Tool calls are directly in message, not in parts
- ✅ `isLoading` state included

### 3. Backend (API Route)

**Before (Vercel AI SDK):**

```typescript
import { anthropic } from '@ai-sdk/anthropic'
import { streamText, tool } from 'ai'

const result = await streamText({
  model: anthropic('claude-3-5-sonnet-latest'),
  messages: convertToModelMessages(messages),
  tools: {
    getGuitars: tool({ ... }),
    recommendGuitar: tool({ ... }),
  },
})

return result.toUIMessageStreamResponse()
```

**After (TanStack AI):**

```typescript
import { AI } from '@tanstack/ai'
import { AnthropicAdapter } from '@tanstack/ai-anthropic'
import type { Tool } from '@tanstack/ai'

const ai = new AI(new AnthropicAdapter({
  apiKey: process.env.ANTHROPIC_API_KEY
}))

const tools: Tool[] = [
  {
    type: 'function',
    function: {
      name: 'getGuitars',
      description: '...',
      parameters: { ... }
    }
  }
]

// Manual streaming with tool execution
const stream = new ReadableStream({
  async start(controller) {
    for await (const chunk of ai.streamChat({
      model,
      messages,
      tools
    })) {
      controller.enqueue(
        encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`)
      )

      // Handle tool calls...
    }
  }
})

return new Response(stream, { headers: {...} })
```

**Key Differences:**

- ✅ More explicit - you control the streaming loop
- ✅ Standard JSON chunks (not UIMessage format)
- ✅ Manual tool execution (more control)
- ✅ Standard SSE format
- ✅ No vendor-specific abstractions

### 4. Tool Definitions

**Before (Vercel format):**

```typescript
const tools = {
  getGuitars: tool({
    description: '...',
    inputSchema: z.object({}),
    execute: async () => {...}
  })
}
```

**After (OpenAI/Anthropic standard format):**

```typescript
const tools: Tool[] = [
  {
    type: "function",
    function: {
      name: "getGuitars",
      description: "...",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },
];

// Separate executor
async function executeTool(name, args) {
  switch (name) {
    case "getGuitars":
      return JSON.stringify(guitars);
    // ...
  }
}
```

**Benefits:**

- ✅ Standard OpenAI/Anthropic tool format
- ✅ Works with multiple providers
- ✅ No Zod dependency required
- ✅ Explicit separation of definition and execution

## Benefits of Migration

1. **No Vendor Lock-in**: Can switch from Anthropic to OpenAI without code changes
2. **Transparent**: See exactly what's being streamed as JSON chunks
3. **Standard Format**: Uses OpenAI/Anthropic tool calling standards
4. **Open Source**: MIT licensed, truly open
5. **Control**: More explicit control over streaming and tool execution
6. **Flexibility**: Not tied to Vercel's ecosystem

## What Still Works

- ✅ All UI components (unchanged)
- ✅ Markdown rendering
- ✅ Syntax highlighting
- ✅ Guitar recommendations
- ✅ Tool calling
- ✅ Streaming responses
- ✅ TanStack Router
- ✅ TanStack Store

## Result

The app works exactly the same for users, but now:

- Uses truly open-source AI SDK
- Can switch AI providers easily
- No dependency on Vercel's ecosystem
- Follows standard AI API formats
- More transparent and debuggable

**Migration complete!** 🎉
