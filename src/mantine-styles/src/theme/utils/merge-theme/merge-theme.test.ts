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
        spacing: { xl: '900rem' },
      })
    ).toStrictEqual({
      ...themeBase,
      colors: { ...themeBase.colors, stone: ['#ccc', '#ddd', '#eee'], red: ['red'] },
      spacing: {
        ...themeBase.spacing,
        xl: '900rem',
      },
    });
  });

  it('merges breakpoints with valid order', () => {
    const themeBase = getThemeBase();

    expect(
      mergeTheme(themeBase, { breakpoints: { xxl: '999em', min: '1em', xs: '10em' } })
    ).toStrictEqual({
      ...themeBase,
      breakpoints: { min: '1em', ...{ ...themeBase.breakpoints, xs: '10em' }, xxl: '999em' },
    });
  });

  it('merges headings correctly', () => {
    const themeBase = getThemeBase();
    expect(
      mergeTheme(themeBase, {
        headings: { fontFamily: 'sans-serif', sizes: { h3: { fontSize: '500rem' } } },
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
            fontSize: '500rem',
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

  it('sets headings font-family based on theme.fontFamily if theme.headings.fontFamily is not defined', () => {
    const withoutHeading = mergeTheme(getThemeBase(), { fontFamily: 'test' });
    expect(withoutHeading.fontFamily).toBe('test');
    expect(withoutHeading.headings.fontFamily).toBe('test');

    const withHeading = mergeTheme(getThemeBase(), {
      fontFamily: 'test',
      headings: { fontFamily: 'test-heading' },
    });
    expect(withHeading.fontFamily).toBe('test');
    expect(withHeading.headings.fontFamily).toBe('test-heading');
  });
});
