import { cssVariablesObjectToString } from './css-variables-object-to-string';

describe('@mantine/core/css-variables-object-to-string', () => {
  it('converts object to css variables string', () => {
    expect(
      cssVariablesObjectToString({
        '--mantine-color-white': '#fff',
        '--mantine-color-black': '#000',
      })
    ).toBe('--mantine-color-white: #fff;--mantine-color-black: #000;');
  });
});
