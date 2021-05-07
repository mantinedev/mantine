import { useRef, useLayoutEffect } from 'react';

export function useResizeObserver(
  callback: ResizeObserverCallback,
  target: HTMLElement,
  { active = true, ResizeObserver: _ResizeObserverClass = ResizeObserver } = {}
) {
  const observer = useRef<ResizeObserver>(null);

  useLayoutEffect(() => {
    if (target && active) {
      try {
        observer.current = new _ResizeObserverClass(callback);
        observer.current.observe(target);
        return () => observer.current.disconnect();
      } catch (e) {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.warn(
            '@mantine/hooks: use-resize-observer – could not initialize ResizeObserver instance, provide polyfill with useResizeObserver(callback, target, { ResizeObserver: polyfill })'
          );
        }
        return undefined;
      }
    }

    return undefined;
  }, [target, callback, active]);

  return observer.current;
}
