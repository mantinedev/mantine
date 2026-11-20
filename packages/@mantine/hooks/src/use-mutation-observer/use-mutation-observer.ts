import { useCallback, useEffect, useRef } from 'react';
import { useCallbackRef } from '../utils';

function getOptionsKey(options: MutationObserverInit) {
  return JSON.stringify(options ?? {});
}

export function useMutationObserver<T extends HTMLElement = any>(
  callback: MutationCallback,
  options: MutationObserverInit
): React.RefCallback<T | null> {
  const observer = useRef<MutationObserver | null>(null);
  const handleCallback = useCallbackRef(callback);
  const optionsKey = getOptionsKey(options);

  const refCallback: React.RefCallback<T | null> = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }

      if (node) {
        observer.current = new MutationObserver(handleCallback);
        observer.current.observe(node, options);
      }

      return () => {
        if (observer.current) {
          observer.current.disconnect();
          observer.current = null;
        }
      };
    },
    [handleCallback, optionsKey]
  );

  return refCallback;
}

export function useMutationObserverTarget(
  callback: MutationCallback,
  options: MutationObserverInit,
  target?: HTMLElement | (() => HTMLElement) | null
): void {
  const observer = useRef<MutationObserver | null>(null);
  const observedTarget = useRef<HTMLElement | null>(null);
  const observedOptionsKey = useRef<string | null>(null);
  const handleCallback = useCallbackRef(callback);
  const optionsKey = getOptionsKey(options);

  useEffect(() => {
    const targetElement = (typeof target === 'function' ? target() : target) ?? null;

    if (targetElement === observedTarget.current && optionsKey === observedOptionsKey.current) {
      return;
    }

    if (observer.current) {
      observer.current.disconnect();
      observer.current = null;
    }

    observedTarget.current = targetElement;
    observedOptionsKey.current = optionsKey;

    if (targetElement) {
      observer.current = new MutationObserver(handleCallback);
      observer.current.observe(targetElement, options);
    }
  });

  useEffect(
    () => () => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }

      observedTarget.current = null;
      observedOptionsKey.current = null;
    },
    []
  );
}
