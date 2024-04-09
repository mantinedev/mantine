import { useCallback, useRef } from 'react';
import { useCallbackRef } from '../use-callback-ref/use-callback-ref';

export function useThrottledCallback<T extends (...args: any[]) => any>(callback: T, wait: number) {
  const handleCallback = useCallbackRef(callback);
  const active = useRef(true);
  const timeout = useRef<number>(-1);

  const throttled = useCallback(
    (...args: Parameters<T>) => {
      if (active.current) {
        active.current = false;
        handleCallback(...args);
        timeout.current = window.setTimeout(() => {
          active.current = true;
        }, wait);
      }
    },
    [wait]
  );

  return throttled;
}
