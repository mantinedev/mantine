import { useRef, useLayoutEffect } from 'react';

export function useResizeObserver(
  callback: ResizeObserverCallback,
  target: HTMLElement,
  { active = true, ResizeObserver: _ResizeObserverClass = ResizeObserver } = {}
) {
  const observer = useRef<ResizeObserver>(null);

  useLayoutEffect(() => {
    if (target && active) {
      observer.current = new _ResizeObserverClass(callback);
      observer.current.observe(target);
      return () => observer.current.disconnect();
    }

    return undefined;
  }, [target, callback, active]);

  return observer.current;
}
