import { render, screen, tests, userEvent } from '@mantine-tests/core';
import {
  CodeHighlightTabs,
  CodeHighlightTabsProps,
  CodeHighlightTabsStylesNames,
} from './CodeHighlightTabs';

const files = [
  { fileName: 'a.tsx', code: 'const a = 1', language: 'tsx' },
  { fileName: 'b.tsx', code: 'const b = 2', language: 'tsx' },
  { fileName: 'c.tsx', code: 'const c = 3', language: 'tsx' },
];

function getDisplayedCode(container: HTMLElement) {
  return container.querySelector('.mantine-CodeHighlightTabs-code')?.textContent;
}

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

  it('changes displayed code when a tab is clicked', async () => {
    const spy = jest.fn();
    const { container } = render(<CodeHighlightTabs code={files} onTabChange={spy} />);

    expect(screen.getByRole('tab', { name: 'a.tsx' })).toHaveAttribute('aria-selected', 'true');
    expect(getDisplayedCode(container)).toBe('const a = 1');

    await userEvent.click(screen.getByRole('tab', { name: 'b.tsx' }));
    expect(spy).toHaveBeenCalledWith(1);
    expect(getDisplayedCode(container)).toBe('const b = 2');
    expect(screen.getByRole('tab', { name: 'b.tsx' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'a.tsx' })).toHaveAttribute('aria-selected', 'false');
  });

  it('links tabs with the tab panel', () => {
    render(<CodeHighlightTabs code={files} defaultActiveTab={1} />);
    const tab = screen.getByRole('tab', { name: 'b.tsx' });
    const panel = screen.getByRole('tabpanel');

    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(tab).toHaveAttribute('aria-controls', panel.id);
    expect(panel).toHaveAttribute('aria-labelledby', tab.id);
  });

  it('supports roving tabindex and arrow keys navigation', async () => {
    const { container } = render(<CodeHighlightTabs code={files} />);
    const tabs = screen.getAllByRole('tab');

    expect(tabs.map((tab) => tab.getAttribute('tabindex'))).toEqual(['0', '-1', '-1']);

    await userEvent.tab();
    expect(tabs[0]).toHaveFocus();

    await userEvent.keyboard('{ArrowRight}');
    expect(tabs[1]).toHaveFocus();
    expect(getDisplayedCode(container)).toBe('const b = 2');
    expect(tabs.map((tab) => tab.getAttribute('tabindex'))).toEqual(['-1', '0', '-1']);

    await userEvent.keyboard('{End}');
    expect(tabs[2]).toHaveFocus();

    await userEvent.keyboard('{ArrowRight}');
    expect(tabs[0]).toHaveFocus();

    await userEvent.keyboard('{ArrowLeft}');
    expect(tabs[2]).toHaveFocus();

    await userEvent.keyboard('{Home}');
    expect(tabs[0]).toHaveFocus();
    expect(getDisplayedCode(container)).toBe('const a = 1');
  });

  it('supports controlled activeTab', async () => {
    const spy = jest.fn();
    const { container, rerender } = render(
      <CodeHighlightTabs code={files} activeTab={0} onTabChange={spy} />
    );

    await userEvent.click(screen.getByRole('tab', { name: 'c.tsx' }));
    expect(spy).toHaveBeenCalledWith(2);
    expect(getDisplayedCode(container)).toBe('const a = 1');

    rerender(<CodeHighlightTabs code={files} activeTab={2} onTabChange={spy} />);
    expect(getDisplayedCode(container)).toBe('const c = 3');
  });

  it('clamps active tab when code shrinks', () => {
    const { container, rerender } = render(<CodeHighlightTabs code={files} defaultActiveTab={2} />);
    expect(getDisplayedCode(container)).toBe('const c = 3');

    rerender(<CodeHighlightTabs code={files.slice(0, 2)} />);
    expect(getDisplayedCode(container)).toBe('const b = 2');
    expect(screen.getByRole('tab', { name: 'b.tsx' })).toHaveAttribute('aria-selected', 'true');
  });

  it('activates the first tab when files arrive after empty code', () => {
    const { container, rerender } = render(<CodeHighlightTabs code={[]} />);
    expect(container.querySelector('.mantine-CodeHighlightTabs-root')).toBeNull();

    rerender(<CodeHighlightTabs code={files} />);
    expect(getDisplayedCode(container)).toBe('const a = 1');
    expect(screen.getByRole('tab', { name: 'a.tsx' })).toHaveAttribute('aria-selected', 'true');
  });

  it('renders tabs with duplicate or missing file names', () => {
    render(
      <CodeHighlightTabs
        code={[
          { fileName: 'a.tsx', code: '1' },
          { fileName: 'a.tsx', code: '2' },
          { code: '3' },
          { code: '4' },
        ]}
      />
    );
    expect(screen.getAllByRole('tab')).toHaveLength(4);
  });
});
