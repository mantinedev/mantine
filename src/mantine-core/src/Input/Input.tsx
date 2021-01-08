import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './Input.styles.less';

interface InputProps extends DefaultProps, React.HTMLProps<HTMLInputElement> {}

export default function Input({ className, ...others }: InputProps) {
  return <input className={cx(classes.input, className)} {...others} />;
}
