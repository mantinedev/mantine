import { useEffect } from 'react';

export function useWindowEvent<K extends string>(
  type: K,
  listener: K extends keyof WindowEventMap
    ? (this: Window, ev: WindowEventMap[K]) => void
    : (this: Window, ev: CustomEvent) => void,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    window.addEventListener(type as any, listener, options);
    return () => window.removeEventListener(type as any, listener, options);
  }, [type, listener]);
}
