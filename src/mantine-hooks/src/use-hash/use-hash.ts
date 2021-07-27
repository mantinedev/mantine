import { useState } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

export function useHash(): readonly [string | null, (hash: string) => void] {
  const [hash, setHashValue] = useState<string>(null);

  const setHash = (value: string) => {
    window.location.hash = value;
    setHashValue(value);
  };

  useWindowEvent('hashchange', () => {
    setHashValue(window.location.hash);
  });

  return [hash, setHash] as const;
}
