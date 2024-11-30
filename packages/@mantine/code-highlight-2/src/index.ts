import { CodeHighlight } from './CodeHighlight/CodeHighlight';
import { CodeHighlightTabs } from './CodeHighlightTabs/CodeHighlightTabs';

CodeHighlight.Tabs = CodeHighlightTabs;
export { CodeHighlight, CodeHighlightTabs };

export {
  CodeHighlightAdapterProvider,
  useHighlight,
} from './CodeHighlightProvider/CodeHighlightProvider';

export { createHighlightJsAdapter } from './CodeHighlightProvider/adapters/highlight-js-adapter';
export { createShikiAdapter } from './CodeHighlightProvider/adapters/shiki-adapter';
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
  CodeHighlightTabsCssVariables,
  CodeHighlightTabsFactory,
  CodeHighlightDefaultLanguage,
} from './CodeHighlightTabs/CodeHighlightTabs';
