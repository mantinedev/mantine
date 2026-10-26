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
  /** Controls `font-size`, `height` and horizontal `padding` @default 'md' @category appearance */
  size?: MantineSize | (string & {});

  /** If set, badge `min-width` becomes equal to its `height` and horizontal padding is removed. `radius` prop is ignored when `circle` is set. @default false @category appearance */
  circle?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default 'xl' @category appearance */
  radius?: MantineRadius;

  /** Key of `theme.colors` or any valid CSS color @default theme.primaryColor @category appearance */
  color?: MantineColor;

  /** Gradient configuration used when `variant=\"gradient\"` @default theme.defaultGradient @category appearance */
  gradient?: MantineGradient;

  /** Content displayed on the left side of the badge label. Ignored when `variant="dot"` is set. @category appearance */
  leftSection?: React.ReactNode;

  /** Content displayed on the right side of the badge label @category appearance */
  rightSection?: React.ReactNode;

  /** Determines whether Badge should take 100% of its parent width @default false @category appearance */
  fullWidth?: boolean;

  /** Main badge content @category appearance */
  children?: React.ReactNode;

  /** If set, adjusts text color based on background color for `filled` variant @default false @category appearance */
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

const varsResolver = createVarsResolver<BadgeFactory>(
  (theme, { radius, color, gradient, variant, size, autoContrast, circle }) => {
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
        '--badge-radius': circle || radius === undefined ? undefined : getRadius(radius),
        '--badge-bg': color || variant ? colors.background : undefined,
        '--badge-color': color || variant || autoContrast !== undefined ? colors.color : undefined,
        '--badge-bd': color || variant ? colors.border : undefined,
        '--badge-dot-color': variant === 'dot' ? getThemeColor(color, theme) : undefined,
      },
    };
  }
);

export const Badge = polymorphicFactory<BadgeFactory>((_props) => {
  const props = useProps('Badge', null, _props);
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
    attributes,
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
    attributes,
    vars,
    varsResolver,
  });

  const _leftSection = variant === 'dot' ? undefined : leftSection;

  return (
    <Box
      variant={variant}
      mod={[
        {
          block: fullWidth,
          circle,
          withRightSection: !!rightSection,
          withLeftSection: !!_leftSection,
        },
        mod,
      ]}
      {...getStyles('root', { variant })}
      {...others}
    >
      {_leftSection && (
        <span {...getStyles('section')} data-position="left">
          {_leftSection}
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
Badge.varsResolver = varsResolver;
Badge.displayName = '@mantine/core/Badge';

export namespace Badge {
  export type Props = BadgeProps;
  export type StylesNames = BadgeStylesNames;
  export type CssVariables = BadgeCssVariables;
  export type Variant = BadgeVariant;
  export type Factory = BadgeFactory;
}
