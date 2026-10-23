import { createTheme, DEFAULT_THEME, virtualColor } from '@mantine/core';

export const theme = createTheme({
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
