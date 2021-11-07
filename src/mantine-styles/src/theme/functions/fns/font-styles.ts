import type { MantineThemeBase } from '../../types';
import type { CSSObject } from '../../../tss';

export function fontStyles(theme: MantineThemeBase) {
  return (): CSSObject => ({
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: theme.fontFamily || 'sans-serif',
  });
}
