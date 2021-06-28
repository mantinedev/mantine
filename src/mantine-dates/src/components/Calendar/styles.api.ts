import { CalendarStylesNames } from './Calendar';
import { Month } from '../Month/styles.api';

export const Calendar: Record<CalendarStylesNames, string> = {
  label: 'Label displayed in header',
  selectGroup: 'Wrapper for year and month select inputs',
  select: 'Year and month select inputs',
  ...Month,
};

delete (Calendar as any).root;

export const RangeCalendar = Calendar;
