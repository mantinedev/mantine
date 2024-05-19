import { useEffect, useState } from 'react';
import { useThrottledCallbackWithClearTimeout } from '../use-throttled-callback/use-throttled-callback';

export function useThrottledState<T = any>(defaultValue: T, wait: number) {
  const [value, setValue] = useState(defaultValue);

  const [setThrottledValue, clearTimeout] = useThrottledCallbackWithClearTimeout(setValue, wait);

  useEffect(() => clearTimeout, []);

  return [value, setThrottledValue] as const;
}
