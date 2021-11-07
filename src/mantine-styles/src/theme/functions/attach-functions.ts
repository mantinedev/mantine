import type { MantineTheme, MantineThemeBase } from '../types';
import { fns } from './fns';

export function attachFunctions(themeBase: MantineThemeBase): MantineTheme {
  return {
    ...themeBase,
    fn: {
      fontStyles: fns.fontStyles(themeBase),
      themeColor: fns.themeColor(themeBase),
      focusStyles: fns.focusStyles(themeBase),
      rgba: fns.rgba,
    },
  };
}
