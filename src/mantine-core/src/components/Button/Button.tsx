import React from 'react';
import {
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useStyles,
  createVarsResolver,
  PolymorphicFactory,
  MantineSize,
  MantineColor,
  MantineRadius,
  MantineGradient,
  Box,
  getRadius,
  getSize,
  getFontSize,
} from '../../core';
import { UnstyledButton } from '../UnstyledButton';
import { Loader, LoaderProps } from '../Loader';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';
import classes from './Button.module.css';

export type ButtonStylesNames = 'root' | 'inner' | 'loader' | 'section' | 'label';
export type ButtonVariant =
  | 'filled'
  | 'light'
  | 'outline'
  | 'transparent'
  | 'white'
  | 'subtle'
  | 'default'
  | 'gradient';

export type ButtonCssVariables = {
  root:
    | '--button-justify'
    | '--button-height'
    | '--button-padding-x'
    | '--button-fz'
    | '--button-radius'
    | '--button-bg'
    | '--button-hover'
    | '--button-color'
    | '--button-bd';
};

export interface ButtonProps extends BoxProps, StylesApiProps<ButtonFactory> {
  'data-disabled'?: boolean;

  /** Controls button `height`, `font-size` and horizontal `padding`, `'sm'` by default */
  size?: MantineSize | `compact-${MantineSize}` | (string & {});

  /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Sets `justify-content` of `inner` element, can be used to change distribution of sections and label, `'center'` by default */
  justify?: React.CSSProperties['justifyContent'];

  /** Content displayed on the left side of the button label */
  leftSection?: React.ReactNode;

  /** Content displayed on the right side of the button label */
  rightSection?: React.ReactNode;

  /** Determines whether button should take 100% width of its parent container, `false` by default */
  fullWidth?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: MantineRadius;

  /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: MantineGradient;

  /** Indicates disabled state */
  disabled?: boolean;

  /** Button content */
  children?: React.ReactNode;

  /** Determines whether the `Loader` component should be displayed over the button */
  loading?: boolean;

  /** Props added to the `Loader` component (only visible when `loading` prop is set) */
  loaderProps?: LoaderProps;
}

export type ButtonFactory = PolymorphicFactory<{
  props: ButtonProps;
  defaultRef: HTMLButtonElement;
  defaultComponent: 'button';
  stylesNames: ButtonStylesNames;
  vars: ButtonCssVariables;
  variant: ButtonVariant;
  staticComponents: {
    Group: typeof ButtonGroup;
  };
}>;

const defaultProps: Partial<ButtonProps> = {};

const varsResolver = createVarsResolver<ButtonFactory>(
  (theme, { radius, color, gradient, variant, size, justify }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || 'filled',
    });

    return {
      root: {
        '--button-justify': justify,
        '--button-height': getSize(size, 'button-height'),
        '--button-padding-x': getSize(size, 'button-padding-x'),
        '--button-fz': size?.includes('compact')
          ? getFontSize(size.replace('compact-', ''))
          : getFontSize(size),
        '--button-radius': radius === undefined ? undefined : getRadius(radius),
        '--button-bg': color || variant ? colors.background : undefined,
        '--button-hover': color || variant ? colors.hover : undefined,
        '--button-color': color || variant ? colors.color : undefined,
        '--button-bd': color || variant ? colors.border : undefined,
      },
    };
  }
);

export const Button = polymorphicFactory<ButtonFactory>((_props, ref) => {
  const props = useProps('Button', defaultProps, _props);
  const {
    style,
    vars,
    className,
    color,
    disabled,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    'data-disabled': dataDisabled,
    ...others
  } = props;

  const getStyles = useStyles<ButtonFactory>({
    name: 'Button',
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

  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;

  return (
    <UnstyledButton
      ref={ref}
      {...getStyles('root', { active: !disabled && !loading && !dataDisabled })}
      unstyled={unstyled}
      variant={variant}
      disabled={disabled || loading}
      mod={{
        disabled: disabled || dataDisabled,
        loading,
        block: fullWidth,
        'with-left-section': hasLeftSection,
        'with-right-section': hasRightSection,
      }}
      {...others}
    >
      <span {...getStyles('inner')}>
        {leftSection && (
          <Box component="span" {...getStyles('section')} mod={{ position: 'left' }}>
            {leftSection}
          </Box>
        )}

        {loading && (
          <Box component="span" {...getStyles('loader')}>
            <Loader
              color="var(--button-color)"
              size="calc(var(--button-height) / 1.8)"
              {...loaderProps}
            />
          </Box>
        )}

        <Box component="span" mod={{ loading }} {...getStyles('label')}>
          {children}
        </Box>

        {rightSection && (
          <Box component="span" {...getStyles('section')} mod={{ position: 'right' }}>
            {rightSection}
          </Box>
        )}
      </span>
    </UnstyledButton>
  );
});

Button.classes = classes;
Button.displayName = '@mantine/core/Button';
Button.Group = ButtonGroup;
