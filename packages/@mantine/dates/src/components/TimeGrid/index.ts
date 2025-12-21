import type {
  TimeGridCssVariables,
  TimeGridFactory,
  TimeGridProps,
  TimeGridStylesNames,
} from './TimeGrid';

export { TimeGrid } from './TimeGrid';
export { isTimeBefore, isTimeAfter } from './compare-time';

export type { TimeGridProps, TimeGridStylesNames, TimeGridFactory, TimeGridCssVariables };

export namespace TimeGrid {
  export type Props = TimeGridProps;
  export type StylesNames = TimeGridStylesNames;
  export type Factory = TimeGridFactory;
  export type CssVariables = TimeGridCssVariables;
}
