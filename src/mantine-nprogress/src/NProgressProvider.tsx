import { MantineTransition, OptionalPortal, Progress, Transition } from '@mantine/core';
import { useDebouncedValue, useDidUpdate, useInterval } from '@mantine/hooks';
import { MantineColor } from '@mantine/styles';
import React, { useState } from 'react';
import { NProgressContextProvider } from './NProgress.context';

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

  /** Determines whether modal should be rendered within Portal, defaults to true */
  withinPortal?: boolean;
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
  withinPortal = true,
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
    <NProgressContextProvider value={ctx}>
      <OptionalPortal withinPortal={withinPortal} zIndex={9999}>
        <Transition
          mounted={mounted}
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
                  position: 'fixed',
                  top: 0,
                  width: '100vw',
                  backgroundColor: 'transparent',
                },
              }}
            />
          )}
        </Transition>
      </OptionalPortal>

      {children}
    </NProgressContextProvider>
  );
}
