import { MantineThemeBase } from '../../types';
import { CSSObject } from '../../../tss';

export function getFontStyles(theme: MantineThemeBase) {
  return (): CSSObject => ({
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: theme.fontFamily || 'sans-serif',
  });
}
