import { useEffect, useState } from 'react';

interface UseLightboxLockScrollInput {
  opened: boolean;
  exitDuration: number;
  exitDelay: number;
  reduceMotion: boolean;
}

export function useLightboxLockScroll({
  opened,
  exitDuration,
  exitDelay,
  reduceMotion,
}: UseLightboxLockScrollInput) {
  const [exiting, setExiting] = useState(false);
  const [prevOpened, setPrevOpened] = useState(opened);
  const unlockDelay = exitDelay + (reduceMotion ? 0 : exitDuration);

  if (opened !== prevOpened) {
    setPrevOpened(opened);
    setExiting(!opened && unlockDelay > 0);
  }

  useEffect(() => {
    if (!exiting) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setExiting(false), unlockDelay);
    return () => window.clearTimeout(timeout);
  }, [exiting, unlockDelay]);

  return opened || exiting;
}
