import type { RadioGroupStylesNames } from '@mantine/core';
import { InputWrapper } from './InputWrapper.styles-api';

export const RadioGroup: Record<RadioGroupStylesNames, string> = {
  radioWrapper: 'Wrapper for label and radio button',
  label: 'Radio element',
  radio: 'Radio button',
  ...InputWrapper,
};
