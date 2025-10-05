import React, { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

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

    resizeObserverRef.current = new ResizeObserver((entries) => {
      if (entries[0]) {
        const entry = entries[0];
        const updateDimensions = () => {
          setDimensions({
            width: entry.borderBoxSize[0]?.inlineSize ?? entry.target.clientWidth,
            height: entry.borderBoxSize[0]?.blockSize ?? entry.target.clientHeight,
            contentWidth: entry.contentRect.width,
            contentHeight: entry.contentRect.height,
          });
        };

        flushSync(updateDimensions);
      }
    });

    resizeObserverRef.current.observe(elementRef.current);

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
    };
  }, [elementRef.current]);

  return dimensions;
}
