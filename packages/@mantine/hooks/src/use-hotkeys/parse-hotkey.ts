export type KeyboardModifiers = {
  alt: boolean;
  ctrl: boolean;
  meta: boolean;
  mod: boolean;
  shift: boolean;
  plus: boolean;
};

export type Hotkey = KeyboardModifiers & {
  key?: string;
};

type CheckHotkeyMatch = (event: KeyboardEvent) => boolean;

export function parseHotkey(hotkey: string): Hotkey {
  const keys = hotkey
    .toLowerCase()
    .split('+')
    .map((part) => part.trim());

  const modifiers: KeyboardModifiers = {
    alt: keys.includes('alt'),
    ctrl: keys.includes('ctrl'),
    meta: keys.includes('meta'),
    mod: keys.includes('mod'),
    shift: keys.includes('shift'),
    plus: keys.includes('[plus]'),
  };

  const reservedKeys = ['alt', 'ctrl', 'meta', 'shift', 'mod'];

  const freeKey = keys.find((key) => !reservedKeys.includes(key));

  return {
    ...modifiers,
    key: freeKey === '[plus]' ? '+' : freeKey,
  };
}

function isExactHotkey(hotkey: Hotkey, event: KeyboardEvent, usePhysicalKeys?: boolean): boolean {
  const { alt, ctrl, meta, mod, shift, key } = hotkey;
  const { altKey, ctrlKey, metaKey, shiftKey, key: pressedKey, code: pressedCode } = event;

  if (alt !== altKey) {
    return false;
  }

  if (mod) {
    if (!ctrlKey && !metaKey) {
      return false;
    }
  } else {
    if (ctrl !== ctrlKey) {
      return false;
    }
    if (meta !== metaKey) {
      return false;
    }
  }
  if (shift !== shiftKey) {
    return false;
  }

  if (
    key &&
    ((!usePhysicalKeys && pressedKey.toLowerCase() === key.toLowerCase()) ||
      pressedCode.replace('Key', '').toLowerCase() === key.toLowerCase())
  ) {
    return true;
  }

  return false;
}

export function getHotkeyMatcher(hotkey: string, usePhysicalKeys?: boolean): CheckHotkeyMatch {
  return (event) => isExactHotkey(parseHotkey(hotkey), event, usePhysicalKeys);
}

export interface HotkeyItemOptions {
  preventDefault?: boolean;
  usePhysicalKeys?: boolean;
}

type HotkeyItem = [string, (event: any) => void, HotkeyItemOptions?];

export function getHotkeyHandler(hotkeys: HotkeyItem[]) {
  return (event: React.KeyboardEvent<HTMLElement> | KeyboardEvent) => {
    const _event = 'nativeEvent' in event ? event.nativeEvent : event;
    hotkeys.forEach(
      ([hotkey, handler, options = { preventDefault: true, usePhysicalKeys: false }]) => {
        if (getHotkeyMatcher(hotkey, options.usePhysicalKeys)(_event)) {
          if (options.preventDefault) {
            event.preventDefault();
          }

          handler(_event);
        }
      }
    );
  };
}
