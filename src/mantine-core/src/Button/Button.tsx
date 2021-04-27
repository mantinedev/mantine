/* eslint-disable react/button-has-type */
// ^ this is fun – https://github.com/yannickcr/eslint-plugin-react/issues/1555

import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineSize, MantineNumberSize } from '@mantine/theme';
import { ComponentPassThrough } from '@mantine/types';
import useStyles, { heights } from './Button.styles';

export const BUTTON_SIZES = heights;

interface ButtonBaseProps extends DefaultProps {
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
}

export function Button<
  T extends React.ElementType = 'button',
  U extends HTMLElement = HTMLButtonElement
>({
  className,
  size = 'md',
  color,
  type = 'button',
  disabled = false,
  children,
  leftIcon,
  rightIcon,
  fullWidth = false,
  variant = 'filled',
  radius = 'sm',
  component: Element = 'button',
  elementRef,
  themeOverride,
  ...others
}: ComponentPassThrough<T, ButtonBaseProps> & {
  /** Get root element ref */
  elementRef?: React.ForwardedRef<U>;
}) {
  const classes = useStyles({
    radius,
    color,
    size,
    fullWidth,
    theme: useMantineTheme(themeOverride),
  });

  return (
    <Element
      {...others}
      className={cx(classes.shared, classes[variant], className)}
      type={type}
      disabled={disabled}
      data-mantine-composable
      ref={elementRef}
      onTouchStart={() => {}}
    >
      <div className={classes.inner}>
        {leftIcon && (
          <span data-mantine-left-icon className={cx(classes.icon, classes.leftIcon)}>
            {leftIcon}
          </span>
        )}

        <span className={classes.label} data-mantine-label>
          {children}
        </span>

        {rightIcon && (
          <span data-mantine-right-icon className={cx(classes.icon, classes.rightIcon)}>
            {rightIcon}
          </span>
        )}
      </div>
    </Element>
  );
}

Button.displayName = '@mantine/core/Button';
