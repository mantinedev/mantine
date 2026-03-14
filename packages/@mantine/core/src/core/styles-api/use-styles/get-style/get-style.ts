import { CSSProperties } from 'react';
import { MantineTheme } from '../../../MantineProvider';
import { GetStylesApiOptions } from '../../styles-api.types';
import { resolveStyle } from './resolve-style/resolve-style';
import { resolveStyles } from './resolve-styles/resolve-styles';

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
  selector: string;
  rootSelector: string;
  options: GetStylesApiOptions | undefined;
  props: Record<string, any>;
  stylesCtx: Record<string, any> | undefined;
  withStylesTransform?: boolean;
  resolvedStyles: Record<string, any>;
  resolvedThemeStyles: Record<string, any>;
  resolvedVars: Record<string, any>;
  resolvedRootStyle: CSSProperties;
}

export function getStyle({
  theme,
  selector,
  options,
  props,
  stylesCtx,
  rootSelector,
  withStylesTransform,
  resolvedStyles,
  resolvedThemeStyles,
  resolvedVars,
  resolvedRootStyle,
}: GetStyleInput): CSSProperties {
  return {
    ...resolvedThemeStyles[selector],
    ...resolvedStyles[selector],
    ...(!withStylesTransform &&
      resolveStyles({ theme, styles: options?.styles, props: options?.props || props, stylesCtx })[
        selector
      ]),
    ...resolvedVars[selector],
    ...(rootSelector === selector ? resolvedRootStyle : null),
    ...resolveStyle({ style: options?.style, theme }),
  };
}
