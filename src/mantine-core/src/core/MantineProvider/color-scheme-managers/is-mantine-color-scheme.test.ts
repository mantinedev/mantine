import { isMantineColorScheme } from './is-mantine-color-scheme';

describe('@mantine/core/MantineProvider/is-mantine-color-scheme', () => {
  it('returns true for valid color schemes', () => {
    expect(isMantineColorScheme('auto')).toBe(true);
    expect(isMantineColorScheme('dark')).toBe(true);
    expect(isMantineColorScheme('light')).toBe(true);
  });

  it('returns false for invalid color schemes', () => {
    expect(isMantineColorScheme('')).toBe(false);
    expect(isMantineColorScheme('invalid')).toBe(false);
  });
});
