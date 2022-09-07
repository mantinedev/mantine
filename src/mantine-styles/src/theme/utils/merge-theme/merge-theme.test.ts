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

  it('merges fontSizes property correctly', () => {
    const themeBase = getThemeBase();
    expect(
      mergeTheme(themeBase, { fontSizes: { sm: '14px', lg: '1.25rem', xl: '1.5em' } })
    ).toStrictEqual({
      ...themeBase,
      fontSizes: { ...themeBase.fontSizes, sm: 14, lg: 20, xl: 24 },
    });
  });

  it('merges spacing, radius and breakpoint property correctly', () => {
    const themeBase = getThemeBase();
    expect(
      mergeTheme(themeBase, {
        spacing: { sm: '14px', lg: '1.25rem', xl: '1.5em' },
        radius: { sm: '1rem' },
        breakpoints: {
          lg: '997px',
          xl: 1080,
        },
      })
    ).toStrictEqual({
      ...themeBase,
      spacing: { ...themeBase.spacing, sm: 14, lg: 20, xl: 24 },
      radius: { ...themeBase.radius, sm: 16 },
      breakpoints: { ...themeBase.breakpoints, lg: 997, xl: 1080 },
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
