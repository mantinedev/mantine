import type {
  CodeHighlightFactory,
  CodeHighlightTabsFactory,
  InlineCodeHighlightFactory,
} from '@mantine/code-highlight';
import type { StylesApiData } from '../types';

export const CodeHighlightTabsStylesApi: StylesApiData<CodeHighlightTabsFactory> = {
  selectors: {
    root: 'Root element',
    pre: 'Pre element, contains code element',
    codeWrapper: 'Wrapper around code element, used for expand/collapse logic',
    code: 'Code element, contains highlighted code',
    header: 'Header element, contains copy button and files names',
    controls: 'Controls container, contains control buttons (copy/collapse, etc.)',
    control: 'Control button, copy/collapse, etc.',
    files: 'Files names list',
    file: 'File name',
    fileIcon: 'File icon',
    showCodeButton: 'Button that reveals full code when it is collapsed',
  },

  vars: {},
};

export const InlineCodeHighlightStylesApi: StylesApiData<InlineCodeHighlightFactory> = {
  selectors: {
    code: 'Root element',
  },

  vars: {},
};

export const CodeHighlightStylesApi: StylesApiData<CodeHighlightFactory> = {
  selectors: {
    root: 'Root element',
    pre: 'Pre element, contains code element',
    code: 'Code element',
    copy: 'Copy button',
  },

  vars: {},
};
