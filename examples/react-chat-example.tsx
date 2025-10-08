/**
 * TanStack AI React - Chat Component Example
 *
 * This shows how to build a chat interface with the useChat hook
 */

import { useChat } from "@tanstack/ai-react";
import { useState } from "react";

export function SimpleChatExample() {
  const { messages, sendMessage, isLoading } = useChat({
    api: "/api/chat",
  });

  const [input, setInput] = useState("");

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>TanStack AI Chat</h1>

      {/* Messages */}
      <div
        style={{
          height: "400px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: message.role === "user" ? "#e3f2fd" : "#f5f5f5",
              borderRadius: "8px",
            }}
          >
            <strong>{message.role === "user" ? "You" : "AI"}:</strong>{" "}
            {message.content}
          </div>
        ))}
        {isLoading && (
          <div style={{ color: "#999", fontStyle: "italic" }}>
            AI is typing...
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage(input);
              setInput("");
            }
          }}
          placeholder="Type your message..."
          disabled={isLoading}
          style={{ flex: 1, padding: "10px", fontSize: "16px" }}
        />
        <button
          onClick={() => {
            sendMessage(input);
            setInput("");
          }}
          disabled={isLoading || !input.trim()}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export function AdvancedChatExample() {
  const { messages, sendMessage, isLoading, error, reload, stop, clear } =
    useChat({
      api: "/api/chat",
      onChunk: (chunk) => {
        if (chunk.type === "content") {
          console.log("New token:", chunk.delta);
        }
      },
      onFinish: (message) => {
        console.log("Message complete:", message);
      },
    });

  const [input, setInput] = useState("");

  const predefinedPrompts = [
    "Explain quantum computing",
    "Write a haiku about programming",
    "Tell me a joke",
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>TanStack AI Chat</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={reload}
            disabled={isLoading || messages.length === 0}
          >
            🔄 Reload
          </button>
          <button onClick={stop} disabled={!isLoading}>
            ⏹️ Stop
          </button>
          <button onClick={clear} disabled={messages.length === 0}>
            🗑️ Clear
          </button>
        </div>
      </div>

      {/* Quick prompts */}
      <div style={{ marginBottom: "10px" }}>
        <strong>Quick prompts:</strong>{" "}
        {predefinedPrompts.map((prompt, i) => (
          <button
            key={i}
            onClick={() => sendMessage(prompt)}
            disabled={isLoading}
            style={{ marginLeft: "5px", padding: "5px 10px" }}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div
        style={{
          height: "400px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: message.role === "user" ? "#e3f2fd" : "#f5f5f5",
              borderRadius: "8px",
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
              {message.role === "user" ? "You" : "AI"}
              <span
                style={{ color: "#999", fontSize: "12px", marginLeft: "10px" }}
              >
                {message.createdAt?.toLocaleTimeString()}
              </span>
            </div>
            <div>{message.content}</div>
          </div>
        ))}
        {isLoading && (
          <div style={{ color: "#999", fontStyle: "italic" }}>
            AI is typing...
          </div>
        )}
      </div>

      {/* Error display */}
      {error && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#ffebee",
            color: "#c62828",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        >
          Error: {error.message}
        </div>
      )}

      {/* Input */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage(input);
              setInput("");
            }
          }}
          placeholder="Type your message... (Enter to send)"
          disabled={isLoading}
          style={{ flex: 1, padding: "10px", fontSize: "16px" }}
        />
        <button
          onClick={() => {
            sendMessage(input);
            setInput("");
          }}
          disabled={isLoading || !input.trim()}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>

      <div style={{ marginTop: "10px", fontSize: "12px", color: "#999" }}>
        {messages.length} messages • {isLoading ? "Loading..." : "Ready"}
      </div>
    </div>
  );
}
