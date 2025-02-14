import { useCallback, useRef, type RefCallback } from 'react';

export function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = any>(
  type: K,
  listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
) {
  const cleanupAbortControllerRef = useRef<AbortController>(null);

  const onRefChange: RefCallback<T> = useCallback((node) => {
    cleanupAbortControllerRef.current?.abort();

    cleanupAbortControllerRef.current = new AbortController();
    const {signal, abort} = cleanupAbortControllerRef.current;

    let parsedOptions = {};

    if (options && typeof options === 'object') {
      options.signal?.addEventListener('abort', abort);
      parsedOptions = { ...options, signal };
    }
    else if (typeof options === 'boolean') {
      parsedOptions = { capture: options };
    }


    node?.addEventListener(type, listener, parsedOptions);
  }, [type, listener, options]);

  return onRefChange;
}
