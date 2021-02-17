import { useEffect, useRef } from 'react';

const DEFAULT_HANDLERS = ['mousedown', 'touchstart'];

export function useClickOutside(handler: () => void, handlers = DEFAULT_HANDLERS) {
  const ref = useRef<any>();

  useEffect(() => {
    const listener = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    handlers.forEach((fn) => document.addEventListener(fn, listener));

    return () => {
      handlers.forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref, handler]);

  return ref;
}
