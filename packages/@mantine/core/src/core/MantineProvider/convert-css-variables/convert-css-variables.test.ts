import { convertCssVariables } from './convert-css-variables';

const result = [
  '.mantine-test{--mantine-color-white: #fff;--mantine-color-black: #000;}',
  '.mantine-test[data-mantine-color-scheme="dark"]{--mantine-color-filled: red;}',
  '.mantine-test[data-mantine-color-scheme="light"]{--mantine-color-filled: blue;}',
];

describe('@mantine/core/convert-css-variables', () => {
  it('converts object to css variables string', () => {
    expect(
      convertCssVariables(
        {
          variables: {
            '--mantine-color-white': '#fff',
            '--mantine-color-black': '#000',
          },

          dark: {
            '--mantine-color-filled': 'red',
          },

          light: {
            '--mantine-color-filled': 'blue',
          },
        },
        '.mantine-test'
      )
    ).toBe(result.join(''));
  });
});
