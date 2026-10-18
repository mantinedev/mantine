import { useCallback } from 'react';

export function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = any>(
  type: K,
  listener: (this: T, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): React.RefCallback<T | null> {
  return useCallback(
    (node) => {
      if (!node) {
        return;
      }

      node.addEventListener(type, listener as any, options);
      return () => node.removeEventListener(type, listener as any, options);
    },
    [type, listener, options]
  );
}
