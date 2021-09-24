import { Input } from '../Input/styles.api';
import { InputWrapper } from '../InputWrapper/styles.api';
import { SelectStylesNames } from './Select';

export const Select: Record<SelectStylesNames, string> = {
  dropdown: 'Dropdown element',
  item: 'Item element, rendered inside dropdown',
  hovered: 'Hovered item modifier, added to item when it is selected with arrows or hovered',
  disabled: 'Disabled item modifier',
  selected: 'Selected item modifier',
  nothingFound: 'Nothing found label',
  seperator: 'Divider element, rendered inside dropdown',
  seperatorLabel: 'Seperator Label',
  ...Input,
  ...InputWrapper,
};
