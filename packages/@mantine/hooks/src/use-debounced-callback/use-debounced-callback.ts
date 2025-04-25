import { useCallback, useEffect, useRef } from 'react';
import { useCallbackRef } from '../use-callback-ref/use-callback-ref';

export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  options: number | { delay: number; flushOnUnmount?: boolean }
) {
  const delay = typeof options === 'number' ? options : options.delay;
  const flushOnUnmount = typeof options === 'number' ? false : options.flushOnUnmount;
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = useRef(0);
  const isPendingRef = useRef(false);

  const lastArgsRef = useRef<Parameters<T> | null>(null);

  const flush = useCallback(() => {
    if (debounceTimerRef.current !== 0) {
      window.clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = 0;

      if (lastArgsRef.current !== null) {
        isPendingRef.current = false;
        handleCallback(...lastArgsRef.current);
      }
    }
  }, [handleCallback]);

  const lastCallback = Object.assign(
    useCallback(
      (...args: Parameters<T>) => {
        lastArgsRef.current = args;
        isPendingRef.current = true;

        window.clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = window.setTimeout(() => {
          debounceTimerRef.current = 0;
          isPendingRef.current = false;
          handleCallback(...args);
        }, delay);
      },
      [handleCallback, delay, flush]
    ),
    { flush }
  );

  useEffect(
    () => () => {
      window.clearTimeout(debounceTimerRef.current);
      if (flushOnUnmount && isPendingRef.current && lastArgsRef.current !== null) {
        handleCallback(...lastArgsRef.current);
      }
    },
    [flushOnUnmount, handleCallback]
  );

  return lastCallback;
}
