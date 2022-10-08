import React, { forwardRef } from 'react';
import { DefaultProps, MantineSize } from '@mantine/styles';
import {
  Input,
  InputSharedProps,
  InputStylesNames,
  useInputProps,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../Input';

export type TextInputStylesNames = InputStylesNames | InputWrapperStylesNames;

export interface TextInputProps
  extends DefaultProps<TextInputStylesNames>,
    InputSharedProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** Input element type */
  type?: React.HTMLInputTypeAttribute;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Record<string, any>;

  /** Input size */
  size?: MantineSize;

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
