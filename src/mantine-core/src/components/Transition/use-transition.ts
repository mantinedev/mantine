import { useState, useRef } from 'react';
import { useReducedMotion, useDidUpdate } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';

export type TransitionStatus =
  | 'entered'
  | 'exited'
  | 'entering'
  | 'exiting'
  | 'pre-exiting'
  | 'pre-entering';

interface UseTransition {
  duration: number;
  timingFunction: string;
  mounted: boolean;
  onEnter?(): void;
  onExit?(): void;
  onEntered?(): void;
  onExited?(): void;
}

export function useTransition({
  duration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited,
}: UseTransition) {
  const theme = useMantineTheme();
  const reduceMotion = useReducedMotion();
  const transitionDuration = reduceMotion ? 0 : duration;
  const [transitionStatus, setStatus] = useState<TransitionStatus>(mounted ? 'entered' : 'exited');
  const timeoutRef = useRef<number>(-1);

  const handleStateChange = (shouldMount: boolean) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;

    setStatus(shouldMount ? 'pre-entering' : 'pre-exiting');
    window.clearTimeout(timeoutRef.current);

    const preStateTimeout = window.setTimeout(() => {
      typeof preHandler === 'function' && preHandler();
      setStatus(shouldMount ? 'entering' : 'exiting');
    }, 10);

    timeoutRef.current = window.setTimeout(() => {
      window.clearTimeout(preStateTimeout);
      typeof handler === 'function' && handler();
      setStatus(shouldMount ? 'entered' : 'exited');
    }, transitionDuration);
  };

  useDidUpdate(() => {
    handleStateChange(mounted);
  }, [mounted]);

  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || theme.transitionTimingFunction,
  };
}
