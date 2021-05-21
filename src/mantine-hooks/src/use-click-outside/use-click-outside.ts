import { useEffect, useRef } from 'react';

export function useClickOutside<T extends HTMLElement = any>(
  handler: () => void,
  events = ['mousedown', 'touchstart']
) {
  const ref = useRef<T>();

  useEffect(() => {
    const listener = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    events.forEach((fn) => document.addEventListener(fn, listener));

    return () => {
      events.forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref, handler]);

  return ref;
}
