import React, { useRef, useEffect } from 'react';

export type UseEventListener<T> = React.MutableRefObject<T>;

export function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = any>(
  type: K,
  listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): UseEventListener<T> {
  const ref = useRef<T>();

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener(type, listener, options);
      return () => ref.current?.removeEventListener(type, listener, options);
    }
    return undefined;
  }, [listener, options]);

  return ref;
}
