import type {
  CalendarAriaLabels,
  CalendarBaseProps,
  CalendarFactory,
  CalendarProps,
  CalendarSettings,
  CalendarStylesNames,
} from './Calendar';

export { Calendar } from './Calendar';
export { pickCalendarProps } from './pick-calendar-levels-props/pick-calendar-levels-props';

export type {
  CalendarProps,
  CalendarStylesNames,
  CalendarAriaLabels,
  CalendarSettings,
  CalendarBaseProps,
  CalendarFactory,
};

export namespace Calendar {
  export type Props = CalendarProps;
  export type StylesNames = CalendarStylesNames;
  export type AriaLabels = CalendarAriaLabels;
  export type Settings = CalendarSettings;
  export type BaseProps = CalendarBaseProps;
  export type Factory = CalendarFactory;
}
