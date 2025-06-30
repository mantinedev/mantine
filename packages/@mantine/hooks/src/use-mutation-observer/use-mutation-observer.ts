import { useCallback, useEffect, useRef } from 'react';

export function useMutationObserver<T extends HTMLElement = any>(
  callback: MutationCallback,
  options: MutationObserverInit
): React.RefCallback<T | null> {
  const observer = useRef<MutationObserver | null>(null);

  const refCallback: React.RefCallback<T | null> = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }

      if (node) {
        observer.current = new MutationObserver(callback);
        observer.current.observe(node, options);
      }

      return () => {
        if (observer.current) {
          observer.current.disconnect();
          observer.current = null;
        }
      };
    },
    [callback, options]
  );

  return refCallback;
}

export function useMutationObserverTarget(
  callback: MutationCallback,
  options: MutationObserverInit,
  target?: HTMLElement | (() => HTMLElement) | null
): void {
  const observer = useRef<MutationObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
      observer.current = null;
    }

    const targetElement = typeof target === 'function' ? target() : target;

    if (targetElement) {
      observer.current = new MutationObserver(callback);
      observer.current.observe(targetElement, options);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }
    };
  }, [callback, options, target]);
}
