import { useEffect, useState } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

interface UseHashOptions {
  getInitialValueInEffect?: boolean;
}

export function useHash({ getInitialValueInEffect = true }: UseHashOptions = {}) {
  const [hash, setHashValue] = useState<string>(
    getInitialValueInEffect ? '' : window.location.hash || ''
  );

  const setHash = (value: string) => {
    const valueWithHash = value.startsWith('#') ? value : `#${value}`;
    window.location.hash = valueWithHash;
    setHashValue(valueWithHash);
  };

  useWindowEvent('hashchange', () => {
    const newHash = window.location.hash;
    if (hash !== newHash) {
      setHashValue(hash);
    }
  });

  useEffect(() => {
    if (getInitialValueInEffect) {
      setHashValue(window.location.hash);
    }
  }, []);

  return [hash, setHash] as const;
}
