import { DEFAULT_THEME } from '../../default-theme';
import { mergeTheme } from './merge-theme';

const getThemeBase = () => {
  const themeBase = { ...DEFAULT_THEME };
  delete themeBase.fn;
  return themeBase;
};

describe('@mantine/styles/merge-theme', () => {
  it('shallow merges non-object properties', () => {
    const themeBase = getThemeBase();
    expect(mergeTheme(themeBase, { primaryColor: 'red', white: '#ccc' })).toStrictEqual({
      ...themeBase,
      primaryColor: 'red',
      white: '#ccc',
    });
  });

  it('shallow merges theme object properties', () => {
    const themeBase = getThemeBase();
    expect(
      mergeTheme(themeBase, {
        colors: { stone: ['#ccc', '#ddd', '#eee'], red: ['red'] },
        spacing: { xl: 900 },
      })
    ).toStrictEqual({
      ...themeBase,
      colors: { ...themeBase.colors, stone: ['#ccc', '#ddd', '#eee'], red: ['red'] },
      spacing: {
        ...themeBase.spacing,
        xl: 900,
      },
    });
  });

  it('merges headings correctly', () => {
    const themeBase = getThemeBase();
    expect(
      mergeTheme(themeBase, {
        headings: { fontFamily: 'sans-serif', sizes: { h3: { fontSize: 500 } } },
      })
    ).toStrictEqual({
      ...themeBase,
      headings: {
        ...themeBase.headings,
        fontFamily: 'sans-serif',
        sizes: {
          ...themeBase.headings.sizes,
          h3: {
            ...themeBase.headings.sizes.h3,
            fontSize: 500,
          },
        },
      },
    });
  });

  it('merges other property correctly', () => {
    const themeBase = getThemeBase();
    expect(mergeTheme(themeBase, { other: { prop: 1, test: { nested: true } } })).toStrictEqual({
      ...themeBase,
      other: { prop: 1, test: { nested: true } },
    });
  });
});
