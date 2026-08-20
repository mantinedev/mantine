import { render, tests } from '@mantine-tests/core';
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
    varsResolver: true,
    polymorphic: true,
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

  it('keeps indentation of the first line and strips trailing whitespace', () => {
    const { container } = render(
      <CodeHighlight {...defaultProps} code={'    first\nsecond\n'} withLineNumbers />
    );

    expect(container.querySelector('.mantine-CodeHighlight-code')?.textContent).toBe(
      '    first\nsecond'
    );
    expect(container.querySelectorAll('.mantine-CodeHighlight-lineNumbers > div')).toHaveLength(2);
  });
});
