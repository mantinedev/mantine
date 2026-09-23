import { render, tests } from '@mantine-tests/core';
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
    providerStylesApi: false,
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

  it('forwards withFirstLineIndentation to the code block', () => {
    const code = [{ fileName: 'Demo.tsx', code: '    first\nsecond\n', language: 'tsx' }];

    const { container: trimmed } = render(<CodeHighlightTabs code={code} />);
    expect(trimmed.querySelector('.mantine-CodeHighlightTabs-code')?.textContent).toBe(
      'first\nsecond'
    );

    const { container: indented } = render(
      <CodeHighlightTabs code={code} withFirstLineIndentation />
    );
    expect(indented.querySelector('.mantine-CodeHighlightTabs-code')?.textContent).toBe(
      '    first\nsecond'
    );
  });
});
