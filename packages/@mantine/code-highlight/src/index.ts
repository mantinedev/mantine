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
};

export namespace CodeHighlight {
  export type Props = CodeHighlightProps;
  export type StylesNames = CodeHighlightStylesNames;
  export type CssVariables = CodeHighlightCssVariables;
  export type Factory = CodeHighlightFactory;
  export type ContextValue = CodeHighlightContextValue;

  export namespace Tabs {
    export type Props = CodeHighlightTabsProps;
    export type StylesNames = CodeHighlightTabsStylesNames;
    export type Code = CodeHighlightTabsCode;
    export type Factory = CodeHighlightTabsFactory;
    export type DefaultLanguage = CodeHighlightDefaultLanguage;
  }

  export namespace Inline {
    export type Props = InlineCodeHighlightProps;
    export type StylesNames = InlineCodeHighlightStylesNames;
    export type CssVariables = InlineCodeHighlightCssVariables;
    export type Factory = InlineCodeHighlightFactory;
  }

  export namespace Control {
    export type Props = CodeHighlightControlProps;
  }
}
