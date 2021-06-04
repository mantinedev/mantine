import type { InputStylesNames } from '../Input/Input';
import type { InputWrapperStylesNames } from '../InputWrapper/InputWrapper';

import { Input } from '../Input/styles.api';
import { InputWrapper } from '../InputWrapper/styles.api';

export const PasswordInput: Record<InputStylesNames | InputWrapperStylesNames, string> = {
  ...Input,
  ...InputWrapper,
};
