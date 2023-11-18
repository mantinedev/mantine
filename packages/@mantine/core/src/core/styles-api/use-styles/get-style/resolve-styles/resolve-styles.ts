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

  return arrayStyles.reduce<Record<string, any>>((acc, style) => {
    if (typeof style === 'function') {
      return { ...acc, ...style(theme, props, stylesCtx) };
    }

    return { ...acc, ...style };
  }, {});
}
