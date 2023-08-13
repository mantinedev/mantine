import { DEFAULT_THEME } from '@mantine/styles';
import { getColorValue } from './get-color-value';

describe('@mantine/core/Box/get-color-value', () => {
  it('returns correct color value from theme', () => {
    expect(getColorValue('orange', DEFAULT_THEME)).toBe(DEFAULT_THEME.colors.orange[6]);
    expect(getColorValue('pink.1', DEFAULT_THEME)).toBe(DEFAULT_THEME.colors.pink[1]);
  });

  it('returns correct color value for dimmed color', () => {
    expect(getColorValue('dimmed', DEFAULT_THEME)).toBe(DEFAULT_THEME.colors.gray[6]);
    expect(getColorValue('dimmed', { ...DEFAULT_THEME, colorScheme: 'dark' })).toBe(
      DEFAULT_THEME.colors.dark[2]
    );
  });

  it('returns correct color value when given color is not a part of the theme', () => {
    expect(getColorValue('#CECECE', DEFAULT_THEME)).toBe('#CECECE');
    expect(getColorValue('rgb(12, 31, 145)', DEFAULT_THEME)).toBe('rgb(12, 31, 145)');
    expect(getColorValue('rgba(12, 31, 145, 0.5)', DEFAULT_THEME)).toBe('rgba(12, 31, 145, 0.5)');
  });
});
