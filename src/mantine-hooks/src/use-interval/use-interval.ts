import { useRef, useState } from 'react';

export interface UseInterval {
  start: () => void;
  stop: () => void;
  toggle: () => void;
  active: boolean;
}

export function useInterval(fn: () => void, interval: number): UseInterval {
  const [active, setActive] = useState(false);
  const intervalRef = useRef<number>();

  const start = () => {
    if (!active) {
      setActive(true);
      intervalRef.current = window.setInterval(fn, interval);
    }
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
