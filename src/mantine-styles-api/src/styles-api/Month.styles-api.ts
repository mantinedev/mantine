import type { MonthStylesNames } from '@mantine/dates';

export const Month: Record<MonthStylesNames, string> = {
  month: 'Root element',
  weekdayCell: 'Table th element, wraps weekday',
  weekday: 'Weekday title',
  cell: 'Table cell, wraps day',
  day: 'Day button',
  outside: 'Day outside modifier',
  weekend: 'Day weekend modifier',
  selected: 'Day selected modifier',
  inRange: 'Day located in selected range modifier',
  firstInRange: 'First day in range modifier',
  lastInRange: 'Last day in range modifier',
};
