import { useState, useCallback, useRef, useId } from "react";
import type { Message, StreamChunk } from "@tanstack/ai";
import type {
  UseChatOptions,
  UseChatReturn,
  ChatMessage,
  ChatRequestBody,
} from "./types";

export function useChat(options: UseChatOptions = {}): UseChatReturn {
  const {
    api = "/api/chat",
    initialMessages = [],
    id: chatId,
    onResponse,
    onChunk,
    onFinish,
    onError,
    headers,
    body: extraBody,
    credentials = "same-origin",
    fetch: customFetch,
  } = options;

  const hookId = useId();
  const uniqueId = chatId || hookId;

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const abortControllerRef = useRef<AbortController | null>(null);
  const fetchImpl = customFetch || fetch;

  const generateId = useCallback(() => {
    return `${uniqueId}-${Date.now()}-${Math.random()
      .toString(36)
      .substring(7)}`;
  }, [uniqueId]);

  const processStream = useCallback(
    async (response: Response): Promise<ChatMessage> => {
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("Response body is not readable");
      }

      const decoder = new TextDecoder();
      let accumulatedContent = "";
      const assistantMessageId = generateId();
      const assistantMessage: ChatMessage = {
        id: assistantMessageId,
        role: "assistant",
        content: "",
        createdAt: new Date(),
      };

      // Add the assistant message placeholder
      setMessages((prev) => [...prev, assistantMessage]);

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n").filter((line) => line.trim() !== "");

          for (const line of lines) {
            // Handle Server-Sent Events format
            const data = line.startsWith("data: ") ? line.slice(6) : line;

            if (data === "[DONE]") continue;

            try {
              const parsed: StreamChunk = JSON.parse(data);

              // Call the onChunk callback
              onChunk?.(parsed);

              if (parsed.type === "content") {
                accumulatedContent = parsed.content;

                // Update the assistant message in place
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === assistantMessageId
                      ? { ...msg, content: accumulatedContent }
                      : msg
                  )
                );
              } else if (parsed.type === "tool_call") {
                // Handle tool calls if needed
                // For now, just accumulate in message
                setMessages((prev) =>
                  prev.map((msg) => {
                    if (msg.id === assistantMessageId) {
                      const existingToolCalls = msg.toolCalls || [];
                      const toolCallIndex = parsed.index;

                      // Update or add tool call at index
                      const updatedToolCalls = [...existingToolCalls];
                      if (!updatedToolCalls[toolCallIndex]) {
                        updatedToolCalls[toolCallIndex] = {
                          id: parsed.toolCall.id,
                          type: "function",
                          function: {
                            name: parsed.toolCall.function.name,
                            arguments: parsed.toolCall.function.arguments,
                          },
                        };
                      } else {
                        updatedToolCalls[toolCallIndex].function.arguments +=
                          parsed.toolCall.function.arguments;
                      }

                      return { ...msg, toolCalls: updatedToolCalls };
                    }
                    return msg;
                  })
                );
              } else if (parsed.type === "error") {
                throw new Error(parsed.error.message);
              }
            } catch (parseError) {
              // Skip non-JSON lines or malformed chunks
              console.warn("Failed to parse chunk:", data, parseError);
            }
          }
        }
      } finally {
        reader.releaseLock();
      }

      // Final message
      const finalMessage: ChatMessage = {
        id: assistantMessageId,
        role: "assistant",
        content: accumulatedContent,
        createdAt: new Date(),
      };

      // Update with final message
      setMessages((prev) =>
        prev.map((msg) => (msg.id === assistantMessageId ? finalMessage : msg))
      );

      return finalMessage;
    },
    [generateId, onChunk]
  );

  const append = useCallback(
    async (message: Message | ChatMessage) => {
      const chatMessage: ChatMessage = {
        ...(message as ChatMessage),
        id: (message as ChatMessage).id || generateId(),
        createdAt: (message as ChatMessage).createdAt || new Date(),
      };

      // Add user message immediately
      setMessages((prev) => [...prev, chatMessage]);
      setIsLoading(true);
      setError(undefined);

      // Create abort controller for this request
      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      try {
        // Prepare request body
        const requestBody: ChatRequestBody = {
          messages: [...messages, chatMessage].map((msg) => ({
            role: msg.role,
            content: msg.content,
            name: msg.name,
            toolCalls: msg.toolCalls,
            toolCallId: msg.toolCallId,
          })),
          data: extraBody,
        };

        // Make the request
        const requestHeaders: Record<string, string> = {
          "Content-Type": "application/json",
        };

        // Add custom headers
        if (headers) {
          if (headers instanceof Headers) {
            headers.forEach((value, key) => {
              requestHeaders[key] = value;
            });
          } else {
            Object.assign(requestHeaders, headers);
          }
        }

        const response = await fetchImpl(api, {
          method: "POST",
          headers: requestHeaders,
          body: JSON.stringify(requestBody),
          credentials,
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(
            `HTTP error! status: ${response.status} ${response.statusText}`
          );
        }

        // Call onResponse callback
        await onResponse?.(response);

        // Process the streaming response
        const assistantMessage = await processStream(response);

        // Call onFinish callback
        onFinish?.(assistantMessage);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            // Request was aborted, ignore
            return;
          }

          setError(err);
          onError?.(err);
        }
      } finally {
        setIsLoading(false);
        abortControllerRef.current = null;
      }
    },
    [
      messages,
      generateId,
      api,
      headers,
      extraBody,
      credentials,
      fetchImpl,
      onResponse,
      onFinish,
      onError,
      processStream,
    ]
  );

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) {
        return;
      }

      const userMessage: ChatMessage = {
        id: generateId(),
        role: "user",
        content: content.trim(),
        createdAt: new Date(),
      };

      await append(userMessage);
    },
    [isLoading, generateId, append]
  );

  const reload = useCallback(async () => {
    if (messages.length === 0) return;

    // Find the last user message
    let lastUserMessageIndex = -1;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === "user") {
        lastUserMessageIndex = i;
        break;
      }
    }

    if (lastUserMessageIndex === -1) return;

    // Remove all messages after the last user message
    const messagesToKeep = messages.slice(0, lastUserMessageIndex + 1);
    setMessages(messagesToKeep);

    // Resend the last user message
    await append(messages[lastUserMessageIndex]);
  }, [messages, append]);

  const stop = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsLoading(false);
    }
  }, []);

  const clear = useCallback(() => {
    setMessages([]);
    setError(undefined);
  }, []);

  return {
    messages,
    sendMessage,
    append,
    reload,
    stop,
    isLoading,
    error,
    setMessages,
    clear,
  };
}
