import { useState, useRef, useEffect } from 'react';

export function useTimeout(
  fn: () => void,
  delay: number,
  options: { autoInvoke: boolean } = { autoInvoke: true }
) {
  const [active, setActive] = useState(false);
  const timeoutRef = useRef<number>();

  const start = () => {
    setActive((old) => {
      if (!old) {
        timeoutRef.current = window.setTimeout(() => {
          setActive(false);
          fn();
        }, delay);
      }
      return true;
    });
  };

  const clear = () => {
    setActive(false);
    window.clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (options.autoInvoke) {
      start();
    }

    return () => {
      if (active) {
        clear();
      }
    };
  }, [delay]);

  return { start, clear };
}
