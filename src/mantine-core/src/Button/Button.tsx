/* eslint-disable react/button-has-type */
// ^ this is fun – https://github.com/yannickcr/eslint-plugin-react/issues/1555

import React, { forwardRef } from 'react';
import cx from 'clsx';
import { DefaultProps, OpenColorTheme } from '@mantine/types';
import classes from './Button.styles.less';

interface ButtonProps extends DefaultProps, React.HTMLProps<HTMLButtonElement> {
  type?: 'submit' | 'button' | 'reset';
  theme?: OpenColorTheme | 'white';
}

const Button = forwardRef(
  (
    {
      className,
      theme = 'blue',
      type = 'button',
      disabled = false,
      children,
      ...others
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => (
    <button
      {...others}
      className={cx(classes.button, classes[theme], className)}
      type={type}
      disabled={disabled}
      data-composable
      ref={ref}
    >
      {children}
    </button>
  )
);

Button.displayName = '@mantine/core/Button';

export default Button;
