import { useCallback, useRef, useState } from 'react';

export interface UseInViewportReturnValue<T extends HTMLElement = any> {
  inViewport: boolean;
  ref: React.RefCallback<T | null>;
}

export function useInViewport<T extends HTMLElement = any>(): UseInViewportReturnValue<T> {
  const observer = useRef<IntersectionObserver | null>(null);
  const [inViewport, setInViewport] = useState(false);

  const ref: React.RefCallback<T | null> = useCallback((node) => {
    if (typeof IntersectionObserver !== 'undefined') {
      if (node && !observer.current) {
        observer.current = new IntersectionObserver((entries) => {
          // Entries might be batched (e.g. when scrolling very fast), so we need to use the last entry to get the most recent state
          const lastEntry = entries[entries.length - 1];
          setInViewport(lastEntry.isIntersecting);
        });
      } else {
        observer.current?.disconnect();
      }

      if (node) {
        observer.current?.observe(node);
      } else {
        setInViewport(false);
      }
    }
  }, []);

  return { ref, inViewport };
}

export namespace useInViewport {
  export type ReturnValue<T extends HTMLElement> = UseInViewportReturnValue<T>;
}
