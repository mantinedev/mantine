import { useCallback, useState } from 'react';
import { clamp } from '../utils';

const DEFAULT_OPTIONS = {
  min: -Infinity,
  max: Infinity,
};

export interface UseCounterOptions {
  min?: number;
  max?: number;
}

export interface UseCounterHandlers {
  increment: () => void;
  decrement: () => void;
  set: (value: number) => void;
  reset: () => void;
}

export type UseCounterReturnValue = [number, UseCounterHandlers];

export function useCounter(initialValue = 0, options?: UseCounterOptions): UseCounterReturnValue {
  const { min, max } = { ...DEFAULT_OPTIONS, ...options };
  const [count, setCount] = useState<number>(clamp(initialValue, min, max));

  const increment = useCallback(
    () => setCount((current) => clamp(current + 1, min, max)),
    [min, max]
  );

  const decrement = useCallback(
    () => setCount((current) => clamp(current - 1, min, max)),
    [min, max]
  );

  const set = useCallback((value: number) => setCount(clamp(value, min, max)), [min, max]);

  const reset = useCallback(
    () => setCount(clamp(initialValue, min, max)),
    [initialValue, min, max]
  );

  return [count, { increment, decrement, set, reset }];
}

export namespace useCounter {
  export type Options = UseCounterOptions;
  export type Handlers = UseCounterHandlers;
  export type ReturnValue = UseCounterReturnValue;
}
