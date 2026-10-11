import { waitFor, within } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { CodeHighlight, CodeHighlightProps, CodeHighlightStylesNames } from './CodeHighlight';

function getExpandControl(container: HTMLElement) {
  return within(container.querySelector<HTMLElement>('.mantine-CodeHighlight-controls')!).getByRole(
    'button',
    { name: 'Expand code' }
  );
}

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

  it('copies normalized code and switches to copiedLabel', async () => {
    const writeText = jest.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
      writable: true,
    });

    render(
      <CodeHighlight
        {...defaultProps}
        code={'  const a = 5;\n'}
        copyLabel="Copier"
        copiedLabel="Copié"
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Copier' }));
    expect(writeText).toHaveBeenCalledWith('const a = 5;');
    await waitFor(() => expect(screen.getByRole('button', { name: 'Copié' })).toBeInTheDocument());

    Object.defineProperty(navigator, 'clipboard', {
      value: undefined,
      configurable: true,
      writable: true,
    });
  });

  it('toggles collapsed state with the expand button in uncontrolled mode', async () => {
    const spy = jest.fn();
    const { container } = render(
      <CodeHighlight {...defaultProps} withExpandButton onExpandedChange={spy} />
    );
    const scrollarea = container.querySelector('.mantine-CodeHighlight-scrollarea')!;
    const expandButton = getExpandControl(container);

    expect(scrollarea).toHaveAttribute('data-collapsed');
    expect(expandButton).toHaveAttribute('aria-expanded', 'false');
    expect(expandButton).toHaveAttribute('aria-controls', scrollarea.id);

    await userEvent.click(expandButton);
    expect(spy).toHaveBeenLastCalledWith(true);
    expect(scrollarea).not.toHaveAttribute('data-collapsed');
    expect(screen.getByRole('button', { name: 'Collapse code' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );

    await userEvent.click(screen.getByRole('button', { name: 'Collapse code' }));
    expect(spy).toHaveBeenLastCalledWith(false);
    expect(scrollarea).toHaveAttribute('data-collapsed');
  });

  it('expands code with the show code button', async () => {
    const { container } = render(<CodeHighlight {...defaultProps} />);
    const showCodeButton = container.querySelector('.mantine-CodeHighlight-showCodeButton')!;
    expect(showCodeButton).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(showCodeButton);
    expect(container.querySelector('.mantine-CodeHighlight-scrollarea')).not.toHaveAttribute(
      'data-collapsed'
    );
    expect(showCodeButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('supports controlled expanded state', async () => {
    const spy = jest.fn();
    const { container, rerender } = render(
      <CodeHighlight {...defaultProps} withExpandButton expanded={false} onExpandedChange={spy} />
    );

    await userEvent.click(getExpandControl(container));
    expect(spy).toHaveBeenCalledWith(true);
    expect(container.querySelector('.mantine-CodeHighlight-scrollarea')).toHaveAttribute(
      'data-collapsed'
    );

    rerender(<CodeHighlight {...defaultProps} withExpandButton expanded onExpandedChange={spy} />);
    expect(container.querySelector('.mantine-CodeHighlight-scrollarea')).not.toHaveAttribute(
      'data-collapsed'
    );
  });
});
