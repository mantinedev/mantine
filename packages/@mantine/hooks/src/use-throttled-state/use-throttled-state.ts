import { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

export function useThrottledState<T = any>(defaultValue: T, wait: number) {
  const [value, setValue] = useState(defaultValue);
  const timeoutRef = useRef<number | null>(null);
  const active = useRef(true);

  const clearTimeout = () => window.clearTimeout(timeoutRef.current!);

  const throttledSetValue = useCallback(
    (newValue: SetStateAction<T>) => {
      if (active.current) {
        setValue(newValue);
        clearTimeout();
        active.current = false;

        timeoutRef.current = window.setTimeout(() => {
          active.current = true;
        }, wait);
      }
    },
    [wait]
  );

  useEffect(() => clearTimeout, []);

  return [value, throttledSetValue] as const;
}
