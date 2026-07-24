import { useEffect } from 'react';
import { useCallbackRef } from '../utils';

export function useWindowEvent<K extends string>(
  type: K,
  listener: K extends keyof WindowEventMap
    ? (this: Window, ev: WindowEventMap[K]) => void
    : (this: Window, ev: CustomEvent) => void,
  options?: boolean | AddEventListenerOptions
) {
  const stableListener = useCallbackRef(listener);

  useEffect(() => {
    window.addEventListener(type as any, stableListener, options);
    return () => window.removeEventListener(type as any, stableListener, options);
  }, [type]);
}
