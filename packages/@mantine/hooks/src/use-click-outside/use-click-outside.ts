import { useEffect, useEffectEvent, useRef } from 'react';

type EventType = MouseEvent | TouchEvent;

const DEFAULT_EVENTS = ['mousedown', 'touchstart'];

export function useClickOutside<T extends HTMLElement = any>(
  callback: (event: EventType) => void,
  events?: string[] | null,
  nodes?: (HTMLElement | null)[],
  enabled: boolean = true
) {
  const ref = useRef<T>(null);
  const eventsList = events || DEFAULT_EVENTS;

  const listener = useEffectEvent((event: Event) => {
    const { target } = event ?? {};
    const shouldIgnore =
      !document.body.contains(target as Node) && (target as Element)?.tagName !== 'HTML';

    if (shouldIgnore) {
      return;
    }

    const path = event.composedPath();

    if (Array.isArray(nodes)) {
      const shouldTrigger = nodes.every((node) => !!node && !path.includes(node));
      shouldTrigger && callback(event as EventType);
    } else if (ref.current && !path.includes(ref.current)) {
      callback(event as EventType);
    }
  });

  const eventsKey = eventsList.join(',');

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const events = eventsKey.split(',');
    events.forEach((fn) => document.addEventListener(fn, listener));

    return () => {
      events.forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [eventsKey, enabled]);

  return ref;
}
