import { useCallback, useEffect, useRef } from 'react';

export function useTimeout(
  callback: (...callbackParams: any[]) => void,
  delay: number,
  options: { autoInvoke: boolean } = { autoInvoke: false }
) {
  const callbackRef = useRef<Function>(null);
  const timeoutRef = useRef<number>(null);

  const start = useCallback(
    (...callbackParams: any[]) => {
      if (!timeoutRef.current) {
        timeoutRef.current = window.setTimeout(() => {
          callbackRef.current(callbackParams);
          timeoutRef.current = null;
        }, delay);
      }
    },
    [delay]
  );

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (options.autoInvoke) {
      start();
    }

    return clear;
  }, [clear, delay, options.autoInvoke, start]);

  return { start, clear };
}
