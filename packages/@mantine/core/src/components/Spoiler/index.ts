import type {
  SpoilerCssVariables,
  SpoilerFactory,
  SpoilerProps,
  SpoilerStylesNames,
} from './Spoiler';

export { Spoiler } from './Spoiler';

export type { SpoilerProps, SpoilerStylesNames, SpoilerCssVariables, SpoilerFactory };

export namespace Spoiler {
  export type Props = SpoilerProps;
  export type StylesNames = SpoilerStylesNames;
  export type CssVariables = SpoilerCssVariables;
  export type Factory = SpoilerFactory;
}
