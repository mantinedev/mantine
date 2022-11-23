import { useEffect } from 'react';
import { getHotkeyHandler, getHotkeyMatcher } from './parse-hotkey';

export { getHotkeyHandler };

export type HotkeyItem = [string, (event: KeyboardEvent) => void];

function shouldFireEvent(event: KeyboardEvent, tagsToIgnore: string[]) {
  if (event.target instanceof HTMLElement) {
    return !event.target.isContentEditable && !tagsToIgnore.includes(event.target.tagName);
  }
  return true;
}

export function useHotkeys(
  hotkeys: HotkeyItem[],
  tagsToIgnore: string[] = ['INPUT', 'TEXTAREA', 'SELECT']
) {
  useEffect(() => {
    const keydownListener = (event: KeyboardEvent) => {
      hotkeys.forEach(([hotkey, handler]) => {
        if (getHotkeyMatcher(hotkey)(event) && shouldFireEvent(event, tagsToIgnore)) {
          event.preventDefault();
          handler(event);
        }
      });
    };

    document.documentElement.addEventListener('keydown', keydownListener);
    return () => document.documentElement.removeEventListener('keydown', keydownListener);
  }, [hotkeys]);
}
