import { MantineThemeBase } from '../../types';
import { CSSObject } from '../../../tss';

export function getFocusStyles(theme: MantineThemeBase) {
  return (): CSSObject => ({
    WebkitTapHighlightColor: 'transparent',

    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${
        theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
      }, 0 0 0 4px ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]}`,
    },

    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
    },
  });
}
