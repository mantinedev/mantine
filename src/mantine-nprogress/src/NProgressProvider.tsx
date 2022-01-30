import { useDidUpdate, useInterval } from '@mantine/hooks';
import { MantineColor } from '@mantine/styles';
import React, { useState } from 'react';
import { nprogressContext } from './context';
import { NProgress } from './NProgress/NProgress';

export interface NProgressProviderProps {
  progress?: number;
  color?: MantineColor;
  size?: number;
  onFinish?: () => void;
  transitionDuration?: number;
  /** Predefined transition name */
  transition?: string;
  intervalTime?: number;
  intervalStep?: number;
}

export interface Props extends NProgressProviderProps {
  /** Your app */
  children: React.ReactNode;
}

export function NProgressProvider({
  children,
  color = 'blue',
  size = 2,
  intervalTime = 500,
  intervalStep = 1,
  transition = 'ease',
  transitionDuration = 600,
  onFinish,
}: Props) {
  const [progress, setProgress] = useState(0);

  const interval = useInterval(
    () => setProgress((c) => Math.min(c + intervalStep, 100)),
    intervalTime
  );

  const set = (value: number) => setProgress(value);
  const add = (value: number) => setProgress((c) => Math.min(c + value, 100));
  const decrease = (value: number) => setProgress((c) => Math.max(c - value, 0));
  const start = () => interval.start();
  const stop = () => interval.stop();

  useDidUpdate(() => {
    if (progress === 100) {
      onFinish && onFinish();
      stop();
    }
  }, [progress]);

  return (
    <nprogressContext.Provider
      value={{
        set,
        add,
        decrease,
        start,
        stop,
      }}
    >
      <NProgress
        color={color}
        progress={progress}
        size={size}
        transition={transition}
        transitionDuration={transitionDuration}
      />

      {children}
    </nprogressContext.Provider>
  );
}
