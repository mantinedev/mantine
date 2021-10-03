import React, { forwardRef } from 'react';
import {
  useMantineTheme,
  mergeStyles,
  DefaultProps,
  MantineSize,
  MantineNumberSize,
  getSizeValue,
  getSharedColorScheme,
  MantineGradient,
  MantineColor,
  ClassNames,
  useExtractedMargins,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@mantine/styles';
import useStyles, { heights, ButtonVariant } from './Button.styles';
import { Loader, LoaderProps } from '../Loader';

export type ButtonStylesNames = Exclude<ClassNames<typeof useStyles>, ButtonVariant | 'loading'>;

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

export type ButtonProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedButtonProps
>;

type ButtonComponent = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C>
) => React.ReactElement;

export const Button: ButtonComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'button'>(
    {
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
      uppercase = false,
      compact = false,
      loading = false,
      loaderPosition = 'left',
      loaderProps,
      gradient = { from: 'blue', to: 'cyan', deg: 45 },
      classNames,
      styles,
      ...others
    }: ButtonProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const theme = useMantineTheme();
    const colors = getSharedColorScheme({
      color,
      theme,
      variant: variant === 'link' ? 'light' : variant,
    });

    const { classes, cx } = useStyles(
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
    const { mergedStyles, rest } = useExtractedMargins({ others, style, rootStyle: _styles.root });
    const Element = component || 'button';
    const loader = (
      <Loader
        color={colors.color}
        size={getSizeValue({ size, sizes: heights }) - 12}
        {...loaderProps}
      />
    );

    return (
      <Element
        {...rest}
        className={cx(classes.root, classes[variant], { [classes.loading]: loading }, className)}
        type={type}
        disabled={disabled || loading}
        ref={ref}
        onTouchStart={() => {}}
        style={mergedStyles}
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
);

Button.displayName = '@mantine/core/Button';
