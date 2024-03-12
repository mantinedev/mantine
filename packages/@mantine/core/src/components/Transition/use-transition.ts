import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDidUpdate, useReducedMotion } from '@mantine/hooks';
import { useMantineTheme } from '../../core';

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
  onEnter?: () => void;
  onExit?: () => void;
  onEntered?: () => void;
  onExited?: () => void;
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
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = useState(reduceMotion ? 0 : duration);
  const [transitionStatus, setStatus] = useState<TransitionStatus>(mounted ? 'entered' : 'exited');
  const timeoutRef = useRef<number>(-1);
  const rafRef = useRef(-1);

  const handleStateChange = (shouldMount: boolean) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;

    window.clearTimeout(timeoutRef.current);

    const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(newTransitionDuration);

    if (newTransitionDuration === 0) {
      typeof preHandler === 'function' && preHandler();
      typeof handler === 'function' && handler();
      setStatus(shouldMount ? 'entered' : 'exited');
    } else {
      // Make sure new status won't be set within the same frame as this would disrupt animation #3126
      rafRef.current = requestAnimationFrame(() => {
        ReactDOM.flushSync(() => {
          setStatus(shouldMount ? 'pre-entering' : 'pre-exiting');
        });

        rafRef.current = requestAnimationFrame(() => {
          typeof preHandler === 'function' && preHandler();
          setStatus(shouldMount ? 'entering' : 'exiting');

          timeoutRef.current = window.setTimeout(() => {
            typeof handler === 'function' && handler();
            setStatus(shouldMount ? 'entered' : 'exited');
          }, newTransitionDuration);
        });
      });
    }
  };

  useDidUpdate(() => {
    handleStateChange(mounted);
  }, [mounted]);

  useEffect(
    () => () => {
      window.clearTimeout(timeoutRef.current);
      cancelAnimationFrame(rafRef.current);
    },
    []
  );

  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || 'ease',
  };
}
