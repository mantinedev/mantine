export { CodeHighlight } from './CodeHighlight/CodeHighlight.js';
export { InlineCodeHighlight } from './CodeHighlight/InlineCodeHighlight.js';
export { CodeHighlightTabs } from './CodeHighlightTabs/CodeHighlightTabs.js';
export { CodeHighlightControl } from './CodeHighlight/CodeHighlightControl/CodeHighlightControl.js';

export {
  CodeHighlightAdapterProvider,
  useHighlight,
} from './CodeHighlightProvider/CodeHighlightProvider.js';

export { createHighlightJsAdapter } from './CodeHighlightProvider/adapters/highlight-js-adapter.js';
export {
  createShikiAdapter,
  stripShikiCodeBlocks,
} from './CodeHighlightProvider/adapters/shiki-adapter.js';
export { plainTextAdapter } from './CodeHighlightProvider/adapters/plain-text-adapter.js';

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
