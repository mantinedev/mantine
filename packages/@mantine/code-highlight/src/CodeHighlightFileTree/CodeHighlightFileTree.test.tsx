import { act } from '@testing-library/react';
import { mockMatchMedia, render, screen, tests, userEvent } from '@mantine-tests/core';
import {
  CodeHighlightFileTree,
  CodeHighlightFileTreeProps,
  CodeHighlightFileTreeStylesNames,
} from './CodeHighlightFileTree';

const files = [
  { fileName: 'Form.tsx', code: 'const form = 1', language: 'tsx' },
  { fileName: 'steps/Personal.tsx', code: 'const personal = 2', language: 'tsx' },
  { fileName: 'steps/Address.tsx', code: 'const address = 3', language: 'tsx' },
  { fileName: 'types.ts', code: 'const types = 4', language: 'tsx' },
];

function getTreeItem(name: string) {
  return screen.getByText(name).closest<HTMLElement>('[role="treeitem"]')!;
}

function queryTreeItem(name: string) {
  return screen.queryByText(name)?.closest('[role="treeitem"]') ?? null;
}

function getDisplayedCode(container: HTMLElement) {
  return container.querySelector('.mantine-CodeHighlightFileTree-code')?.textContent;
}

const defaultProps: CodeHighlightFileTreeProps = {
  code: files,
};

describe('@mantine/code-highlight/CodeHighlightFileTree', () => {
  tests.itSupportsSystemProps<CodeHighlightFileTreeProps, CodeHighlightFileTreeStylesNames>({
    component: CodeHighlightFileTree,
    props: defaultProps,
    polymorphic: true,
    providerStylesApi: false,
    displayName: '@mantine/code-highlight/CodeHighlightFileTree',
    stylesApiSelectors: [
      'root',
      'files',
      'tree',
      'node',
      'file',
      'folder',
      'chevron',
      'codeHighlight',
      'pre',
      'code',
      'control',
      'controls',
      'scrollarea',
      'showCodeButton',
    ],
  });

  it('renders folders and files as a tree with the first file active', () => {
    const { container } = render(<CodeHighlightFileTree code={files} />);

    expect(screen.getByRole('tree', { name: 'Files' })).toBeInTheDocument();
    expect(getTreeItem('steps')).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getAllByRole('treeitem').map((item) => item.textContent)).toStrictEqual([
      'stepsPersonal.tsxAddress.tsx',
      'Personal.tsx',
      'Address.tsx',
      'Form.tsx',
      'types.ts',
    ]);
    expect(getTreeItem('Form.tsx')).toHaveAttribute('aria-selected', 'true');
    expect(getDisplayedCode(container)).toBe('const form = 1');
  });

  it('changes displayed code when a file is clicked', async () => {
    const spy = jest.fn();
    const { container } = render(<CodeHighlightFileTree code={files} onActiveFileChange={spy} />);

    await userEvent.click(screen.getByText('Address.tsx'));
    expect(spy).toHaveBeenCalledWith('steps/Address.tsx');
    expect(getDisplayedCode(container)).toBe('const address = 3');
    expect(getTreeItem('Address.tsx')).toHaveAttribute('aria-selected', 'true');
    expect(getTreeItem('Form.tsx')).toHaveAttribute('aria-selected', 'false');
  });

  it('collapses and expands folders on click without changing the active file', async () => {
    const spy = jest.fn();
    const { container } = render(<CodeHighlightFileTree code={files} onActiveFileChange={spy} />);

    await userEvent.click(screen.getByText('steps'));
    expect(getTreeItem('steps')).toHaveAttribute('aria-expanded', 'false');
    expect(queryTreeItem('Address.tsx')).toBeNull();
    expect(spy).not.toHaveBeenCalled();
    expect(getDisplayedCode(container)).toBe('const form = 1');

    await userEvent.click(screen.getByText('steps'));
    expect(getTreeItem('Address.tsx')).toBeInTheDocument();
  });

  it('supports keyboard navigation and activation', async () => {
    const { container } = render(<CodeHighlightFileTree code={files} />);

    await userEvent.tab();
    expect(getTreeItem('Form.tsx')).toHaveFocus();

    await userEvent.keyboard('{Home}');
    expect(getTreeItem('steps')).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}');
    expect(getTreeItem('Personal.tsx')).toHaveFocus();
    expect(getDisplayedCode(container)).toBe('const form = 1');

    await userEvent.keyboard('{Enter}');
    expect(getDisplayedCode(container)).toBe('const personal = 2');

    await userEvent.keyboard('{End}');
    expect(getTreeItem('types.ts')).toHaveFocus();

    await userEvent.keyboard('{Enter}');
    expect(getDisplayedCode(container)).toBe('const types = 4');

    await userEvent.keyboard('{Home}{ArrowLeft}');
    expect(getTreeItem('steps')).toHaveAttribute('aria-expanded', 'false');
    expect(getDisplayedCode(container)).toBe('const types = 4');
  });

  it('supports controlled activeFile', async () => {
    const spy = jest.fn();
    const { container, rerender } = render(
      <CodeHighlightFileTree code={files} activeFile="Form.tsx" onActiveFileChange={spy} />
    );

    await userEvent.click(screen.getByText('types.ts'));
    expect(spy).toHaveBeenCalledWith('types.ts');
    expect(getDisplayedCode(container)).toBe('const form = 1');

    rerender(<CodeHighlightFileTree code={files} activeFile="types.ts" onActiveFileChange={spy} />);
    expect(getDisplayedCode(container)).toBe('const types = 4');
    expect(getTreeItem('types.ts')).toHaveAttribute('aria-selected', 'true');
  });

  it('expands collapsed parents of the active file', () => {
    const { rerender } = render(
      <CodeHighlightFileTree code={files} defaultExpandedFolders={[]} activeFile="Form.tsx" />
    );
    expect(getTreeItem('steps')).toHaveAttribute('aria-expanded', 'false');

    rerender(
      <CodeHighlightFileTree
        code={files}
        defaultExpandedFolders={[]}
        activeFile="steps/Personal.tsx"
      />
    );
    expect(getTreeItem('steps')).toHaveAttribute('aria-expanded', 'true');
  });

  it('expands parents of the default active file on mount', () => {
    render(
      <CodeHighlightFileTree
        code={files}
        defaultExpandedFolders={[]}
        defaultActiveFile="steps/Address.tsx"
      />
    );
    expect(getTreeItem('steps')).toHaveAttribute('aria-expanded', 'true');
    expect(getTreeItem('Address.tsx')).toHaveAttribute('aria-selected', 'true');
  });

  it('falls back to the first file when the active file is missing', () => {
    const { container, rerender } = render(
      <CodeHighlightFileTree code={files} defaultActiveFile="types.ts" />
    );
    expect(getDisplayedCode(container)).toBe('const types = 4');

    rerender(<CodeHighlightFileTree code={files.slice(0, 2)} />);
    expect(getDisplayedCode(container)).toBe('const form = 1');
    expect(getTreeItem('Form.tsx')).toHaveAttribute('aria-selected', 'true');
  });

  it('renders folder icons from getFolderIcon instead of the chevron', async () => {
    const { container } = render(
      <CodeHighlightFileTree
        code={files}
        getFolderIcon={(path, expanded) => (
          <span data-testid={`folder-${path}`}>{expanded ? 'open' : 'closed'}</span>
        )}
      />
    );

    expect(container.querySelector('.mantine-CodeHighlightFileTree-chevron')).toBeNull();
    expect(screen.getByTestId('folder-steps')).toHaveTextContent('open');

    await userEvent.click(screen.getByText('steps'));
    expect(screen.getByTestId('folder-steps')).toHaveTextContent('closed');
  });

  it('renders nothing when code is empty', () => {
    const { container } = render(<CodeHighlightFileTree code={[]} />);
    expect(container.querySelector('.mantine-CodeHighlightFileTree-root')).toBeNull();
  });

  it('renders file icons from getFileIcon and code item icon', () => {
    render(
      <CodeHighlightFileTree
        code={[
          { fileName: 'a.tsx', code: '1', icon: <span data-testid="custom-icon" /> },
          { fileName: 'b.css', code: '2' },
        ]}
        getFileIcon={(fileName) => <span data-testid={`icon-${fileName}`} />}
      />
    );

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    expect(screen.getByTestId('icon-b.css')).toBeInTheDocument();
    expect(screen.queryByTestId('icon-a.tsx')).toBeNull();
  });

  describe('below breakpoint', () => {
    let matchMedia: ReturnType<typeof mockMatchMedia>;

    beforeEach(() => {
      matchMedia = mockMatchMedia(false, { filter: (query) => query.startsWith('(min-width') });
    });

    afterEach(() => {
      matchMedia.restore();
    });

    it('replaces the tree with a select', async () => {
      const { container } = render(<CodeHighlightFileTree code={files} />);

      expect(matchMedia.queries).toContain('(min-width: 48em)');
      expect(screen.queryByRole('tree')).toBeNull();
      const select = screen.getByRole('combobox', { name: 'Select file' });
      expect(select).toHaveValue('Form.tsx');

      await userEvent.click(select);
      await userEvent.click(screen.getByRole('option', { name: 'Address.tsx' }));
      expect(select).toHaveValue('Address.tsx');
      expect(getDisplayedCode(container)).toBe('const address = 3');
    });

    it('uses hideTreeBelow value in the media query', () => {
      render(<CodeHighlightFileTree code={files} hideTreeBelow={500} />);
      expect(matchMedia.queries).toContain('(min-width: 31.25em)');
    });

    it('expands the folder of a file selected while the tree was hidden', async () => {
      render(<CodeHighlightFileTree code={files} defaultExpandedFolders={[]} />);

      await userEvent.click(screen.getByRole('combobox', { name: 'Select file' }));
      await userEvent.click(screen.getByRole('option', { name: 'Personal.tsx' }));

      act(() => matchMedia.setMatches(true));
      expect(getTreeItem('steps')).toHaveAttribute('aria-expanded', 'true');
      expect(getTreeItem('Personal.tsx')).toHaveAttribute('aria-selected', 'true');
    });

    it('switches back to the tree when the viewport grows', () => {
      render(<CodeHighlightFileTree code={files} />);
      expect(screen.queryByRole('tree')).toBeNull();

      act(() => matchMedia.setMatches(true));
      expect(screen.getByRole('tree')).toBeInTheDocument();
    });
  });

  it('renders pinned files in a separate section above the file tree', async () => {
    const { container } = render(
      <CodeHighlightFileTree
        code={[
          { fileName: 'PROMPT.md', code: 'Build a form', language: 'markdown', pinned: true },
          ...files,
        ]}
      />
    );

    const trees = screen.getAllByRole('tree');
    expect(trees).toHaveLength(2);
    expect(trees[0]).toHaveAccessibleName('Pinned files');
    expect(trees[0]).toContainElement(getTreeItem('PROMPT.md'));
    expect(trees[1]).not.toContainElement(getTreeItem('PROMPT.md'));
    expect(trees[1]).toContainElement(getTreeItem('Form.tsx'));
    expect(container.querySelector('.mantine-CodeHighlightFileTree-pinned')).toBeInTheDocument();
    expect(getDisplayedCode(container)).toBe('Build a form');

    await userEvent.click(screen.getByText('types.ts'));
    expect(getDisplayedCode(container)).toBe('const types = 4');

    await userEvent.click(screen.getByText('PROMPT.md'));
    expect(getDisplayedCode(container)).toBe('Build a form');
  });

  it('sets --ch-tree-sticky-top from treeStickyTop prop', () => {
    const { container } = render(<CodeHighlightFileTree code={files} treeStickyTop={60} />);
    expect(container.querySelector('.mantine-CodeHighlightFileTree-root')).toHaveStyle({
      '--ch-tree-sticky-top': 'calc(3.75rem * var(--mantine-scale))',
    });
  });
});
