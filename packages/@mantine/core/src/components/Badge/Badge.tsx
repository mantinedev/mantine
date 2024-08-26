import {
  Box,
  BoxProps,
  createVarsResolver,
  getRadius,
  getSize,
  getThemeColor,
  MantineColor,
  MantineGradient,
  MantineRadius,
  MantineSize,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Badge.module.css';

export type BadgeStylesNames = 'root' | 'section' | 'label';
export type BadgeVariant =
  | 'filled'
  | 'light'
  | 'outline'
  | 'dot'
  | 'transparent'
  | 'white'
  | 'default'
  | 'gradient';

export type BadgeCssVariables = {
  root:
    | '--badge-height'
    | '--badge-padding-x'
    | '--badge-fz'
    | '--badge-radius'
    | '--badge-bg'
    | '--badge-color'
    | '--badge-bd'
    | '--badge-dot-color';
};

export interface BadgeProps extends BoxProps, StylesApiProps<BadgeFactory> {
  /** Controls `font-size`, `height` and horizontal `padding`, `'md'` by default */
  size?: MantineSize | (string & {});

  /** If set, badge `min-width` becomes equal to its `height` and horizontal padding is removed */
  circle?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `'xl'` by default */
  radius?: MantineRadius;

  /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: MantineGradient;

  /** Content displayed on the left side of the badge label */
  leftSection?: React.ReactNode;

  /** Content displayed on the right side of the badge label */
  rightSection?: React.ReactNode;

  /** Determines whether Badge should take 100% of its parent width, `false` by default */
  fullWidth?: boolean;

  /** Main badge content */
  children?: React.ReactNode;

  /** Determines whether text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;
}

export type BadgeFactory = PolymorphicFactory<{
  props: BadgeProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: BadgeStylesNames;
  vars: BadgeCssVariables;
  variant: BadgeVariant;
}>;

const defaultProps: Partial<BadgeProps> = {};

const varsResolver = createVarsResolver<BadgeFactory>(
  (theme, { radius, color, gradient, variant, size, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || 'filled',
      autoContrast,
    });

    return {
      root: {
        '--badge-height': getSize(size, 'badge-height'),
        '--badge-padding-x': getSize(size, 'badge-padding-x'),
        '--badge-fz': getSize(size, 'badge-fz'),
        '--badge-radius': radius === undefined ? undefined : getRadius(radius),
        '--badge-bg': color || variant ? colors.background : undefined,
        '--badge-color': color || variant ? colors.color : undefined,
        '--badge-bd': color || variant ? colors.border : undefined,
        '--badge-dot-color': variant === 'dot' ? getThemeColor(color, theme) : undefined,
      },
    };
  }
);

export const Badge = polymorphicFactory<BadgeFactory>((_props, ref) => {
  const props = useProps('Badge', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    radius,
    color,
    gradient,
    leftSection,
    rightSection,
    children,
    variant,
    fullWidth,
    autoContrast,
    circle,
    mod,
    ...others
  } = props;

  const getStyles = useStyles<BadgeFactory>({
    name: 'Badge',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <Box
      variant={variant}
      mod={[
        {
          block: fullWidth,
          circle,
          'with-right-section': !!rightSection,
          'with-left-section': !!leftSection,
        },
        mod,
      ]}
      {...getStyles('root', { variant })}
      ref={ref}
      {...others}
    >
      {leftSection && (
        <span {...getStyles('section')} data-position="left">
          {leftSection}
        </span>
      )}
      <span {...getStyles('label')}>{children}</span>
      {rightSection && (
        <span {...getStyles('section')} data-position="right">
          {rightSection}
        </span>
      )}
    </Box>
  );
});

Badge.classes = classes;
Badge.displayName = '@mantine/core/Badge';
