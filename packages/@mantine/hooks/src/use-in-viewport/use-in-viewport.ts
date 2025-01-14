import { useCallback, useRef, useState } from 'react';

export function useInViewport<T extends HTMLElement = any>() {
  const observer = useRef<IntersectionObserver | null>(null);
  const [inViewport, setInViewport] = useState(false);

  const ref = useCallback((node: T | null) => {
    if (typeof IntersectionObserver !== 'undefined') {
      if (node && !observer.current) {
        observer.current = new IntersectionObserver((entries) =>
          setInViewport(entries.some((entry) => entry.isIntersecting))
        );
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
