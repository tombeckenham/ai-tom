# @tanstack/ai-react

React hooks for building AI chat interfaces with TanStack AI.

## Installation

```bash
npm install @tanstack/ai-react @tanstack/ai
```

## useChat Hook

The `useChat` hook manages chat state, handles streaming responses, and provides a complete chat interface in a single hook.

**Design Philosophy (v5 API):**

- You control input state
- Just call `sendMessage()` when ready
- No form-centric API - use buttons, keyboard events, or any trigger
- More flexible and less opinionated

### Basic Usage

```typescript
import { useChat } from "@tanstack/ai-react";
import { useState } from "react";

function ChatComponent() {
  const { messages, sendMessage, isLoading } = useChat({
    api: "/api/chat",
  });

  const [input, setInput] = useState("");

  const handleSend = () => {
    sendMessage(input);
    setInput("");
  };

  return (
    <div>
      {messages.map((m) => (
        <div key={m.id}>
          <strong>{m.role}:</strong> {m.content}
        </div>
      ))}

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        disabled={isLoading}
      />
      <button onClick={handleSend} disabled={isLoading || !input.trim()}>
        Send
      </button>
    </div>
  );
}
```

### API

#### Options

```typescript
interface UseChatOptions {
  api?: string; // API endpoint (default: "/api/chat")
  initialMessages?: ChatMessage[]; // Starting messages
  id?: string; // Unique chat ID
  onResponse?: (response: Response) => void;
  onChunk?: (chunk: StreamChunk) => void;
  onFinish?: (message: ChatMessage) => void;
  onError?: (error: Error) => void;
  headers?: Record<string, string> | Headers;
  body?: Record<string, any>; // Extra data to send
  credentials?: "omit" | "same-origin" | "include";
  fetch?: typeof fetch; // Custom fetch implementation
}
```

#### Return Value

```typescript
interface UseChatReturn {
  messages: ChatMessage[]; // Current conversation
  sendMessage: (content: string) => Promise<void>; // Send a message
  append: (message) => Promise<void>; // Add message programmatically
  reload: () => Promise<void>; // Reload last response
  stop: () => void; // Stop current generation
  isLoading: boolean; // Is generating a response
  error: Error | undefined; // Current error
  setMessages: (messages) => void; // Set messages manually
  clear: () => void; // Clear all messages
}
```

### Backend Endpoint

Your backend should:

1. Receive POST requests with this body:

```typescript
{
  messages: Message[];
  data?: Record<string, any>;
}
```

2. Stream back `StreamChunk` objects as newline-delimited JSON or Server-Sent Events:

```
data: {"type":"content","delta":"Hello","content":"Hello",...}
data: {"type":"content","delta":" world","content":"Hello world",...}
data: {"type":"done","finishReason":"stop","usage":{...}}
```

### Advanced Usage

#### With Callbacks

```typescript
const { messages, sendMessage } = useChat({
  api: "/api/chat",
  onChunk: (chunk) => {
    if (chunk.type === "content") {
      console.log("New token:", chunk.delta);
    }
  },
  onFinish: (message) => {
    console.log("Final message:", message);
    // Save to database, log analytics, etc.
  },
  onError: (error) => {
    console.error("Chat error:", error);
    // Show toast notification, log error, etc.
  },
});

// Send messages programmatically
await sendMessage("Tell me a joke");
```

#### Flexible Triggering

```typescript
const { sendMessage, isLoading } = useChat({ api: "/api/chat" });
const [input, setInput] = useState("");

// Button click
<button onClick={() => sendMessage(input)}>Send</button>

// Enter key
<input onKeyDown={(e) => e.key === "Enter" && sendMessage(input)} />

// Voice input
<button onClick={async () => {
  const transcript = await voiceToText();
  sendMessage(transcript);
}}>🎤 Speak</button>

// Predefined prompts
<button onClick={() => sendMessage("Explain quantum computing")}>
  Ask about quantum computing
</button>
```

#### With Custom Headers

```typescript
const chat = useChat({
  api: "/api/chat",
  headers: {
    Authorization: `Bearer ${token}`,
    "X-Custom-Header": "value",
  },
  body: {
    userId: "123",
    sessionId: "abc",
  },
});
```

#### Programmatic Control

```typescript
const { messages, sendMessage, append, reload, stop, clear } = useChat();

// Send a simple message
await sendMessage("Hello!");

// Add a message with more control
await append({
  role: "user",
  content: "Hello!",
  id: "custom-id",
});

// Reload the last AI response
await reload();

// Stop the current generation
stop();

// Clear all messages
clear();
```

#### Multiple Chats

```typescript
function App() {
  const chat1 = useChat({ id: "chat-1", api: "/api/chat" });
  const chat2 = useChat({ id: "chat-2", api: "/api/chat" });

  // Each hook manages independent state
}
```

## Example Backend (Node.js/Express)

```typescript
import express from "express";
import { AI } from "@tanstack/ai";
import { OpenAIAdapter } from "@tanstack/ai-openai";

const app = express();
app.use(express.json());

const ai = new AI(new OpenAIAdapter({ apiKey: process.env.OPENAI_API_KEY }));

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  // Set headers for streaming
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  try {
    for await (const chunk of ai.streamChat({
      model: "gpt-3.5-turbo",
      messages,
    })) {
      // Send chunk as Server-Sent Event
      res.write(`data: ${JSON.stringify(chunk)}\n\n`);
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    res.write(
      `data: ${JSON.stringify({
        type: "error",
        error: { message: error.message },
      })}\n\n`
    );
    res.end();
  }
});

app.listen(3000);
```

## Example Backend (Next.js App Router)

```typescript
// app/api/chat/route.ts
import { AI } from "@tanstack/ai";
import { OpenAIAdapter } from "@tanstack/ai-openai";

export const runtime = "edge";

const ai = new AI(new OpenAIAdapter({ apiKey: process.env.OPENAI_API_KEY }));

export async function POST(req: Request) {
  const { messages } = await req.json();

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of ai.streamChat({
          model: "gpt-3.5-turbo",
          messages,
        })) {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`)
          );
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
```

## TypeScript Types

All types are fully exported:

```typescript
import type {
  ChatMessage,
  UseChatOptions,
  UseChatReturn,
  ChatRequestBody,
} from "@tanstack/ai-react";
```

## Features

- ✅ Automatic message state management
- ✅ Streaming response handling
- ✅ Loading and error states
- ✅ Simple `sendMessage()` API (v5 style)
- ✅ You control input state (flexible)
- ✅ Abort/stop generation
- ✅ Reload last response
- ✅ Clear conversation
- ✅ Custom headers and body data
- ✅ Callback hooks for lifecycle events
- ✅ Multiple concurrent chats
- ✅ Full TypeScript support

## License

MIT
