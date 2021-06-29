import { Input, InputWrapper } from '@mantine/core/src/styles.api';
import { TimeInputStylesNames } from './TimeInput';

export const TimeInput: Record<TimeInputStylesNames, string> = {
  controls: 'Wrapper around hours, minutes and seconds inputs',
  timeInput: 'Hours, minutes and seconds inputs',
  disabled: 'Disabled modifier',
  ...Input,
  ...InputWrapper,
};
