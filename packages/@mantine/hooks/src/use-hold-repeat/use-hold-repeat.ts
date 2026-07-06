import { useEffect, useMemo, useRef } from 'react';

export type UseHoldRepeatInterval = number | ((count: number) => number);

export interface UseHoldRepeatOptions {
  /** Initial delay in ms before repeating begins after the first trigger. Repeat happens only when both `delay` and `interval` are set. */
  delay?: number;

  /** Interval in ms between repeats, or `(count) => ms` for dynamic/accelerating intervals. Repeat happens only when both `delay` and `interval` are set. */
  interval?: UseHoldRepeatInterval;

  /** Called once when a hold starts, before the first trigger */
  onStart?: () => void;

  /** Called once when a hold stops */
  onStop?: () => void;
}

export interface UseHoldRepeatReturnValue {
  /** Fires the trigger once, then schedules repeats while held */
  start: () => void;

  /** Stops repeating and resets the internal step count */
  stop: () => void;
}

export function useHoldRepeat(
  onTrigger: () => void,
  options: UseHoldRepeatOptions = {}
): UseHoldRepeatReturnValue {
  const onTriggerRef = useRef(onTrigger);
  onTriggerRef.current = onTrigger;

  const optionsRef = useRef(options);
  optionsRef.current = options;

  const timeoutRef = useRef<number | null>(null);
  const countRef = useRef(0);
  const activeRef = useRef(false);

  useEffect(
    () => () => {
      activeRef.current = false;
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    },
    []
  );

  return useMemo(() => {
    const clearPending = () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const fireTrigger = () => {
      onTriggerRef.current();
      countRef.current += 1;
    };

    const scheduleNext = (ms: number) => {
      timeoutRef.current = window.setTimeout(() => {
        fireTrigger();
        const { delay, interval } = optionsRef.current;
        if (activeRef.current && delay !== undefined && interval !== undefined) {
          scheduleNext(typeof interval === 'function' ? interval(countRef.current) : interval);
        }
      }, ms);
    };

    const start = () => {
      clearPending();
      activeRef.current = true;
      countRef.current = 0;
      optionsRef.current.onStart?.();
      fireTrigger();

      const { delay, interval } = optionsRef.current;
      if (activeRef.current && delay !== undefined && interval !== undefined) {
        scheduleNext(delay);
      }
    };

    const stop = () => {
      clearPending();
      countRef.current = 0;
      if (activeRef.current) {
        activeRef.current = false;
        optionsRef.current.onStop?.();
      }
    };

    return { start, stop };
  }, []);
}

export namespace useHoldRepeat {
  export type Options = UseHoldRepeatOptions;
  export type Interval = UseHoldRepeatInterval;
  export type ReturnValue = UseHoldRepeatReturnValue;
}
