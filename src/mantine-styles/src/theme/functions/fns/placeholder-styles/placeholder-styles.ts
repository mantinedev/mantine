import type { MantineThemeBase } from '../../../types';
import type { CSSObject } from '../../../../tss';

export function placeholderStyles(theme: MantineThemeBase) {
  return (): CSSObject => ({
    userSelect: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  });
}
