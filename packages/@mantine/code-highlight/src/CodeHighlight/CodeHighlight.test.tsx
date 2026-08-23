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

  it('trims the code by default', () => {
    const { container } = render(
      <CodeHighlight {...defaultProps} code={'    first\nsecond\n'} withLineNumbers />
    );

    expect(container.querySelector('.mantine-CodeHighlight-code')?.textContent).toBe(
      'first\nsecond'
    );
    expect(container.querySelectorAll('.mantine-CodeHighlight-lineNumbers > div')).toHaveLength(2);
  });

  it('keeps indentation of the first line with withFirstLineIndentation prop', () => {
    const { container } = render(
      <CodeHighlight
        {...defaultProps}
        code={'    first\nsecond\n'}
        withFirstLineIndentation
        withLineNumbers
      />
    );

    expect(container.querySelector('.mantine-CodeHighlight-code')?.textContent).toBe(
      '    first\nsecond'
    );
    expect(container.querySelectorAll('.mantine-CodeHighlight-lineNumbers > div')).toHaveLength(2);
  });

  it('strips blank lines at the start with withFirstLineIndentation prop', () => {
    const { container } = render(
      <CodeHighlight
        {...defaultProps}
        code={'  \n\n    first\nsecond\n  '}
        withFirstLineIndentation
        withLineNumbers
      />
    );

    expect(container.querySelector('.mantine-CodeHighlight-code')?.textContent).toBe(
      '    first\nsecond'
    );
    expect(container.querySelectorAll('.mantine-CodeHighlight-lineNumbers > div')).toHaveLength(2);
  });
});
