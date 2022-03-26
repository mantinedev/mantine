import { useState, useCallback, useEffect } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

interface UseLocalStorage<T> {
  key: string;
  defaultValue?: T;
  serialize?(value: T): string;
  deserialize?(value: string): T;
}

function serializeJSON<T>(value: T) {
  try {
    return JSON.stringify(value);
  } catch (error) {
    throw new Error('@mantine/hooks use-local-storage: Failed to serialize the value');
  }
}

function deserializeJSON(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

export function useLocalStorage<T = string>({
  key,
  defaultValue = undefined,
  deserialize = deserializeJSON,
  serialize = serializeJSON,
}: UseLocalStorage<T>) {
  const [value, setValue] = useState<T>(
    typeof window !== 'undefined' && 'localStorage' in window
      ? deserialize(window.localStorage.getItem(key) ?? undefined)
      : ((defaultValue ?? '') as T)
  );

  const setLocalStorageValue = useCallback(
    (val: T | ((prevState: T) => T)) => {
      if (val instanceof Function) {
        setValue((current) => {
          const result = val(current);
          window.localStorage.setItem(key, serialize(result));
          return result;
        });
      } else {
        window.localStorage.setItem(key, serialize(val));
        setValue(val);
      }
    },
    [key]
  );

  useWindowEvent('storage', (event) => {
    if (event.storageArea === window.localStorage && event.key === key) {
      setValue(deserialize(event.newValue ?? undefined));
    }
  });

  useEffect(() => {
    if (defaultValue !== undefined && value === undefined) {
      setLocalStorageValue(defaultValue);
    }
  }, [defaultValue, value, setLocalStorageValue]);

  return [value === undefined ? defaultValue : value, setLocalStorageValue] as const;
}

export const useLocalStorageValue = useLocalStorage;
