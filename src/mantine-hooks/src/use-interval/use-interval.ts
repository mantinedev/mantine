import { useRef, useState } from 'react';

export function useInterval(fn: () => void, interval: number) {
  const [active, setActive] = useState(false);
  const intervalRef = useRef<number>();

  const start = () => {
    setActive((old) => {
      if (!old) {
        intervalRef.current = window.setInterval(fn, interval);
      }
      return true;
    });
  };

  const stop = () => {
    setActive(false);
    window.clearInterval(intervalRef.current);
  };

  const toggle = () => {
    if (active) {
      stop();
    } else {
      start();
    }
  };

  return { start, stop, toggle, active };
}
