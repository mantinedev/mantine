import { useEffect } from '@storybook/addons';
import { useRef, useMemo } from 'react';

const defaultOptions: MutationObserverInit = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
};

export function useMutationObserver<T extends HTMLElement = any>(
  callback: MutationCallback,
  options = defaultOptions
) {
  const ref = useRef<T>(null);

  const observer = useMemo(
    () => (typeof window !== 'undefined' ? new MutationObserver(callback) : null),
    []
  );

  useEffect(() => {
    observer.observe(ref.current, options);
    return observer.disconnect;
  }, []);
}
