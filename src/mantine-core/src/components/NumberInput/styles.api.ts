import type { InnerNumberInputStylesNames, NumberInputStylesNames } from './NumberInput';

import { Input } from '../Input/styles.api';
import { InputWrapper } from '../InputWrapper/styles.api';

/* Used only in styles api testing */
export const NumberInputInner: Record<InnerNumberInputStylesNames, string> = {
  rightSection: 'Right section with up and down controls',
  control: 'Shared up and down controls styles',
  controlUp: 'Up control styles',
  controlDown: 'Down control styles',
};

export const NumberInput: Record<NumberInputStylesNames, string> = {
  ...Input,
  ...InputWrapper,
  ...NumberInputInner,
};
