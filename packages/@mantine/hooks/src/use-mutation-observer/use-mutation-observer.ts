import { useEffect, useRef } from 'react';

export function useMutationObserver<Element extends HTMLElement>(
  callback: MutationCallback,
  options: MutationObserverInit,
  target?: HTMLElement | (() => HTMLElement) | null
) {
  const observer = useRef<MutationObserver>(null);
  const ref = useRef<Element>(null);

  useEffect(() => {
    const targetElement = typeof target === 'function' ? target() : target;

    if (targetElement || ref.current) {
      observer.current = new MutationObserver(callback);
      observer.current.observe(targetElement || ref.current!, options);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [callback, options]);

  return ref;
}
