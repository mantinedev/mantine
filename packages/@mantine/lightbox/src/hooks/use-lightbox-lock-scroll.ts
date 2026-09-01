import { useEffect, useRef, useState } from 'react';
import { useMantineTheme } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';

interface UseLightboxLockScrollInput {
  opened: boolean;
  exitDuration: number;
  exitDelay: number;
}

export function useLightboxLockScroll({
  opened,
  exitDuration,
  exitDelay,
}: UseLightboxLockScrollInput) {
  const [unlocked, setUnlocked] = useState(!opened);
  const [prevOpened, setPrevOpened] = useState(opened);
  const timeout = useRef<number>(-1);
  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const unlockDelay = exitDelay + (reduceMotion ? 0 : exitDuration);

  // Opening arms the lock in the same render rather than one commit later, so the page
  // cannot scroll in the frame between mounting the lightbox and the effect running.
  if (opened !== prevOpened) {
    setPrevOpened(opened);
    if (opened) {
      setUnlocked(false);
    }
  }

  useEffect(() => {
    if (opened || unlockDelay === 0) {
      window.clearTimeout(timeout.current);
      return undefined;
    }

    // The lock is released only after the exit transition has played out, otherwise the
    // page jumps by the scrollbar width while the lightbox is still fading out.
    timeout.current = window.setTimeout(() => setUnlocked(true), unlockDelay);
    return () => window.clearTimeout(timeout.current);
  }, [opened, unlockDelay]);

  return opened || (!unlocked && unlockDelay > 0);
}
