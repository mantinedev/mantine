import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './Input.styles.less';

interface InputProps extends DefaultProps, React.HTMLProps<HTMLInputElement> {
  invalid?: boolean;
}

export default function Input({ className, invalid = false, ...others }: InputProps) {
  return (
    <input className={cx(classes.input, { [classes.invalid]: invalid }, className)} {...others} />
  );
}
