import { useCallback, useRef, useState } from 'react';

export interface UseIntersectionReturnValue<T> {
  ref: React.RefCallback<T | null>;
  entry: IntersectionObserverEntry | null;
}

export function useIntersection<T extends HTMLElement = any>(
  options?: IntersectionObserverInit
): UseIntersectionReturnValue<T> {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  const ref: React.RefCallback<T | null> = useCallback(
    (element) => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }

      if (element === null) {
        setEntry(null);
        return;
      }

      observer.current = new IntersectionObserver((entries) => {
        const lastEntry = entries[entries.length - 1];
        setEntry(lastEntry);
      }, options);

      observer.current.observe(element);
    },
    [options?.rootMargin, options?.root, options?.threshold]
  );

  return { ref, entry };
}

export namespace useIntersection {
  export type ReturnValue<T> = UseIntersectionReturnValue<T>;
}
