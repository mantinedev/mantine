import { useState } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

export function useLocalStorageValue<T extends string>({
  key,
  defaultValue = null,
}: {
  key: string;
  defaultValue?: T;
}) {
  const [value, setValue] = useState<T>(
    typeof window !== 'undefined' && 'localStorage' in window
      ? (window.localStorage.getItem(key) as T)
      : defaultValue
  );

  const setLocalStorageValue = (val: T | ((prevState: T) => T)) => {
    if (typeof val === 'function') {
      setValue((current) => {
        const result = val(current);
        window.localStorage.setItem(key, result);
        return result;
      });
    } else {
      window.localStorage.setItem(key, val);
      setValue(val);
    }
  };

  useWindowEvent('storage', (event) => {
    if (event.storageArea === window.localStorage && event.key === key) {
      setValue(event.newValue as T);
    }
  });

  return [value, setLocalStorageValue] as const;
}
