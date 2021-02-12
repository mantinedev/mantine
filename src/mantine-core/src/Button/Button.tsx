/* eslint-disable react/button-has-type */
// ^ this is fun – https://github.com/yannickcr/eslint-plugin-react/issues/1555

import React, { forwardRef } from 'react';
import cx from 'clsx';
import {
  useMantineTheme,
  DefaultProps,
  MantineColor,
  MantineSize,
  MantineNumberSize,
} from '@mantine/theme';
import useStyles from './Button.styles';

interface ButtonProps extends DefaultProps, Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  size?: MantineSize;
  type?: 'submit' | 'button' | 'reset';
  color?: MantineColor;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  radius?: MantineNumberSize;
}

const Button = forwardRef(
  (
    {
      className,
      size = 'md',
      color,
      type = 'button',
      disabled = false,
      children,
      leftIcon,
      rightIcon,
      radius = 'sm',
      ...others
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const classes = useStyles({ radius, color, size, theme: useMantineTheme() });

    return (
      <button
        {...others}
        className={cx(classes.button, className)}
        type={type}
        disabled={disabled}
        data-mantine-composable
        ref={ref}
      >
        <div className={classes.inner}>
          {leftIcon && <span className={cx(classes.icon, classes.leftIcon)}>{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className={cx(classes.icon, classes.rightIcon)}>{rightIcon}</span>}
        </div>
      </button>
    );
  }
);

Button.displayName = '@mantine/core/Button';

export default Button;
