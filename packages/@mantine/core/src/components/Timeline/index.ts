import type {
  TimelineCssVariables,
  TimelineFactory,
  TimelineProps,
  TimelineStylesNames,
} from './Timeline';
import type {
  TimelineItemFactory,
  TimelineItemProps,
  TimelineItemStylesNames,
} from './TimelineItem/TimelineItem';

export { Timeline } from './Timeline';
export { TimelineItem } from './TimelineItem/TimelineItem';

export type {
  TimelineProps,
  TimelineStylesNames,
  TimelineCssVariables,
  TimelineFactory,
  TimelineItemProps,
  TimelineItemStylesNames,
  TimelineItemFactory,
};

export namespace Timeline {
  export type Props = TimelineProps;
  export type StylesNames = TimelineStylesNames;
  export type CssVariables = TimelineCssVariables;
  export type Factory = TimelineFactory;

  export namespace Item {
    export type Props = TimelineItemProps;
    export type StylesNames = TimelineItemStylesNames;
    export type Factory = TimelineItemFactory;
  }
}
