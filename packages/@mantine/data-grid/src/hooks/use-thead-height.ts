import { useState } from 'react';
import { useIsomorphicEffect } from '@mantine/hooks';

export function useTheadHeight(rootRef: React.RefObject<HTMLElement | null>) {
  const [node, setNode] = useState<HTMLElement | null>(null);

  useIsomorphicEffect(() => {
    const root = rootRef.current;
    if (!node || !root) {
      return undefined;
    }

    const write = () => root.style.setProperty('--dg-thead-height', `${node.offsetHeight}px`);
    write();

    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(write) : null;
    observer?.observe(node);

    return () => {
      observer?.disconnect();
      root.style.removeProperty('--dg-thead-height');
    };
  }, [node]);

  return setNode;
}
