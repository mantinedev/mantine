import { alpha, createTheme, CSSVariablesResolver, MantineColorsTuple } from '@mantine/core';

export const appTheme = createTheme({
  colors: {
    primary: Array(10).fill('') as unknown as MantineColorsTuple,
  },
  headings: {
    fontFamily: 'Greycliff CF, var(--mantine-font-family)',
    sizes: {
      h1: {
        fontWeight: '900',
      },
    },
  },
});

// Required for ColorSchemeColor demo
export const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    '--mantine-color-primary-0': theme.colors.blue[0],
    '--mantine-color-primary-1': theme.colors.blue[1],
    '--mantine-color-primary-2': theme.colors.blue[2],
    '--mantine-color-primary-3': theme.colors.blue[3],
    '--mantine-color-primary-4': theme.colors.blue[4],
    '--mantine-color-primary-5': theme.colors.blue[5],
    '--mantine-color-primary-6': theme.colors.blue[6],
    '--mantine-color-primary-7': theme.colors.blue[7],
    '--mantine-color-primary-8': theme.colors.blue[8],
    '--mantine-color-primary-9': theme.colors.blue[9],
    '--mantine-color-primary-filled': theme.colors.blue[6],
    '--mantine-color-primary-filled-hover': theme.colors.blue[7],
    '--mantine-color-primary-light': alpha(theme.colors.blue[6], 0.1),
    '--mantine-color-primary-light-hover': alpha(theme.colors.blue[6], 0.12),
    '--mantine-color-primary-light-color': theme.colors.blue[6],
    '--mantine-color-primary-outline': theme.colors.blue[6],
    '--mantine-color-primary-outline-hover': alpha(theme.colors.blue[6], 0.05),
    '--mantine-color-primary-text': theme.colors.blue[6],
  },
  dark: {
    '--mantine-color-primary-0': theme.colors.red[0],
    '--mantine-color-primary-1': theme.colors.red[1],
    '--mantine-color-primary-2': theme.colors.red[2],
    '--mantine-color-primary-3': theme.colors.red[3],
    '--mantine-color-primary-4': theme.colors.red[4],
    '--mantine-color-primary-5': theme.colors.red[5],
    '--mantine-color-primary-6': theme.colors.red[6],
    '--mantine-color-primary-7': theme.colors.red[7],
    '--mantine-color-primary-8': theme.colors.red[8],
    '--mantine-color-primary-9': theme.colors.red[9],
    '--mantine-color-primary-filled': theme.colors.red[8],
    '--mantine-color-primary-filled-hover': theme.colors.red[7],
    '--mantine-color-primary-light': alpha(theme.colors.red[8], 0.1),
    '--mantine-color-primary-light-hover': alpha(theme.colors.red[8], 0.12),
    '--mantine-color-primary-light-color': theme.colors.red[4],
    '--mantine-color-primary-outline': theme.colors.red[4],
    '--mantine-color-primary-outline-hover': alpha(theme.colors.red[4], 0.05),
    '--mantine-color-primary-text': theme.colors.red[4],
  },
});

export { appTheme as theme };
