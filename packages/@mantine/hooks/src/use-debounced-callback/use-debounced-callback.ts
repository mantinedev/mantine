import { useEffect, useMemo, useRef } from 'react';
import { useCallbackRef } from '../utils';

export interface UseDebouncedCallbackOptions {
  delay: number;
  flushOnUnmount?: boolean;
  leading?: boolean;
  trailing?: boolean;
}

export type UseDebouncedCallbackReturnValue<T extends (...args: any[]) => any> = ((
  ...args: Parameters<T>
) => void) & { flush: () => void; cancel: () => void };

export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  options: number | UseDebouncedCallbackOptions
) {
  const { delay, flushOnUnmount, leading, trailing } =
    typeof options === 'number'
      ? { delay: options, flushOnUnmount: false, leading: false, trailing: true }
      : options;

  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = useRef(0);

  const lastCallback = useMemo(() => {
    const currentCallback = Object.assign(
      (...args: Parameters<T>) => {
        window.clearTimeout(debounceTimerRef.current);

        const isFirstCall = currentCallback._isFirstCall;
        currentCallback._isFirstCall = false;

        const clearTimeoutAndLeadingRef = ()=>{
          window.clearTimeout(debounceTimerRef.current);
          debounceTimerRef.current = 0;
          currentCallback._isFirstCall = true;
        }

        const flush = () => {
          if (debounceTimerRef.current !== 0) {
            clearTimeoutAndLeadingRef();
            handleCallback(...args);
          }
        };

        currentCallback.flush = flush;
        currentCallback.cancel = clearTimeoutAndLeadingRef;

        if (leading) {
          if (isFirstCall) {
            handleCallback(...args);
          }

          if (!(trailing ?? true)) {
            debounceTimerRef.current = window.setTimeout(clearTimeoutAndLeadingRef, delay);
            return;
          }
        }

        debounceTimerRef.current = window.setTimeout(flush, delay);
      },
      {
        flush: () => {},
        cancel: () => {},
        _isFirstCall: true,
      }
    );
    return currentCallback;
  }, [handleCallback, delay, leading, trailing]);

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
