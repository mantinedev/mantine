import { useEffect } from 'react';
import { useCallbackRef } from '../utils';
import { getHotkeyHandler, getHotkeyMatcher, HotkeyItemOptions } from './parse-hotkey';

export type { HotkeyItemOptions };
export { getHotkeyHandler };

export type HotkeyItem = [string, (event: KeyboardEvent) => void, HotkeyItemOptions?];

function shouldFireEvent(
  event: KeyboardEvent,
  tagsToIgnore: string[],
  triggerOnContentEditable = false
) {
  if (event.target instanceof HTMLElement) {
    if (triggerOnContentEditable) {
      return !tagsToIgnore.includes(event.target.tagName);
    }

    return !event.target.isContentEditable && !tagsToIgnore.includes(event.target.tagName);
  }

  return true;
}

export function useHotkeys(
  hotkeys: HotkeyItem[],
  tagsToIgnore: string[] = ['INPUT', 'TEXTAREA', 'SELECT'],
  triggerOnContentEditable = false
) {
  // useCallbackRef instead of React's useEffectEvent: effect event impls are not
  // updated inside ForwardRef and SimpleMemoComponent fibers, so the handler would
  // be pinned to the mount render there. See #9078
  const handleKeydown = useCallbackRef((event: KeyboardEvent) => {
    hotkeys.forEach(
      ([hotkey, handler, options = { preventDefault: true, usePhysicalKeys: false }]) => {
        if (
          getHotkeyMatcher(hotkey, options.usePhysicalKeys)(event) &&
          shouldFireEvent(event, tagsToIgnore, triggerOnContentEditable)
        ) {
          if (options.preventDefault) {
            event.preventDefault();
          }

          handler(event);
        }
      }
    );
  });

  useEffect(() => {
    document.documentElement.addEventListener('keydown', handleKeydown);
    return () => document.documentElement.removeEventListener('keydown', handleKeydown);
  }, []);
}

export namespace useHotkeys {
  export type Hotkey = HotkeyItem;
}
