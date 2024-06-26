import { tests } from '@mantine-tests/core';
import {
  CodeHighlightTabs,
  CodeHighlightTabsProps,
  CodeHighlightTabsStylesNames,
} from './CodeHighlightTabs';

const defaultProps: CodeHighlightTabsProps = {
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code: 'test-tsx' },
    { fileName: 'Demo.module.css', language: 'scss', code: 'test-css' },
  ],
};

describe('@mantine/code-highlight/CodeHighlightTabs', () => {
  tests.itSupportsSystemProps<CodeHighlightTabsProps, CodeHighlightTabsStylesNames>({
    component: CodeHighlightTabs,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    id: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/CodeHighlightTabs',
    stylesApiSelectors: [
      'root',
      'code',
      'codeWrapper',
      'control',
      'controls',
      'file',
      'files',
      'header',
      'pre',
      'showCodeButton',
    ],
  });
});
