import { CalendarStylesNames } from './Calendar';
import { Month } from '../Month/styles.api';

export const Calendar: Record<CalendarStylesNames, string> = {
  calendarLabel: 'Label displayed in header',
  calendarSelectGroup: 'Wrapper for year and month select inputs',
  calendarSelect: 'Year and month select inputs',
  ...Month,
};

delete (Calendar as any).root;

export const RangeCalendar = Calendar;
