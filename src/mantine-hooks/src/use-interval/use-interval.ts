import { useRef, useState } from 'react';

export function useInterval(fn: () => void, interval: number) {
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
