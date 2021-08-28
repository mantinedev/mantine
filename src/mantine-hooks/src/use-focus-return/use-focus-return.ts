import { useRef } from 'react';
import { useDidUpdate } from '../use-did-update/use-did-update';

interface UseFocusReturn {
  opened: boolean;
  transitionDuration: number;
}

/** Returns focus to last active element, used in Modal and Drawer
 *  Is not documented as has very limited usage
 */
export function useFocusReturn({ opened, transitionDuration }: UseFocusReturn) {
  const returnFocus = useRef<HTMLElement>();

  useDidUpdate(() => {
    let timeout = -1;

    if (opened) {
      returnFocus.current = document.activeElement as HTMLElement;
    } else {
      timeout = window.setTimeout(() => {
        if (
          returnFocus.current &&
          'focus' in returnFocus.current &&
          typeof returnFocus.current.focus === 'function'
        ) {
          returnFocus.current?.focus();
        }
      }, transitionDuration + 10);
    }

    return () => window.clearTimeout(timeout);
  }, [opened]);
}
