import { useRef, useLayoutEffect } from 'react';

export function useResizeObserver(active: boolean, callback: () => void, target: HTMLElement) {
  const observer = useRef<ResizeObserver>(null);

  useLayoutEffect(() => {
    if (target && active) {
      observer.current = new ResizeObserver(callback);
      observer.current.observe(target);
      return () => observer.current.disconnect();
    }

    return undefined;
  }, [target, callback, active]);

  return observer.current;
}
