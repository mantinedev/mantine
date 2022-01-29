import { useState, useEffect, useRef } from 'react';
import { useReducedMotion, useDidUpdate } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/styles';

export type TransitionStatus =
  | 'entered'
  | 'exited'
  | 'entering'
  | 'exiting'
  | 'pre-exiting'
  | 'pre-entering';

interface UseTransition {
  duration: number;
  exitDuration: number;
  timingFunction: string;
  mounted: boolean;
  onEnter?(): void;
  onExit?(): void;
  onEntered?(): void;
  onExited?(): void;
}

export function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited,
}: UseTransition) {
  const theme = useMantineTheme();
  const reduceMotion = useReducedMotion();
  const [transitionStatus, setStatus] = useState<TransitionStatus>(mounted ? 'entered' : 'exited');
  const [transitionDuration, setTransitionDuration] = useState(reduceMotion ? 0 : duration);
  const timeoutRef = useRef<number>(-1);

  const handleStateChange = (shouldMount: boolean) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;

    setStatus(shouldMount ? 'pre-entering' : 'pre-exiting');
    window.clearTimeout(timeoutRef.current);
    const _duration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(_duration);

    if (_duration === 0) {
      typeof preHandler === 'function' && preHandler();
      typeof handler === 'function' && handler();
      setStatus(shouldMount ? 'entered' : 'exited');
    } else {
      const preStateTimeout = window.setTimeout(() => {
        typeof preHandler === 'function' && preHandler();
        setStatus(shouldMount ? 'entering' : 'exiting');
      }, 10);

      timeoutRef.current = window.setTimeout(() => {
        window.clearTimeout(preStateTimeout);
        typeof handler === 'function' && handler();
        setStatus(shouldMount ? 'entered' : 'exited');
      }, _duration);
    }
  };

  useDidUpdate(() => {
    handleStateChange(mounted);
  }, [mounted]);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || theme.transitionTimingFunction,
  };
}
