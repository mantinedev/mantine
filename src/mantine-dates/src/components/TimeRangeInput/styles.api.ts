import { Input, InputWrapper } from '@mantine/core/src/styles.api';
import type { TimeRangeInputStylesNames } from './TimeRangeInput';

export const TimeRangeInput: Record<TimeRangeInputStylesNames, string> = {
  ...Input,
  ...InputWrapper,
  inputWrapper: 'Wraps singe time input (hours, minutes, seconds)',
  timeField: 'Time input field (hour, minute and second)',
  separator: 'Separator between inputs',
};
