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

    expect(
      getHotkeyMatcher(
        'mod+k',
        true
      )(
        new KeyboardEvent('keydown', {
          ctrlKey: true,
          code: 'KeyK',
          key: 'n',
        })
      )
    ).toBe(true);

    expect(
      getHotkeyMatcher(
        'mod+k',
        false
      )(
        new KeyboardEvent('keydown', {
          ctrlKey: true,
          code: 'KeyK',
          key: 'n',
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

  it('handles Escape key correctly', () => {
    const escapeResult = parseHotkey('Escape');
    expect(escapeResult).toMatchObject({
      alt: false,
      ctrl: false,
      meta: false,
      mod: false,
      shift: false,
      key: 'escape',
    });

    const escResult = parseHotkey('Esc');
    expect(escResult).toMatchObject({
      alt: false,
      ctrl: false,
      meta: false,
      mod: false,
      shift: false,
      key: 'esc',
    });

    expect(
      getHotkeyMatcher('Escape')(
        new KeyboardEvent('keydown', {
          key: 'Escape',
        })
      )
    ).toBe(true);

    expect(
      getHotkeyMatcher('mod+Escape')(
        new KeyboardEvent('keydown', {
          ctrlKey: true,
          key: 'Escape',
        })
      )
    ).toBe(true);

    expect(
      getHotkeyMatcher('escape')(
        new KeyboardEvent('keydown', {
          key: 'Escape',
        })
      )
    ).toBe(true);
  });

  it('ensures compatibility with existing escape key usage', () => {
    expect(
      getHotkeyMatcher('esc')(
        new KeyboardEvent('keydown', {
          key: 'Escape',
        })
      )
    ).toBe(true);

    expect(
      getHotkeyMatcher('ESC')(
        new KeyboardEvent('keydown', {
          key: 'Escape',
        })
      )
    ).toBe(true);

    expect(
      getHotkeyMatcher('mod+esc')(
        new KeyboardEvent('keydown', {
          ctrlKey: true,
          key: 'Escape',
        })
      )
    ).toBe(true);
  });
});
