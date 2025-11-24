import type { MantineTheme } from '@mantine/core';
import { EmotionHelpers } from './create-styles';
import { CSSObject, EmotionSx } from './types';

export function mergeSx(...sxs: (EmotionSx | undefined)[]) {
  return (theme: MantineTheme, params: EmotionHelpers) => {
    return sxs.filter(Boolean).reduce<CSSObject>((merged, sx) => {
      const cssObj = typeof sx === 'function' ? sx(theme, params) : sx;
      return {
        ...merged,
        ...(cssObj || {}),
      };
    }, {});
  };
}
