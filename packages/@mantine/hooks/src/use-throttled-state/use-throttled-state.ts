import { useEffect, useRef, useState } from 'react';

export function useThrottledState<T>(value: T, delay: number) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastUpdated = useRef(0);

  useEffect(() => {
    const now = Date.now();

    if (lastUpdated.current && now >= lastUpdated.current + delay) {
      lastUpdated.current = now;
      setThrottledValue(value);
    } else {
      const id = window.setTimeout(() => {
        lastUpdated.current = now;
        setThrottledValue(value);
      }, delay);

      return () => window.clearTimeout(id);
    }
  }, [value, delay]);

  return throttledValue;
}
