import React, { forwardRef } from 'react';
import { useUuid } from '@mantine/hooks';
import {
  DefaultProps,
  MantineSize,
  extractSystemStyles,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import {
  InputWrapperBaseProps,
  InputWrapper,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';

export type TextInputStylesNames = InputStylesNames | InputWrapperStylesNames;

export interface TextInputProps
  extends DefaultProps<TextInputStylesNames>,
    InputBaseProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;

  /** Input element type */
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'number';

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: { [key: string]: any };

  /** Input size */
  size?: MantineSize;

  /** Static css selector base */
  __staticSelector?: string;
}

const defaultProps: Partial<TextInputProps> = {
  type: 'text',
  size: 'sm',
  __staticSelector: 'TextInput',
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    const {
      className,
      id,
      label,
      error,
      required,
      type,
      style,
      icon,
      description,
      wrapperProps,
      size,
      classNames,
      styles,
      errorProps,
      labelProps,
      descriptionProps,
      __staticSelector,
      sx,
      ...others
    } = useMantineDefaultProps('TextInput', defaultProps, props);

    const uuid = useUuid(id);
    const { systemStyles, rest } = extractSystemStyles(others);

    return (
      <InputWrapper
        required={required}
        id={uuid}
        label={label}
        error={error}
        description={description}
        size={size}
        className={className}
        style={style}
        classNames={classNames}
        styles={styles}
        __staticSelector={__staticSelector}
        sx={sx}
        errorProps={errorProps}
        labelProps={labelProps}
        descriptionProps={descriptionProps}
        {...systemStyles}
        {...wrapperProps}
      >
        <Input<'input'>
          {...rest}
          required={required}
          ref={ref}
          id={uuid}
          type={type}
          invalid={!!error}
          icon={icon}
          size={size}
          classNames={classNames}
          styles={styles}
          __staticSelector={__staticSelector}
        />
      </InputWrapper>
    );
  }
);

TextInput.displayName = '@mantine/core/TextInput';
