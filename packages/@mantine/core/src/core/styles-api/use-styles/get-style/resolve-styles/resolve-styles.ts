import type { MantineTheme } from '../../../../MantineProvider';
import type { _Styles } from '../get-style';

export interface ResolveStylesInput {
  theme: MantineTheme;
  styles: _Styles | _Styles[];
  props: Record<string, any>;
  stylesCtx: Record<string, any> | undefined;
}

export function resolveStyles({ theme, styles, props, stylesCtx }: ResolveStylesInput) {
  const arrayStyles = Array.isArray(styles) ? styles : [styles];
  const result: Record<string, any> = {};

  for (const style of arrayStyles) {
    if (typeof style === 'function') {
      Object.assign(result, style(theme, props, stylesCtx));
    } else if (style) {
      Object.assign(result, style);
    }
  }

  return result;
}
