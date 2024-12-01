import { tests } from '@mantine-tests/core';
import { CodeHighlight, CodeHighlightProps, CodeHighlightStylesNames } from './CodeHighlight';

const defaultProps: CodeHighlightProps = {
  withCopyButton: true,
  code: 'const a = 5',
  language: 'tsx',
  defaultExpanded: false,
};

describe('@mantine/code-highlight/CodeHighlight', () => {
  tests.itSupportsSystemProps<CodeHighlightProps, CodeHighlightStylesNames>({
    component: CodeHighlight,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    selector: '.mantine-CodeHighlight-codeHighlight',
    displayName: '@mantine/code-highlight/CodeHighlight',
    stylesApiSelectors: [
      'codeHighlight',
      'pre',
      'code',
      'control',
      'controls',
      'scrollarea',
      'showCodeButton',
    ],
  });
});
