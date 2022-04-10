import { MantineTransition, OptionalPortal, Progress, Transition } from '@mantine/core';
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

  /** Interval time in ms */
  intervalTime?: number;

  /** Interval step size */
  intervalStep?: number;

  /** Transition function (transition-timing-function) */
  barTransition?: string;

  /** Transition duration in ms */
  barTransitionDuration?: number;

  /** The time when the component should be unmounted after progress is 100% */
  unmountTime?: number;

  /** Unmount transition duration in ms after progress is 100% */
  unmountDuration?: number;

  /** Unmount transition function */
  unmountTransition?: MantineTransition;

  /** Determines whether NProgress should be rendered within Portal, defaults to true */
  withinPortal?: boolean;

  /** NProgress container z-index */
  zIndex?: number;
}

export function NProgress({
  defaultProgress = 0,
  color = 'blue',
  size = 2,
  intervalTime = 500,
  intervalStep = 1,
  barTransition = 'ease',
  barTransitionDuration = 600,
  unmountTime = 700,
  unmountDuration = 600,
  unmountTransition = 'fade',
  onFinish,
  withinPortal = true,
  zIndex = getDefaultZIndex('nprogress'),
}: NProgressProps) {
  const reducedMotion = useReducedMotion();
  const [_progress, setProgress] = useState(defaultProgress);
  const [mounted] = useDebouncedValue(_progress !== 100, unmountTime);

  const interval = useInterval(
    () => setProgress((c) => Math.min(c + intervalStep, intervalTime)),
    intervalTime
  );

  const set = (value: React.SetStateAction<number>) => setProgress(value);
  const add = (value: number) => setProgress((c) => Math.min(c + value, 100));
  const decrease = (value: number) => setProgress((c) => Math.max(c - value, 0));
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
      <Transition
        mounted={mounted}
        duration={1}
        exitDuration={unmountDuration}
        transition={unmountTransition}
      >
        {(styles) => (
          <Progress
            radius={0}
            value={_progress}
            size={size}
            color={color}
            style={styles}
            styles={{
              root: {
                top: 0,
                position: 'fixed',
                width: '100vw',
                backgroundColor: 'transparent',
              },
              bar: {
                transition: `width ${reducedMotion ? 0 : barTransitionDuration}ms ${barTransition}`,
              },
            }}
          />
        )}
      </Transition>
    </OptionalPortal>
  );
}
