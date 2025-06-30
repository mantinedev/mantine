import { useEffect, useMemo, useRef } from 'react';
import { useCallbackRef } from '../utils';

export interface UseDebouncedCallbackOptions {
  delay: number;
  flushOnUnmount?: boolean;
  leading?: boolean;
}

export type UseDebouncedCallbackReturnValue<T extends (...args: any[]) => any> = ((
  ...args: Parameters<T>
) => void) & { flush: () => void; cancel: () => void };

export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  options: number | UseDebouncedCallbackOptions
) {
  const { delay, flushOnUnmount, leading } =
    typeof options === 'number'
      ? { delay: options, flushOnUnmount: false, leading: false }
      : options;

  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = useRef(0);

  const lastCallback = useMemo(() => {
    const currentCallback = Object.assign(
      (...args: Parameters<T>) => {
        window.clearTimeout(debounceTimerRef.current);

        const isFirstCall = currentCallback._isFirstCall;
        currentCallback._isFirstCall = false;

        function clearTimeoutAndLeadingRef() {
          window.clearTimeout(debounceTimerRef.current);
          debounceTimerRef.current = 0;
          currentCallback._isFirstCall = true;
        }

        if (leading && isFirstCall) {
          handleCallback(...args);

          const resetLeadingState = () => {
            clearTimeoutAndLeadingRef();
          };

          const flush = () => {
            if (debounceTimerRef.current !== 0) {
              clearTimeoutAndLeadingRef();
              handleCallback(...args);
            }
          };

          const cancel = () => {
            clearTimeoutAndLeadingRef();
          };

          currentCallback.flush = flush;
          currentCallback.cancel = cancel;
          debounceTimerRef.current = window.setTimeout(resetLeadingState, delay);
          return;
        }

        if (leading && !isFirstCall) {
          const flush = () => {
            if (debounceTimerRef.current !== 0) {
              clearTimeoutAndLeadingRef();
              handleCallback(...args);
            }
          };

          const cancel = () => {
            clearTimeoutAndLeadingRef();
          };

          currentCallback.flush = flush;
          currentCallback.cancel = cancel;

          const resetLeadingState = () => {
            clearTimeoutAndLeadingRef();
          };
          debounceTimerRef.current = window.setTimeout(resetLeadingState, delay);
          return;
        }

        const flush = () => {
          if (debounceTimerRef.current !== 0) {
            clearTimeoutAndLeadingRef();
            handleCallback(...args);
          }
        };

        const cancel = () => {
          clearTimeoutAndLeadingRef();
        };

        currentCallback.flush = flush;
        currentCallback.cancel = cancel;
        debounceTimerRef.current = window.setTimeout(flush, delay);
      },
      {
        flush: () => {},
        cancel: () => {},
        _isFirstCall: true,
      }
    );
    return currentCallback;
  }, [handleCallback, delay, leading]);

  useEffect(
    () => () => {
      if (flushOnUnmount) {
        lastCallback.flush();
      } else {
        lastCallback.cancel();
      }
    },
    [lastCallback, flushOnUnmount]
  );

  return lastCallback;
}
