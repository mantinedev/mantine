import { useRef, useEffect } from 'react';

export function useTimeout(
  fn: () => void,
  delay: number,
  options: { autoInvoke: boolean } = { autoInvoke: false }
) {
  const timeoutRef = useRef<number>(null);

  const start = () => {
    if (!timeoutRef.current) {
      timeoutRef.current = window.setTimeout(() => {
        fn();
        timeoutRef.current = null;
      }, delay);
    }
  };

  const clear = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    if (options.autoInvoke) {
      start();
    }

    return clear;
  }, [delay]);

  return { start, clear };
}
