import type {
  MiniCalendarCssVariables,
  MiniCalendarFactory,
  MiniCalendarProps,
  MiniCalendarStylesNames,
} from './MiniCalendar';

export { MiniCalendar } from './MiniCalendar';

export type {
  MiniCalendarProps,
  MiniCalendarStylesNames,
  MiniCalendarFactory,
  MiniCalendarCssVariables,
};

export namespace MiniCalendar {
  export type Props = MiniCalendarProps;
  export type StylesNames = MiniCalendarStylesNames;
  export type Factory = MiniCalendarFactory;
  export type CssVariables = MiniCalendarCssVariables;
}
