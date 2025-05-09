import { useCallback, useRef, useState } from 'react';

export interface UseHoverReturnValue<T extends HTMLElement = any> {
  hovered: boolean;
  ref: React.RefCallback<T | null>;
}

export function useHover<T extends HTMLElement = any>(): UseHoverReturnValue<T> {
  const [hovered, setHovered] = useState(false);
  const previousNode = useRef<HTMLElement>(null);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  const ref: React.RefCallback<T | null> = useCallback(
    (node) => {
      if (previousNode.current) {
        previousNode.current.removeEventListener('mouseenter', handleMouseEnter);
        previousNode.current.removeEventListener('mouseleave', handleMouseLeave);
      }

      if (node) {
        node.addEventListener('mouseenter', handleMouseEnter);
        node.addEventListener('mouseleave', handleMouseLeave);
      }

      previousNode.current = node;
    },
    [handleMouseEnter, handleMouseLeave]
  );

  return { ref, hovered };
}
