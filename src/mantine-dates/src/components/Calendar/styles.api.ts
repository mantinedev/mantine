import { CalendarStylesNames } from './Calendar';
import { Month } from '../Month/styles.api';

export const Calendar: Record<CalendarStylesNames, string> = {
  calendar: 'Root element',
  header: 'Includes next/previous controls and label/month-year selects',
  control: 'Previous/next month controls',
  label: 'Label displayed in header',
  selectGroup: 'Wrapper for year and month select inputs',
  select: 'Year and month select inputs',
  ...Month,
};

delete (Calendar as any).root;
