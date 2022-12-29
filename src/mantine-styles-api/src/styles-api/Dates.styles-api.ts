import type {
  CalendarStylesNames,
  DecadeLevelGroupStylesNames,
  YearLevelGroupStylesNames,
  CalendarHeaderStylesNames,
  MonthLevelGroupStylesNames,
  DateTimePickerStylesNames,
} from '@mantine/dates';
import { TextInput } from './TextInput.styles-api';

const CalendarHeader: Record<CalendarHeaderStylesNames, string> = {
  calendarHeader: 'Calendar header root element',
  calendarHeaderControl: 'Previous/next calendar header controls',
  calendarHeaderControlIcon: 'Icon of previous/next calendar header controls',
  calendarHeaderLevel: 'Level control (changes levels when clicked, month -> year -> decade)',
};

const DecadeLevelGroup: Record<DecadeLevelGroupStylesNames, string> = {
  ...CalendarHeader,
  decadeLevelGroup: 'Group of decades levels',
  decadeLevel: 'Decade level root element',
  pickerControl: 'Button used to pick months and years',
  yearsList: 'Years list table element',
  yearsListRow: 'Years list row element',
  yearsListCell: 'Years list cell element',
};

const YearLevelGroup: Record<YearLevelGroupStylesNames, string> = {
  ...CalendarHeader,
  yearLevelGroup: 'Group of year levels',
  yearLevel: 'Year level root element',
  monthsList: 'Months list table element',
  monthsListRow: 'Months list table row element',
  monthsListCell: 'Months list table cell element',
  pickerControl: 'Button used to pick months and years',
};

const MonthLevelGroup: Record<MonthLevelGroupStylesNames, string> = {
  ...CalendarHeader,
  monthLevelGroup: 'Group or month levels',
  monthLevel: 'Month level root element',
  monthThead: 'thead element of month table',
  monthRow: 'tr element of month table',
  monthTbody: 'tbody element of month table',
  monthCell: 'td element of month table',
  month: 'Month table element',
  weekdaysRow: 'Weekdays tr element',
  weekday: 'Weekday th element',
  day: 'Month day control',
};

const CalendarBase = {
  calendar: 'Calendar root element',
};

export const Calendar: Record<CalendarStylesNames, string> = {
  ...CalendarBase,
  ...DecadeLevelGroup,
  ...YearLevelGroup,
  ...MonthLevelGroup,
};

export const YearPicker = {
  ...CalendarBase,
  ...DecadeLevelGroup,
};

export const MonthPicker = {
  ...CalendarBase,
  ...DecadeLevelGroup,
  ...YearLevelGroup,
};

export const DatePicker = {
  ...CalendarBase,
  ...DecadeLevelGroup,
  ...YearLevelGroup,
  ...MonthLevelGroup,
};

export const YearPickerInput = {
  ...TextInput,
  ...YearPicker,
};

export const MonthPickerInput = {
  ...TextInput,
  ...MonthPicker,
};

export const DatePickerInput = {
  ...TextInput,
  ...DatePicker,
};

export const DateInput = {
  ...TextInput,
  ...DatePicker,
};

export const DateTimePicker: Record<DateTimePickerStylesNames, string> = {
  ...TextInput,
  ...DatePicker,
  placeholder: 'Placeholder element',
  timeWrapper: 'Wrapper around time input and submit button',
  timeInput: 'TimeInput',
};

export const TimeInput = TextInput;
