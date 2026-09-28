import type {
  CodeHighlightFactory,
  CodeHighlightTabsFactory,
  InlineCodeHighlightFactory,
  JsonViewerFactory,
} from '@mantine/code-highlight';
import type { StylesApiData } from '../types';

export const CodeHighlightStylesApi: StylesApiData<CodeHighlightFactory> = {
  selectors: {
    codeHighlight: 'Root element',
    showCodeButton: 'Button that reveals full code when it is collapsed',
    pre: 'Pre element, contains code element',
    code: 'Code element',
    control: 'Control button, copy/collapse, custom controls',
    controlTooltip: 'Root element of control tooltip',
    controls: 'A wrapper around controls',
    scrollarea: 'Scroll area, contains code',
    lineNumbers: 'Line numbers column',
    codeWrapper: 'Wrapper element around line numbers and scroll area',
  },

  vars: {
    codeHighlight: {
      '--ch-background': 'Background color',
      '--ch-max-height': 'Max height of code block in collapsed state',
      '--ch-radius': 'Border radius',
    },
  },
};

export const CodeHighlightTabsStylesApi: StylesApiData<CodeHighlightTabsFactory> = {
  selectors: {
    ...CodeHighlightStylesApi.selectors,
    root: 'Root element',
    codeHighlight: 'Root element of inner CodeHighlight component',
    filesScrollarea: 'Scrollarea with files list',
    files: 'Files names list',
    file: 'File name',
    fileIcon: 'File icon',
  },

  vars: {},
};

export const InlineCodeHighlightStylesApi: StylesApiData<InlineCodeHighlightFactory> = {
  selectors: {
    inlineCodeHighlight: 'Root element',
  },

  vars: {
    inlineCodeHighlight: {
      '--ch-background': 'Background color',
      '--ch-radius': 'Border radius',
    },
  },
};

export const JsonViewerStylesApi: StylesApiData<JsonViewerFactory> = {
  selectors: {
    root: 'Root element',
    node: 'Container for a single tree node',
    toggle: 'Expand/collapse chevron icon',
    key: 'Object key label',
    value: 'Primitive value display',
    bracket: 'Opening/closing brackets',
    type: 'Type badge',
    size: 'Item/key count label',
    ellipsis: 'Collapsed content indicator or show more/less button',
    copyButton: 'Copy to clipboard button',
    content: 'Content wrapper with padding',
    row: 'Single row wrapper for a node',
    scrollarea: 'Scroll area wrapper',
    lineNumbers: 'Line numbers column',
    wrapper: 'Flex wrapper around line numbers and content',
    copyAllButton: 'Copy all JSON button positioned at top-right corner',
    controls: 'Expand all / collapse all controls container',
    control: 'Expand all / collapse all button',
  },

  vars: {
    root: {
      '--jv-radius': 'Border radius',
      '--jv-fz': 'Font size',
      '--jv-indent': 'Indent width per nesting level',
    },
  },
};
