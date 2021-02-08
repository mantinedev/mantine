import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import Text from '../Text/Text';
import useStyles from './InputWrapper.styles';

export interface InputWrapperBaseProps {
  label?: React.ReactNode;
  error?: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
}

interface InputWrapperProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
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
  description,
  themeOverride,
  ...others
}: InputWrapperProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });

  return (
    <div className={cx(classes.inputWrapper, className)} data-composable {...others}>
      {label && (
        <label className={classes.label} htmlFor={id}>
          {label} {required && <span className={classes.required}>*</span>}
        </label>
      )}

      {children}

      {error && (
        <Text color="red" size="sm" className={classes.error}>
          {error}
        </Text>
      )}

      {description && (
        <Text color="gray" size="sm" className={classes.description}>
          {description}
        </Text>
      )}
    </div>
  );
}

InputWrapper.displayName = '@mantine/core/InputWrapper';
