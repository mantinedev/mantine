import { useEffect, useRef } from 'react';

type EventType = MouseEvent | TouchEvent;

const DEFAULT_EVENTS = ['mousedown', 'touchstart'];

export function useClickOutside<T extends HTMLElement = any>(
  callback: (event: EventType) => void,
  events?: string[] | null,
  nodes?: (HTMLElement | null)[]
) {
  const ref = useRef<T>(null);
  const eventsList = events || DEFAULT_EVENTS;

  useEffect(() => {
    const listener = (event: Event) => {
      const { target } = event ?? {};
      if (Array.isArray(nodes)) {
        const shouldIgnore =
          !document.body.contains(target as Node) && (target as Element)?.tagName !== 'HTML';
        const shouldTrigger = nodes.every((node) => !!node && !event.composedPath().includes(node));
        shouldTrigger && !shouldIgnore && callback(event as EventType);
      } else if (ref.current && !ref.current.contains(target as Node)) {
        callback(event as EventType);
      }
    };

    eventsList.forEach((fn) => document.addEventListener(fn, listener));

    return () => {
      eventsList.forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref, callback, nodes]);

  return ref;
}
