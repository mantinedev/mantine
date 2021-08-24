/* eslint-disable react/button-has-type */
// ^ this is fun – https://github.com/yannickcr/eslint-plugin-react/issues/1555

import React from 'react';
import cx from 'clsx';
import {
  useMantineTheme,
  DefaultProps,
  MantineSize,
  MantineNumberSize,
  mergeStyles,
} from '../../theme';
import useStyles, { heights } from './Button.styles';

export { UnstyledButton } from './UnstyledButton/UnstyledButton';

export const BUTTON_SIZES = heights;
export const BUTTON_VARIANTS = ['link', 'filled', 'outline', 'light'];
export type ButtonVariant = 'link' | 'filled' | 'outline' | 'light';
export type ButtonStylesNames = Exclude<keyof ReturnType<typeof useStyles>, ButtonVariant>;

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
  color?: string;

  /** Adds icon before button label  */
  leftIcon?: React.ReactNode;

  /** Adds icon after button label  */
  rightIcon?: React.ReactNode;

  /** Sets button width to 100% of parent element */
  fullWidth?: boolean;

  /** Button border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Controls button appearance */
  variant?: 'link' | 'filled' | 'outline' | 'light';

  /** Set text-transform to uppercase */
  uppercase?: boolean;

  /** Reduces vertical and horizontal spacing */
  compact?: boolean;
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
  themeOverride,
  uppercase = false,
  compact = false,
  classNames,
  styles,
  ...others
}: ButtonProps<C, R>) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles(
    { radius, color, size, fullWidth, theme, compact },
    classNames,
    'button'
  );
  const _styles = mergeStyles(classes, styles);
  const Element = component || 'button';

  return (
    <Element
      {...others}
      className={cx(classes.root, classes[variant], className)}
      type={type}
      disabled={disabled}
      ref={elementRef as any}
      onTouchStart={() => {}}
      style={{ ...style, ..._styles.root }}
    >
      <div className={classes.inner} style={_styles.inner}>
        {leftIcon && (
          <span
            className={cx(classes.icon, classes.leftIcon)}
            style={{ ..._styles.icon, ..._styles.leftIcon }}
          >
            {leftIcon}
          </span>
        )}

        <span
          className={classes.label}
          style={{ textTransform: uppercase ? 'uppercase' : undefined, ..._styles.label }}
        >
          {children}
        </span>

        {rightIcon && (
          <span
            className={cx(classes.icon, classes.rightIcon)}
            style={{ ..._styles.icon, ..._styles.rightIcon }}
          >
            {rightIcon}
          </span>
        )}
      </div>
    </Element>
  );
}

Button.displayName = '@mantine/core/Button';
