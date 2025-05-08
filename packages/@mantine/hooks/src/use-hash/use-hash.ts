import { useEffect, useState } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

export interface UseHashOptions {
  getInitialValueInEffect?: boolean;
}

export type UseHashReturnValue = [string, (value: string) => void];

export function useHash({
  getInitialValueInEffect = true,
}: UseHashOptions = {}): UseHashReturnValue {
  const [hash, setHash] = useState<string>(
    getInitialValueInEffect ? '' : window.location.hash || ''
  );

  const setHashHandler = (value: string) => {
    const valueWithHash = value.startsWith('#') ? value : `#${value}`;
    window.location.hash = valueWithHash;
    setHash(valueWithHash);
  };

  useWindowEvent('hashchange', () => {
    const newHash = window.location.hash;
    if (hash !== newHash) {
      setHash(newHash);
    }
  });

  useEffect(() => {
    if (getInitialValueInEffect) {
      setHash(window.location.hash);
    }
  }, []);

  return [hash, setHashHandler];
}
