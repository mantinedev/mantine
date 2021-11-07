import { getFontStyles } from './get-font-styles';
import { getThemeColor } from './get-theme-color';
import { getFocusStyles } from './get-focus-styles';
import { rgba } from './rgba';

export const fns = {
  getFontStyles,
  getThemeColor,
  getFocusStyles,
  rgba,
} as const;
