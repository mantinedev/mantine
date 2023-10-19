import React from 'react';
import { factory, ElementProps, useProps, Factory, BoxProps, StylesApiProps } from '../../core';
import { InputBase } from '../InputBase';
import { __InputStylesNames, __BaseInputProps } from '../Input';

export interface TextInputProps
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<TextInputFactory>,
    ElementProps<'input', 'size'> {}

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
