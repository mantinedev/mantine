import { useState } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

export function useHash() {
  const isBrowser = typeof window !== 'undefined';

  const [hash, setHashValue] = useState<null | string>(null);
  const handleHashChange = (e: HashChangeEvent) => {
    e.preventDefault();
    setHashValue(window.location.hash);
  };
  function setHash(value: string) {
    if (isBrowser) {
      window.location.hash = value;
      setHashValue(value);
    }
  }

  useWindowEvent('hashchange', handleHashChange);

  return [hash, setHash] as const;
}
