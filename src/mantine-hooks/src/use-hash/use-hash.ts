import { useState, useEffect } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

export function useHash() {
  const [hash, setHashValue] = useState<string>('');

  const setHash = (value: string) => {
    const valueWithHash = value.startsWith('#') ? value : `#${value}`;
    window.location.hash = valueWithHash;
    setHashValue(valueWithHash);
  };

  useWindowEvent('hashchange', () => {
    const newHash = window.location.hash;
    if (hash !== newHash) {
      setHashValue(newHash);
    }
  });

  useEffect(() => {
    setHashValue(window.location.hash);
  }, []);

  return [hash, setHash] as const;
}
