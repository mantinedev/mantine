import React, { forwardRef } from 'react';
import { DefaultProps, MantineSize } from '@mantine/styles';
import {
  Input,
  InputBaseProps,
  InputStylesNames,
  useInputProps,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../Input';

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
  wrapperProps?: Record<string, any>;

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

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { inputProps, wrapperProps, ...others } = useInputProps('TextInput', defaultProps, props);
  return (
    <Input.Wrapper {...wrapperProps}>
      <Input {...inputProps} {...others} ref={ref} />
    </Input.Wrapper>
  );
});

TextInput.displayName = '@mantine/core/TextInput';
