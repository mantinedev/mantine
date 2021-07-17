export type KeyboardModifiers = {
  alt: boolean;
  ctrl: boolean;
  meta: boolean;
  mod: boolean;
  shift: boolean;
};

export type Hotkey = KeyboardModifiers & {
  key?: string;
};

type CheckHotkeyMatch = (event: KeyboardEvent) => boolean;

export function parseHotkey(hotkey: string): Hotkey {
  const keys = hotkey.toLowerCase().trim().split('+');

  const modifiers: KeyboardModifiers = {
    alt: keys.includes('alt'),
    ctrl: keys.includes('ctrl'),
    meta: keys.includes('meta'),
    mod: keys.includes('mod'),
    shift: keys.includes('shift'),
  };

  const reservedKeys = ['alt', 'ctrl', 'meta', 'shift', 'mod'];

  const freeKey = keys.find((key) => !reservedKeys.includes(key));

  return {
    ...modifiers,
    key: freeKey,
  };
}

/**
 * Returns a function to check if an event is a exact match for the given hotkey
 * @param hotkey Keys separated by "+" e.g. "ctrl+alt+L", "mod+S"
 * @returns
 */
export function getHotkeyMatcher(hotkey: string): CheckHotkeyMatch {
  return (event) => {
    return isExactHotkey(parseHotkey(hotkey), event);
  };
}

/**
 * Check if only specified keys are pressed in the event.
 * The hotkey "ctrl+S" should only match "ctrl+S" but not "ctrl+alt+S"
 * @param hotkey
 * @param event
 * @returns
 */
function isExactHotkey(hotkey: Hotkey, event: KeyboardEvent): boolean {
  const { alt, ctrl, meta, mod, shift, key } = hotkey;
  const { altKey, ctrlKey, metaKey, shiftKey, key: pressedKey } = event;

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

  if (key && pressedKey.toLowerCase() !== key.toLowerCase()) {
    return false;
  }

  return true;
}
