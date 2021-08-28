import { useRef, useEffect } from 'react';

interface UseFocusReturn {
  opened: boolean;
  transitionDuration: number;
}

/** Returns focus to last active element, used in Modal and Drawer
 *  Is not documented as has very limited usage
 */
export function useFocusReturn({ opened, transitionDuration }: UseFocusReturn) {
  const returnFocus = useRef<HTMLElement>();

  useEffect(() => {
    if (opened) {
      returnFocus.current = document.activeElement as HTMLElement;
    } else {
      setTimeout(() => {
        returnFocus.current?.focus();
      }, transitionDuration + 10);
    }
  }, [opened]);
}
