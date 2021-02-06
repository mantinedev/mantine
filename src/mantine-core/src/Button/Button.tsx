/* eslint-disable react/button-has-type */
// ^ this is fun – https://github.com/yannickcr/eslint-plugin-react/issues/1555

import React, { forwardRef } from 'react';
import cx from 'clsx';
import { DefaultProps, OpenColorTheme, Size } from '@mantine/types';
import { useMantineTheme } from '@mantine/theme';
import Loader from '../Loader/Loader';
import useStyles from './Button.styles';

interface ButtonProps extends DefaultProps, Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  size?: Size;
  type?: 'submit' | 'button' | 'reset';
  color?: OpenColorTheme;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}

const LOADER_SIZE = {
  xs: 8,
  sm: 10,
  md: 12,
  lg: 14,
  xl: 16,
};

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
      loading,
      ...others
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const classes = useStyles({ color, size, theme: useMantineTheme() });

    return (
      <button
        {...others}
        className={cx(classes.button, { [classes.loading]: loading }, className)}
        type={type}
        disabled={disabled}
        data-composable
        ref={ref}
      >
        {loading && (
          <Loader color={color || 'blue'} size={LOADER_SIZE[size]} className={classes.loader} />
        )}
        {!loading && leftIcon && <span className={classes.leftIcon}>{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className={classes.rightIcon}>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = '@mantine/core/Button';

export default Button;
