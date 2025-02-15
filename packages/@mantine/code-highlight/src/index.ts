export { CodeHighlight } from './CodeHighlight/CodeHighlight';
export { InlineCodeHighlight } from './CodeHighlight/InlineCodeHighlight';
export { CodeHighlightTabs } from './CodeHighlightTabs/CodeHighlightTabs';
export { CodeHighlightControl } from './CodeHighlight/CodeHighlightControl/CodeHighlightControl';

export {
  CodeHighlightAdapterProvider,
  useHighlight,
} from './CodeHighlightProvider/CodeHighlightProvider';

export { createHighlightJsAdapter } from './CodeHighlightProvider/adapters/highlight-js-adapter';
export {
  createShikiAdapter,
  stripShikiCodeBlocks,
} from './CodeHighlightProvider/adapters/shiki-adapter';
export { plainTextAdapter } from './CodeHighlightProvider/adapters/plain-text-adapter';

export type {
  CodeHighlightFactory,
  CodeHighlightCssVariables,
  CodeHighlightProps,
  CodeHighlightStylesNames,
} from './CodeHighlight/CodeHighlight';

export type {
  CodeHighlightTabsCode,
  CodeHighlightTabsProps,
  CodeHighlightTabsStylesNames,
  CodeHighlightTabsFactory,
  CodeHighlightDefaultLanguage,
} from './CodeHighlightTabs/CodeHighlightTabs';

export type {
  InlineCodeHighlightProps,
  InlineCodeHighlightCssVariables,
  InlineCodeHighlightFactory,
  InlineCodeHighlightStylesNames,
} from './CodeHighlight/InlineCodeHighlight';

export type { CodeHighlightControlProps } from './CodeHighlight/CodeHighlightControl/CodeHighlightControl';
