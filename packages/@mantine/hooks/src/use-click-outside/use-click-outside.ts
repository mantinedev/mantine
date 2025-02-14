import { useCallback, useEffect, useState } from 'react';

const DEFAULT_EVENTS = ['mousedown', 'touchstart'];

export function useClickOutside<T extends HTMLElement = any>(
  handler: () => void,
  events?: string[] | null,
  excludedNodes?: (HTMLElement | null)[]
) {
  const [node, setNode] = useState<T | null>(null);

  const listener = useCallback((event: Event) => {
    const { target } = event ?? {};

    if (Array.isArray(excludedNodes)) {
      const shouldIgnore =
        (target as Element)?.hasAttribute?.('data-ignore-outside-clicks') ||
        (!document.body.contains(target as Node) && (target as Element)?.tagName !== 'HTML');

      const shouldTrigger = excludedNodes.every((excludedNode) => (
        !!excludedNode && !event.composedPath().includes(excludedNode)
        )
      );

      shouldTrigger && !shouldIgnore && handler();
    } else if (node && !node.contains(target as Node)) {
      handler();
    }
  }, [node, handler, excludedNodes]);

  useEffect(() => {
    (events || DEFAULT_EVENTS).forEach((eventName) => {
      document.addEventListener(eventName, listener);
    });

    return () => {
      (events || DEFAULT_EVENTS).forEach((eventName) => {
        document.removeEventListener(eventName, listener);
      });
    };
  }, [listener, events]);

  return setNode;
}
