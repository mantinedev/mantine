import type { MultiSelectStylesNames } from '@mantine/core';
import { Input } from './Input.styles-api';
import { InputWrapper } from './InputWrapper.styles-api';

const InputStyles = { ...Input };

delete InputStyles.rightSection;

export const MultiSelect: Record<MultiSelectStylesNames, string> = {
  wrapper: 'Wrapper around input and dropdown',
  dropdown: 'Dropdown element',
  item: 'Item element, rendered inside dropdown',
  hovered: 'Hovered item modifier, added to item when it is selected with arrows or hovered',
  disabled: 'Disabled item modifier',
  nothingFound: 'Nothing found label',
  values: 'Values wrapper',
  value: 'Value element',
  searchInput: 'Search input, rendered after all values',
  defaultValue: 'Default value component wrapper',
  defaultValueRemove: 'Default value remove control',
  separator: 'Divider wrapper',
  separatorLabel: 'Divider Label',
  ...InputStyles,
  ...InputWrapper,
};
