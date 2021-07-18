import { useEffect, useRef } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';
import { getHotkeyMatcher } from './parse-hotkey';

export function useHotkey(hotkey: string, handler: (event: KeyboardEvent) => void) {
  const latestHandler = useRef(handler);

  useIsomorphicEffect(() => {
    latestHandler.current = handler;
  });

  useEffect(() => {
    const element = document.documentElement;

    const keydownListener = (event: KeyboardEvent) => {
      if (getHotkeyMatcher(hotkey)(event)) {
        event.preventDefault();
        latestHandler.current(event);
      }
    };

    if (element && 'addEventListener' in element) {
      element.addEventListener('keydown', keydownListener);

      return () => {
        element.removeEventListener('keydown', keydownListener);
      };
    }

    return () => {};
  }, [hotkey]);
}
