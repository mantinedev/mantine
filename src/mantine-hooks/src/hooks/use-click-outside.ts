import { useEffect, useRef } from 'react';

const DEFAULT_HANDLERS = ['mousedown', 'touchstart'];

export function useClickOutside(handler: () => void, handlers = DEFAULT_HANDLERS) {
  const ref = useRef<any>();
  const isBrowser = typeof document !== 'undefined';

  useEffect(() => {
    const listener = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    isBrowser && handlers.forEach((fn) => document.addEventListener(fn, listener));

    return () => {
      isBrowser && handlers.forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref, handler]);

  return ref;
}
