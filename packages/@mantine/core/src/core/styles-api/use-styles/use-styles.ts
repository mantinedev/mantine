import { CSSProperties, useCallback, useMemo } from 'react';
import type { MantineStyleProp } from '../../Box';
import { FactoryPayload } from '../../factory';
import {
  useMantineClassNamesPrefix,
  useMantineIsHeadless,
  useMantineTheme,
  useMantineWithStaticClasses,
} from '../../MantineProvider';
import { useMemoObject } from '../../utils/use-memo-object/use-memo-object';
import { PartialVarsResolver, VarsResolver } from '../create-vars-resolver/create-vars-resolver';
import { ClassNames, ClassNamesArray, GetStylesApiOptions, Styles } from '../styles-api.types';
import { getClassName } from './get-class-name/get-class-name';
import { getStyle } from './get-style/get-style';
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
}

export type GetStylesApi<Payload extends FactoryPayload> = (
  selector: NonNullable<Payload['stylesNames']>,
  options?: GetStylesApiOptions
) => {
  className: string;
  style: CSSProperties;
};

// Omit objects from props to avoid unnecessary rerenders
function omitObjectProps(props: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, value] of Object.entries(props)) {
    if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
      result[key] = props[key];
    }
  }

  return result;
}

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
}: UseStylesInput<Payload>): GetStylesApi<Payload> {
  const theme = useMantineTheme();
  const classNamesPrefix = useMantineClassNamesPrefix();
  const withStaticClasses = useMantineWithStaticClasses();
  const headless = useMantineIsHeadless();
  const themeName = useMemo(
    () => (Array.isArray(name) ? name : [name]).filter((n) => n) as string[],
    [String(name)]
  );
  const { withStylesTransform, getTransformedStyles } = useStylesTransform({
    props,
    stylesCtx,
    themeName,
  });
  const memoizedProps = useMemoObject(omitObjectProps(props));

  return useCallback(
    (selector, options) => ({
      className: getClassName({
        theme,
        options,
        themeName,
        selector,
        classNamesPrefix,
        classNames,
        classes,
        unstyled,
        className,
        rootSelector,
        props: memoizedProps,
        stylesCtx,
        withStaticClasses,
        headless,
        transformedStyles: getTransformedStyles([options?.styles, styles]),
      }),

      style: getStyle({
        theme,
        themeName,
        selector,
        options,
        props: memoizedProps,
        stylesCtx,
        rootSelector,
        styles,
        style,
        vars,
        varsResolver,
        headless,
        withStylesTransform,
      }),
    }),
    [
      theme,
      themeName,
      classNamesPrefix,
      classNames,
      classes,
      unstyled,
      className,
      rootSelector,
      memoizedProps,
      stylesCtx,
      styles,
      style,
      vars,
      varsResolver,
      headless,
      withStylesTransform,
    ]
  );
}
