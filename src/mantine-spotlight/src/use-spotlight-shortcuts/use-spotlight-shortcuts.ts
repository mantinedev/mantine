import { HotkeyItem, useHotkeys } from '@mantine/hooks';

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

export function useSpotlightShortcuts(
  shortcuts: string | string[],
  onToggle: () => void,
  tagsToIgnore?: string[],
  triggerOnContentEditable?: boolean
) {
  useHotkeys(getHotkeysPayload(shortcuts, onToggle), tagsToIgnore, triggerOnContentEditable);
}
