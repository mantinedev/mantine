import type {
  CodeHighlightCssVariables,
  CodeHighlightFactory,
  CodeHighlightProps,
  CodeHighlightStylesNames,
} from './CodeHighlight/CodeHighlight';
import type { CodeHighlightContextValue } from './CodeHighlight/CodeHighlight.context';
import type { CodeHighlightControlProps } from './CodeHighlight/CodeHighlightControl/CodeHighlightControl';
import type {
  InlineCodeHighlightCssVariables,
  InlineCodeHighlightFactory,
  InlineCodeHighlightProps,
  InlineCodeHighlightStylesNames,
} from './CodeHighlight/InlineCodeHighlight';
import type { CodeHighlightAdapter } from './CodeHighlightProvider/CodeHighlightProvider';
import type {
  CodeHighlightDefaultLanguage,
  CodeHighlightTabsCode,
  CodeHighlightTabsFactory,
  CodeHighlightTabsProps,
  CodeHighlightTabsStylesNames,
} from './CodeHighlightTabs/CodeHighlightTabs';

export { CodeHighlight } from './CodeHighlight/CodeHighlight.js';
export { InlineCodeHighlight } from './CodeHighlight/InlineCodeHighlight.js';
export { CodeHighlightTabs } from './CodeHighlightTabs/CodeHighlightTabs.js';
export { CodeHighlightControl } from './CodeHighlight/CodeHighlightControl/CodeHighlightControl.js';
export { useCodeHighlightContext } from './CodeHighlight/CodeHighlight.context.js';

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
  CodeHighlightProps,
  CodeHighlightStylesNames,
  CodeHighlightCssVariables,
  CodeHighlightFactory,
  CodeHighlightTabsProps,
  CodeHighlightTabsStylesNames,
  CodeHighlightTabsCode,
  CodeHighlightTabsFactory,
  CodeHighlightDefaultLanguage,
  InlineCodeHighlightProps,
  InlineCodeHighlightStylesNames,
  InlineCodeHighlightCssVariables,
  InlineCodeHighlightFactory,
  CodeHighlightControlProps,
  CodeHighlightContextValue,
  CodeHighlightAdapter,
};
