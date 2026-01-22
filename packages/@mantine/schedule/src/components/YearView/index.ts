import type {
  YearViewCssVariables,
  YearViewFactory,
  YearViewProps,
  YearViewStylesNames,
} from './YearView';

export { YearView } from './YearView';
export type { YearViewProps, YearViewFactory, YearViewStylesNames, YearViewCssVariables };

export namespace YearView {
  export type Props = YearViewProps;
  export type Factory = YearViewFactory;
  export type StylesNames = YearViewStylesNames;
  export type CssVariables = YearViewCssVariables;
}
