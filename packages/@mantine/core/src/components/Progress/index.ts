import type { ProgressFactory, ProgressProps, ProgressStylesNames } from './Progress';
import type { ProgressContextValue } from './Progress.context';
import type { ProgressLabelProps } from './ProgressLabel/ProgressLabel';
import type { ProgressRootProps } from './ProgressRoot/ProgressRoot';
import type { ProgressSectionProps } from './ProgressSection/ProgressSection';

export { Progress } from './Progress';
export { ProgressLabel } from './ProgressLabel/ProgressLabel';
export { ProgressRoot } from './ProgressRoot/ProgressRoot';
export { ProgressSection } from './ProgressSection/ProgressSection';
export { useProgressContext } from './Progress.context';

export type {
  ProgressProps,
  ProgressFactory,
  ProgressStylesNames,
  ProgressLabelProps,
  ProgressRootProps,
  ProgressSectionProps,
  ProgressContextValue,
};

export namespace Progress {
  export type Props = ProgressProps;
  export type Factory = ProgressFactory;
  export type StylesNames = ProgressStylesNames;
  export type ContextValue = ProgressContextValue;

  export namespace Label {
    export type Props = ProgressLabelProps;
  }

  export namespace Root {
    export type Props = ProgressRootProps;
  }

  export namespace Section {
    export type Props = ProgressSectionProps;
  }
}
