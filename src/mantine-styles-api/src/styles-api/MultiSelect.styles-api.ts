import type { MultiSelectStylesNames } from '@mantine/core';
import { Input } from './Input.styles-api';
import { InputWrapper } from './InputWrapper.styles-api';

const InputStyles = { ...Input };

delete InputStyles.rightSection;

export const MultiSelect: Record<MultiSelectStylesNames, string> = {
  wrapper: 'Wrapper around input and dropdown',
  dropdown: 'Dropdown element',
  item: 'Item element, rendered inside dropdown',
  nothingFound: 'Nothing found label',
  values: 'Values wrapper',
  value: 'Value element',
  searchInput: 'Search input, rendered after all values',
  defaultValue: 'Default value component wrapper',
  defaultValueRemove: 'Default value remove control',
  defaultValueLabel: 'Default value label',
  separator: 'Divider wrapper',
  separatorLabel: 'Divider Label',
  itemsWrapper: 'Wraps all items in dropdown',
  ...InputStyles,
  ...InputWrapper,
};
