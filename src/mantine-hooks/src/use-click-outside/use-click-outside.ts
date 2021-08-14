import { useEffect, useRef } from 'react';

export function useClickOutside<T extends HTMLElement = any>(
  handler: () => void,
  events = ['mousedown', 'touchstart'],
  nodes?: HTMLElement[]
) {
  const ref = useRef<T>();

  useEffect(() => {
    const listener = (event: any) => {
      if (Array.isArray(nodes)) {
        const shouldTrigger = nodes.every((node) => !!node && !node.contains(event.target));
        shouldTrigger && handler();
      } else if (ref.current && !ref.current.contains(event.target)) {
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
