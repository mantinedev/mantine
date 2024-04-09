import { useEffect, useRef, useState } from 'react';

export function useThrottledValue<T>(value: T, wait: number) {
  const [throttledValue, setThrottledValue] = useState(value);
  const valueRef = useRef(value);
  const active = useRef(true);
  const timeoutRef = useRef<number>(-1);

  useEffect(() => {
    if (active.current && valueRef.current !== value) {
      setThrottledValue(value);
      valueRef.current = value;
      window.clearTimeout(timeoutRef.current);
      active.current = false;

      timeoutRef.current = window.setTimeout(() => {
        active.current = true;
      }, wait);
    }
  }, [value]);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  return throttledValue;
}
