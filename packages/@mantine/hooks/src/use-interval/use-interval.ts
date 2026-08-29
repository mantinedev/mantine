import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseIntervalOptions {
  /** If set, the interval will start automatically when the component is mounted, `false` by default */
  autoInvoke?: boolean;
}

export interface UseIntervalReturnValue {
  /** Starts the interval */
  start: () => void;

  /** Stops the interval */
  stop: () => void;

  /** Toggles the interval */
  toggle: () => void;

  /** Indicates if the interval is active */
  active: boolean;
}

export function useInterval(
  fn: () => void,
  interval: number,
  { autoInvoke = false }: UseIntervalOptions = {}
): UseIntervalReturnValue {
  const [active, setActive] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const fnRef = useRef(fn);
  fnRef.current = fn;
  const intervalValueRef = useRef(interval);
  intervalValueRef.current = interval;

  const start = useCallback(() => {
    setActive((old) => {
      if (!old && !intervalRef.current) {
        intervalRef.current = window.setInterval(() => fnRef.current(), intervalValueRef.current);
      }
      return true;
    });
  }, []);

  const stop = useCallback(() => {
    setActive(false);
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = null;
  }, []);

  const toggle = useCallback(() => {
    setActive((current) => {
      if (current) {
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current);
        }
        intervalRef.current = null;
        return false;
      }
      if (!intervalRef.current) {
        intervalRef.current = window.setInterval(() => fnRef.current(), intervalValueRef.current);
      }
      return true;
    });
  }, []);

  // `fn` is deliberately not a dependency. The interval calls through `fnRef`, so it
  // always runs the latest callback without being torn down; restarting on every new
  // `fn` identity meant an inline arrow reset the timer on each render, and a component
  // re-rendering faster than `interval` never reached a tick at all.
  useEffect(() => {
    active && start();
    return stop;
  }, [active, interval]);

  useEffect(() => {
    if (autoInvoke) {
      start();
    }
  }, []);

  return { start, stop, toggle, active };
}

export namespace useInterval {
  export type Options = UseIntervalOptions;
  export type ReturnValue = UseIntervalReturnValue;
}
