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
  const fnRef = useRef<() => void>(null);

  const start = useCallback(() => {
    setActive((old) => {
      if (!old && (!intervalRef.current || intervalRef.current === -1)) {
        intervalRef.current = window.setInterval(fnRef.current!, interval);
      }
      return true;
    });
  }, []);

  const stop = useCallback(() => {
    setActive(false);
    window.clearInterval(intervalRef.current || -1);
    intervalRef.current = -1;
  }, []);

  const toggle = useCallback(() => {
    if (active) {
      stop();
    } else {
      start();
    }
  }, [active]);

  useEffect(() => {
    fnRef.current = fn;
    active && start();
    return stop;
  }, [fn, active, interval]);

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
