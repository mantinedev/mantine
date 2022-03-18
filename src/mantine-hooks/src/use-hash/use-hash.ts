import { useState } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

export type UseHash = readonly [string, (value: string) => void];

export function useHash(): UseHash {
  const [hash, setHashValue] = useState<string>(
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  const setHash = (value: string) => {
    window.location.hash = value;
    setHashValue(value);
  };

  useWindowEvent('hashchange', () => {
    setHashValue(window.location.hash);
  });

  return [hash, setHash];
}
