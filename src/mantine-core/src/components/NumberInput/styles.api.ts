import type { InputStylesNames } from '../Input/Input';
import type { InputWrapperStylesNames } from '../InputWrapper/InputWrapper';
import type { NumberInputStylesNames } from './NumberInput';

import { Input } from '../Input/styles.api';
import { InputWrapper } from '../InputWrapper/styles.api';

export const NumberInput: Record<
  InputStylesNames | InputWrapperStylesNames | NumberInputStylesNames,
  string
> = {
  ...Input,
  ...InputWrapper,
  control: 'Shared up and down controls styles',
  controlUp: 'Up control styles',
  controlDown: 'Down control styles',
};
