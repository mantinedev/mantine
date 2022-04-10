import { MantineTransition, Progress, Transition } from '@mantine/core';
import { useDebouncedValue, useDidUpdate, useInterval } from '@mantine/hooks';
import { MantineColor } from '@mantine/styles';
import React, { useState } from 'react';
import { nprogressContext } from './NProgress.context';

export interface NProgressProviderProps {
  /** Your app */
  children: React.ReactNode;
  progress?: number;
  color?: MantineColor;
  size?: number;
  onFinish?: () => void;
  /** Transition duration in ms */
  transitionDuration?: number;
  /** Predefined transition name */
  transition?: string;
  /** Interval time in ms */
  intervalTime?: number;
  /** Interval step size */
  intervalStep?: number;
  /** Unmounted time after progress is 100% */
  unmountTime?: number;
  /** Unmount duration in ms */
  unmountDuration?: number;
  /** Unmount transition function */
  unmountTransition?: MantineTransition;
}

export function NProgressProvider({
  children,
  color = 'blue',
  progress = 0,
  size = 2,
  intervalTime = 500,
  intervalStep = 1,
  transition = 'ease',
  transitionDuration = 600,
  unmountTime = intervalTime + 200,
  unmountDuration: exitDuration = 600,
  unmountTransition = 'fade',
  onFinish,
}: NProgressProviderProps) {
  const [_progress, setProgress] = useState(progress);
  const [mounted] = useDebouncedValue(_progress !== 100, unmountTime);

  const interval = useInterval(
    () => setProgress((c) => Math.min(c + intervalStep, intervalTime)),
    intervalTime
  );

  const set = (value: number) => setProgress(value);
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

  return (
    <nprogressContext.Provider value={ctx}>
      <Transition
        mounted={mounted}
        stayMounted
        duration={1}
        exitDuration={exitDuration}
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
              bar: { transition: `width ${transitionDuration}ms ${transition}` },
              root: {
                backgroundColor: 'transparent',
              },
            }}
          />
        )}
      </Transition>

      {children}
    </nprogressContext.Provider>
  );
}
