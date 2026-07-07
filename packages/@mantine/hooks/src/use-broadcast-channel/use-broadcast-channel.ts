import { useCallback, useEffect, useRef, useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

export interface UseBroadcastChannelReturnValue<T> {
  /** `true` if the BroadcastChannel API is available in the current environment */
  supported: boolean;

  /** The underlying BroadcastChannel instance, `null` on the server and after `close` */
  channel: BroadcastChannel | null;

  /** Data of the last message received from another context, `undefined` until a message arrives */
  data: T | undefined;

  /** Posts a message to all other contexts subscribed to the same channel name */
  post: (data: T) => void;

  /** The last `messageerror` event (fired when a message cannot be deserialized), `null` otherwise */
  error: MessageEvent | null;

  /** Closes the channel manually, after which `post` becomes a no-op until the channel is recreated */
  close: () => void;
}

export function useBroadcastChannel<T = any>(name: string): UseBroadcastChannelReturnValue<T> {
  const [supported, setSupported] = useState(false);
  const [channel, setChannel] = useState<BroadcastChannel | null>(null);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<MessageEvent | null>(null);
  const channelRef = useRef<BroadcastChannel | null>(null);

  useIsomorphicEffect(() => {
    setSupported(typeof window !== 'undefined' && 'BroadcastChannel' in window);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !('BroadcastChannel' in window)) {
      return undefined;
    }

    const instance = new BroadcastChannel(name);
    channelRef.current = instance;
    setChannel(instance);

    const handleMessage = (event: MessageEvent) => setData(event.data);
    const handleError = (event: MessageEvent) => setError(event);

    instance.addEventListener('message', handleMessage);
    instance.addEventListener('messageerror', handleError);

    return () => {
      instance.removeEventListener('message', handleMessage);
      instance.removeEventListener('messageerror', handleError);
      instance.close();
      channelRef.current = null;
      setChannel(null);
    };
  }, [name]);

  const post = useCallback((message: T) => {
    channelRef.current?.postMessage(message);
  }, []);

  const close = useCallback(() => {
    channelRef.current?.close();
    channelRef.current = null;
    setChannel(null);
  }, []);

  return { supported, channel, data, post, error, close };
}
