import { createFileRoute } from "@tanstack/react-router";
import { AI } from "@tanstack/ai";
import { AnthropicAdapter } from "@tanstack/ai-anthropic";
import type { Tool } from "@tanstack/ai";

import guitars from "@/data/example-guitars";

const SYSTEM_PROMPT = `You are a helpful assistant for a store that sells guitars.

You can use the following tools to help the user:

- getGuitars: Get all guitars from the database
- recommendGuitar: Recommend a guitar to the user
`;

// Define tools in TanStack AI format
const tools: Tool[] = [
  {
    type: "function",
    function: {
      name: "getGuitars",
      description: "Get all products from the database",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "recommendGuitar",
      description: "Use this tool to recommend a guitar to the user",
      parameters: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "The id of the guitar to recommend",
          },
        },
        required: ["id"],
      },
    },
  },
];

// Tool executors
async function executeTool(
  toolName: string,
  argsJson: string
): Promise<string> {
  const args = JSON.parse(argsJson);

  switch (toolName) {
    case "getGuitars":
      return JSON.stringify(guitars);
    case "recommendGuitar":
      return JSON.stringify({ id: args.id });
    default:
      return JSON.stringify({ error: `Unknown tool: ${toolName}` });
  }
}

export const Route = createFileRoute("/demo/api/tanchat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } = await request.json();

          // Initialize AI with Anthropic
          const ai = new AI(
            new AnthropicAdapter({
              apiKey: process.env.ANTHROPIC_API_KEY!,
            })
          );

          // Set up streaming response
          const encoder = new TextEncoder();
          const stream = new ReadableStream({
            async start(controller) {
              try {
                // Add system message if not present
                const allMessages =
                  messages[0]?.role === "system"
                    ? messages
                    : [{ role: "system", content: SYSTEM_PROMPT }, ...messages];

                let iterationCount = 0;
                const maxIterations = 5;

                while (iterationCount < maxIterations) {
                  iterationCount++;

                  const toolCalls: any[] = [];
                  const toolCallsMap = new Map();

                  // Stream the response
                  for await (const chunk of ai.streamChat({
                    model: "claude-3-5-sonnet-20241022",
                    messages: allMessages,
                    temperature: 0.7,
                    tools,
                    toolChoice: "auto",
                  })) {
                    // Send chunk to client
                    controller.enqueue(
                      encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`)
                    );

                    // Accumulate tool calls
                    if (chunk.type === "tool_call") {
                      const existing = toolCallsMap.get(chunk.index) || {
                        id: chunk.toolCall.id,
                        name: "",
                        args: "",
                      };

                      if (chunk.toolCall.function.name) {
                        existing.name = chunk.toolCall.function.name;
                      }
                      existing.args += chunk.toolCall.function.arguments;
                      toolCallsMap.set(chunk.index, existing);
                    }

                    // Check if done and need to execute tools
                    if (
                      chunk.type === "done" &&
                      chunk.finishReason === "tool_calls"
                    ) {
                      toolCallsMap.forEach((call) => {
                        toolCalls.push({
                          id: call.id,
                          type: "function",
                          function: {
                            name: call.name,
                            arguments: call.args,
                          },
                        });
                      });
                    }
                  }

                  // If tools were called, execute them and continue
                  if (toolCalls.length > 0) {
                    // Add assistant message with tool calls
                    allMessages.push({
                      role: "assistant",
                      content: null,
                      toolCalls,
                    });

                    // Execute tools
                    for (const toolCall of toolCalls) {
                      const result = await executeTool(
                        toolCall.function.name,
                        toolCall.function.arguments
                      );

                      allMessages.push({
                        role: "tool",
                        content: result,
                        toolCallId: toolCall.id,
                        name: toolCall.function.name,
                      });

                      // Send tool execution as a chunk
                      controller.enqueue(
                        encoder.encode(
                          `data: ${JSON.stringify({
                            type: "tool_result",
                            toolName: toolCall.function.name,
                            result,
                          })}\n\n`
                        )
                      );
                    }

                    // Continue loop to get final response
                    continue;
                  } else {
                    // No more tools, we're done
                    break;
                  }
                }

                controller.enqueue(encoder.encode("data: [DONE]\n\n"));
                controller.close();
              } catch (error: any) {
                controller.enqueue(
                  encoder.encode(
                    `data: ${JSON.stringify({
                      type: "error",
                      error: { message: error.message },
                    })}\n\n`
                  )
                );
                controller.close();
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
        } catch (error) {
          console.error("Chat API error:", error);
          return new Response(
            JSON.stringify({ error: "Failed to process chat request" }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      },
    },
  },
});
