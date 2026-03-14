import type { MonthFactory, MonthProps, MonthSettings, MonthStylesNames } from './Month';

export { getEndOfWeek } from './get-end-of-week/get-end-of-week';
export { getStartOfWeek } from './get-start-of-week/get-start-of-week';
export { getMonthDays } from './get-month-days/get-month-days';
export { isSameMonth } from './is-same-month/is-same-month';

export { Month } from './Month';

export type { MonthProps, MonthSettings, MonthStylesNames, MonthFactory };

export namespace Month {
  export type Props = MonthProps;
  export type Settings = MonthSettings;
  export type StylesNames = MonthStylesNames;
  export type Factory = MonthFactory;
}
