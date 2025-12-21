import type {
  RingProgressCssVariables,
  RingProgressFactory,
  RingProgressProps,
  RingProgressStylesNames,
} from './RingProgress';

export { RingProgress } from './RingProgress';

export type {
  RingProgressProps,
  RingProgressStylesNames,
  RingProgressFactory,
  RingProgressCssVariables,
};

export namespace RingProgress {
  export type Props = RingProgressProps;
  export type StylesNames = RingProgressStylesNames;
  export type Factory = RingProgressFactory;
  export type CssVariables = RingProgressCssVariables;
}
