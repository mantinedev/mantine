import { AutocompleteStylesNames } from '@mantine/core';
import { Input } from './Input.styles-api';
import { InputWrapper } from './InputWrapper.styles-api';

export const Autocomplete: Record<AutocompleteStylesNames, string> = {
  dropdown: 'Dropdown element',
  item: 'Item element, rendered inside dropdown',
  nothingFound: 'Nothing found label',
  separator: 'Divider wrapper',
  separatorLabel: 'Separator Label',
  itemsWrapper: 'Wraps all items in dropdown',
  ...Input,
  ...InputWrapper,
};
