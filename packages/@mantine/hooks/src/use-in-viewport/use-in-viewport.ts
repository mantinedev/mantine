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
      observer.current?.disconnect();

      if (node) {
        observer.current = new IntersectionObserver((entries) => {
          const lastEntry = entries[entries.length - 1];
          setInViewport(lastEntry.isIntersecting);
        });
        observer.current.observe(node);
      } else {
        observer.current = null;
        setInViewport(false);
      }
    }
  }, []);

  return { ref, inViewport };
}

export namespace useInViewport {
  export type ReturnValue<T extends HTMLElement> = UseInViewportReturnValue<T>;
}
