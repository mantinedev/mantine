import { CSSProperties } from 'react';
import type { MantineStyleProp } from '../../Box';
import { FactoryPayload } from '../../factory';
import {
  useMantineClassNamesPrefix,
  useMantineIsHeadless,
  useMantineTheme,
  useMantineWithStaticClasses,
} from '../../MantineProvider';
import { PartialVarsResolver, VarsResolver } from '../create-vars-resolver/create-vars-resolver';
import {
  Attributes,
  ClassNames,
  ClassNamesArray,
  GetStylesApiOptions,
  Styles,
} from '../styles-api.types';
import { getClassName } from './get-class-name/get-class-name';
import { resolveClassNames } from './get-class-name/resolve-class-names/resolve-class-names';
import { getStyle } from './get-style/get-style';
import { resolveStyle } from './get-style/resolve-style/resolve-style';
import { resolveStyles } from './get-style/resolve-styles/resolve-styles';
import { mergeVars } from './get-style/resolve-vars/merge-vars';
import { useStylesTransform } from './use-transformed-styles';

export interface UseStylesInput<Payload extends FactoryPayload> {
  name: string | (string | undefined)[];
  classes: Payload['stylesNames'] extends string ? Record<string, string> : never;
  props: Payload['props'];
  stylesCtx?: Payload['ctx'];
  className?: string;
  style?: MantineStyleProp;
  rootSelector?: Payload['stylesNames'];
  unstyled?: boolean;
  classNames?: ClassNames<Payload> | ClassNamesArray<Payload>;
  styles?: Styles<Payload>;
  vars?: PartialVarsResolver<Payload>;
  varsResolver?: VarsResolver<Payload>;
  attributes?: Attributes<Payload>;
}

export type GetStylesApi<Payload extends FactoryPayload> = (
  selector: NonNullable<Payload['stylesNames']>,
  options?: GetStylesApiOptions
) => {
  className: string;
  style: CSSProperties;
};

export function useStyles<Payload extends FactoryPayload>({
  name,
  classes,
  props,
  stylesCtx,
  className,
  style,
  rootSelector = 'root' as NonNullable<Payload['stylesNames']>,
  unstyled,
  classNames,
  styles,
  vars,
  varsResolver,
  attributes,
}: UseStylesInput<Payload>): GetStylesApi<Payload> {
  const theme = useMantineTheme();
  const classNamesPrefix = useMantineClassNamesPrefix();
  const withStaticClasses = useMantineWithStaticClasses();
  const headless = useMantineIsHeadless();
  const themeName = (Array.isArray(name) ? name : [name]).filter((n) => n) as string[];
  const { withStylesTransform, getTransformedStyles } = useStylesTransform({
    props,
    stylesCtx,
    themeName,
    theme,
  });

  const resolvedClassNames = resolveClassNames({ theme, classNames, props, stylesCtx });
  const resolvedThemeClassNames = themeName.map((n) =>
    resolveClassNames({ theme, classNames: theme.components[n]?.classNames, props, stylesCtx })
  );

  const resolvedComponentStyles = withStylesTransform
    ? {}
    : resolveStyles({ theme, styles, props, stylesCtx });

  const resolvedThemeStyles: Record<string, any> = {};

  if (!withStylesTransform) {
    for (const n of themeName) {
      const resolved = resolveStyles({
        theme,
        styles: theme.components[n]?.styles,
        props,
        stylesCtx,
      });

      for (const key of Object.keys(resolved)) {
        resolvedThemeStyles[key] = { ...resolvedThemeStyles[key], ...resolved[key] };
      }
    }
  }

  const resolvedVars = mergeVars([
    headless ? {} : varsResolver?.(theme, props, stylesCtx),
    ...themeName.map((n) => theme.components?.[n]?.vars?.(theme, props, stylesCtx)),
    vars?.(theme, props, stylesCtx),
  ]);

  const resolvedRootStyle = resolveStyle({ style, theme });

  return (selector, options) => ({
    className: getClassName({
      theme,
      options,
      themeName,
      selector,
      classNamesPrefix,
      resolvedClassNames,
      resolvedThemeClassNames,
      classes,
      unstyled,
      className,
      rootSelector,
      props,
      stylesCtx,
      withStaticClasses,
      headless,
      transformedStyles: getTransformedStyles([options?.styles, styles]),
    }),

    style: getStyle({
      theme,
      selector,
      options,
      props,
      stylesCtx,
      rootSelector,
      withStylesTransform,
      resolvedStyles: resolvedComponentStyles,
      resolvedThemeStyles,
      resolvedVars,
      resolvedRootStyle,
    }),

    ...attributes?.[selector],
  });
}
