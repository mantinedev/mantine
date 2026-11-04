import { useEffect, useEffectEvent } from 'react';

export function useWindowEvent<K extends string>(
  type: K,
  listener: K extends keyof WindowEventMap
    ? (this: Window, ev: WindowEventMap[K]) => void
    : (this: Window, ev: CustomEvent) => void,
  options?: boolean | AddEventListenerOptions
) {
  const stableListener = useEffectEvent(listener);
  const {
    capture = false,
    passive,
    once = false,
    signal,
  } = typeof options === 'object' ? options : { capture: options };

  useEffect(() => {
    window.addEventListener(type as any, stableListener, { capture, passive, once, signal });
    return () => window.removeEventListener(type as any, stableListener, capture);
  }, [type, capture, passive, once, signal]);
}
