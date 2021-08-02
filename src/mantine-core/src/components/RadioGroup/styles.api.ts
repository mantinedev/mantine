import { InputWrapper } from '../InputWrapper/styles.api';
import { RadioGroupStylesNames } from './RadioGroup';

export const RadioGroup: Record<RadioGroupStylesNames, string> = {
  radioWrapper: 'Wrapper for label and radio button',
  label: 'Radio element',
  radio: 'Radio button',
  ...InputWrapper,
};
