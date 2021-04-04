import React, { createElement } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { Text } from '../Text/Text';
import useStyles from './InputWrapper.styles';

export interface InputWrapperBaseProps {
  /** Input label, displayed before input */
  label?: React.ReactNode;

  /** Input description, displayed after label */
  description?: React.ReactNode;

  /** Displays error message after input */
  error?: React.ReactNode;

  /** Adds red asterisk on the right side of label */
  required?: boolean;
}

interface InputWrapperProps
  extends DefaultProps,
    InputWrapperBaseProps,
    React.ComponentPropsWithoutRef<'div'> {
  id?: string;
  labelElement?: 'label' | 'div';
  children: React.ReactChild;
}

export function InputWrapper({
  className,
  label,
  children,
  required,
  id,
  error,
  description,
  themeOverride,
  labelElement = 'label',
  ...others
}: InputWrapperProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  const labelProps = labelElement === 'label' ? { htmlFor: id } : {};
  const inputLabel = createElement(
    labelElement,
    { ...labelProps, className: classes.label },
    <>
      {label}
      {required && (
        <span data-mantine-required className={classes.required}>
          {' '}
          *
        </span>
      )}
    </>
  );

  return (
    <div className={cx(classes.inputWrapper, className)} {...others}>
      {label && inputLabel}

      {description && (
        <Text data-mantine-description color="gray" size="xs" className={classes.description}>
          {description}
        </Text>
      )}

      {children}

      {typeof error !== 'boolean' && error && (
        <Text data-mantine-error color="red" size="sm" className={classes.error}>
          {error}
        </Text>
      )}
    </div>
  );
}

InputWrapper.displayName = '@mantine/core/InputWrapper';
