import type {
  CalendarStylesNames,
  DecadeLevelGroupStylesNames,
  YearLevelGroupStylesNames,
  CalendarHeaderStylesNames,
  MonthLevelGroupStylesNames,
} from '@mantine/dates';

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
  monthLevelGroup: '',
  monthLevel: '',
  monthThead: '',
  monthRow: '',
  monthTbody: '',
  monthCell: '',
  month: '',
  weekdaysRow: '',
  weekday: '',
  day: '',
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
  ...YearLevelGroup,
};
