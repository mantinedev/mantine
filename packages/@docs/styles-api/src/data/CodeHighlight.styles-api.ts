import type {
  CodeHighlightFactory,
  CodeHighlightTabsFactory,
  InlineCodeHighlightFactory,
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
