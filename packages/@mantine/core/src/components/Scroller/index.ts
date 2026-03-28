import type {
  ScrollerCssVariables,
  ScrollerFactory,
  ScrollerProps,
  ScrollerStylesNames,
} from './Scroller';

export { Scroller } from './Scroller';

export type { ScrollerProps, ScrollerStylesNames, ScrollerCssVariables, ScrollerFactory };

export namespace Scroller {
  export type Props = ScrollerProps;
  export type StylesNames = ScrollerStylesNames;
  export type CssVariables = ScrollerCssVariables;
  export type Factory = ScrollerFactory;
}
