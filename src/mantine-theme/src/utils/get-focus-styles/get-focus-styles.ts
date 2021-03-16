import { MantineTheme } from '../../types';

export function getFocusStyles(theme: MantineTheme) {
  return {
    outline: 0,

    '&:focus': {
      boxShadow: `0 0 0 2px ${theme.white}, 0 0 0 4px ${theme.colors[theme.primaryColor][5]}`,
    },

    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
    },
  };
}
