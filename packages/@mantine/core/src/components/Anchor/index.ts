import type {
  AnchorCssVariables,
  AnchorFactory,
  AnchorProps,
  AnchorStylesNames,
  AnchorVariant,
} from './Anchor';

export { Anchor } from './Anchor';

export type {
  AnchorProps,
  AnchorStylesNames,
  AnchorCssVariables,
  AnchorFactory,
  AnchorVariant,
} from './Anchor';

export namespace Anchor {
  export type Props = AnchorProps;
  export type StylesNames = AnchorStylesNames;
  export type CssVariables = AnchorCssVariables;
  export type Factory = AnchorFactory;
  export type Variant = AnchorVariant;
}
