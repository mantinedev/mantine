import {
  OptionalPortal,
  Progress,
  useMantineTheme,
  getDefaultZIndex,
  MantineColor,
  PortalProps,
} from '@mantine/core';
import { useDidUpdate, useInterval, useReducedMotion } from '@mantine/hooks';
import React, { useRef, useState } from 'react';
import { useNavigationProgressEvents } from './events';

export interface NavigationProgressProps {
  /** The default progress */
  initialProgress?: number;

  /** Key of theme.colors of any other valid CSS color */
  color?: MantineColor;

  /** Height of the progressbar */
  size?: number;

  /** Called when the progressbar reaches 100% */
  onFinish?(): void;

  /** Determines whether progress should be automatically reset when 100% is reached */
  autoReset?: boolean;

  /** Step interval in ms */
  stepInterval?: number;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Number of ms that should elapse before progressbar is hidden after reaching 100% */
  exitTimeout?: number;

  /** Exit transition duration in ms */
  exitTransitionDuration?: number;

  /** Determines whether progressbar should be rendered within Portal, defaults to true */
  withinPortal?: boolean;

  /** Props to pass down to the portal when withinPortal is true */
  portalProps?: Omit<PortalProps, 'children' | 'withinPortal'>;

  /** Progressbar z-index */
  zIndex?: React.CSSProperties['zIndex'];

  /** aria-label for `Progress`*/
  progressLabel?: string;
}

export function NavigationProgress({
  initialProgress = 0,
  color,
  size = 3,
  stepInterval = 500,
  transitionDuration = 300,
  exitTimeout = 500,
  exitTransitionDuration = 400,
  onFinish,
  autoReset = false,
  withinPortal = true,
  portalProps,
  zIndex = getDefaultZIndex('max'),
  progressLabel,
}: NavigationProgressProps) {
  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [_progress, setProgress] = useState(initialProgress);
  const [mounted, setMounted] = useState(true);
  const [unmountProgress, setUnmountProgress] = useState(false);
  const resetRef = useRef<number>();
  const unmountRef = useRef<number>();

  const interval = useInterval(() => {
    setProgress((amount) => {
      let next = 0;
      if (amount >= 0 && amount <= 20) {
        next = 10;
      } else if (amount >= 20 && amount <= 50) {
        next = 4;
      } else if (amount >= 50 && amount <= 80) {
        next = 2;
      } else if (amount >= 80 && amount <= 99) {
        next = 0.5;
      }

      return amount + next;
    });
  }, stepInterval);

  const set = (value: React.SetStateAction<number>) => setProgress(value);
  const increment = (value: number) => setProgress((c) => Math.min(c + value, 100));
  const decrement = (value: number) => setProgress((c) => Math.max(c - value, 0));
  const start = () => {
    interval.stop();
    interval.start();
  };
  const stop = () => interval.stop();
  const reset = () => {
    setUnmountProgress(true);
    stop();
    setProgress(0);
    window.setTimeout(() => setUnmountProgress(false), 0);
  };
  const complete = () => setProgress(100);

  const cancelUnmount = () => {
    if (unmountRef.current) {
      window.clearTimeout(unmountRef.current);
      unmountRef.current = null;
    }
    if (resetRef.current) {
      window.clearTimeout(resetRef.current);
      resetRef.current = null;
    }

    setMounted(true);
  };

  useDidUpdate(() => {
    if (_progress >= 100) {
      stop();
      onFinish?.();

      unmountRef.current = window.setTimeout(() => {
        unmountRef.current = null;
        setMounted(false);

        if (autoReset) {
          resetRef.current = window.setTimeout(
            () => {
              resetRef.current = null;
              reset();
            },
            reducedMotion ? 0 : exitTransitionDuration
          );
        }
      }, exitTimeout);
    } else if (!mounted) {
      cancelUnmount();
    }
  }, [_progress]);

  useNavigationProgressEvents({ start, stop, set, increment, decrement, reset, complete });

  return (
    <OptionalPortal {...portalProps} withinPortal={withinPortal}>
      {!unmountProgress && (
        <Progress
          radius={0}
          value={_progress}
          size={size}
          color={color}
          styles={{
            root: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex,
              backgroundColor: 'transparent',
              transitionProperty: 'opacity',
              transitionTimingFunction: theme.transitionTimingFunction,
              transitionDuration: `${
                reducedMotion || _progress !== 100 ? 0 : exitTransitionDuration
              }ms`,
              opacity: mounted ? 1 : 0,
            },
            bar: {
              position: 'relative',
              transitionProperty: 'width',
              transitionTimingFunction: theme.transitionTimingFunction,
              transitionDuration: `${reducedMotion || !mounted ? 0 : transitionDuration}ms`,
            },
          }}
          aria-label={progressLabel}
        />
      )}
    </OptionalPortal>
  );
}
