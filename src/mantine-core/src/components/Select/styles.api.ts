import { SelectStylesNames } from './Select';
import { Input } from '../Input/styles.api';
import { InputWrapper } from '../InputWrapper/styles.api';

export const Select: Record<SelectStylesNames, string> = {
  ...Input,
  ...InputWrapper,
};
