import { useEffect, useMemo, useRef, useState } from 'react';

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

export function useResizeObserver<T extends HTMLElement = any>(options?: ResizeObserverOptions) {
  const frameID = useRef(0);
  const ref = useRef<T>(null);

  const [rect, setRect] = useState<ObserverRect>(defaultState);

  const observer = useMemo(
    () =>
      typeof window !== 'undefined'
        ? new ResizeObserver((entries) => {
            const entry = entries[0];

            if (entry) {
              cancelAnimationFrame(frameID.current);

              frameID.current = requestAnimationFrame(() => {
                if (ref.current) {
                  const boxSize = entry.borderBoxSize?.[0] || entry.contentBoxSize?.[0];
                  if (boxSize) {
                    const style = window.getComputedStyle(ref.current);
                    const writingMode = style.writingMode || 'horizontal-tb';

                    const width = writingMode.startsWith('horizontal')
                      ? boxSize.inlineSize
                      : boxSize.blockSize;
                    const height = writingMode.startsWith('horizontal')
                      ? boxSize.blockSize
                      : boxSize.inlineSize;

                    setRect({
                      x: 0,
                      y: 0,
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      width,
                      height,
                    });
                  } else {
                    setRect(entry.contentRect);
                  }
                }
              });
            }
          })
        : null,
    []
  );

  useEffect(() => {
    if (ref.current) {
      observer?.observe(ref.current, options);
    }

    return () => {
      observer?.disconnect();

      if (frameID.current) {
        cancelAnimationFrame(frameID.current);
      }
    };
  }, [ref.current]);

  return [ref, rect] as const;
}

export function useElementSize<T extends HTMLElement = any>(options?: ResizeObserverOptions) {
  const [ref, { width, height }] = useResizeObserver<T>(options);
  return { ref, width, height };
}
