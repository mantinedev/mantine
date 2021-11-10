import { DEFAULT_THEME } from '../../default-theme';
import { mergeTheme } from './merge-theme';

const getThemeBase = () => {
  const themeBase = { ...DEFAULT_THEME };
  delete themeBase.fn;
  return themeBase;
};

const getMergedThemeBase = (themeBase: any, override: any) => {
  const result = mergeTheme(themeBase, override);
  delete result.fn;
  return result;
};

describe('@mantine/styles/merge-theme', () => {
  it('shallow merges non-object properties', () => {
    const themeBase = getThemeBase();
    expect(getMergedThemeBase(themeBase, { primaryColor: 'red', white: '#ccc' })).toEqual({
      ...themeBase,
      primaryColor: 'red',
      white: '#ccc',
    });
  });

  it('shallow merges theme object properties', () => {
    const themeBase = getThemeBase();
    expect(
      getMergedThemeBase(themeBase, {
        colors: { stone: ['#ccc', '#ddd', '#eee'], red: ['red'] },
        spacing: { xl: 900 },
      })
    ).toEqual({
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
      getMergedThemeBase(themeBase, {
        headings: { fontFamily: 'sans-serif', sizes: { h3: { fontSize: 500 } } },
      })
    ).toEqual({
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
    expect(getMergedThemeBase(themeBase, { other: { prop: 1, test: { nested: true } } })).toEqual({
      ...themeBase,
      other: { prop: 1, test: { nested: true } },
    });
  });
});
