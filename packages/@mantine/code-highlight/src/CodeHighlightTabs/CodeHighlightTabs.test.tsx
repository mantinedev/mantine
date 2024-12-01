import { tests } from '@mantine-tests/core';
import {
  CodeHighlightTabs,
  CodeHighlightTabsProps,
  CodeHighlightTabsStylesNames,
} from './CodeHighlightTabs';

const defaultProps: CodeHighlightTabsProps = {
  withCopyButton: true,
  defaultExpanded: false,
  code: [{ fileName: 'Demo.tsx', code: 'const a = 5', language: 'tsx' }],
};

describe('@mantine/code-highlight/CodeHighlightTabs', () => {
  tests.itSupportsSystemProps<CodeHighlightTabsProps, CodeHighlightTabsStylesNames>({
    component: CodeHighlightTabs,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    providerStylesApi: false,
    refType: HTMLDivElement,
    displayName: '@mantine/code-highlight/CodeHighlightTabs',
    stylesApiSelectors: [
      'root',
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
