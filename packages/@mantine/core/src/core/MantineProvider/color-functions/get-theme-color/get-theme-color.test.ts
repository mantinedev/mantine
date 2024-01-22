import { DEFAULT_THEME } from '../../default-theme';
import { getThemeColor } from './get-theme-color';

describe('@mantine/core/get-theme-color', () => {
  it('returns color from theme', () => {
    expect(getThemeColor('blue', DEFAULT_THEME)).toBe('var(--mantine-color-blue-filled)');
    expect(getThemeColor('blue.5', DEFAULT_THEME)).toBe('var(--mantine-color-blue-5)');
  });

  it('returns color if it is not in theme', () => {
    expect(getThemeColor('#FEFEFE', DEFAULT_THEME)).toBe('#FEFEFE');
    expect(getThemeColor('rgba(0, 55, 12, 0.8)', DEFAULT_THEME)).toBe('rgba(0, 55, 12, 0.8)');
  });

  it('returns primary color if color is not provided', () => {
    expect(getThemeColor(undefined, DEFAULT_THEME)).toBe('var(--mantine-color-blue-filled)');
    expect(getThemeColor(null, DEFAULT_THEME)).toBe('var(--mantine-color-blue-filled)');
    expect(getThemeColor('', DEFAULT_THEME)).toBe('var(--mantine-color-blue-filled)');
  });
});
