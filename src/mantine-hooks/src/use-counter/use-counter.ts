import { useState } from 'react';
import { clamp } from '../utils';

const DEFAULT_OPTIONS = {
  min: -Infinity,
  max: Infinity,
};

export function useCounter(initialValue = 0, options?: Partial<{ min: number; max: number }>) {
  const { min, max } = { ...DEFAULT_OPTIONS, ...options };
  const [count, setCount] = useState<number>(clamp(initialValue, min, max));

  const increment = () => setCount((current) => clamp(current + 1, min, max));
  const decrement = () => setCount((current) => clamp(current - 1, min, max));
  const set = (value: number) => setCount(clamp(value, min, max));
  const reset = () => setCount(clamp(initialValue, min, max));

  return [count, { increment, decrement, set, reset }] as const;
}
