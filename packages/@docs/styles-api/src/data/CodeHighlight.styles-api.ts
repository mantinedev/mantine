import type {
  CodeHighlightFactory,
  CodeHighlightFileTreeFactory,
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

export const CodeHighlightFileTreeStylesApi: StylesApiData<CodeHighlightFileTreeFactory> = {
  selectors: {
    ...CodeHighlightStylesApi.selectors,
    root: 'Root element',
    codeHighlight: 'Root element of inner CodeHighlight component',
    files: 'File tree pane',
    tree: 'Tree root element, ul',
    node: 'Tree node, li',
    file: 'File row',
    folder: 'Folder row',
    fileIcon: 'File icon',
    folderIcon: 'Folder icon rendered with `getFolderIcon`',
    chevron: 'Folder chevron icon, rendered when `getFolderIcon` is not set',
    select: 'File select displayed below `hideTreeBelow` breakpoint',
  },

  vars: {
    root: {
      '--ch-background': 'Background color',
      '--ch-radius': 'Border radius',
      '--ch-tree-width': 'Width of the file tree pane',
    },
  },

  modifiers: [
    { modifier: 'data-with-border', selector: 'root', condition: '`withBorder` prop is set' },
    {
      modifier: 'data-collapsed',
      selector: 'root',
      condition: 'Code is collapsed and the file tree is displayed',
    },
    { modifier: 'data-selected', selector: 'file', condition: 'File is active' },
    { modifier: 'data-expanded', selector: 'chevron', condition: 'Folder is expanded' },
  ],
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

  modifiers: [
    { modifier: 'data-with-border', selector: 'root', condition: '`withBorder` prop is set' },
    {
      modifier: 'data-type',
      selector: 'node',
      value: '`array`, `object` or primitive value type name',
    },
    {
      modifier: 'data-highlight',
      selector: 'node',
      condition: 'Node path is present in `highlightItems`',
      value: '`added` or `removed`',
    },
    { modifier: 'data-root', selector: 'row', condition: 'Root node row' },
    {
      modifier: 'data-hoverable',
      selector: 'row',
      condition: 'Row can be expanded, collapsed or selected',
    },
    { modifier: 'data-expanded', selector: 'toggle', condition: 'Node is expanded' },
    {
      modifier: 'data-value-type',
      selector: ['value', 'type'],
      value: 'Value type name, for example `string`, `number`, `array`',
    },
    {
      modifier: 'data-wrap',
      selector: 'value',
      condition: 'String value is longer than 20 characters and is wrapped onto multiple lines',
    },
    {
      modifier: 'data-clickable',
      selector: 'ellipsis',
      condition: 'Ellipsis is rendered as show more/less button for a collapsed string',
    },
  ],
};
