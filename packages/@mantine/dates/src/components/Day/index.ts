import type { DayCssVariables, DayFactory, DayProps, DayStylesNames, RenderDay } from './Day';

export { Day } from './Day';

export type { DayProps, DayStylesNames, DayFactory, DayCssVariables, RenderDay };

export namespace Day {
  export type Props = DayProps;
  export type StylesNames = DayStylesNames;
  export type Factory = DayFactory;
  export type CssVariables = DayCssVariables;
}
