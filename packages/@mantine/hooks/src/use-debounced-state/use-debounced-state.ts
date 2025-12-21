import { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

export interface UseDebouncedStateOptions {
  leading?: boolean;
}

export type UseDebouncedStateReturnValue<T> = [T, (newValue: SetStateAction<T>) => void];

export function useDebouncedState<T = any>(
  defaultValue: T,
  wait: number,
  options: UseDebouncedStateOptions = { leading: false }
): UseDebouncedStateReturnValue<T> {
  const [value, setValue] = useState(defaultValue);
  const timeoutRef = useRef<number | null>(null);
  const leadingRef = useRef(true);

  const clearTimeout = () => window.clearTimeout(timeoutRef.current!);
  useEffect(() => clearTimeout, []);

  const debouncedSetValue = useCallback(
    (newValue: SetStateAction<T>) => {
      clearTimeout();
      if (leadingRef.current && options.leading) {
        setValue(newValue);
      } else {
        timeoutRef.current = window.setTimeout(() => {
          leadingRef.current = true;
          setValue(newValue);
        }, wait);
      }
      leadingRef.current = false;
    },
    [options.leading]
  );

  return [value, debouncedSetValue] as const;
}

export namespace useDebouncedState {
  export type Options = UseDebouncedStateOptions;
  export type ReturnValue<T> = UseDebouncedStateReturnValue<T>;
}
