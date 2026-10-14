import { useCallback, useEffect, useRef } from 'react';

interface RegisteredListener<T extends HTMLElement> {
  node: T;
  type: string;
  listener: Function;
  options?: boolean | AddEventListenerOptions;
}

function removeRegisteredListener<T extends HTMLElement>(registered: RegisteredListener<T>) {
  registered.node.removeEventListener(
    registered.type,
    registered.listener as any,
    registered.options
  );
}

export function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = any>(
  type: K,
  listener: (this: T, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): React.RefCallback<T | null> {
  const registered = useRef<RegisteredListener<T> | null>(null);

  const callbackRef: React.RefCallback<T | null> = useCallback(
    (node) => {
      if (!node) {
        return;
      }

      if (registered.current) {
        removeRegisteredListener(registered.current);
      }

      node.addEventListener(type, listener as any, options);
      registered.current = { node, type, listener, options };
    },
    [type, listener, options]
  );

  useEffect(
    () => () => {
      if (registered.current) {
        removeRegisteredListener(registered.current);
        registered.current = null;
      }
    },
    []
  );

  return callbackRef;
}
