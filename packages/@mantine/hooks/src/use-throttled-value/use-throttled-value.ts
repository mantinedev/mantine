import { useEffect, useRef, useState } from 'react';
import { useThrottledCallbackWithClearTimeout } from '../use-throttled-callback/use-throttled-callback';

export function useThrottledValue<T>(value: T, wait: number) {
  const [throttledValue, setThrottledValue] = useState(value);
  const valueRef = useRef(value);

  const [throttledSetValue, clearTimeout] = useThrottledCallbackWithClearTimeout(
    setThrottledValue,
    wait
  );

  useEffect(() => {
    if (value !== valueRef.current) {
      valueRef.current = value;
      throttledSetValue(value);
    }
  }, [throttledSetValue, value]);

  useEffect(() => clearTimeout, []);

  return throttledValue;
}
