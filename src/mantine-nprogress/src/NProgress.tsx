import { OptionalPortal, Progress } from '@mantine/core';
import { useDebouncedValue, useDidUpdate, useInterval, useReducedMotion } from '@mantine/hooks';
import { getDefaultZIndex, MantineColor } from '@mantine/styles';
import React, { useState } from 'react';
import { useNProgressEvents } from './events';

export interface NProgressProps {
  /** The default progress */
  defaultProgress?: number;

  /** The color of the progressbar */
  color?: MantineColor;

  /** The height of the progressbar */
  size?: number;

  /** Called when the progress is 100% */
  onFinish?: () => void;

  /** Step delay in ms */
  stepIntervalTime?: number;

  /** Step size */
  stepSize?: number;

  /** Transition function (transition-timing-function) */
  progressTransition?: string;

  /** Transition duration in ms */
  progressTransitionDuration?: number;

  /** The time when the component should be unmounted after progress is 100% */
  exitTimeout?: number;

  /** Exit transition duration in ms */
  exitTransitionDuration?: number;

  /** Exit transition function (transition-timing-function)*/
  exitTransition?: string;

  /** Determines whether NProgress should be rendered within Portal, defaults to true */
  withinPortal?: boolean;

  /** NProgress container z-index */
  zIndex?: number;
}

export function NProgress({
  defaultProgress = 0,
  color = 'blue',
  size = 2,
  stepIntervalTime = 500,
  stepSize = 1,
  progressTransition = 'ease',
  progressTransitionDuration = 600,
  exitTimeout = 700,
  exitTransitionDuration = 600,
  exitTransition = 'ease',
  onFinish,
  withinPortal = true,
  zIndex = getDefaultZIndex('nprogress'),
}: NProgressProps) {
  const reducedMotion = useReducedMotion();
  const [_progress, setProgress] = useState(defaultProgress);
  const [mounted] = useDebouncedValue(_progress !== 100, exitTimeout);

  const set = (value: React.SetStateAction<number>) => setProgress(value);
  const add = (value: number) => setProgress((c) => Math.min(c + value, 100));
  const decrease = (value: number) => setProgress((c) => Math.max(c - value, 0));

  const interval = useInterval(() => add(stepSize), stepIntervalTime);

  const start = () => interval.start();
  const stop = () => interval.stop();

  const ctx = {
    set,
    add,
    decrease,
    start,
    stop,
  };

  useDidUpdate(() => {
    if (_progress === 100) {
      onFinish && onFinish();
      stop();
    }
  }, [_progress]);

  useNProgressEvents(ctx);

  return (
    <OptionalPortal withinPortal={withinPortal} zIndex={zIndex}>
      <Progress
        radius={0}
        value={_progress}
        size={size}
        color={color}
        styles={{
          root: {
            top: 0,
            position: 'fixed',
            width: '100vw',
            backgroundColor: 'transparent',
            transitionTimingFunction: exitTransition,
            transitionProperty: 'opacity',
            transitionDuration: _progress === 100 ? `${exitTransitionDuration}ms` : '0ms',
            opacity: mounted ? 1 : 0,
          },
          bar: {
            transition: `width ${
              reducedMotion ? 0 : progressTransitionDuration
            }ms ${progressTransition}`,
          },
        }}
      />
    </OptionalPortal>
  );
}
