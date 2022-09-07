import type { MantineThemeBase } from '../../../types';
import type { CSSObject } from '../../../../tss';

export function focusStyles(theme: MantineThemeBase) {
  return (selector?: string): CSSObject => ({
    WebkitTapHighlightColor: 'transparent',

    [selector || '&:focus']: {
      outlineOffset: 2,
      outline:
        theme.focusRing === 'always' || theme.focusRing === 'auto'
          ? `2px solid ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]}`
          : 'none',
    },

    [selector
      ? selector.replace(':focus', ':focus:not(:focus-visible)')
      : '&:focus:not(:focus-visible)']: {
      outline: theme.focusRing === 'auto' || theme.focusRing === 'never' ? 'none' : undefined,
    },
  });
}
