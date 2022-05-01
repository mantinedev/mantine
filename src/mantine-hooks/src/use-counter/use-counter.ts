import { useState } from 'react';
import { clamp } from '../utils';

const DEFAULT_OPTIONS = {
  min: -Infinity,
  max: Infinity,
};

export function useCounter(
  initialValue: number = 0,
  options?: Partial<{ min: number; max: number }>
) {
  const { min, max } = { ...DEFAULT_OPTIONS, ...options };
  const [count, setCount] = useState<number>(clamp({ value: initialValue, min, max }));

  const inc = (delta: number = 1) => {
    setCount((prevCount) => {
      const newValue = prevCount + delta;
      return clamp({ value: newValue, min, max });
    });
  };

  const dec = (delta: number = 1) => {
    setCount((prevCount) => {
      const newValue = prevCount - delta;
      return clamp({ value: newValue, min, max });
    });
  };

  const set = (value: number) => {
    setCount(clamp({ value, min, max }));
  };

  const reset = () => {
    setCount(clamp({ value: initialValue, min, max }));
  };

  return [count, { inc, dec, set, reset }] as const;
}
