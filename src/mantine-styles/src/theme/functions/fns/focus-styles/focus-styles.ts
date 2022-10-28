import type { MantineThemeBase } from '../../../types';
import type { CSSObject } from '../../../../tss';

export function focusStyles(theme: MantineThemeBase) {
  return (selector?: string): CSSObject => ({
    WebkitTapHighlightColor: 'transparent',

    [selector || '&:focus']: {
      ...(theme.focusRing === 'always' || theme.focusRing === 'auto'
        ? theme.focusRingStyles.styles(theme)
        : theme.focusRingStyles.resetStyles(theme)),
    },

    [selector
      ? selector.replace(':focus', ':focus:not(:focus-visible)')
      : '&:focus:not(:focus-visible)']: {
      ...(theme.focusRing === 'auto' || theme.focusRing === 'never'
        ? theme.focusRingStyles.resetStyles(theme)
        : null),
    },
  });
}
