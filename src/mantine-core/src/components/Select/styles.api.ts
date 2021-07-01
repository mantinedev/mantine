import { Input } from '../Input/styles.api';
import { InputWrapper } from '../InputWrapper/styles.api';
import { SelectStylesNames } from './Select';

export const Select: Record<SelectStylesNames, string> = {
  wrapper: 'Wrapper around input and dropdown',
  dropdown: 'Dropdown element',
  notSearchable: 'Not searchable input modifier',
  item: 'Item element, rendered inside dropdown',
  hovered: 'Hovered item modifier, added to item when it is selected with arrows or hovered',
  selected: 'Selected item modifier',
  ...Input,
  ...InputWrapper,
};
