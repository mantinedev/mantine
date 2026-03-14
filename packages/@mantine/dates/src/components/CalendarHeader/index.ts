import type {
  CalendarHeaderCssVariables,
  CalendarHeaderFactory,
  CalendarHeaderProps,
  CalendarHeaderSettings,
  CalendarHeaderStylesNames,
} from './CalendarHeader';

export { CalendarHeader } from './CalendarHeader';

export type {
  CalendarHeaderProps,
  CalendarHeaderStylesNames,
  CalendarHeaderCssVariables,
  CalendarHeaderSettings,
  CalendarHeaderFactory,
};

export namespace CalendarHeader {
  export type Props = CalendarHeaderProps;
  export type StylesNames = CalendarHeaderStylesNames;
  export type CssVariables = CalendarHeaderCssVariables;
  export type Settings = CalendarHeaderSettings;
  export type Factory = CalendarHeaderFactory;
}
