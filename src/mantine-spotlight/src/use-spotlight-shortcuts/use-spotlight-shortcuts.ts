import { useHotkeys, HotkeyItem } from '@mantine/hooks';

export function getHotkeysPayload(
  shortcuts: string | string[],
  onToggle: () => void
): HotkeyItem[] {
  if (shortcuts === null) {
    return [];
  }

  if (Array.isArray(shortcuts)) {
    return shortcuts.map((shortcut) => [shortcut, onToggle]);
  }

  return [[shortcuts, onToggle]];
}

export function useSpotlightShortcuts(shortcuts: string | string[], onToggle: () => void) {
  useHotkeys(getHotkeysPayload(shortcuts, onToggle));
}
