import React, { createElement } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '../../theme';
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

  /** Props spread to label element */
  labelProps?: Record<string, any>;

  /** Props spread to description element */
  descriptionProps?: Record<string, any>;

  /** Props spread to error element */
  errorProps?: Record<string, any>;
}

export interface InputWrapperProps
  extends DefaultProps,
    InputWrapperBaseProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Input that should be wrapped */
  children: React.ReactNode;

  /** htmlFor label prop */
  id?: string;

  /** Render label as label with htmlFor or as div */
  labelElement?: 'label' | 'div';
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
  labelProps,
  descriptionProps,
  errorProps,
  ...others
}: InputWrapperProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  const _labelProps = labelElement === 'label' ? { htmlFor: id } : {};
  const inputLabel = createElement(
    labelElement,
    { ..._labelProps, ...labelProps, 'data-mantine-label': true, className: cx(classes.label, labelProps?.className) },
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
        <Text
          themeOverride={themeOverride}
          data-mantine-description
          color="gray"
          size="xs"
          {...descriptionProps}
          className={cx(classes.description, descriptionProps?.className)}
        >
          {description}
        </Text>
      )}

      {children}

      {typeof error !== 'boolean' && error && (
        <Text
          themeOverride={themeOverride}
          data-mantine-error
          color="red"
          size="sm"
          {...errorProps}
          className={cx(classes.error, errorProps?.className)}
        >
          {error}
        </Text>
      )}
    </div>
  );
}

InputWrapper.displayName = '@mantine/core/InputWrapper';
