import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useMantineTheme, MantineBreakpoint } from '../MantineProvider';
import { InlineStyles } from '../InlineStyles';
import { createPolymorphicComponent } from '../factory';
import type { MantineStyleProp, CssVarsProp } from './Box.types';
import { getBoxStyle } from './get-box-style/get-box-style';
import { useRandomClassName } from './use-random-classname/use-random-classname';
import {
  MantineStyleProps,
  extractStyleProps,
  parseStyleProps,
  STYlE_PROPS_DATA,
} from './style-props';
import { getBoxMod } from './get-box-mod/get-box-mod';
import { isNumberLike } from '../utils';

export type Mod = Record<string, any> | string;
export type BoxMod = Mod | Mod[] | BoxMod[];

export interface BoxProps extends MantineStyleProps {
  /** Class added to the root element, if applicable */
  className?: string;

  /** Inline style added to root component element, can subscribe to theme defined on MantineProvider */
  style?: MantineStyleProp;

  /** CSS variables defined on root component element */
  __vars?: CssVarsProp;

  /** Breakpoint above which the component is hidden with `display: none` */
  hiddenFrom?: MantineBreakpoint;

  /** Breakpoint below which the component is hidden with `display: none` */
  visibleFrom?: MantineBreakpoint;
}

export type ElementProps<
  ElementType extends React.ElementType,
  PropsToOmit extends string = never,
> = Omit<React.ComponentPropsWithoutRef<ElementType>, 'style' | PropsToOmit>;

export interface BoxComponentProps extends BoxProps {
  /** Variant passed from parent component, sets `data-variant` */
  variant?: string;

  /** Size passed from parent component, sets `data-size` if value is not number like */
  size?: string | number;

  /** Element modifiers transformed into `data-` attributes, for example, `{ 'data-size': 'xl' }`, falsy values are removed */
  mod?: BoxMod;
}

const _Box = forwardRef<HTMLDivElement, BoxComponentProps & { component: any; className: string }>(
  (
    { component, style, __vars, className, variant, mod, size, hiddenFrom, visibleFrom, ...others },
    ref
  ) => {
    const theme = useMantineTheme();
    const Element = component || 'div';
    const { styleProps, rest } = extractStyleProps(others);
    const responsiveClassName = useRandomClassName();
    const parsedStyleProps = parseStyleProps({
      styleProps,
      theme,
      data: STYlE_PROPS_DATA,
    });

    return (
      <>
        {parsedStyleProps.hasResponsiveStyles && (
          <InlineStyles
            selector={`.${responsiveClassName}`}
            styles={parsedStyleProps.styles}
            media={parsedStyleProps.media}
          />
        )}
        <Element
          ref={ref}
          style={getBoxStyle({
            theme,
            style,
            vars: __vars,
            styleProps: parsedStyleProps.inlineStyles,
          })}
          className={cx(className, {
            [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
            [`mantine-hidden-from-${hiddenFrom}`]: hiddenFrom,
            [`mantine-visible-from-${visibleFrom}`]: visibleFrom,
          })}
          data-variant={variant}
          data-size={isNumberLike(size) ? undefined : size || undefined}
          {...getBoxMod(mod)}
          {...rest}
        />
      </>
    );
  }
);

_Box.displayName = '@mantine/core/Box';

export const Box = createPolymorphicComponent<'div', BoxComponentProps>(_Box);
