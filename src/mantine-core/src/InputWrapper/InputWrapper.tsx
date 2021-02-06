import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types/src';
import Text from '../Text/Text';
import useStyles from './InputWrapper.styles';

export interface InputWrapperBaseProps {
  label?: string;
  error?: string;
  required?: boolean;
}

interface InputWrapperProps
  extends DefaultProps,
    InputWrapperBaseProps,
    React.HTMLProps<HTMLDivElement> {
  id: string;
  children: React.ReactChild;
}

export default function InputWrapper({
  className,
  label,
  children,
  required,
  id,
  error,
  ...others
}: InputWrapperProps) {
  const classes = useStyles();

  return (
    <div className={cx(classes.inputWrapper, className)} data-composable {...others}>
      {label && (
        <label className={classes.label} htmlFor={id}>
          {label} {required && <span className={classes.required}>*</span>}
        </label>
      )}
      {children}
      {error && (
        <Text theme="danger" size="sm" className={classes.error}>
          {error}
        </Text>
      )}
    </div>
  );
}

InputWrapper.displayName = '@mantine/core/InputWrapper';
