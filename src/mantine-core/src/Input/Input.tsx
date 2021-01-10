import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './Input.styles.less';

interface InputProps extends DefaultProps, React.HTMLProps<HTMLInputElement> {
  invalid?: boolean;
  icon?: React.ReactNode;
}

export default function Input({ className, invalid = false, icon, style, ...others }: InputProps) {
  return (
    <div className={cx(classes.inputWrapper, className)} style={style}>
      {icon && <div className={classes.icon}>{icon}</div>}
      <input
        className={cx(classes.input, { [classes.invalid]: invalid, [classes.withIcon]: icon })}
        {...others}
      />
    </div>
  );
}

Input.displayName = '@mantine/core/Input';
