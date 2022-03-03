import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineSize,
  MantineNumberSize,
  getSharedColorScheme,
  MantineGradient,
  MantineColor,
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { heights, ButtonVariant } from './Button.styles';
import { Loader, LoaderProps } from '../Loader';

export type ButtonStylesNames = ClassNames<typeof useStyles>;

export interface SharedButtonProps extends DefaultProps<ButtonStylesNames> {
  /** Predefined button size */
  size?: MantineSize;

  /** Button type attribute */
  type?: 'submit' | 'button' | 'reset';

  /** Button color from theme */
  color?: MantineColor;

  /** Adds icon before button label  */
  leftIcon?: React.ReactNode;

  /** Adds icon after button label  */
  rightIcon?: React.ReactNode;

  /** Sets button width to 100% of parent element */
  fullWidth?: boolean;

  /** Button border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Controls button appearance */
  variant?: ButtonVariant;

  /** Controls gradient settings in gradient variant only */
  gradient?: MantineGradient;

  /** Set text-transform to uppercase */
  uppercase?: boolean;

  /** Reduces vertical and horizontal spacing */
  compact?: boolean;

  /** Indicate loading state */
  loading?: boolean;

  /** Props spread to Loader component */
  loaderProps?: LoaderProps;

  /** Loader position relative to button label */
  loaderPosition?: 'left' | 'right';
}

export type ButtonProps<C> = PolymorphicComponentProps<C, SharedButtonProps>;

type ButtonComponent = (<C = 'button'>(props: ButtonProps<C>) => React.ReactElement) & {
  displayName?: string;
};

export const Button: ButtonComponent = forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      className,
      size = 'sm',
      color,
      type = 'button',
      disabled,
      children,
      leftIcon,
      rightIcon,
      fullWidth = false,
      variant = 'filled',
      radius = 'sm',
      component,
      uppercase = false,
      compact = false,
      loading = false,
      loaderPosition = 'left',
      loaderProps,
      gradient = { from: 'blue', to: 'cyan', deg: 45 },
      classNames,
      styles,
      ...others
    }: any,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx, theme } = useStyles(
      {
        radius,
        color,
        size,
        fullWidth,
        compact,
        gradientFrom: gradient.from,
        gradientTo: gradient.to,
        gradientDeg: gradient.deg,
      },
      { classNames, styles, name: 'Button' }
    );
    const colors = getSharedColorScheme({ color, theme, variant });
    const loader = (
      <Loader
        color={colors.color}
        size={theme.fn.size({ size, sizes: heights }) / 2}
        {...loaderProps}
      />
    );

    return (
      <Box<any>
        component={component || 'button'}
        className={cx(classes[variant], { [classes.loading]: loading }, classes.root, className)}
        type={type}
        disabled={disabled || loading}
        ref={ref}
        onTouchStart={() => {}}
        {...others}
      >
        <div className={classes.inner}>
          {(leftIcon || (loading && loaderPosition === 'left')) && (
            <span className={cx(classes.icon, classes.leftIcon)}>
              {loading && loaderPosition === 'left' ? loader : leftIcon}
            </span>
          )}

          <span
            className={classes.label}
            style={{ textTransform: uppercase ? 'uppercase' : undefined }}
          >
            {children}
          </span>

          {(rightIcon || (loading && loaderPosition === 'right')) && (
            <span className={cx(classes.icon, classes.rightIcon)}>
              {loading && loaderPosition === 'right' ? loader : rightIcon}
            </span>
          )}
        </div>
      </Box>
    );
  }
);

Button.displayName = '@mantine/core/Button';
