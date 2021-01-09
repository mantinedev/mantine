/* eslint-disable react/button-has-type */
// ^ this is fun – https://github.com/yannickcr/eslint-plugin-react/issues/1555

import React from 'react';
import cx from 'clsx';
import { DefaultProps, OpenColorTheme } from '@mantine/types';
import classes from './Button.styles.less';

interface ButtonProps extends DefaultProps, React.HTMLProps<HTMLButtonElement> {
  type?: 'submit' | 'button' | 'reset';
  theme?: OpenColorTheme | 'white';
  disabled?: boolean;
  children: string;
}

export default function Button({
  className,
  theme = 'blue',
  type = 'button',
  disabled = false,
  children,
  ...others
}: ButtonProps) {
  return (
    <button
      className={cx(classes.button, classes[theme], className)}
      type={type}
      disabled={disabled}
      data-composable
      {...others}
    >
      {children}
    </button>
  );
}

Button.displayName = '@mantine/core/Button';
