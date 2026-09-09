import React, { useEffect, useRef, useState } from 'react';

interface ResizeObserverDimensions {
  width: number;
  height: number;
  contentWidth: number;
  contentHeight: number;
}
export function useDimensions<T extends HTMLElement | null>(
  elementRef: React.RefObject<T>
): ResizeObserverDimensions | null {
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const [dimensions, setDimensions] = useState<ResizeObserverDimensions | null>(null);

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    // The observer watches the same element that the measuring cycle resizes.
    // Updating dimensions synchronously inside the callback resizes an element
    // whose notification is being delivered, which browsers report as
    // "ResizeObserver loop completed with undelivered notifications"
    // (a window `error` event). Defer the update to the next frame instead.
    let frame = 0;

    resizeObserverRef.current = new ResizeObserver((entries) => {
      if (entries[0]) {
        const entry = entries[0];
        const nextDimensions = {
          width: entry.borderBoxSize[0]?.inlineSize ?? entry.target.clientWidth,
          height: entry.borderBoxSize[0]?.blockSize ?? entry.target.clientHeight,
          contentWidth: entry.contentRect.width,
          contentHeight: entry.contentRect.height,
        };

        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => setDimensions(nextDimensions));
      }
    });

    resizeObserverRef.current.observe(elementRef.current);

    return () => {
      cancelAnimationFrame(frame);
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
    };
  }, [elementRef.current]);

  return dimensions;
}
