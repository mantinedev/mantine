import { useEffect, useRef } from 'react';

interface UseStackFocusRestoreInput {
  id: string;
  opened: boolean;
  stackActive: boolean;
  focusTrapActive: boolean;
  shouldReturnFocus: boolean;
}

export function useStackFocusRestore({
  id,
  opened,
  stackActive,
  focusTrapActive,
  shouldReturnFocus,
}: UseStackFocusRestoreInput) {
  const lastFocusedElement = useRef<HTMLElement | null>(null);
  const covered = useRef(false);

  useEffect(() => {
    if (!focusTrapActive) {
      return undefined;
    }

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && document.getElementById(id)?.contains(target)) {
        lastFocusedElement.current = target;
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    return () => document.removeEventListener('focusin', handleFocusIn);
  }, [focusTrapActive, id]);

  useEffect(() => {
    if (!opened) {
      covered.current = false;
      lastFocusedElement.current = null;
      return undefined;
    }

    if (!stackActive) {
      covered.current = true;
      return undefined;
    }

    if (!covered.current) {
      return undefined;
    }

    covered.current = false;
    const element = lastFocusedElement.current;
    if (!element || !shouldReturnFocus) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      if (element.isConnected) {
        element.focus({ preventScroll: true });
      }
    });

    return () => window.clearTimeout(timeout);
  }, [opened, stackActive, shouldReturnFocus]);
}
