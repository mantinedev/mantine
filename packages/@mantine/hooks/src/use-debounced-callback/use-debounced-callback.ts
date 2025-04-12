import { useCallback, useEffect, useRef } from 'react';
import { useCallbackRef } from '../use-callback-ref/use-callback-ref';

const noop = () => {};

export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  options: number | { delay: number; flushOnUnmount?: boolean }
) {
  const delay = typeof options === 'number' ? options : options.delay;
  const flushOnUnmount = typeof options === 'number' ? false : options.flushOnUnmount;
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = useRef(0);
  const lastFlushRef = useRef<() => void>(noop);

  const lastCallback = useCallback(
    (...args: Parameters<T>) => {
      window.clearTimeout(debounceTimerRef.current);
      const flush = () => {
        if (debounceTimerRef.current !== 0) {
          debounceTimerRef.current = 0;
          handleCallback(...args);
        }
      };
      lastFlushRef.current = flush;
      debounceTimerRef.current = window.setTimeout(flush, delay);
    },
    [handleCallback, delay]
  );
  

  useEffect(
    () => () => {
      window.clearTimeout(debounceTimerRef.current);
      if (flushOnUnmount) {
        lastFlushRef.current();
      }
    },
    [lastCallback, flushOnUnmount]
  );

  return lastCallback;
}
