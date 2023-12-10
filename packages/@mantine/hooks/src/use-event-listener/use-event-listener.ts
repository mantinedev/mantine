import { useEffect, useRef } from 'react';

export function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = any>(
  type: K,
  listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
) {
  const ref = useRef<T>();

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener(type, listener as any, options);
      return () => ref.current?.removeEventListener(type, listener as any, options);
    }
    return undefined;
  }, [listener, options]);

  return ref;
}
