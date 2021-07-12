import { useCallback, useState } from 'react';

export function useIntersection(
  options?: ConstructorParameters<typeof IntersectionObserver>[1]
) {
  const [latestEntry, setLatestEntry] = useState<null | IntersectionObserverEntry>(null);

  const refCallback = useCallback(
    (element: HTMLElement | null) => {
      if (element !== null) return () => {};

      const io = new IntersectionObserver(([entry]) => {
        /* The hook supports observing just one element */
        setLatestEntry(entry);
      }, options);

      io.observe(element);

      return () => io.disconnect();
    },
    [options.rootMargin, options.root, options.threshold]
  );

  return [refCallback, latestEntry];
}
