import { TagInputStylesNames } from '@mantine/labs';
import { Input } from './Input.styles-api';
import { InputWrapper } from './InputWrapper.styles-api';

const InputStyles = { ...Input };

delete InputStyles.rightSection;

export const TagInput: Record<TagInputStylesNames, string> = {
  wrapper: 'Wrapper around input and dropdown',
  disabled: 'Disabled item modifier',
  values: 'Values wrapper',
  value: 'Value element',
  tagInput: 'Tag input, rendered after all values',
  defaultValue: 'Default value component wrapper',
  defaultValueRemove: 'Default value remove control',
  ...InputStyles,
  ...InputWrapper,
};
