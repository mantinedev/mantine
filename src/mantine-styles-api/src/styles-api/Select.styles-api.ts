import type { SelectStylesNames } from '@mantine/core';
import { Input } from './Input.styles-api';
import { InputWrapper } from './InputWrapper.styles-api';

export const Select: Record<SelectStylesNames, string> = {
  dropdown: 'Dropdown element',
  item: 'Item element, rendered inside dropdown',
  hovered: 'Hovered item modifier, added to item when it is selected with arrows or hovered',
  disabled: 'Disabled item modifier',
  selected: 'Selected item modifier',
  nothingFound: 'Nothing found label',
  separator: 'Divider wrapper',
  separatorLabel: 'Separator Label',
  ...Input,
  ...InputWrapper,
};
