import type { MantineThemeBase } from '../../../types';
import type { CSSObject } from '../../../../tss';

export function fontStyles(theme: MantineThemeBase) {
  return (): CSSObject => ({ fontFamily: theme.fontFamily || 'sans-serif' });
}
