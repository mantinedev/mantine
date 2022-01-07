import { useEffect } from 'react';
import { getHotkeyMatcher, getHotkeyHandler } from './parse-hotkey';

export { getHotkeyHandler };

type HokeyItem = [string, (event: KeyboardEvent) => void];

export function useHotkeys(hotkeys: HokeyItem[]) {
  useEffect(() => {
    const keydownListener = (event: KeyboardEvent) => {
      hotkeys.forEach(([hotkey, handler]) => {
        if (getHotkeyMatcher(hotkey)(event)) {
          event.preventDefault();
          handler(event);
        }
      });
    };

    document.documentElement.addEventListener('keydown', keydownListener);
    return () => document.documentElement.removeEventListener('keydown', keydownListener);
  }, [hotkeys]);
}
