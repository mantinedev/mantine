import type { HighlightFactory, HighlightProps, HighlightTerm } from './Highlight';

export { Highlight } from './Highlight';

export type { HighlightProps, HighlightFactory, HighlightTerm };

export namespace Highlight {
  export type Props = HighlightProps;
  export type Factory = HighlightFactory;
  export type Term = HighlightTerm;
}
