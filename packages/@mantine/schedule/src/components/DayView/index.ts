import type {
  DayViewCssVariables,
  DayViewFactory,
  DayViewProps,
  DayViewStylesNames,
} from './DayView';

export { DayView } from './DayView';
export type { DayViewProps, DayViewFactory, DayViewStylesNames, DayViewCssVariables };

export namespace DayView {
  export type Props = DayViewProps;
  export type Factory = DayViewFactory;
  export type StylesNames = DayViewStylesNames;
  export type CssVariables = DayViewCssVariables;
}
