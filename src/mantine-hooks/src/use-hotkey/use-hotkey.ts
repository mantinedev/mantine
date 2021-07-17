import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { getHotkeyMatcher } from './parse-hotkey';

export type HotkeyEventHandler = (event: KeyboardEvent) => void;

/**
 * Hook to globally register (on `document.documentElement`) a keyboard event
 * which fires `handler` when the given keys in `hotkey` match
 * @param hotkey Keys separated by "+". Supported modifiers: ctrl, alt, meta, shift, mod
 * @param handler
 */
export function useHotkey(hotkey: string, handler: HotkeyEventHandler) {
  const latestHandler = useRef(handler);

  useLayoutEffect(() => {
    latestHandler.current = handler;
  });

  const handleHotkey = useCallback(
    (event: KeyboardEvent) => {
      if (!getHotkeyMatcher(hotkey)(event)) {
        return;
      }

      event.preventDefault();
      latestHandler.current(event);
    },
    [hotkey]
  );

  useEffect(() => {
    const element = document.documentElement;

    const keydownListener = (event: KeyboardEvent) => {
      handleHotkey(event);
    };

    if (!element || !('addEventListener' in element)) {
      return;
    }

    element.addEventListener('keydown', keydownListener);

    return () => {
      element.removeEventListener('keydown', keydownListener);
    };
  }, [handleHotkey]);
}
