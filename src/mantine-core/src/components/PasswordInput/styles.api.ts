import { TextInput } from '../TextInput/styles.api';
import { PasswordInputStylesNames } from './PasswordInput';

export const PasswordInput: Record<PasswordInputStylesNames, string> = {
  ...TextInput,
  visibilityToggle: 'Visibility toggle button',
  innerInput: 'Actual input element',
};
