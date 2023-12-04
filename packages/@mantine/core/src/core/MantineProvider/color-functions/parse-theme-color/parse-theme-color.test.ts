import { parseThemeColor } from './parse-theme-color';
import { DEFAULT_THEME } from '../../default-theme';

describe('@mantine/core/parse-theme-color', () => {
  it('parses theme color correctly', () => {
    expect(parseThemeColor({ color: 'red', theme: DEFAULT_THEME })).toStrictEqual({
      color: 'red',
      value: DEFAULT_THEME.colors.red[6],
      shade: undefined,
      isThemeColor: true,
      variable: '--mantine-color-red-filled',
    });
  });

  it('parses theme color with shade correctly', () => {
    expect(parseThemeColor({ color: 'orange.5', theme: DEFAULT_THEME })).toStrictEqual({
      color: 'orange',
      value: DEFAULT_THEME.colors.orange[5],
      shade: 5,
      isThemeColor: true,
      variable: '--mantine-color-orange-5',
    });
  });

  it('parses non theme color correctly', () => {
    expect(parseThemeColor({ color: '#FEFEFE', theme: DEFAULT_THEME })).toStrictEqual({
      color: '#FEFEFE',
      value: '#FEFEFE',
      isThemeColor: false,
      shade: undefined,
      variable: undefined,
    });
  });

  it('parses white and black colors correctly', () => {
    expect(parseThemeColor({ color: 'white', theme: DEFAULT_THEME })).toStrictEqual({
      color: 'white',
      value: DEFAULT_THEME.white,
      isThemeColor: false,
      shade: undefined,
      variable: '--mantine-color-white',
    });

    expect(parseThemeColor({ color: 'black', theme: DEFAULT_THEME })).toStrictEqual({
      color: 'black',
      value: DEFAULT_THEME.black,
      isThemeColor: false,
      shade: undefined,
      variable: '--mantine-color-black',
    });
  });

  it('throws error if color is not string', () => {
    expect(() => parseThemeColor({ color: 1, theme: DEFAULT_THEME })).toThrow();
  });
});
