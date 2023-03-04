import { TagInputStylesNames } from '@mantine/core';
import { Input } from './Input.styles-api';
import { InputWrapper } from './InputWrapper.styles-api';

const InputStyles = { ...Input };

delete InputStyles.rightSection;

export const TagInput: Record<TagInputStylesNames, string> = {
  wrapper: 'Wrapper around input and dropdown',
  values: 'Values wrapper',
  value: 'Value element',
  defaultValue: 'Default value component wrapper',
  defaultValueLabel: 'Default value label',
  defaultValueRemove: 'Default value remove control',
  tagInput: 'Tag input, rendered after all values',
  tagInputContainer: 'Tag Input, Container before Input',
  ...InputStyles,
  ...InputWrapper,
};
