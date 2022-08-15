import { useState, useEffect } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

export function useHash() {
  const [hash, setHashValue] = useState<string>('');

  const setHash = (value: string) => {
    window.location.hash = value;
    setHashValue(value);
  };

  useWindowEvent('hashchange', () => {
    setHashValue(window.location.hash);
  });

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  return [hash, setHash] as const;
}
