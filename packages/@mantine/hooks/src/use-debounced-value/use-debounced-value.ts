import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseDebouncedValueOptions {
  leading?: boolean;
}

export type UseDebouncedValueReturnValue<T> = [T, () => void];

export function useDebouncedValue<T = any>(
  value: T,
  wait: number,
  options: UseDebouncedValueOptions = { leading: false }
): UseDebouncedValueReturnValue<T> {
  const [_value, setValue] = useState(value);
  const mountedRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);
  const cooldownRef = useRef(false);

  const cancel = useCallback(() => window.clearTimeout(timeoutRef.current!), []);

  useEffect(() => {
    if (mountedRef.current) {
      if (!cooldownRef.current && options.leading) {
        cooldownRef.current = true;
        setValue(value);
      } else {
        cancel();
        timeoutRef.current = window.setTimeout(() => {
          cooldownRef.current = false;
          setValue(value);
        }, wait);
      }
    }
  }, [value, options.leading, wait]);

  useEffect(() => {
    mountedRef.current = true;
    return cancel;
  }, []);

  return [_value, cancel];
}
