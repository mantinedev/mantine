import { useCallback, useEffect, useRef } from 'react';
import { useCallbackRef } from '../use-callback-ref/use-callback-ref';

export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  options: number | { delay: number; flushOnUnmount?: boolean; leading?: boolean }
) {
  const delay = typeof options === 'number' ? options : options.delay;
  const flushOnUnmount = typeof options === 'number' ? false : options.flushOnUnmount;
  const leading = typeof options === 'number' ? false : options.leading;

  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = useRef(0);
  const flushRef = useRef(() => {});
  const leadingRef = useRef(leading);

  const lastCallback = Object.assign(
    useCallback(
      (...args: Parameters<T>) => {
        window.clearTimeout(debounceTimerRef.current);

        if (leading && leadingRef.current) {
          leadingRef.current = false;
          handleCallback(...args);
          return;
        }

        const flush = () => {
          if (debounceTimerRef.current !== 0) {
            debounceTimerRef.current = 0;
            leadingRef.current = true;
            handleCallback(...args);
          }
        };

        flushRef.current = flush;
        lastCallback.flush = flush;
        debounceTimerRef.current = window.setTimeout(flush, delay);
        leadingRef.current = false;
      },
      [handleCallback, delay, leading]
    ),
    { flush: flushRef.current }
  );

  useEffect(
    () => () => {
      window.clearTimeout(debounceTimerRef.current);
      if (flushOnUnmount) {
        lastCallback.flush();
      }
    },
    [lastCallback, flushOnUnmount]
  );

  return lastCallback;
}
