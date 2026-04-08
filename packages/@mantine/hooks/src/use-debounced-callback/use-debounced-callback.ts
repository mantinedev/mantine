import { useEffect, useMemo, useRef } from 'react';
import { useCallbackRef } from '../utils';

export interface UseDebouncedCallbackOptions {
  delay: number;
  flushOnUnmount?: boolean;
  leading?: boolean;
  maxWait?: number;
}

export type UseDebouncedCallbackReturnValue<T extends (...args: any[]) => any> = ((
  ...args: Parameters<T>
) => void) & { flush: () => void; cancel: () => void; isPending: () => boolean };

export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  options: number | UseDebouncedCallbackOptions
) {
  const { delay, flushOnUnmount, leading, maxWait } =
    typeof options === 'number'
      ? { delay: options, flushOnUnmount: false, leading: false, maxWait: undefined as number | undefined }
      : options;

  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = useRef(0);
  const maxWaitTimerRef = useRef(0);
  const latestArgsRef = useRef<Parameters<T> | null>(null);

  const lastCallback = useMemo(() => {
    const currentCallback = Object.assign(
      (...args: Parameters<T>) => {
        window.clearTimeout(debounceTimerRef.current);
        latestArgsRef.current = args;

        const isFirstCall = currentCallback._isFirstCall;
        currentCallback._isFirstCall = false;

        function clearTimeoutAndLeadingRef() {
          window.clearTimeout(debounceTimerRef.current);
          window.clearTimeout(maxWaitTimerRef.current);
          debounceTimerRef.current = 0;
          maxWaitTimerRef.current = 0;
          currentCallback._isFirstCall = true;
          currentCallback._hasPendingCallback = false;
        }

        function startMaxWaitTimer() {
          if (maxWait !== undefined && maxWaitTimerRef.current === 0) {
            maxWaitTimerRef.current = window.setTimeout(() => {
              if (debounceTimerRef.current !== 0) {
                const latestArgs = latestArgsRef.current!;
                clearTimeoutAndLeadingRef();
                handleCallback(...latestArgs);
              }
            }, maxWait);
          }
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
          startMaxWaitTimer();
          return;
        }

        if (leading && !isFirstCall) {
          currentCallback._hasPendingCallback = true;
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
          startMaxWaitTimer();
          return;
        }

        currentCallback._hasPendingCallback = true;

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
        startMaxWaitTimer();
      },
      {
        flush: () => {},
        cancel: () => {},
        isPending: () => currentCallback._hasPendingCallback,
        _isFirstCall: true,
        _hasPendingCallback: false,
      }
    );
    return currentCallback;
  }, [handleCallback, delay, leading, maxWait]);

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

export namespace useDebouncedCallback {
  export type Options = UseDebouncedCallbackOptions;
  export type ReturnValue<T extends (...args: any[]) => any> = UseDebouncedCallbackReturnValue<T>;
}
