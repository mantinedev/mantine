import { useEffect, useRef } from 'react';

export function useMutationObserver<T extends HTMLElement = any>(
  callback: MutationCallback,
  options: MutationObserverInit,
  target?: HTMLElement | (() => HTMLElement) | null
) {
  const observer = useRef<MutationObserver>(null);
  const ref = useRef<T>(null);

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
