import type {
  WeekViewCssVariables,
  WeekViewFactory,
  WeekViewProps,
  WeekViewStylesNames,
} from './WeekView';

export { WeekView } from './WeekView';
export type { WeekViewProps, WeekViewFactory, WeekViewStylesNames, WeekViewCssVariables };

export namespace WeekView {
  export type Props = WeekViewProps;
  export type Factory = WeekViewFactory;
  export type StylesNames = WeekViewStylesNames;
  export type CssVariables = WeekViewCssVariables;
}
