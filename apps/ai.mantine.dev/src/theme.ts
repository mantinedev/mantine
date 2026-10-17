import { createTheme, DEFAULT_THEME, virtualColor } from '@mantine/core';

export const appTheme = createTheme({
  colors: {
    primary: virtualColor({ name: 'primary', light: 'blue', dark: 'red' }),
  },
  headings: {
    fontFamily: `Outfit, ${DEFAULT_THEME.fontFamily}`,
    sizes: {
      h1: {
        fontWeight: '900',
      },
    },
  },
});

export { appTheme as theme };
