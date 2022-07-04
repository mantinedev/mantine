import type { DatePickerStylesNames } from '@mantine/dates';
import { Input } from './Input.styles-api';
import { InputWrapper } from './InputWrapper.styles-api';
import { Calendar } from './Calendar.styles-api';

export const DatePicker: Record<DatePickerStylesNames, string> = {
  wrapper: 'Wrapper around input and dropdown',
  dropdown: 'Dropdown with calendar',
  freeInput: 'Input modifier when free input is allowed',
  ...Input,
  ...InputWrapper,
  ...Calendar,
};

export const DateRangePicker = DatePicker;
