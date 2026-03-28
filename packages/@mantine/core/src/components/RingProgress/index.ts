import type {
  RingProgressCssVariables,
  RingProgressFactory,
  RingProgressProps,
  RingProgressSection,
  RingProgressStylesNames,
} from './RingProgress';

export { RingProgress } from './RingProgress';

export type {
  RingProgressProps,
  RingProgressStylesNames,
  RingProgressFactory,
  RingProgressCssVariables,
  RingProgressSection,
};

export namespace RingProgress {
  export type Props = RingProgressProps;
  export type StylesNames = RingProgressStylesNames;
  export type Factory = RingProgressFactory;
  export type CssVariables = RingProgressCssVariables;
  export type Section = RingProgressSection;
}
