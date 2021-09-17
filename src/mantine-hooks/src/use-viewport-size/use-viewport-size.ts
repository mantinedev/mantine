import { useCallback, useState } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

interface DebouncedWindowSizeOptions {
  initialWidth?: number
  initialHeight?: number
}

const eventListerOptions = {
  passive: true,
};

export const useViewportSize = ({
  initialWidth = 0,
  initialHeight = 0,
}: DebouncedWindowSizeOptions): Readonly<{
  width: number;
  height: number;
}> => {
  const [windowSize, setWindowSize] = useState({
    width: initialWidth,
    height: initialHeight,
  });

  const setSize = useCallback(
    (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    },
    [],
  );

  useWindowEvent('resize', setSize, eventListerOptions);

  useWindowEvent('orientationchange', setSize, eventListerOptions);

  return windowSize;
};
