import { isVirtualColor, virtualColor } from './virtual-color';

describe('@mantine/core/virtual-color', () => {
  it('creates virtual color object', () => {
    expect(virtualColor({ dark: 'dark', light: 'light' })).toStrictEqual({
      dark: 'dark',
      light: 'light',
    });
  });

  it('correctly detects virtual color object', () => {
    expect(isVirtualColor(virtualColor({ dark: 'dark', light: 'light' }))).toBe(true);
    expect(isVirtualColor({ dark: 'dark', light: 'light' })).toBe(false);
  });
});
