import { useEffect } from 'react';
import { getHotkeyMatcher, getHotkeyHandler } from './parse-hotkey';

export { getHotkeyHandler };

type HokeyItem = [string, (event: KeyboardEvent) => void];

export function useHotkeys(hotkeys: HokeyItem[]) {
  // if (typeof hotkey !== 'string' && process.env.NODE_ENV === 'development') {
  //   // eslint-disable-next-line no-console
  //   console.error(
  //     `[@mantine/hooks] use-hotkey hook received invalid hotkey type, expected string, instead got ${typeof hotkey}`
  //   );
  // }

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
