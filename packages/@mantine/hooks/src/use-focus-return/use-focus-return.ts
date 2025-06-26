import { useRef } from 'react';
import { useDidUpdate } from '../use-did-update/use-did-update';

export interface UseFocusReturnOptions {
  opened: boolean;
  shouldReturnFocus?: boolean;
}

export type UseFocusReturnReturnValue = () => void;

export function useFocusReturn({
  opened,
  shouldReturnFocus = true,
}: UseFocusReturnOptions): UseFocusReturnReturnValue {
  const lastActiveElement = useRef<HTMLElement>(null);
  const returnFocus = () => {
    if (
      lastActiveElement.current &&
      'focus' in lastActiveElement.current &&
      typeof lastActiveElement.current.focus === 'function'
    ) {
      lastActiveElement.current?.focus({ preventScroll: true });
    }
  };

  useDidUpdate(() => {
    let timeout = -1;

    const clearFocusTimeout = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        window.clearTimeout(timeout);
      }
    };

    document.addEventListener('keydown', clearFocusTimeout);

    if (opened) {
      lastActiveElement.current = document.activeElement as HTMLElement;
    } else if (shouldReturnFocus) {
      timeout = window.setTimeout(returnFocus, 10);
    }

    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener('keydown', clearFocusTimeout);
    };
  }, [opened, shouldReturnFocus]);

  return returnFocus;
}
