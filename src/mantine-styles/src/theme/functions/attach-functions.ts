import { MantineTheme, MantineThemeBase } from '../types';
import { fns } from './fns';

export function attachFunctions(themeBase: MantineThemeBase): MantineTheme {
  return {
    ...themeBase,
    fn: {
      fontStyles: fns.getFontStyles(themeBase),
      themeColor: fns.getThemeColor(themeBase),
      focusStyles: fns.getFocusStyles(themeBase),
    },
  };
}
