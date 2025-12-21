import type { HighlightFactory, HighlightProps } from './Highlight';

export { Highlight } from './Highlight';

export type { HighlightProps, HighlightFactory };

export namespace Highlight {
  export type Props = HighlightProps;
  export type Factory = HighlightFactory;
}
