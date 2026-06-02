import { ChatClient } from '@tanstack/ai-client'
import { createChatDevtoolsBridge } from '@tanstack/ai-client/devtools'
import { useEffect, useId, useMemo, useRef, useSyncExternalStore } from 'react'
import type {
  AnyClientTool,
  InferSchemaType,
  ModelMessage,
  SchemaInput,
} from '@tanstack/ai/client'
import type {
  ChatClientState,
  ConnectionStatus,
  InferredClientContext,
  StructuredOutputPart,
} from '@tanstack/ai-client'

import type {
  DeepPartial,
  MultimodalContent,
  UIMessage,
  UseChatOptions,
  UseChatReturn,
} from './types'

/**
 * Immutable view of everything the hook renders from a `ChatClient`. Bundling
 * it into one object gives `useSyncExternalStore` a single value to diff: its
 * identity changes exactly when the client pushes a state change, and never
 * otherwise — so React re-renders precisely when it should.
 */
interface ChatSnapshot<TTools extends ReadonlyArray<AnyClientTool>> {
  messages: Array<UIMessage<TTools>>
  isLoading: boolean
  error: Error | undefined
  status: ChatClientState
  isSubscribed: boolean
  connectionStatus: ConnectionStatus
  sessionGenerating: boolean
}

/** Stable, bound imperatives. Created once per client, safe to spread into the
 *  return value without `useCallback`. */
interface ChatActions<TTools extends ReadonlyArray<AnyClientTool>> {
  sendMessage: (content: string | MultimodalContent) => Promise<void>
  append: (message: ModelMessage | UIMessage) => Promise<void>
  reload: () => Promise<void>
  stop: () => void
  clear: () => void
  setMessages: (messages: Array<UIMessage<TTools>>) => void
  addToolResult: (result: {
    toolCallId: string
    tool: string
    output: any
    state?: 'output-available' | 'output-error'
    errorText?: string
  }) => Promise<void>
  addToolApprovalResponse: (response: {
    id: string
    approved: boolean
  }) => Promise<void>
}

interface ChatStore<TTools extends ReadonlyArray<AnyClientTool>, TContext> {
  client: ChatClient<TTools, TContext>
  subscribe: (onStoreChange: () => void) => () => void
  getSnapshot: () => ChatSnapshot<TTools>
  actions: ChatActions<TTools>
}

/**
 * Wrap a single `ChatClient` as a React external store.
 *
 * The client is already an imperative store with getters and per-field change
 * callbacks. Here every channel — messages, loading, error, status,
 * subscription, connection, session — collapses into one `emit()` that rebuilds
 * the cached snapshot and wakes subscribers. `useSyncExternalStore` owns the
 * subscription lifecycle from there, including teardown when the client is
 * swapped, which is what lets the hook drop the seven `useState` setters, the
 * post-mount resync, and every "is this still the active client?" guard.
 *
 * Side-effect callbacks (`onResponse` / `onChunk` / `onFinish` / `onError` /
 * `onCustomEvent`) read through `optionsRef`, so changing them between renders
 * updates behavior without recreating the client.
 */
function createChatStore<
  TTools extends ReadonlyArray<AnyClientTool>,
  TSchema extends SchemaInput | undefined,
  TContext,
>(
  clientId: string,
  optionsRef: { current: UseChatOptions<TTools, TSchema, TContext> },
): ChatStore<TTools, TContext> {
  // `readSnapshot` closes over the `client` constant declared below; the
  // closure is only ever invoked after construction, so the forward reference
  // is safe (and the `emit` guard covers any synchronous constructor callback).
  let snapshot: ChatSnapshot<TTools> | undefined
  const listeners = new Set<() => void>()

  const readSnapshot = (): ChatSnapshot<TTools> => ({
    messages: client.getMessages(),
    isLoading: client.getIsLoading(),
    error: client.getError(),
    status: client.getStatus(),
    isSubscribed: client.getIsSubscribed(),
    connectionStatus: client.getConnectionStatus(),
    sessionGenerating: client.getSessionGenerating(),
  })

  // Rebuild the snapshot and notify React. The guard ignores any callback that
  // could fire synchronously during `new ChatClient` — before the first
  // snapshot exists — since the constructor reads a fresh snapshot right after.
  const emit = (): void => {
    if (!snapshot) return
    snapshot = readSnapshot()
    listeners.forEach((listener) => listener())
  }

  const options = optionsRef.current
  const transport = options.connection
    ? { connection: options.connection }
    : { fetcher: options.fetcher }

  // Conditional spreads omit keys whose value is `undefined`: the source type
  // is `T | undefined`, but `ChatClient` declares strict optionals (`field?: T`)
  // that `exactOptionalPropertyTypes` forbids assigning `undefined` to.
  const client = new ChatClient<TTools, TContext>({
    devtoolsBridgeFactory: createChatDevtoolsBridge,
    ...transport,
    id: clientId,
    initialMessages: options.initialMessages ?? [],
    ...(options.body !== undefined && { body: options.body }),
    ...(options.forwardedProps !== undefined && {
      forwardedProps: options.forwardedProps,
    }),
    ...(options.persistence !== undefined && {
      persistence: options.persistence,
    }),
    ...(options.context !== undefined && { context: options.context }),
    ...(options.tools !== undefined && { tools: options.tools }),
    ...(options.streamProcessor !== undefined && {
      streamProcessor: options.streamProcessor,
    }),
    devtools: {
      ...options.devtools,
      framework: 'react',
      hookName: 'useChat',
      outputKind: options.outputSchema ? 'structured' : 'chat',
    },
    onResponse: (response) => optionsRef.current.onResponse?.(response),
    onChunk: (chunk) => optionsRef.current.onChunk?.(chunk),
    onFinish: (message) => optionsRef.current.onFinish?.(message),
    onError: (error) => optionsRef.current.onError?.(error),
    onCustomEvent: (eventType, data, context) =>
      optionsRef.current.onCustomEvent?.(eventType, data, context),
    onMessagesChange: emit,
    onLoadingChange: emit,
    onErrorChange: emit,
    onStatusChange: emit,
    onSubscriptionChange: emit,
    onConnectionStatusChange: emit,
    onSessionGeneratingChange: emit,
  })

  snapshot = readSnapshot()

  return {
    client,
    subscribe: (onStoreChange) => {
      listeners.add(onStoreChange)
      return () => {
        listeners.delete(onStoreChange)
      }
    },
    getSnapshot: () => snapshot as ChatSnapshot<TTools>,
    actions: {
      sendMessage: (content) => client.sendMessage(content),
      append: (message) => client.append(message),
      reload: () => client.reload(),
      stop: () => client.stop(),
      clear: () => client.clear(),
      setMessages: (messages) => client.setMessagesManually(messages),
      addToolResult: (result) => client.addToolResult(result),
      addToolApprovalResponse: (response) =>
        client.addToolApprovalResponse(response),
    },
  }
}

/**
 * Resolve the `partial` / `final` structured-output pair from the current
 * messages. They come from the structured-output part on the assistant message
 * that follows the latest user message: between `sendMessage()` and the first
 * chunk no such message exists, so both naturally read as cleared, while
 * historical parts stay reachable via `messages`. With no user message yet
 * (e.g. `initialMessages` holds only a stale assistant turn) we return the
 * empty/null pair rather than scanning backwards, so a previous session's
 * `final` can't leak into the first render.
 */
function selectStructuredOutput<TTools extends ReadonlyArray<AnyClientTool>>(
  messages: Array<UIMessage<TTools>>,
): { active: StructuredOutputPart | null } {
  let lastUserIndex = -1
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i]?.role === 'user') {
      lastUserIndex = i
      break
    }
  }
  if (lastUserIndex === -1) return { active: null }
  for (let i = messages.length - 1; i > lastUserIndex; i--) {
    const message = messages[i]
    if (message?.role !== 'assistant') continue
    const part = message.parts.find(
      (p): p is StructuredOutputPart => p.type === 'structured-output',
    )
    if (part) return { active: part }
  }
  return { active: null }
}

// Public signature: the refined, schema-conditional return.
export function useChat<
  TTools extends ReadonlyArray<AnyClientTool> = any,
  TSchema extends SchemaInput | undefined = undefined,
  TContext = InferredClientContext<TTools>,
>(
  options: UseChatOptions<TTools, TSchema, TContext>,
): UseChatReturn<TTools, TSchema>
// Implementation signature: the always-present runtime shape. The body is
// checked against this (so no cast is needed); callers only ever see the
// overload above, so the conditional `partial`/`final` surface is preserved.
export function useChat<
  TTools extends ReadonlyArray<AnyClientTool>,
  TSchema extends SchemaInput | undefined,
  TContext,
>(
  options: UseChatOptions<TTools, TSchema, TContext>,
): UseChatReturn<TTools, SchemaInput> {
  type Partial = DeepPartial<InferSchemaType<NonNullable<TSchema>>>
  type Final = InferSchemaType<NonNullable<TSchema>>

  const hookId = useId()
  const clientId = options.id || hookId

  // The store's stable callbacks read the latest options through this ref, so
  // changing side-effect handlers or structural options never recreates the
  // client. Synced during render so it is current before any callback fires.
  const optionsRef = useRef(options)
  optionsRef.current = options

  // One store per `clientId`. Connection/body/context changes flow through
  // `updateOptions` below rather than a remount, so the client is recreated
  // only when its identity (`clientId`) actually changes.
  const store = useMemo(
    () => createChatStore<TTools, TSchema, TContext>(clientId, optionsRef),
    [clientId],
  )
  const { client, actions } = store

  const snapshot = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getSnapshot,
  )

  // Mount devtools and bind the client's imperative resources (in-flight
  // stream, devtools bridge) to this component. `dispose()` is reversible — a
  // later mount re-arms it via `mountDevtools()` — so StrictMode's
  // mount → cleanup → mount cycle is safe without any deferral.
  useEffect(() => {
    client.mountDevtools()
    return () => {
      client.stop()
      client.dispose()
    }
  }, [client])

  // Push structural option changes into the long-lived client. Conditional
  // spread for `forwardedProps`: `updateOptions` declares it strict-optional
  // and rejects an explicit `undefined` under `exactOptionalPropertyTypes`.
  useEffect(() => {
    client.updateOptions({
      body: options.body,
      ...(options.forwardedProps !== undefined && {
        forwardedProps: options.forwardedProps,
      }),
      context: options.context,
    })
  }, [client, options.body, options.forwardedProps, options.context])

  // Opt-in live subscription: subscribe while `live` is set, tear down when it
  // flips off or the component unmounts.
  useEffect(() => {
    if (!options.live) return
    client.subscribe()
    return () => {
      client.unsubscribe()
    }
  }, [client, options.live])

  const { active } = selectStructuredOutput(snapshot.messages)
  const partial = (
    active ? (active.partial ?? active.data ?? {}) : {}
  ) as Partial
  const final =
    active && active.status === 'complete' ? (active.data as Final) : null

  return {
    messages: snapshot.messages,
    sendMessage: actions.sendMessage,
    append: actions.append,
    reload: actions.reload,
    stop: actions.stop,
    isLoading: snapshot.isLoading,
    error: snapshot.error,
    status: snapshot.status,
    isSubscribed: snapshot.isSubscribed,
    connectionStatus: snapshot.connectionStatus,
    sessionGenerating: snapshot.sessionGenerating,
    setMessages: actions.setMessages,
    clear: actions.clear,
    addToolResult: actions.addToolResult,
    addToolApprovalResponse: actions.addToolApprovalResponse,
    partial,
    final,
  }
}
