import type { DatePickerStylesNames } from '@mantine/dates';
import { Input } from './Input.styles-api';
import { InputWrapper } from './InputWrapper.styles-api';
import { Calendar } from './Calendar.styles-api';

export const DatePicker: Record<DatePickerStylesNames, string> = {
  wrapper: 'Wrapper around input and dropdown',
  placeholder: 'Placeholder text',
  dropdownWrapper: 'Wrapper around dropdown',
  dropdown: 'Dropdown with calendar',
  value: 'Value text',
  arrow: 'Dropdown arrow',
  freeInput: 'Input modifier when free input is allowed',
  ...Input,
  ...InputWrapper,
  // Calendar styles api is included as all date pickers are used only with calendar
  ...Calendar,
};

export const DateRangePicker = DatePicker;
