import { CSSProperties } from 'react';
import { MantineTheme } from '../../../MantineProvider';
import { MantineStyleProp } from '../../../Box';
import { GetStylesApiOptions } from '../../styles-api.types';
import { getThemeStyles } from './get-theme-styles/get-theme-styles';
import { resolveStyles } from './resolve-styles/resolve-styles';
import { resolveStyle } from './resolve-style/resolve-style';
import { resolveVars, VarsResolver } from './resolve-vars/resolve-vars';

export type _Styles =
  | undefined
  | Partial<Record<string, CSSProperties>>
  | ((
      theme: MantineTheme,
      props: Record<string, any>,
      ctx: Record<string, any> | undefined
    ) => Partial<Record<string, CSSProperties>>);

export interface GetStyleInput {
  theme: MantineTheme;
  themeName: string[];
  selector: string;
  rootSelector: string;
  options: GetStylesApiOptions | undefined;
  props: Record<string, any>;
  stylesCtx: Record<string, any> | undefined;
  styles: _Styles;
  style: MantineStyleProp | undefined;
  vars: VarsResolver | undefined;
  varsResolver: VarsResolver | undefined;
}

export function getStyle({
  theme,
  themeName,
  selector,
  options,
  props,
  stylesCtx,
  rootSelector,
  styles,
  style,
  vars,
  varsResolver,
}: GetStyleInput): CSSProperties {
  return {
    ...getThemeStyles({ theme, themeName, props, stylesCtx, selector }),
    ...resolveStyles({ theme, styles, props, stylesCtx })[selector],
    ...resolveStyles({ theme, styles: options?.styles, props: options?.props || props, stylesCtx })[
      selector
    ],
    ...resolveVars({ theme, props, stylesCtx, vars, varsResolver, selector, themeName }),
    ...(rootSelector === selector ? resolveStyle({ style, theme }) : null),
    ...resolveStyle({ style: options?.style, theme }),
  };
}
