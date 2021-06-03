import React from 'react';
import { useId } from '@mantine/hooks';
import { DefaultProps } from '../../theme';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import {
  InputWrapperBaseProps,
  InputWrapper,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';

export interface TextInputProps
  extends DefaultProps<InputStylesNames | InputWrapperStylesNames>,
    InputBaseProps,
    InputWrapperBaseProps,
    React.ComponentPropsWithoutRef<'input'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;

  /** Input element type */
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'number';

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Record<string, any>;

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}

export function TextInput({
  className,
  id,
  label,
  error,
  required,
  type = 'text',
  style,
  icon,
  description,
  themeOverride,
  wrapperProps,
  elementRef,
  classNames,
  styles,
  ...others
}: TextInputProps) {
  const uuid = useId(id);

  return (
    <InputWrapper
      required={required}
      id={uuid}
      label={label}
      error={error}
      description={description}
      className={className}
      style={style}
      themeOverride={themeOverride}
      classNames={classNames as any}
      styles={styles as any}
      {...wrapperProps}
    >
      <Input<'input', HTMLInputElement>
        {...others}
        required={required}
        elementRef={elementRef}
        id={uuid}
        type={type}
        invalid={!!error}
        icon={icon}
        themeOverride={themeOverride}
        classNames={classNames as any}
        styles={styles as any}
      />
    </InputWrapper>
  );
}

TextInput.displayName = '@mantine/core/TextInput';
