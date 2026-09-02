import { useCallback, useEffect, useRef } from 'react';

export function useTooltipAutoFocus(enabled: boolean) {
  const enabledRef = useRef(enabled);

  useEffect(() => {
    enabledRef.current = enabled;
  });

  return useCallback((node: HTMLElement | null) => {
    if (!node) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      if (!enabledRef.current || !node.isConnected || node.contains(document.activeElement)) {
        return;
      }

      node.focus({ preventScroll: true });
    });

    return () => window.clearTimeout(timeout);
  }, []);
}
