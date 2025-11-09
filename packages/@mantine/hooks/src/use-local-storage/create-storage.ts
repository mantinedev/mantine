/* eslint-disable no-console */
import { useCallback, useEffect, useState } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

export type StorageType = 'localStorage' | 'sessionStorage';

export interface UseStorageOptions<T> {
  /** Storage key */
  key: string;

  /** Default value that will be set if value is not found in storage */
  defaultValue?: T;

  /** If set to true, value will be updated in useEffect after mount. Default value is true. */
  getInitialValueInEffect?: boolean;

  /** Determines whether the value must be synced between browser tabs, `true` by default */
  sync?: boolean;

  /** Function to serialize value into string to be save in storage */
  serialize?: (value: T) => string;

  /** Function to deserialize string value from storage to value */
  deserialize?: (value: string | undefined) => T;
}

function serializeJSON<T>(value: T, hookName: string = 'use-local-storage') {
  try {
    return JSON.stringify(value);
  } catch (error) {
    throw new Error(`@mantine/hooks ${hookName}: Failed to serialize the value`);
  }
}

function deserializeJSON(value: string | undefined) {
  try {
    return value && JSON.parse(value);
  } catch {
    return value;
  }
}

function createStorageHandler(type: StorageType) {
  const getItem = (key: string) => {
    try {
      return window[type].getItem(key);
    } catch (error) {
      console.warn('use-local-storage: Failed to get value from storage, localStorage is blocked');
      return null;
    }
  };

  const setItem = (key: string, value: string) => {
    try {
      window[type].setItem(key, value);
    } catch (error) {
      console.warn('use-local-storage: Failed to set value to storage, localStorage is blocked');
    }
  };

  const removeItem = (key: string) => {
    try {
      window[type].removeItem(key);
    } catch (error) {
      console.warn(
        'use-local-storage: Failed to remove value from storage, localStorage is blocked'
      );
    }
  };

  return { getItem, setItem, removeItem };
}

export type UseStorageReturnValue<T> = [
  T, // current value
  (val: T | ((prevState: T) => T)) => void, // callback to set value in storage
  () => void, // callback to remove value from storage
];

export function createStorage<T>(type: StorageType, hookName: string) {
  const eventName = type === 'localStorage' ? 'mantine-local-storage' : 'mantine-session-storage';
  const { getItem, setItem, removeItem } = createStorageHandler(type);

  return function useStorage({
    key,
    defaultValue,
    getInitialValueInEffect = true,
    sync = true,
    deserialize = deserializeJSON,
    serialize = (value: T) => serializeJSON(value, hookName),
  }: UseStorageOptions<T>): UseStorageReturnValue<T> {
    const readStorageValue = useCallback(
      (skipStorage?: boolean): T => {
        let storageBlockedOrSkipped;

        try {
          storageBlockedOrSkipped =
            typeof window === 'undefined' ||
            !(type in window) ||
            window[type] === null ||
            !!skipStorage;
        } catch (_e) {
          storageBlockedOrSkipped = true;
        }

        if (storageBlockedOrSkipped) {
          return defaultValue as T;
        }

        const storageValue = getItem(key);
        return storageValue !== null ? deserialize(storageValue) : (defaultValue as T);
      },
      [key, defaultValue]
    );

    const [value, setValue] = useState<T>(readStorageValue(getInitialValueInEffect));

    const setStorageValue = useCallback(
      (val: T | ((prevState: T) => T)) => {
        if (val instanceof Function) {
          setValue((current) => {
            const result = val(current);
            setItem(key, serialize(result));
            // Defer dispatching this event to avoid the handler being called during render.
            queueMicrotask(() => {
              window.dispatchEvent(
                new CustomEvent(eventName, { detail: { key, value: val(current) } })
              );
            });
            return result;
          });
        } else {
          setItem(key, serialize(val));
          window.dispatchEvent(new CustomEvent(eventName, { detail: { key, value: val } }));
          setValue(val);
        }
      },
      [key]
    );

    const removeStorageValue = useCallback(() => {
      removeItem(key);
      setValue(defaultValue as T);
      window.dispatchEvent(new CustomEvent(eventName, { detail: { key, value: defaultValue } }));
    }, [key, defaultValue]);

    useWindowEvent('storage', (event) => {
      if (sync) {
        if (event.storageArea === window[type] && event.key === key) {
          setValue(deserialize(event.newValue ?? undefined));
        }
      }
    });

    useWindowEvent(eventName, (event) => {
      if (sync) {
        if (event.detail.key === key) {
          setValue(event.detail.value);
        }
      }
    });

    useEffect(() => {
      if (defaultValue !== undefined && value === undefined) {
        setStorageValue(defaultValue);
      }
    }, [defaultValue, value, setStorageValue]);

    useEffect(() => {
      const val = readStorageValue();
      val !== undefined && setStorageValue(val);
    }, [key]);

    return [value === undefined ? (defaultValue as T) : value, setStorageValue, removeStorageValue];
  };
}

export function readValue(type: StorageType) {
  const { getItem } = createStorageHandler(type);

  return function read<T>({
    key,
    defaultValue,
    deserialize = deserializeJSON,
  }: UseStorageOptions<T>) {
    let storageBlockedOrSkipped;

    try {
      storageBlockedOrSkipped =
        typeof window === 'undefined' || !(type in window) || window[type] === null;
    } catch (_e) {
      storageBlockedOrSkipped = true;
    }

    if (storageBlockedOrSkipped) {
      return defaultValue as T;
    }

    const storageValue = getItem(key);
    return storageValue !== null ? deserialize(storageValue) : (defaultValue as T);
  };
}
