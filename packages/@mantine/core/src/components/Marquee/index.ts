import type {
  MarqueeCssVariables,
  MarqueeFactory,
  MarqueeProps,
  MarqueeStylesNames,
} from './Marquee';

export { Marquee } from './Marquee';

export type { MarqueeProps, MarqueeStylesNames, MarqueeCssVariables, MarqueeFactory };

export namespace Marquee {
  export type Props = MarqueeProps;
  export type StylesNames = MarqueeStylesNames;
  export type CssVariables = MarqueeCssVariables;
  export type Factory = MarqueeFactory;
}
