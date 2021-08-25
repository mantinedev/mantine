import { ColorInputStylesNames } from './ColorInput';

import { Input } from '../Input/styles.api';
import { InputWrapper } from '../InputWrapper/styles.api';
import { ColorPicker } from '../ColorPicker/styles.api';

export const ColorInput: Record<ColorInputStylesNames, string> = {
  ...Input,
  ...InputWrapper,
  ...ColorPicker,
  dropdownBody: 'Dropdown body, contains color picker',
  arrow: 'Dropdown body arrow',
};
