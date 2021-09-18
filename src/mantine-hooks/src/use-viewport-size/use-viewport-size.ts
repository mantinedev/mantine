import { useCallback, useState, useEffect } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

const eventListerOptions = {
  passive: true,
};

export function useViewportSize(): Readonly<{
  width: number;
  height: number;
}> {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const setSize = useCallback(
    (): void => {
      setWindowSize({
        width: window?.innerWidth ?? 0,
        height: window?.innerHeight ?? 0,
      });
    },
    [],
  );

  useEffect(() => {
    setSize();
  }, []);

  useWindowEvent('resize', setSize, eventListerOptions);

  useWindowEvent('orientationchange', setSize, eventListerOptions);

  return windowSize;
}
