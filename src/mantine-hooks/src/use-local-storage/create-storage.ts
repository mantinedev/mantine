import { useState, useCallback, useEffect } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

export type StorageType = 'localStorage' | 'sessionStorage';

export interface IStorageProperties<T> {
  /** Storage key */
  key: string;

  /** Default value that will be set if value is not found in storage */
  defaultValue?: T;

  /** If set to true, value will be update is useEffect after mount */
  getInitialValueInEffect?: boolean;

  /** Function to serialize value into string to be save in storage */
  serialize?(value: T): string;

  /** Function to deserialize string value from storage to value */
  deserialize?(value: string): T;
}

function serializeJSON<T>(value: T, hookName: string) {
  try {
    return JSON.stringify(value);
  } catch (error) {
    throw new Error(`@mantine/hooks ${hookName}: Failed to serialize the value`);
  }
}

function deserializeJSON(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

export function createStorage<T>(type: StorageType, hookName: string) {
  const eventName = type === 'localStorage' ? 'mantine-local-storage' : 'mantine-session-storage';

  return function useStorage({
    key,
    defaultValue = undefined,
    getInitialValueInEffect = true,
    deserialize = deserializeJSON,
    serialize = (value: T) => serializeJSON(value, hookName),
  }: IStorageProperties<T>) {
    const readStorageValue = useCallback(
      (skipStorage?: boolean): T => {
        if (typeof window === 'undefined' || !(type in window) || skipStorage) {
          return (defaultValue ?? '') as T;
        }

        const storageValue = window[type].getItem(key);

        return storageValue !== null ? deserialize(storageValue) : ((defaultValue ?? '') as T);
      },
      [key, defaultValue]
    );

    const [value, setValue] = useState<T>(readStorageValue(getInitialValueInEffect));

    const setStorageValue = useCallback(
      (val: T | ((prevState: T) => T)) => {
        if (val instanceof Function) {
          setValue((current) => {
            const result = val(current);
            window[type].setItem(key, serialize(result));
            window.dispatchEvent(
              new CustomEvent(eventName, { detail: { key, value: val(current) } })
            );
            return result;
          });
        } else {
          window[type].setItem(key, serialize(val));
          window.dispatchEvent(new CustomEvent(eventName, { detail: { key, value: val } }));
          setValue(val);
        }
      },
      [key]
    );

    useWindowEvent('storage', (event) => {
      if (event.storageArea === window[type] && event.key === key) {
        setValue(deserialize(event.newValue ?? undefined));
      }
    });

    useWindowEvent(eventName, (event) => {
      if (event.detail.key === key) {
        setValue(event.detail.value);
      }
    });

    useEffect(() => {
      if (defaultValue !== undefined && value === undefined) {
        setStorageValue(defaultValue);
      }
    }, [defaultValue, value, setStorageValue]);

    useEffect(() => {
      if (getInitialValueInEffect) {
        setValue(readStorageValue());
      }
    }, []);

    return [value === undefined ? defaultValue : value, setStorageValue] as const;
  };
}
