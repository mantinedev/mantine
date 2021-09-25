import { Input } from '../Input/styles.api';
import { InputWrapper } from '../InputWrapper/styles.api';
import { SelectStylesNames } from './index';

export const Select: Record<SelectStylesNames, string> = {
  dropdown: 'Dropdown element',
  item: 'Item element, rendered inside dropdown',
  hovered: 'Hovered item modifier, added to item when it is selected with arrows or hovered',
  selected: 'Selected item modifier',
  nothingFound: 'Nothing found label',
  ...Input,
  ...InputWrapper,
};
