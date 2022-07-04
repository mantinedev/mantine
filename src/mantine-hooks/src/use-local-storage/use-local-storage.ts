import { useState, useCallback, useEffect } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

interface UseLocalStorage<T> {
  /** Local storage key */
  key: string;

  /** Default value that will be set if value is not found in local storage */
  defaultValue?: T;

  /** If set to true, value will be update is useEffect after mount */
  getInitialValueInEffect?: boolean;

  /** Function to serialize value into string to be save in local storage */
  serialize?(value: T): string;

  /** Function to deserialize string value from local storage to value */
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
  getInitialValueInEffect = false,
  deserialize = deserializeJSON,
  serialize = serializeJSON,
}: UseLocalStorage<T>) {
  const [value, setValue] = useState<T>(
    typeof window !== 'undefined' && 'localStorage' in window && !getInitialValueInEffect
      ? deserialize(window.localStorage.getItem(key) ?? undefined)
      : ((defaultValue ?? '') as T)
  );

  const setLocalStorageValue = useCallback(
    (val: T | ((prevState: T) => T)) => {
      if (val instanceof Function) {
        setValue((current) => {
          const result = val(current);
          window.localStorage.setItem(key, serialize(result));
          window.dispatchEvent(
            new CustomEvent('mantine-local-storage', { detail: { key, value: val(current) } })
          );
          return result;
        });
      } else {
        window.localStorage.setItem(key, serialize(val));
        window.dispatchEvent(
          new CustomEvent('mantine-local-storage', { detail: { key, value: val } })
        );
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

  useWindowEvent('mantine-local-storage', (event) => {
    if (event.detail.key === key) {
      setValue(event.detail.value);
    }
  });

  useEffect(() => {
    if (defaultValue !== undefined && value === undefined) {
      setLocalStorageValue(defaultValue);
    }
  }, [defaultValue, value, setLocalStorageValue]);

  useEffect(() => {
    if (getInitialValueInEffect) {
      setValue(
        deserialize(window.localStorage.getItem(key) ?? undefined) || ((defaultValue ?? '') as T)
      );
    }
  }, []);

  return [value === undefined ? defaultValue : value, setLocalStorageValue] as const;
}

export const useLocalStorageValue = useLocalStorage;
