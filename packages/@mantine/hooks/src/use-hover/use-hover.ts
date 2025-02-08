import { useCallback, useState, useRef, type RefCallback } from 'react';

export function useHover<T extends HTMLElement = any>() {
  const [hovered, setHovered] = useState(false);
  const lastNodeRef = useRef<T>(null);
  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => setHovered(false), []);

  const onRefChange: RefCallback<T> = useCallback((node) => {
    lastNodeRef.current?.removeEventListener('mouseenter', onMouseEnter);
    lastNodeRef.current?.removeEventListener('mouseleave', onMouseLeave);

    node?.addEventListener('mouseenter', onMouseEnter);
    node?.addEventListener('mouseleave', onMouseLeave);

    lastNodeRef.current = node;
  }, [])

  return { ref: onRefChange, hovered };
}
