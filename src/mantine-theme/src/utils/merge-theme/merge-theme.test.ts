import { mergeTheme } from './merge-theme';
import { DEFAULT_THEME } from '../../default-theme';

describe('@mantine/theme/merge-theme', () => {
  it('shallow merges non-object properties', () => {
    expect(
      mergeTheme(
        { __mantine_theme: true, ...DEFAULT_THEME },
        { primaryColor: 'red', white: '#ccc' }
      )
    ).toEqual({ __mantine_theme: true, ...DEFAULT_THEME, primaryColor: 'red', white: '#ccc' });
  });

  it('shallow merges theme object properties', () => {
    expect(
      mergeTheme(
        { __mantine_theme: true, ...DEFAULT_THEME },
        { colors: { stone: ['#ccc', '#ddd', '#eee'], red: ['red'] }, spacing: { xl: 900 } }
      )
    ).toEqual({
      __mantine_theme: true,
      ...DEFAULT_THEME,
      colors: { ...DEFAULT_THEME.colors, stone: ['#ccc', '#ddd', '#eee'], red: ['red'] },
      spacing: {
        ...DEFAULT_THEME.spacing,
        xl: 900,
      },
    });
  });
});
