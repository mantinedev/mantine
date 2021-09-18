import React from 'react';
import cx from 'clsx';
import { useMantineTheme, mergeStyles } from '@mantine/tss';
import {
  DefaultProps,
  MantineSize,
  MantineNumberSize,
  getSizeValue,
  getSharedColorScheme,
  MantineGradient,
  MantineColor,
} from '@mantine/theme';
import useStyles, { heights, ButtonVariant } from './Button.styles';
import { Loader, LoaderProps } from '../Loader/Loader';

export { UnstyledButton } from './UnstyledButton/UnstyledButton';

const LOADER_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
};

export const BUTTON_SIZES = heights;

export type ButtonStylesNames = Exclude<
  keyof ReturnType<typeof useStyles>,
  ButtonVariant | 'loading'
>;

interface _ButtonProps<C extends React.ElementType, R extends HTMLElement>
  extends DefaultProps<ButtonStylesNames> {
  /** Root element or custom component */
  component?: C;

  /** Get element ref */
  elementRef?: React.ForwardedRef<R>;

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

export type ButtonProps<
  C extends React.ElementType = 'button',
  R extends HTMLElement = HTMLButtonElement
> = _ButtonProps<C, R> & Omit<React.ComponentPropsWithoutRef<C>, keyof _ButtonProps<C, R>>;

export function Button<
  C extends React.ElementType = 'button',
  R extends HTMLElement = HTMLButtonElement
>({
  className,
  style,
  size = 'sm',
  color,
  type = 'button',
  disabled = false,
  children,
  leftIcon,
  rightIcon,
  fullWidth = false,
  variant = 'filled',
  radius = 'sm',
  component,
  elementRef,
  uppercase = false,
  compact = false,
  loading = false,
  loaderPosition = 'left',
  loaderProps,
  gradient = { from: 'blue', to: 'cyan', deg: 45 },
  classNames,
  styles,
  ...others
}: ButtonProps<C, R>) {
  const theme = useMantineTheme();
  const colors = getSharedColorScheme({
    color,
    theme,
    variant: variant === 'link' ? 'light' : variant,
  });

  const classes = useStyles(
    {
      radius,
      color,
      size,
      fullWidth,
      compact,
      gradientFrom: gradient.from,
      gradientTo: gradient.to,
      gradientDeg: gradient.deg,
      variant,
    },
    classNames,
    'button'
  );
  const _styles = mergeStyles(classes, styles);
  const Element = component || 'button';
  const loader = (
    <Loader
      color={colors.color}
      size={getSizeValue({ size, sizes: LOADER_SIZES })}
      {...loaderProps}
    />
  );

  return (
    <Element
      {...others}
      className={cx(classes.root, classes[variant], { [classes.loading]: loading }, className)}
      type={type}
      disabled={disabled || loading}
      ref={elementRef as any}
      onTouchStart={() => {}}
      style={{ ...style, ..._styles.root }}
    >
      <div className={classes.inner} style={_styles.inner}>
        {(leftIcon || (loading && loaderPosition === 'left')) && (
          <span
            className={cx(classes.icon, classes.leftIcon)}
            style={{ ..._styles.icon, ..._styles.leftIcon }}
          >
            {loading && loaderPosition === 'left' ? loader : leftIcon}
          </span>
        )}

        <span
          className={classes.label}
          style={{ textTransform: uppercase ? 'uppercase' : undefined, ..._styles.label }}
        >
          {children}
        </span>

        {(rightIcon || (loading && loaderPosition === 'right')) && (
          <span
            className={cx(classes.icon, classes.rightIcon)}
            style={{ ..._styles.icon, ..._styles.rightIcon }}
          >
            {loading && loaderPosition === 'right' ? loader : rightIcon}
          </span>
        )}
      </div>
    </Element>
  );
}

Button.displayName = '@mantine/core/Button';
