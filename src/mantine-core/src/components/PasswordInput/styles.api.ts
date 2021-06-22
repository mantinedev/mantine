import { PasswordInputStylesNames } from './PasswordInput';
import { Input } from '../Input/styles.api';
import { InputWrapper } from '../InputWrapper/styles.api';

export const PasswordInput: Record<PasswordInputStylesNames, string> = {
  ...Input,
  ...InputWrapper,
};
