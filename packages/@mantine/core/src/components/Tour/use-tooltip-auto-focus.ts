import { useCallback, useEffect, useRef } from 'react';
import { useIsomorphicEffect } from '@mantine/hooks';

interface UseTooltipAutoFocusInput {
  autoFocus: boolean;
  opened: boolean;
  step: number;
}

function isFocusLost() {
  return document.activeElement === null || document.activeElement === document.body;
}

export function useTooltipAutoFocus({ autoFocus, opened, step }: UseTooltipAutoFocusInput) {
  const autoFocusRef = useRef(autoFocus);
  const nodeRef = useRef<HTMLElement | null>(null);

  useIsomorphicEffect(() => {
    autoFocusRef.current = autoFocus;
  });

  useEffect(() => {
    const node = nodeRef.current;
    if (opened && node?.isConnected && isFocusLost()) {
      node.focus({ preventScroll: true });
    }
  }, [step]);

  return useCallback((node: HTMLElement | null) => {
    nodeRef.current = node;

    if (!node) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      if (!autoFocusRef.current || !node.isConnected || node.contains(document.activeElement)) {
        return;
      }

      node.focus({ preventScroll: true });
    });

    return () => {
      window.clearTimeout(timeout);
      if (nodeRef.current === node) {
        nodeRef.current = null;
      }
    };
  }, []);
}
