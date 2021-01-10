import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './Input.styles.less';

interface InputProps extends DefaultProps, React.HTMLProps<HTMLInputElement> {
  invalid?: boolean;
  icon?: React.ReactNode;
  inputClassName?: string;
}

export default function Input({
  className,
  invalid = false,
  icon,
  style,
  inputClassName,
  ...others
}: InputProps) {
  return (
    <div className={cx(classes.inputWrapper, className)} style={style}>
      {icon && <div className={classes.icon}>{icon}</div>}
      <input
        className={cx(
          classes.input,
          { [classes.invalid]: invalid, [classes.withIcon]: icon },
          inputClassName
        )}
        {...others}
      />
    </div>
  );
}

Input.displayName = '@mantine/core/Input';
