import { useCallback, useRef, useState } from 'react';

export function useIntersection<T extends HTMLElement = any>(
  options?: ConstructorParameters<typeof IntersectionObserver>[1]
) {
  const [latestEntry, setLatestEntry] = useState<null | IntersectionObserverEntry>(null);

  const ioRef = useRef<IntersectionObserver>();

  const refCallback = useCallback(
    (element: T | null) => {
      if (ioRef.current) ioRef.current.disconnect();
      if (element === null) {
        setLatestEntry(null);
        return;
      }

      ioRef.current = new IntersectionObserver(([entry]) => {
        /* The hook supports observing just one element */
        setLatestEntry(entry);
      }, options);

      ioRef.current.observe(element);
    },
    [options?.rootMargin, options?.root, options?.threshold]
  );

  return [refCallback, latestEntry] as const;
}
