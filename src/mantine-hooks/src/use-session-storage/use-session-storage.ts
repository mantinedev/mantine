import { useState, useCallback, useEffect } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

interface UseSessionStorage<T> {
  /** Session storage key */
  key: string;

  /** Default value that will be set if value is not found in session storage */
  defaultValue?: T;

  /** If set to true, value will be update is useEffect after mount */
  getInitialValueInEffect?: boolean;

  /** Function to serialize value into string to be save in session storage */
  serialize?(value: T): string;

  /** Function to deserialize string value from session storage to value */
  deserialize?(value: string): T;
}

function serializeJSON<T>(value: T) {
  try {
    return JSON.stringify(value);
  } catch (error) {
    throw new Error('@mantine/hooks use-session-storage: Failed to serialize the value');
  }
}

function deserializeJSON(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

export function useSessionStorage<T = string>({
  key,
  defaultValue = undefined,
  getInitialValueInEffect = true,
  deserialize = deserializeJSON,
  serialize = serializeJSON,
}: UseSessionStorage<T>) {
  const readSessionStorageValue = useCallback(
    (skipStorage?: boolean): T => {
      if (typeof window === 'undefined' || !('sessionStorage' in window) || skipStorage) {
        return (defaultValue ?? '') as T;
      }

      const storedSessionString = window.sessionStorage.getItem(key);

      return storedSessionString !== null
        ? deserialize(storedSessionString)
        : ((defaultValue ?? '') as T);
    },
    [key, defaultValue]
  );

  const [value, setValue] = useState<T>(readSessionStorageValue(getInitialValueInEffect));

  const setSessionStorageValue = useCallback(
    (val: T | ((prevState: T) => T)) => {
      if (val instanceof Function) {
        setValue((current) => {
          const result = val(current);
          window.sessionStorage.setItem(key, serialize(result));
          window.dispatchEvent(
            new CustomEvent('mantine-session-storage', { detail: { key, value: val(current) } })
          );
          return result;
        });
      } else {
        window.sessionStorage.setItem(key, serialize(val));
        window.dispatchEvent(
          new CustomEvent('mantine-session-storage', { detail: { key, value: val } })
        );
        setValue(val);
      }
    },
    [key]
  );

  useWindowEvent('mantine-session-storage', (event) => {
    if (event.detail.key === key) {
      setValue(event.detail.value);
    }
  });

  useEffect(() => {
    if (defaultValue !== undefined && value === undefined) {
      setSessionStorageValue(defaultValue);
    }
  }, [defaultValue, value, setSessionStorageValue]);

  useEffect(() => {
    if (getInitialValueInEffect) {
      setValue(readSessionStorageValue());
    }
  }, []);

  return [value === undefined ? defaultValue : value, setSessionStorageValue] as const;
}
