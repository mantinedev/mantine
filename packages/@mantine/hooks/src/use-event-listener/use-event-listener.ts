import { useEffect, useRef } from 'react';

export function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = any>(
  type: K,
  listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener(type, listener as any, options);
      return () => node?.removeEventListener(type, listener as any, options);
    }
    return undefined;
  }, [listener, options]);

  return ref;
}
