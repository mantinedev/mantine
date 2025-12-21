import type {
  BlockquoteCssVariables,
  BlockquoteFactory,
  BlockquoteProps,
  BlockquoteStylesNames,
} from './Blockquote';

export { Blockquote } from './Blockquote';

export type { BlockquoteProps, BlockquoteStylesNames, BlockquoteCssVariables, BlockquoteFactory };

export namespace Blockquote {
  export type Props = BlockquoteProps;
  export type StylesNames = BlockquoteStylesNames;
  export type CssVariables = BlockquoteCssVariables;
  export type Factory = BlockquoteFactory;
}
