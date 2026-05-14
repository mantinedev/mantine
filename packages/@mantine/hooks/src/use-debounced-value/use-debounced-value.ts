import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseDebouncedValueOptions {
  leading?: boolean;
}

export interface UseDebouncedValueHandlers {
  cancel: () => void;
  flush: () => void;
}

export type UseDebouncedValueReturnValue<T> = [T, () => void, UseDebouncedValueHandlers];

export function useDebouncedValue<T = any>(
  value: T,
  wait: number,
  options: UseDebouncedValueOptions = { leading: false }
): UseDebouncedValueReturnValue<T> {
  const [_value, setValue] = useState(value);
  const mountedRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);
  const cooldownRef = useRef(false);

  const latestValueRef = useRef(value);
  latestValueRef.current = value;

  const cancel = useCallback(() => {
    window.clearTimeout(timeoutRef.current!);
    timeoutRef.current = null;
    cooldownRef.current = false;
  }, []);

  const flush = useCallback(() => {
    if (timeoutRef.current) {
      cancel();
      cooldownRef.current = false;
      setValue(latestValueRef.current);
    }
  }, []);

  useEffect(() => {
    if (mountedRef.current) {
      if (!cooldownRef.current && options.leading) {
        cooldownRef.current = true;
        setValue(value);
        timeoutRef.current = window.setTimeout(() => {
          cooldownRef.current = false;
        }, wait);
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

  return [_value, cancel, { cancel, flush }];
}

export namespace useDebouncedValue {
  export type Handlers = UseDebouncedValueHandlers;
  export type Options = UseDebouncedValueOptions;
  export type ReturnValue<T> = UseDebouncedValueReturnValue<T>;
}
