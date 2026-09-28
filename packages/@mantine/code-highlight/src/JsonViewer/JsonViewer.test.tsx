import { fireEvent } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { JsonViewer, JsonViewerProps, JsonViewerStylesNames, serializePath } from './JsonViewer';

const longString = 'a'.repeat(50);

function mockClipboard() {
  const writeText = jest.fn(() => Promise.resolve());
  Object.defineProperty(window.navigator, 'clipboard', {
    value: { writeText },
    configurable: true,
  });
  return writeText;
}

function getRow(text: RegExp | string) {
  return screen.getByText(text).closest<HTMLElement>('[data-jv-node]')!;
}

const defaultProps: JsonViewerProps = {
  value: {
    name: 'John',
    age: 30,
    active: true,
    address: { city: 'NYC' },
    longValue: longString,
  },
  defaultExpandDepth: 1,
  collapseStringsAfterLength: 10,
  withTypes: true,
  withSize: true,
  withCopy: true,
  highlightItems: { name: 'added' },
  withLineNumbers: true,
  withChevrons: true,
  withCopyButton: true,
  withControls: true,
};

describe('@mantine/code-highlight/JsonViewer', () => {
  tests.itSupportsSystemProps<JsonViewerProps, JsonViewerStylesNames>({
    component: JsonViewer,
    props: defaultProps,
    varsResolver: true,
    selector: '.mantine-JsonViewer-root',
    displayName: '@mantine/code-highlight/JsonViewer',
    stylesApiSelectors: [
      'root',
      'node',
      'toggle',
      'key',
      'value',
      'bracket',
      'type',
      'size',
      'ellipsis',
      'copyButton',
      'content',
      'row',
      'scrollarea',
      'lineNumbers',
      'wrapper',
      'copyAllButton',
      'controls',
      'control',
    ],
  });

  it('renders primitive values', () => {
    render(
      <JsonViewer value={{ str: 'hello', num: 42, bool: true, nil: null }} defaultExpandDepth={1} />
    );

    expect(screen.getByText(/"hello"/)).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
    const boolElements = screen.getAllByText('true');
    expect(boolElements.length).toBeGreaterThan(0);
    const nullElements = screen.getAllByText('null');
    expect(nullElements.length).toBeGreaterThan(0);
  });

  it('renders type badges when withTypes is true', () => {
    render(<JsonViewer value={{ str: 'hello' }} defaultExpandDepth={1} withTypes />);

    expect(screen.getByText('string')).toBeInTheDocument();
    expect(screen.getByText('object')).toBeInTheDocument();
  });

  it('hides type badges when withTypes is false', () => {
    render(<JsonViewer value={{ str: 'hello' }} defaultExpandDepth={1} withTypes={false} />);

    expect(screen.queryByText('string')).not.toBeInTheDocument();
  });

  it('renders size indicators when withSize is true', () => {
    render(<JsonViewer value={{ a: 1, b: 2 }} defaultExpandDepth={0} withSize />);

    expect(screen.getByText('2 keys')).toBeInTheDocument();
  });

  it('renders array size', () => {
    render(<JsonViewer value={[1, 2, 3]} defaultExpandDepth={0} withSize />);

    expect(screen.getByText('3 items')).toBeInTheDocument();
  });

  it('hides size indicators when withSize is false', () => {
    render(
      <JsonViewer
        value={{ a: 1, b: 2 }}
        defaultExpandDepth={0}
        withSize={false}
        withTypes={false}
      />
    );

    expect(screen.queryByText('2 keys')).not.toBeInTheDocument();
  });

  it('collapses nodes by default based on defaultExpandDepth', () => {
    render(<JsonViewer value={{ nested: { deep: { val: 'hidden' } } }} defaultExpandDepth={1} />);

    expect(screen.getByText(/nested/)).toBeInTheDocument();
    expect(screen.queryByText(/"hidden"/)).not.toBeInTheDocument();
  });

  it('expands node on click', async () => {
    render(<JsonViewer value={{ nested: { val: 'revealed' } }} defaultExpandDepth={1} />);

    expect(screen.queryByText(/"revealed"/)).not.toBeInTheDocument();

    const nestedRow = screen.getByText(/nested/).closest('[data-hoverable]')!;
    await userEvent.click(nestedRow);

    expect(screen.getByText(/"revealed"/)).toBeInTheDocument();
  });

  it('renders keys without quotes by default', () => {
    render(<JsonViewer value={{ myKey: 'val' }} defaultExpandDepth={1} />);

    const keyEl = document.querySelector('[data-key]')!;
    expect(keyEl.textContent).toContain('myKey');
    expect(keyEl.textContent).not.toContain('"myKey"');
  });

  it('renders keys with quotes when withKeyQuotes is true', () => {
    render(<JsonViewer value={{ myKey: 'val' }} defaultExpandDepth={1} withKeyQuotes />);

    const keyEl = document.querySelector('[data-key]')!;
    expect(keyEl.textContent).toContain('"myKey"');
  });

  it('renders string values without quotes when withQuotes is false', () => {
    render(<JsonViewer value={{ s: 'hello' }} defaultExpandDepth={1} withQuotes={false} />);

    const valueElements = document.querySelectorAll('[data-value-type="string"]');
    const texts = Array.from(valueElements).map((el) => el.textContent);
    expect(texts.some((t) => t === 'hello')).toBe(true);
  });

  it('truncates long strings when collapseStringsAfterLength is set', () => {
    render(
      <JsonViewer
        value={{ s: 'a'.repeat(50) }}
        defaultExpandDepth={1}
        collapseStringsAfterLength={10}
      />
    );

    expect(screen.getByText(/show more/)).toBeInTheDocument();
  });

  it('expands collapsed string on click', async () => {
    render(
      <JsonViewer
        value={{ s: 'abcdefghijklmnopqrstuvwxyz' }}
        defaultExpandDepth={1}
        collapseStringsAfterLength={5}
      />
    );

    expect(screen.getByText(/show more/)).toBeInTheDocument();

    await userEvent.click(screen.getByText(/show more/));

    expect(screen.getByText(/show less/)).toBeInTheDocument();
  });

  it('sorts keys when sortKeys is true', () => {
    const { container } = render(
      <JsonViewer value={{ zebra: 1, alpha: 2, middle: 3 }} defaultExpandDepth={1} sortKeys />
    );

    const keys = container.querySelectorAll('[data-key]');
    const keyTexts = Array.from(keys).map((el) => el.textContent?.replace(/[":, ]/g, ''));
    expect(keyTexts).toEqual(['alpha', 'middle', 'zebra']);
  });

  it('renders root name when rootName is set', () => {
    render(<JsonViewer value={{ a: 1 }} rootName="data" defaultExpandDepth={1} />);

    expect(screen.getByText(/data/)).toBeInTheDocument();
  });

  it('renders copy buttons when withCopy is true', () => {
    render(<JsonViewer value={{ a: 1 }} defaultExpandDepth={1} withCopy />);

    expect(screen.getAllByLabelText('Copy').length).toBeGreaterThan(0);
  });

  it('hides copy buttons by default', () => {
    render(<JsonViewer value={{ a: 1 }} defaultExpandDepth={1} />);

    expect(screen.queryByLabelText('Copy')).not.toBeInTheDocument();
  });

  it('renders expand all / collapse all controls when withControls is true', () => {
    render(<JsonViewer value={{ a: { b: 1 } }} withControls />);

    expect(screen.getByText('Expand all')).toBeInTheDocument();
    expect(screen.getByText('Collapse all')).toBeInTheDocument();
  });

  it('expands all nodes on expand all click', async () => {
    render(
      <JsonViewer
        value={{ nested: { deep: { val: 'found' } } }}
        defaultExpandDepth={0}
        withControls
      />
    );

    expect(screen.queryByText(/"found"/)).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Expand all'));

    expect(screen.getByText(/"found"/)).toBeInTheDocument();
  });

  it('collapses all nodes on collapse all click', async () => {
    render(
      <JsonViewer value={{ nested: { val: 'hidden' } }} defaultExpandDepth={2} withControls />
    );

    expect(screen.getByText(/"hidden"/)).toBeInTheDocument();

    await userEvent.click(screen.getByText('Collapse all'));

    expect(screen.queryByText(/"hidden"/)).not.toBeInTheDocument();
  });

  it('calls onValueSelect when a primitive value row is clicked', async () => {
    const onValueSelect = jest.fn();
    render(
      <JsonViewer value={{ name: 'test' }} defaultExpandDepth={1} onValueSelect={onValueSelect} />
    );

    const valueRow = screen.getByText(/"test"/).closest('[data-hoverable]')!;
    await userEvent.click(valueRow);

    expect(onValueSelect).toHaveBeenCalledWith(['name'], 'test');
  });

  it('truncates display when maxDisplayLength is exceeded', () => {
    const largeArray = Array.from({ length: 20 }, (_, i) => i);
    render(<JsonViewer value={largeArray} defaultExpandDepth={1} maxDisplayLength={5} />);

    expect(screen.getByText(/15 more items/)).toBeInTheDocument();
  });

  it('renders array values', () => {
    render(<JsonViewer value={['one', 'two', 'three']} defaultExpandDepth={1} />);

    expect(screen.getByText(/"one"/)).toBeInTheDocument();
    expect(screen.getByText(/"two"/)).toBeInTheDocument();
    expect(screen.getByText(/"three"/)).toBeInTheDocument();
  });

  it('renders nested objects', () => {
    render(<JsonViewer value={{ parent: { child: 'deep' } }} defaultExpandDepth={2} />);

    expect(screen.getByText(/"deep"/)).toBeInTheDocument();
  });

  it('applies border when withBorder is true', () => {
    const { container } = render(<JsonViewer value={{ a: 1 }} withBorder />);

    expect(container.querySelector('[data-with-border]')).toBeInTheDocument();
  });

  it('renders empty object', () => {
    render(<JsonViewer value={{}} defaultExpandDepth={1} withSize />);
    expect(screen.getByText('0 keys')).toBeInTheDocument();
  });

  it('renders empty array', () => {
    render(<JsonViewer value={[]} defaultExpandDepth={1} withSize />);
    expect(screen.getByText('0 items')).toBeInTheDocument();
  });

  describe('accessibility', () => {
    it('renders a named tree with a treeitem for every navigable row', () => {
      const { container } = render(
        <JsonViewer value={{ user: { name: 'John' }, tags: ['a'] }} defaultExpandDepth={2} />
      );

      expect(screen.getByRole('tree', { name: 'JSON' })).toBeInTheDocument();
      const rows = container.querySelectorAll('[data-jv-node]');
      expect(rows.length).toBe(5);
      expect(screen.getAllByRole('treeitem')).toHaveLength(5);
      rows.forEach((row) => expect(row).toHaveAttribute('role', 'treeitem'));
    });

    it('uses rootName as the tree accessible name', () => {
      render(<JsonViewer value={{ a: 1 }} rootName="response" />);
      expect(screen.getByRole('tree', { name: 'response' })).toBeInTheDocument();
    });

    it('sets aria-expanded on collapsible rows and wraps children in role=group', async () => {
      const { container } = render(
        <JsonViewer value={{ nested: { val: 'revealed' } }} defaultExpandDepth={1} />
      );

      const nestedRow = getRow(/nested/);
      expect(nestedRow.tagName).toBe('DIV');
      expect(nestedRow).toHaveAttribute('aria-expanded', 'false');
      expect(nestedRow).toHaveAttribute('aria-level', '2');
      expect(getRow(/nested/).closest('[role="group"]')).toBe(
        container.querySelector('[role="group"]')
      );

      await userEvent.click(nestedRow);

      expect(nestedRow).toHaveAttribute('aria-expanded', 'true');
      const groups = container.querySelectorAll('[role="group"]');
      expect(groups).toHaveLength(2);
      expect(groups[1].contains(getRow(/"revealed"/))).toBe(true);
      expect(getRow(/"revealed"/)).toHaveAttribute('aria-level', '3');
    });

    it('sets aria-expanded and aria-level on array chunk rows', async () => {
      render(
        <JsonViewer
          value={Array.from({ length: 6 }, (_, i) => i)}
          groupArraysAfterLength={3}
          defaultExpandDepth={2}
        />
      );

      const chunk = getRow('[0...2]');
      expect(chunk).toHaveAttribute('role', 'treeitem');
      expect(chunk).toHaveAttribute('aria-expanded', 'true');
      expect(chunk).toHaveAttribute('aria-level', '2');
      expect(getRow('1')).toHaveAttribute('aria-level', '3');

      await userEvent.click(chunk);
      expect(chunk).toHaveAttribute('aria-expanded', 'false');
    });

    it('does not emit aria-selected unless onValueSelect is provided', () => {
      const { rerender } = render(<JsonViewer value={{ name: 'x' }} />);
      expect(getRow(/"x"/)).not.toHaveAttribute('aria-selected');

      rerender(
        <>
          <JsonViewer value={{ name: 'x' }} onValueSelect={() => {}} />
        </>
      );
      expect(getRow(/"x"/)).toHaveAttribute('aria-selected', 'false');
    });

    it('marks line numbers as aria-hidden', () => {
      const { container } = render(<JsonViewer value={{ a: 1 }} withLineNumbers />);
      expect(container.querySelector('.mantine-JsonViewer-lineNumbers')).toHaveAttribute(
        'aria-hidden',
        'true'
      );
    });

    it('renders per-node copy control as a native button that is not nested in a button', () => {
      render(<JsonViewer value={{ a: { b: 1 } }} defaultExpandDepth={2} withCopy />);

      const controls = document.querySelectorAll<HTMLElement>('[data-jv-copy]');
      expect(controls.length).toBe(3);
      controls.forEach((control) => {
        expect(control.tagName).toBe('BUTTON');
        expect(control).toHaveAttribute('tabindex', '-1');
        expect(control.parentElement!.closest('button')).toBeNull();
      });
    });

    it('copies the focused row value with Ctrl+C', async () => {
      const writeText = mockClipboard();
      render(<JsonViewer value={{ user: { name: 'John' } }} defaultExpandDepth={1} withCopy />);

      getRow(/user/).focus();
      await userEvent.keyboard('{Control>}c{/Control}');

      expect(writeText).toHaveBeenCalledWith('{\n  "name": "John"\n}');
    });

    it('copies the focused row value with Meta+C', async () => {
      const writeText = mockClipboard();
      render(<JsonViewer value={{ name: 'John' }} defaultExpandDepth={1} withCopy />);

      getRow(/"John"/).focus();
      await userEvent.keyboard('{Meta>}c{/Meta}');

      expect(writeText).toHaveBeenCalledWith('"John"');
    });

    it('does not intercept Ctrl+C without withCopy', async () => {
      const writeText = mockClipboard();
      render(<JsonViewer value={{ name: 'John' }} defaultExpandDepth={1} />);

      getRow(/"John"/).focus();
      await userEvent.keyboard('{Control>}c{/Control}');

      expect(writeText).not.toHaveBeenCalled();
    });

    it('does not toggle the row when the copy button is activated with keyboard', async () => {
      mockClipboard();
      render(<JsonViewer value={{ nested: { val: 'x' } }} defaultExpandDepth={2} withCopy />);

      const control = getRow(/nested/).querySelector<HTMLElement>('[data-jv-copy]')!;
      control.focus();
      await userEvent.keyboard('{Enter}');

      expect(screen.getByText(/"x"/)).toBeInTheDocument();
    });
  });

  describe('keyboard navigation', () => {
    it('moves focus with ArrowDown and ArrowUp', async () => {
      render(<JsonViewer value={{ a: 1, b: 2 }} defaultExpandDepth={1} />);

      const root = document.querySelector<HTMLElement>('[data-root]')!;
      root.focus();
      await userEvent.keyboard('{ArrowDown}');
      expect(document.activeElement).toBe(getRow(/^a/));

      await userEvent.keyboard('{ArrowDown}');
      expect(document.activeElement).toBe(getRow(/^b/));

      await userEvent.keyboard('{ArrowUp}');
      expect(document.activeElement).toBe(getRow(/^a/));
    });

    it('expands a collapsed node with ArrowRight and enters it on second press', async () => {
      render(<JsonViewer value={{ nested: { val: 'revealed' } }} defaultExpandDepth={1} />);

      getRow(/nested/).focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(screen.getByText(/"revealed"/)).toBeInTheDocument();
      expect(document.activeElement).toBe(getRow(/nested/));

      await userEvent.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(getRow(/"revealed"/));
    });

    it('collapses an expanded node with ArrowLeft and moves to parent from a leaf', async () => {
      render(<JsonViewer value={{ nested: { val: 'revealed' } }} defaultExpandDepth={2} />);

      getRow(/"revealed"/).focus();
      await userEvent.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(getRow(/nested/));

      await userEvent.keyboard('{ArrowLeft}');
      expect(screen.queryByText(/"revealed"/)).not.toBeInTheDocument();
    });

    it('toggles collapsible rows with Enter and Space', async () => {
      render(<JsonViewer value={{ nested: { val: 'revealed' } }} defaultExpandDepth={1} />);

      getRow(/nested/).focus();
      await userEvent.keyboard('{Enter}');
      expect(screen.getByText(/"revealed"/)).toBeInTheDocument();

      await userEvent.keyboard(' ');
      expect(screen.queryByText(/"revealed"/)).not.toBeInTheDocument();
    });

    it('calls onValueSelect on Enter for primitive rows', async () => {
      const onValueSelect = jest.fn();
      render(
        <JsonViewer value={{ name: 'test' }} defaultExpandDepth={1} onValueSelect={onValueSelect} />
      );

      getRow(/"test"/).focus();
      await userEvent.keyboard('{Enter}');

      expect(onValueSelect).toHaveBeenCalledWith(['name'], 'test');
    });
  });

  describe('controlled expansion', () => {
    it('does not move state on its own when expandedPaths is controlled', async () => {
      const onExpandedPathsChange = jest.fn();
      const value = { nested: { val: 'revealed' } };
      const { rerender } = render(
        <JsonViewer
          value={value}
          expandedPaths={[]}
          onExpandedPathsChange={onExpandedPathsChange}
        />
      );

      expect(screen.queryByText(/"revealed"/)).not.toBeInTheDocument();
      await userEvent.click(getRow(/nested/));

      expect(onExpandedPathsChange).toHaveBeenCalledWith([serializePath(['nested'])]);
      expect(screen.queryByText(/"revealed"/)).not.toBeInTheDocument();

      rerender(
        <>
          <JsonViewer
            value={value}
            expandedPaths={[serializePath(['nested'])]}
            onExpandedPathsChange={onExpandedPathsChange}
          />
        </>
      );

      expect(screen.getByText(/"revealed"/)).toBeInTheDocument();
    });

    it('expands everything and disables collapsing with allExpanded', async () => {
      render(
        <JsonViewer
          value={{ nested: { deep: { val: 'found' } } }}
          defaultExpandDepth={0}
          allExpanded
          withControls
        />
      );

      expect(screen.getByText(/"found"/)).toBeInTheDocument();
      expect(screen.queryByText('Collapse all')).not.toBeInTheDocument();

      await userEvent.click(getRow(/nested/));
      expect(screen.getByText(/"found"/)).toBeInTheDocument();

      getRow(/nested/).focus();
      await userEvent.keyboard('{ArrowLeft}');
      expect(screen.getByText(/"found"/)).toBeInTheDocument();
    });
  });

  describe('non-JSON values', () => {
    it('renders circular references as [Circular] with allExpanded', () => {
      const cyclic: any = { a: { b: 1 } };
      cyclic.self = cyclic;
      cyclic.a.parent = cyclic;

      render(<JsonViewer value={cyclic} allExpanded withTypes />);

      expect(screen.getAllByText('[Circular]')).toHaveLength(2);
      expect(screen.getAllByText('circular')).toHaveLength(2);
      expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('expand all terminates on circular references', async () => {
      const cyclic: any = { a: { b: 1 } };
      cyclic.self = cyclic;

      render(<JsonViewer value={cyclic} defaultExpandDepth={0} withControls />);
      await userEvent.click(screen.getByText('Expand all'));

      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('[Circular]')).toBeInTheDocument();
    });

    it('copies bigint and circular values with the copy-all button', async () => {
      const writeText = mockClipboard();
      const cyclic: any = { id: BigInt(1) };
      cyclic.self = cyclic;

      render(<JsonViewer value={cyclic} withCopyButton />);
      await userEvent.click(screen.getByLabelText('Copy JSON'));

      expect(writeText).toHaveBeenCalledWith('{\n  "id": "1",\n  "self": "[Circular]"\n}');
    });

    it('copies bigint values with the per-node copy button', async () => {
      const writeText = mockClipboard();
      render(<JsonViewer value={{ id: BigInt(1) }} withCopy />);

      const control = getRow(/^id/).querySelector<HTMLElement>('[data-jv-copy]')!;
      await userEvent.click(control);

      expect(writeText).toHaveBeenCalledWith('"1"');
    });
  });

  describe('props', () => {
    it('applies data-highlight for highlightItems paths', () => {
      const { container } = render(
        <JsonViewer
          value={{ a: 1, b: { c: 2 } }}
          defaultExpandDepth={2}
          highlightItems={{
            [serializePath(['a'])]: 'added',
            [serializePath(['b', 'c'])]: 'removed',
          }}
        />
      );

      expect(container.querySelectorAll('[data-highlight="added"]')).toHaveLength(1);
      expect(container.querySelectorAll('[data-highlight="removed"]')).toHaveLength(1);
      expect(container.querySelector('[data-highlight="added"]')!.textContent).toContain('a');
    });

    it('renders one line number per row', () => {
      const { container } = render(
        <JsonViewer value={{ a: 1, b: 2 }} defaultExpandDepth={1} withLineNumbers />
      );

      const rows = container.querySelectorAll('[data-jv-row]');
      expect(rows.length).toBe(4);
      expect(container.querySelectorAll('.mantine-JsonViewer-lineNumbers > div')).toHaveLength(4);
    });

    it('renders line numbers with classNamesPrefix and without static classes', () => {
      const { container } = render(
        <JsonViewer value={{ a: 1, b: 2 }} defaultExpandDepth={1} withLineNumbers />,
        undefined,
        { classNamesPrefix: 'app', withStaticClasses: false }
      );

      const rows = container.querySelectorAll('[data-jv-row]');
      expect(rows.length).toBe(4);
      expect(container.querySelectorAll('[aria-hidden="true"] > div')).toHaveLength(4);
    });

    it('renders chevrons only with withChevrons', () => {
      const { container, rerender } = render(
        <JsonViewer value={{ a: { b: 1 } }} defaultExpandDepth={1} />
      );
      expect(container.querySelector('.mantine-JsonViewer-toggle')).toBeNull();

      rerender(
        <>
          <JsonViewer value={{ a: { b: 1 } }} defaultExpandDepth={1} withChevrons />
        </>
      );
      expect(container.querySelector('.mantine-JsonViewer-toggle')).toBeInTheDocument();
    });

    it('renders copy-all button only with withCopyButton and copies the value', async () => {
      const writeText = mockClipboard();
      const { rerender } = render(<JsonViewer value={{ a: 1 }} />);
      expect(screen.queryByLabelText('Copy JSON')).not.toBeInTheDocument();

      rerender(
        <>
          <JsonViewer value={{ a: 1 }} withCopyButton />
        </>
      );
      await userEvent.click(screen.getByLabelText('Copy JSON'));
      expect(writeText).toHaveBeenCalledWith('{\n  "a": 1\n}');
    });

    it('renders array chunks with groupArraysAfterLength', async () => {
      render(
        <JsonViewer
          value={Array.from({ length: 7 }, (_, i) => i)}
          groupArraysAfterLength={3}
          defaultExpandDepth={2}
        />
      );

      expect(screen.getByText('[0...2]')).toBeInTheDocument();
      expect(screen.getByText('[3...5]')).toBeInTheDocument();
      expect(screen.getByText('[6...6]')).toBeInTheDocument();
      expect(screen.getByText('4')).toBeInTheDocument();

      await userEvent.click(getRow('[3...5]'));
      expect(screen.queryByText('4')).not.toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('supports a custom sortKeys comparator', () => {
      const { container } = render(
        <JsonViewer
          value={{ alpha: 1, middle: 2, zebra: 3 }}
          defaultExpandDepth={1}
          sortKeys={(a, b) => b.localeCompare(a)}
        />
      );

      const keys = Array.from(container.querySelectorAll('[data-key]')).map((el) =>
        el.textContent?.replace(/[":, ]/g, '')
      );
      expect(keys).toEqual(['zebra', 'middle', 'alpha']);
    });

    it('renders custom labels', async () => {
      render(
        <JsonViewer
          value={{ a: 1 }}
          withControls
          withCopy
          expandAllLabel="Open"
          collapseAllLabel="Close"
          copyLabel="Grab"
        />
      );

      expect(screen.getByText('Open')).toBeInTheDocument();
      expect(screen.getByText('Close')).toBeInTheDocument();
      expect(screen.getAllByLabelText('Grab').length).toBeGreaterThan(0);
    });
  });

  describe('root expansion', () => {
    it('keeps the root expanded after collapse all', async () => {
      render(<JsonViewer value={{ a: { b: 'x' } }} defaultExpandDepth={2} withControls />);

      await userEvent.click(screen.getByText('Collapse all'));

      const root = document.querySelector('[data-root]')!;
      expect(root).toHaveAttribute('aria-expanded', 'true');
      expect(getRow(/^a/)).toHaveAttribute('aria-expanded', 'false');
    });

    it('treats an empty-string key as its own path, separate from the root', async () => {
      render(<JsonViewer value={{ '': { inner: 'x' }, other: 1 }} />);

      expect(screen.queryByText(/"x"/)).not.toBeInTheDocument();
      const emptyKeyRow = document
        .querySelector('[data-key]')!
        .closest<HTMLElement>('[data-jv-node]')!;
      await userEvent.click(emptyKeyRow);

      expect(screen.getByText(/"x"/)).toBeInTheDocument();
      expect(screen.getByText(/other/)).toBeInTheDocument();
    });

    it('keeps the root expanded with controlled expandedPaths regardless of the empty path', () => {
      const { rerender } = render(<JsonViewer value={{ a: 1 }} expandedPaths={[]} />);
      expect(document.querySelector('[data-root]')).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByText('1')).toBeInTheDocument();

      rerender(
        <>
          <JsonViewer value={{ a: 1 }} expandedPaths={['']} />
        </>
      );
      expect(document.querySelector('[data-root]')).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('array grouping', () => {
    it('does not group when groupArraysAfterLength is below 1', () => {
      render(<JsonViewer value={[1, 2]} groupArraysAfterLength={0} />);
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.queryByText(/\.\.\./)).not.toBeInTheDocument();
    });

    it('groups arrays nested inside a chunk', () => {
      const inner = [0, 1, 2, 3, 4];
      render(
        <JsonViewer
          value={{ outer: [inner, inner, inner] }}
          groupArraysAfterLength={2}
          maxDisplayLength={3}
          allExpanded
        />
      );

      expect(screen.queryByText(/more items/)).not.toBeInTheDocument();
      expect(screen.getAllByText('[4...4]')).toHaveLength(3);
      expect(screen.getAllByText('4')).toHaveLength(3);
    });

    it('counts chunk rows as one depth level', () => {
      render(
        <JsonViewer
          value={Array.from({ length: 6 }, (_, i) => i)}
          groupArraysAfterLength={3}
          defaultExpandDepth={1}
        />
      );

      expect(getRow('[0...2]')).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByText('4')).not.toBeInTheDocument();
    });

    it('expands every rendered row on expand all with grouped arrays', async () => {
      const inner = [0, 1, 2, 3, 4];
      render(
        <JsonViewer
          value={{ outer: [inner, { deep: inner }, inner], empty: [] }}
          groupArraysAfterLength={2}
          defaultExpandDepth={0}
          withControls
        />
      );

      await userEvent.click(screen.getByText('Expand all'));

      const expandable = document.querySelectorAll('[aria-expanded]');
      expect(expandable.length).toBeGreaterThan(10);
      expandable.forEach((row) => expect(row).toHaveAttribute('aria-expanded', 'true'));
    });
  });

  describe('value display', () => {
    it('escapes quoted strings and keys', () => {
      render(<JsonViewer value={{ 'k"ey': 'a"b\nc' }} withKeyQuotes />);

      expect(document.querySelector('[data-value-type="string"]')!.textContent).toBe('"a\\"b\\nc"');
      expect(document.querySelector('[data-key]')!.textContent).toBe('"k\\"ey": ');
    });

    it('allows wrapping only for long values', () => {
      render(
        <JsonViewer
          value={{
            short: 'short value',
            long: 'a'.repeat(40),
            flag: true,
            big: BigInt('1'.repeat(30)),
          }}
        />
      );
      const values = document.querySelectorAll('.mantine-JsonViewer-value');

      expect(values[0]).not.toHaveAttribute('data-wrap');
      expect(values[1]).toHaveAttribute('data-wrap');
      expect(values[2]).not.toHaveAttribute('data-wrap');
      expect(values[3]).not.toHaveAttribute('data-wrap');
    });

    it('shows raw strings when withQuotes is false', () => {
      render(<JsonViewer value={{ s: 'a"b' }} withQuotes={false} />);
      expect(document.querySelector('[data-value-type="string"]')!.textContent).toBe('a"b');
    });

    it('renders values with toJSON as their serialized result', () => {
      render(
        <JsonViewer
          value={{ created: new Date('2024-01-01T00:00:00Z'), map: new Map([['a', 1]]) }}
          withTypes
          withSize
        />
      );

      expect(screen.getByText('"2024-01-01T00:00:00.000Z"')).toBeInTheDocument();
      expect(getRow(/^created/)).not.toHaveAttribute('aria-expanded');
      expect(screen.getByText('0 keys')).toBeInTheDocument();
      expect(getRow(/^map/).textContent).toContain('{}');
    });

    it('says "more keys" when an object is truncated', () => {
      render(<JsonViewer value={{ a: 1, b: 2, c: 3 }} maxDisplayLength={1} />);
      expect(screen.getByText(/2 more keys/)).toBeInTheDocument();
    });

    it('sets aria-expanded on the show more button', async () => {
      render(<JsonViewer value={{ s: 'abcdefghij' }} collapseStringsAfterLength={3} />);

      const button = screen.getByRole('button', { name: 'show more' });
      expect(button).toHaveAttribute('aria-expanded', 'false');
      await userEvent.click(button);
      expect(screen.getByRole('button', { name: 'show less' })).toHaveAttribute(
        'aria-expanded',
        'true'
      );
    });
  });

  describe('empty values', () => {
    it('renders empty objects and arrays as a single non-expandable row', () => {
      const { container } = render(
        <JsonViewer
          value={{ emptyObject: {}, emptyArray: [] }}
          withSize
          withTypes
          withLineNumbers
        />
      );

      const obj = getRow(/^emptyObject/);
      const arr = getRow(/^emptyArray/);
      expect(obj).not.toHaveAttribute('aria-expanded');
      expect(arr).not.toHaveAttribute('aria-expanded');
      expect(obj.textContent).toContain('{}');
      expect(arr.textContent).toContain('[]');
      expect(screen.getByText('0 keys')).toBeInTheDocument();
      expect(screen.getByText('0 items')).toBeInTheDocument();
      expect(container.querySelectorAll('[role="group"]')).toHaveLength(1);
      expect(container.querySelectorAll('[data-jv-row]')).toHaveLength(4);
    });

    it('renders an empty root as a single focusable row', () => {
      const { container } = render(<JsonViewer value={[]} />);
      const root = container.querySelector('[data-root]')!;
      expect(root).not.toHaveAttribute('aria-expanded');
      expect(root).toHaveAttribute('tabindex', '0');
      expect(root.textContent).toBe('[]');
      expect(container.querySelector('[role="group"]')).toBeNull();
    });
  });

  describe('keyboard navigation regardless of collapsibility', () => {
    it('moves from the root to its first child with ArrowRight', async () => {
      render(<JsonViewer value={{ a: 1, b: 2 }} />);

      document.querySelector<HTMLElement>('[data-root]')!.focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(getRow(/^a/));
    });

    it('moves into and out of children with allExpanded', async () => {
      render(<JsonViewer value={{ a: { x: 1 }, b: 2 }} allExpanded />);

      getRow(/^a/).focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(getRow(/^x/));

      await userEvent.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(getRow(/^a/));

      await userEvent.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(document.querySelector('[data-root]'));
    });

    it('moves from an allExpanded chunk row to its first item', async () => {
      render(<JsonViewer value={[1, 2, 3, 4]} groupArraysAfterLength={2} allExpanded />);

      getRow('[2...3]').focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(getRow('3'));
    });

    it('does not move focus with ArrowRight on leaf and empty rows', async () => {
      render(<JsonViewer value={{ a: 1, e: {} }} />);

      getRow(/^a/).focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(getRow(/^a/));

      getRow(/^e/).focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(getRow(/^e/));
    });

    it('prevents page scroll on Space and Enter for every row', () => {
      render(<JsonViewer value={{ a: { x: 1 }, b: 2 }} allExpanded />);

      const rows = [
        document.querySelector<HTMLElement>('[data-root]')!,
        getRow(/^a/),
        getRow(/^b/),
      ];
      rows.forEach((row) => {
        expect(fireEvent.keyDown(row, { key: ' ', code: 'Space' })).toBe(false);
        expect(fireEvent.keyDown(row, { key: 'Enter', code: 'Enter' })).toBe(false);
      });
    });

    it('makes a primitive root value focusable', () => {
      const { container } = render(<JsonViewer value="text" />);
      const row = container.querySelector('[data-jv-node]')!;
      expect(row).toHaveAttribute('tabindex', '0');
    });

    it('selects a primitive value with Space when onValueSelect is set', async () => {
      const onValueSelect = jest.fn();
      render(<JsonViewer value={{ name: 'test' }} onValueSelect={onValueSelect} />);

      getRow(/"test"/).focus();
      await userEvent.keyboard(' ');
      expect(onValueSelect).toHaveBeenCalledWith(['name'], 'test');
    });
  });

  describe('styles api', () => {
    it('applies controls and control selectors to the expand/collapse bar', () => {
      render(
        <JsonViewer
          value={{ a: 1 }}
          withControls
          classNames={{ controls: 'c-bar', control: 'c-btn', content: 'c-content' }}
        />
      );

      const bar = document.querySelector('.c-bar')!;
      expect(bar).toBeInTheDocument();
      expect(bar).not.toHaveClass('c-content');
      expect(bar.querySelectorAll('.c-btn')).toHaveLength(2);
      expect(document.querySelectorAll('.c-content')).toHaveLength(1);
    });
  });
});
