import { getHotkeyMatcher, parseHotkey } from './parse-hotkey';

describe('@mantine/hooks/use-hot-key/parse-hotkey', () => {
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

  it('parses [plus] key correctly', () => {
    expect(parseHotkey('ctrl+[plus]')).toMatchObject({
      alt: false,
      ctrl: true,
      meta: false,
      mod: false,
      shift: false,
      key: '+',
    });

    expect(parseHotkey('ctrl+[plus]+shift+alt+[plus]')).toMatchObject({
      alt: true,
      ctrl: true,
      meta: false,
      mod: false,
      shift: true,
      key: '+',
    });
  });
});
