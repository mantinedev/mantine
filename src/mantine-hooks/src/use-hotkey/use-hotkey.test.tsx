import { renderHook } from '@testing-library/react-hooks';
import { getHotkeyMatcher, parseHotkey } from './parse-hotkey';
import { useHotkey } from './use-hotkey';

describe('@mantine/hooks/parse-hotkey', () => {
  it('should parse hotkey correctly', () => {
    expect(parseHotkey('meta+S')).toMatchObject({
      alt: false,
      ctrl: false,
      meta: true,
      mod: false,
      shift: false,
      key: 's',
    });

    expect(parseHotkey('alt+shift+L')).toMatchObject({
      alt: true,
      ctrl: false,
      meta: false,
      mod: false,
      shift: true,
      key: 'l',
    });

    expect(parseHotkey('mod+K')).toMatchObject({
      alt: false,
      ctrl: false,
      meta: false,
      mod: true,
      shift: false,
      key: 'k',
    });

    expect(parseHotkey('ctrl+shift+alt+K')).toMatchObject({
      alt: true,
      ctrl: true,
      meta: false,
      mod: false,
      shift: true,
      key: 'k',
    });

    expect(parseHotkey('mod+S+A')).toMatchObject({
      alt: false,
      ctrl: false,
      meta: false,
      mod: true,
      shift: false,
      key: 's',
    });
  });

  it('should detect exact hotkey', () => {
    expect(
      getHotkeyMatcher('ctrl+alt+I')(
        new KeyboardEvent('keydown', {
          ctrlKey: true,
          altKey: true,
          key: 'I',
        })
      )
    ).toBe(true);

    expect(
      getHotkeyMatcher('mod+E')(
        new KeyboardEvent('keydown', {
          ctrlKey: true,
          key: 'E',
        })
      )
    ).toBe(true);

    expect(
      getHotkeyMatcher('shift+alt+O')(
        new KeyboardEvent('keydown', {
          ctrlKey: true,
          altKey: true,
          shiftKey: true,
          key: 'O',
        })
      )
    ).toBe(false);
  });
});

describe('@mantine/hooks/use-hotkey', () => {
  it('should listen to document events', () => {
    const handler = jest.fn();
    renderHook(() => useHotkey('shift+ctrl+S', handler));

    const event = new KeyboardEvent('keydown', {
      shiftKey: true,
      ctrlKey: true,
      key: 'S',
    });
    document.documentElement.dispatchEvent(event);

    expect(handler).toHaveBeenCalled();
  });

  it('should not fire when keys mismatch', () => {
    const handler = jest.fn();
    renderHook(() => useHotkey('alt+L', handler));

    const wrongKeysEvent = new KeyboardEvent('keydown', {
      metaKey: true,
      key: 'L',
    });
    document.documentElement.dispatchEvent(wrongKeysEvent);

    expect(handler).not.toHaveBeenCalled();
  });

  it('should not fire when event is no exact match', () => {
    const handler = jest.fn();
    renderHook(() => useHotkey('mod+P', handler));

    const notExactEvent = new KeyboardEvent('keydown', {
      metaKey: true,
      altKey: true,
      key: 'P',
    });
    document.documentElement.dispatchEvent(notExactEvent);

    expect(handler).not.toHaveBeenCalled();
  });
});
