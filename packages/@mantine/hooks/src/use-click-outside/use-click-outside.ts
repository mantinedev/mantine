import { useEffect, useRef } from 'react';

const DEFAULT_EVENTS = ['mousedown', 'touchstart'];

export function useClickOutside<T extends HTMLElement = any>(
  callback: () => void,
  events?: string[] | null,
  nodes?: (HTMLElement | null)[]
) {
  const ref = useRef<T>(null);
  const eventsList = events || DEFAULT_EVENTS;

  useEffect(() => {
    const listener = (event: any) => {
      const { target } = event ?? {};
      if (Array.isArray(nodes)) {
        const shouldIgnore = !document.body.contains(target) && target.tagName !== 'HTML';
        const shouldTrigger = nodes.every((node) => !!node && !event.composedPath().includes(node));
        shouldTrigger && !shouldIgnore && callback();
      } else if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    };

    eventsList.forEach((fn) => document.addEventListener(fn, listener));

    return () => {
      eventsList.forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref, callback, nodes]);

  return ref;
}
