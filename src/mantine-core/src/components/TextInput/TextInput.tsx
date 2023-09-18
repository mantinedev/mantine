import React from 'react';
import { factory, ElementProps, useProps, Factory } from '../../core';
import { InputBase, InputBaseProps } from '../InputBase';
import { __InputStylesNames } from '../Input';

export interface TextInputProps extends InputBaseProps, ElementProps<'input', 'size'> {}

export type TextInputFactory = Factory<{
  props: TextInputProps;
  ref: HTMLInputElement;
  stylesNames: __InputStylesNames;
}>;

const defaultProps: Partial<TextInputProps> = {};

export const TextInput = factory<TextInputFactory>((props, ref) => {
  const _props = useProps('TextInput', defaultProps, props);

  return <InputBase component="input" ref={ref} {..._props} __staticSelector="TextInput" />;
});

TextInput.classes = InputBase.classes;
TextInput.displayName = '@mantine/core/TextInput';
