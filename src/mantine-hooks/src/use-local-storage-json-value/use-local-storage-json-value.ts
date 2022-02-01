import { useState, useCallback, useEffect } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

export function useLocalStorageJsonValue<T extends any>({
  key,
  defaultValue = undefined,
}: {
  key: string;
  defaultValue?: T;
}) {
  const [value, setValue] = useState<T>(
    typeof window !== 'undefined' && 'localStorage' in window
      ? (JSON.parse(window.localStorage.getItem(key)) as T)
      : ((defaultValue ?? '') as T)
  );

  const setLocalStorageValue = useCallback(
    (val: T | ((prevState: T) => T)) => {
      window.localStorage.setItem(key, JSON.stringify(val));
      setValue(val);
    },
    [key]
  );

  useWindowEvent('storage', (event) => {
    if (event.storageArea === window.localStorage && event.key === key) {
      setValue(event.newValue as T);
    }
  });

  useEffect(() => {
    if (defaultValue && !value) {
      setLocalStorageValue(defaultValue);
    }
  }, [defaultValue, value, setLocalStorageValue]);

  return [value || defaultValue, setLocalStorageValue] as const;
}
