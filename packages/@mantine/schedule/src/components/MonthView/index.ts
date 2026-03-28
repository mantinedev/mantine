import type {
  MonthViewCssVariables,
  MonthViewFactory,
  MonthViewProps,
  MonthViewStylesNames,
} from './MonthView';

export { MonthView } from './MonthView';
export type { MonthViewProps, MonthViewFactory, MonthViewStylesNames, MonthViewCssVariables };

export namespace MonthView {
  export type Props = MonthViewProps;
  export type Factory = MonthViewFactory;
  export type StylesNames = MonthViewStylesNames;
  export type CssVariables = MonthViewCssVariables;
}
