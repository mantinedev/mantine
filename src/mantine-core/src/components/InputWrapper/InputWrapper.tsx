import React, { createElement } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles } from '../../theme';
import { Text } from '../Text/Text';
import useStyles from './InputWrapper.styles';

export type InputWrapperStylesNames = keyof ReturnType<typeof useStyles>;

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
  extends DefaultProps<typeof useStyles>,
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
  style,
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
  classNames,
  styles,
  ...others
}: InputWrapperProps) {
  const theme = useMantineTheme();
  const classes = useStyles({ theme }, classNames, 'input-wrapper');
  const _styles = mergeStyles(classes, styles);
  const _labelProps = labelElement === 'label' ? { htmlFor: id } : {};
  const inputLabel = createElement(
    labelElement,
    {
      ..._labelProps,
      ...labelProps,
      'data-mantine-label': true,
      className: classes.label,
      style: _styles.label,
    },
    <>
      {label}
      {required && (
        <span data-mantine-required className={classes.required} style={_styles.required}>
          {' '}
          *
        </span>
      )}
    </>
  );

  return (
    <div className={cx(classes.root, className)} style={{ ...style, ..._styles.root }} {...others}>
      {label && inputLabel}

      {description && (
        <Text
          {...descriptionProps}
          themeOverride={themeOverride}
          data-mantine-description
          color="gray"
          size="xs"
          className={classes.description}
          style={_styles.description}
        >
          {description}
        </Text>
      )}

      {children}

      {typeof error !== 'boolean' && error && (
        <Text
          {...errorProps}
          themeOverride={themeOverride}
          data-mantine-error
          color="red"
          size="sm"
          className={classes.error}
          style={_styles.error}
        >
          {error}
        </Text>
      )}
    </div>
  );
}

InputWrapper.displayName = '@mantine/core/InputWrapper';
