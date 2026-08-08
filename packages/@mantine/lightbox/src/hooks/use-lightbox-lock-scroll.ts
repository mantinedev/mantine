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
  const [shouldLockScroll, setShouldLockScroll] = useState(opened);
  const timeout = useRef<number>(-1);
  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const unlockDelay = exitDelay + (reduceMotion ? 0 : exitDuration);

  useEffect(() => {
    if (opened) {
      setShouldLockScroll(true);
      window.clearTimeout(timeout.current);
    } else if (unlockDelay === 0) {
      setShouldLockScroll(false);
    } else {
      timeout.current = window.setTimeout(() => setShouldLockScroll(false), unlockDelay);
    }

    return () => window.clearTimeout(timeout.current);
  }, [opened, unlockDelay]);

  return shouldLockScroll;
}
