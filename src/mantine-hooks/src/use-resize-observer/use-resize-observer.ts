import { useMemo, useRef, useState, useCallback } from 'react';

type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;

const defaultState: ObserverRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

export function useResizeObserver<T extends HTMLElement = any>() {
  const frameID = useRef(0);
  const [rect, setRect] = useState<ObserverRect>(defaultState);

  const observer = useMemo(
    () =>
      typeof window !== 'undefined'
        ? new ResizeObserver((entries: any) => {
            const entry = entries[0];

            if (entry) {
              cancelAnimationFrame(frameID.current);

              frameID.current = requestAnimationFrame(() => {
                setRect(entry.contentRect);
              });
            }
          })
        : null,
    []
  );

  const cleanup = useRef<() => void>();

  const ref = useCallback(
    (node: T) => {
      if (cleanup.current) {
        cleanup.current();
        cleanup.current = undefined;
      }

      if (node) {
        setRect(node.getBoundingClientRect());

        if (observer) {
          observer.observe(node);

          cleanup.current = () => {
            observer.disconnect();
            if (frameID.current) {
              cancelAnimationFrame(frameID.current);
            }
          };
        }
      }
    },
    [observer]
  );

  return [ref, rect] as const;
}

export function useElementSize<T extends HTMLElement = any>() {
  const [ref, { width, height }] = useResizeObserver<T>();
  return { ref, width, height };
}
