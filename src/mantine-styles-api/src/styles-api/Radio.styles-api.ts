import type { RadioGroupStylesNames, RadioStylesNames } from '@mantine/core';
import { InputWrapper } from './InputWrapper.styles-api';

export const RadioGroup: Record<RadioGroupStylesNames, string> = InputWrapper;

export const Radio: Record<RadioStylesNames, string> = {
  root: 'root radio element',
  body: 'Wrapper for label and radio button',
  label: 'Radio element',
  radio: 'Radio button',
  inner: 'Radio button inner, contains input and icon',
  icon: 'Radio button icon (svg)',
};
