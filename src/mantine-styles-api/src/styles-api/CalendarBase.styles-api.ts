import type { CalendarBaseStylesNames } from '@mantine/dates';
import { Month } from './Month.styles-api';

export const CalendarBase: Record<CalendarBaseStylesNames, string> = {
  calendarBase: 'Root element',

  calendarHeader: 'Calendar header, contains next/previous and level change controls',
  calendarHeaderControl: 'Next/previous controls',
  calendarHeaderLevel: 'Level change control (year, month, date)',
  calendarHeaderLevelIcon: 'Level control icon (caret)',

  yearPicker: 'Year picker root element',
  yearPickerControls: 'Year picker controls wrapper',
  yearPickerControl: 'Year picker control button',
  yearPickerControlActive: 'Year picker control active modifier (currently selected year)',

  monthPicker: 'Month picker root element',
  monthPickerControls: 'Month picker controls wrapper',
  monthPickerControl: 'Month picker control button',
  monthPickerControlActive: 'Month picker control active modifier (currently selected month)',

  ...Month,
};
