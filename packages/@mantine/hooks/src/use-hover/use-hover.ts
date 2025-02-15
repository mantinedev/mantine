import { useCallback, useRef, useState, type RefCallback } from 'react';

export function useHover<T extends HTMLElement = any>() {
  const [hovered, setHovered] = useState(false);
  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => setHovered(false), []);

  const cleanupAbortControllerRef = useRef<AbortController>(null);

  const onRefChange: RefCallback<T> = useCallback((node) => {
    cleanupAbortControllerRef.current?.abort();

    const controller = new AbortController();
    const { signal } = controller;

    node?.addEventListener('mouseenter', onMouseEnter, { signal });
    node?.addEventListener('mouseleave', onMouseLeave, { signal });

    cleanupAbortControllerRef.current = controller;
  }, []);

  return { ref: onRefChange, hovered };
}
