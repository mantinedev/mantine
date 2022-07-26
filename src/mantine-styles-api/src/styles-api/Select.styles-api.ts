import type { SelectStylesNames } from '@mantine/core';
import { Input } from './Input.styles-api';
import { InputWrapper } from './InputWrapper.styles-api';

export const Select: Record<SelectStylesNames, string> = {
  dropdown: 'Dropdown element',
  item: 'Item element, rendered inside dropdown',
  nothingFound: 'Nothing found label',
  separator: 'Divider wrapper',
  separatorLabel: 'Separator Label',
  ...Input,
  ...InputWrapper,
};
