import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@mantine/hooks';

interface UseScrollLock {
  opened: boolean;
  transitionDuration: number;
}

export function useLockScroll({ opened, transitionDuration }: UseScrollLock) {
  const [shouldLockScroll, setShouldLockScroll] = useState(opened);
  const timeout = useRef<number>(-1);
  const reduceMotion = useReducedMotion();
  const _transitionDuration = reduceMotion ? 0 : transitionDuration;

  useEffect(() => {
    if (opened) {
      setShouldLockScroll(true);
      window.clearTimeout(timeout.current);
    } else if (_transitionDuration === 0) {
      setShouldLockScroll(false);
    } else {
      timeout.current = window.setTimeout(() => setShouldLockScroll(false), _transitionDuration);
    }

    return () => window.clearTimeout(timeout.current);
  }, [opened, _transitionDuration]);

  return shouldLockScroll;
}
