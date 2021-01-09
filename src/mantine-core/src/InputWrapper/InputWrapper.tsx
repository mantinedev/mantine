import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types/src';
import classes from './InputWrapper.styles.less';

interface InputWrapperProps extends DefaultProps {
  label?: string;
  error?: string;
  id: string;
  children: React.ReactChild;
}

export default function InputWrapper({
  className,
  label,
  children,
  id,
  error,
  ...others
}: InputWrapperProps) {
  return (
    <div className={cx(classes.inputWrapper, className)} {...others}>
      {label && (
        <label className={classes.label} htmlFor={id}>
          {label}
        </label>
      )}
      {children}
      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
}
