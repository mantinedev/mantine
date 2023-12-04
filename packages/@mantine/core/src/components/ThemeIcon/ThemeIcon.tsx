import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  getSize,
  getRadius,
  MantineGradient,
  MantineRadius,
  MantineColor,
  MantineSize,
} from '../../core';
import classes from './ThemeIcon.module.css';

export type ThemeIconStylesNames = 'root';
export type ThemeIconVariant =
  | 'filled'
  | 'light'
  | 'outline'
  | 'transparent'
  | 'white'
  | 'default'
  | 'gradient';

export type ThemeIconCssVariables = {
  root: '--ti-radius' | '--ti-size' | '--ti-bg' | '--ti-color' | '--ti-bd';
};

export interface ThemeIconProps
  extends BoxProps,
    StylesApiProps<ThemeIconFactory>,
    ElementProps<'div'> {
  /** Controls width and height of the button. Numbers are converted to rem. `'md'` by default. */
  size?: MantineSize | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color. Default value is `theme.primaryColor`.  */
  color?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
  radius?: MantineRadius;

  /** Gradient data used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: MantineGradient;

  /** Icon displayed inside the component */
  children?: React.ReactNode;
}

export type ThemeIconFactory = Factory<{
  props: ThemeIconProps;
  ref: HTMLDivElement;
  stylesNames: ThemeIconStylesNames;
  vars: ThemeIconCssVariables;
  variant: ThemeIconVariant;
}>;

const defaultProps: Partial<ThemeIconProps> = {};

const varsResolver = createVarsResolver<ThemeIconFactory>(
  (theme, { size, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || 'filled',
    });

    return {
      root: {
        '--ti-size': getSize(size, 'ti-size'),
        '--ti-radius': radius === undefined ? undefined : getRadius(radius),
        '--ti-bg': color || variant ? colors.background : undefined,
        '--ti-color': color || variant ? colors.color : undefined,
        '--ti-bd': color || variant ? colors.border : undefined,
      },
    };
  }
);

export const ThemeIcon = factory<ThemeIconFactory>((_props, ref) => {
  const props = useProps('ThemeIcon', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<ThemeIconFactory>({
    name: 'ThemeIcon',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return <Box ref={ref} {...getStyles('root')} {...others} />;
});

ThemeIcon.classes = classes;
ThemeIcon.displayName = '@mantine/core/ThemeIcon';
