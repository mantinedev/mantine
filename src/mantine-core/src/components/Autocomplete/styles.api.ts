import { Input } from '../Input/styles.api';
import { InputWrapper } from '../InputWrapper/styles.api';
import { AutocompleteStylesNames } from './Autocomplete';

export const Autocomplete: Record<AutocompleteStylesNames, string> = {
  wrapper: 'Wrapper around input and dropdown',
  dropdown: 'Dropdown element',
  item: 'Item element, rendered inside dropdown',
  hovered: 'Hovered item modifier, added to item when it is selected with arrows or hovered',
  ...Input,
  ...InputWrapper,
};
