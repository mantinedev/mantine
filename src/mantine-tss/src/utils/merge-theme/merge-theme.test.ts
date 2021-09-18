import { DEFAULT_THEME } from '@mantine/theme';
import { mergeTheme } from './merge-theme';

describe('@mantine/tss/merge-theme', () => {
  it('shallow merges non-object properties', () => {
    expect(mergeTheme(DEFAULT_THEME, { primaryColor: 'red', white: '#ccc' })).toEqual({
      ...DEFAULT_THEME,
      primaryColor: 'red',
      white: '#ccc',
    });
  });

  it('shallow merges theme object properties', () => {
    expect(
      mergeTheme(DEFAULT_THEME, {
        colors: { stone: ['#ccc', '#ddd', '#eee'], red: ['red'] },
        spacing: { xl: 900 },
      })
    ).toEqual({
      ...DEFAULT_THEME,
      colors: { ...DEFAULT_THEME.colors, stone: ['#ccc', '#ddd', '#eee'], red: ['red'] },
      spacing: {
        ...DEFAULT_THEME.spacing,
        xl: 900,
      },
    });
  });

  it('merges headings correctly', () => {
    expect(
      mergeTheme(DEFAULT_THEME, {
        headings: { fontFamily: 'sans-serif', sizes: { h3: { fontSize: 500 } } },
      })
    ).toEqual({
      ...DEFAULT_THEME,
      headings: {
        ...DEFAULT_THEME.headings,
        fontFamily: 'sans-serif',
        sizes: {
          ...DEFAULT_THEME.headings.sizes,
          h3: {
            ...DEFAULT_THEME.headings.sizes.h3,
            fontSize: 500,
          },
        },
      },
    });
  });
});
