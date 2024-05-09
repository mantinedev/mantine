import { SetStateAction, useCallback, useEffect, useRef } from 'react';
import { useLocalStorage } from '../use-local-storage/use-local-storage';
import { StorageProperties } from '../use-local-storage/create-storage';

interface UseDebouncedLocalStorageStateOptions<T = string>
  extends StorageProperties<T> {
  wait: number;
  options?: { leading: boolean };
}

export function useDebouncedLocalStorageState<T = string>({
  wait,
  options,
  ...storageProps
}: UseDebouncedLocalStorageStateOptions<T>) {
  const [value, setValue] = useLocalStorage(storageProps);
  const timeoutRef = useRef<number | null>(null);
  const leadingRef = useRef(true);

  const clearTimeout = () => window.clearTimeout(timeoutRef.current!);
  useEffect(() => clearTimeout, []);

  const debouncedSetValue = useCallback(
    (newValue: SetStateAction<T>) => {
      clearTimeout();
      if (leadingRef.current && (options?.leading ?? true)) {
        setValue(newValue);
      } else {
        timeoutRef.current = window.setTimeout(() => {
          leadingRef.current = true;
          setValue(newValue);
        }, wait);
      }
      leadingRef.current = false;
    },
    [options?.leading]
  );

  return [value, debouncedSetValue] as const;
}
