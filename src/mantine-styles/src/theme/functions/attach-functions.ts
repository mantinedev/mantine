import type { MantineTheme, MantineThemeBase } from '../types';
import { fns } from './fns';

export function attachFunctions(themeBase: MantineThemeBase): MantineTheme {
  return {
    ...themeBase,
    fn: {
      fontStyles: fns.fontStyles(themeBase),
      themeColor: fns.themeColor(themeBase),
      focusStyles: fns.focusStyles(themeBase),
      largerThan: fns.largerThan(themeBase),
      smallerThan: fns.smallerThan(themeBase),
      radialGradient: fns.radialGradient,
      linearGradient: fns.linearGradient,
      rgba: fns.rgba,
      size: fns.size,
      cover: fns.cover,
      lighten: fns.lighten,
      darken: fns.darken,
    },
  };
}
