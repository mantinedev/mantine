import { useCallback, useEffect, useRef } from 'react';
import { useCallbackRef } from '../use-callback-ref/use-callback-ref';

export function useThrottledCallbackWithClearTimeout<T extends (...args: any[]) => any>(
  callback: T,
  wait: number
) {
  const handleCallback = useCallbackRef(callback);
  const latestInArgsRef = useRef<Parameters<T>>(null);
  const latestOutArgsRef = useRef<Parameters<T>>(null);
  const active = useRef(true);
  const waitRef = useRef(wait);
  const timeoutRef = useRef<number>(-1);

  const clearTimeout = () => window.clearTimeout(timeoutRef.current);

  const callThrottledCallback = useCallback(
    (...args: Parameters<T>) => {
      handleCallback(...args);
      latestInArgsRef.current = args;
      latestOutArgsRef.current = args;
      active.current = false;
    },
    [handleCallback]
  );

  const timerCallback = useCallback(() => {
    if (latestInArgsRef.current && latestInArgsRef.current !== latestOutArgsRef.current) {
      callThrottledCallback(...latestInArgsRef.current);

      timeoutRef.current = window.setTimeout(timerCallback, waitRef.current);
    } else {
      active.current = true;
    }
  }, [callThrottledCallback]);

  const throttled = useCallback(
    (...args: Parameters<T>) => {
      if (active.current) {
        callThrottledCallback(...args);
        timeoutRef.current = window.setTimeout(timerCallback, waitRef.current);
      } else {
        latestInArgsRef.current = args;
      }
    },
    [callThrottledCallback, timerCallback]
  );

  useEffect(() => {
    waitRef.current = wait;
  }, [wait]);

  return [throttled, clearTimeout] as const;
}

export function useThrottledCallback<T extends (...args: any[]) => any>(callback: T, wait: number) {
  return useThrottledCallbackWithClearTimeout(callback, wait)[0];
}
