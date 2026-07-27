import { useCallback, useEffect, useState } from 'react';

export interface UseIntersectionOptions extends Omit<IntersectionObserverInit, 'root'> {
  /** Element or ref object used as the observer root, defaults to the browser viewport */
  root?: IntersectionObserverInit['root'] | React.RefObject<Element | null>;
}

export interface UseIntersectionReturnValue<T> {
  ref: React.RefCallback<T | null>;
  entry: IntersectionObserverEntry | null;
}

function resolveRoot(root: UseIntersectionOptions['root']): IntersectionObserverInit['root'] {
  if (root && 'current' in root) {
    return root.current;
  }

  return root;
}

export function useIntersection<T extends HTMLElement = any>(
  options?: UseIntersectionOptions
): UseIntersectionReturnValue<T> {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [element, setElement] = useState<T | null>(null);

  const ref = useCallback<React.RefCallback<T | null>>((node) => {
    setElement(node);
  }, []);

  const root = resolveRoot(options?.root);

  useEffect(() => {
    if (element === null) {
      setEntry(null);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([_entry]) => {
        setEntry(_entry);
      },
      { ...options, root }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, root, options?.rootMargin, options?.threshold]);

  return { ref, entry };
}

export namespace useIntersection {
  export type Options = UseIntersectionOptions;
  export type ReturnValue<T> = UseIntersectionReturnValue<T>;
}
