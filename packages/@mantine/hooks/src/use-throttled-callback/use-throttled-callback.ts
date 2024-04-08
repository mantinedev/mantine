import { useCallback, useRef } from 'react';
import { useCallbackRef } from '../use-callback-ref/use-callback-ref';

export function useThrottledCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
) {
  const handleCallback = useCallbackRef(callback);
  const lastCallTime = useRef(0);
  const lastCallArgs = useRef<Parameters<T>>([] as any);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      const timeSinceLastCall = now - lastCallTime.current;

      if (timeSinceLastCall >= delay) {
        lastCallTime.current = now;
        lastCallArgs.current = args;
        handleCallback(...args);
      }
    },
    [handleCallback, delay]
  );
}
