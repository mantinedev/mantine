import { render, screen, userEvent } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { useDataGrid, UseDataGridOptions } from '../hooks';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'team', header: 'Team', meta: { label: 'Squad' } },
];

const data = [
  { id: 'a', name: 'Alice', team: 'Red' },
  { id: 'b', name: 'Bob', team: 'Red' },
  { id: 'c', name: 'Charlie', team: 'Blue' },
];

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<any>, 'store'> & {
  storeOptions?: Partial<UseDataGridOptions<any>>;
}) {
  const store = useDataGrid({ data, columns, getRowId: (row: any) => row.id, ...storeOptions });
  return <DataGrid store={store} listView {...props} />;
}

const root = (container: HTMLElement) => container.querySelector('.mantine-DataGrid-root')!;

describe('@mantine/data-grid/list-view', () => {
  it('resolves listView values onto the root', () => {
    const { container, rerender } = render(<Grid />);
    expect(root(container)).toHaveAttribute('data-list-view', 'cards');
    rerender(<Grid listView="flat" />);
    expect(root(container)).toHaveAttribute('data-list-view', 'flat');
    rerender(<Grid listView={false} />);
    expect(root(container)).not.toHaveAttribute('data-list-view');
    expect(container.querySelector('table')).toBeInTheDocument();
  });

  it('always renders the listItem wrapper around custom content', () => {
    const { container } = render(
      <Grid renderListItem={({ row }) => <strong>{row.original.name}</strong>} />
    );
    const items = container.querySelectorAll('.mantine-DataGrid-listItem');
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveAttribute('data-row-id', 'a');
    expect(items[0].querySelector('strong')).toHaveTextContent('Alice');
  });

  it('renders label and value pairs by default without utility columns', () => {
    const { container } = render(<Grid storeOptions={{ withRowSelection: true }} />);
    const first = container.querySelector('.mantine-DataGrid-listItem')!;
    const fields = first.querySelectorAll('[data-list-field]');
    expect(fields).toHaveLength(2);
    expect(fields[1].querySelector('[data-list-label]')).toHaveTextContent('Squad');
    expect(fields[1].querySelector('[data-list-value]')).toHaveTextContent('Red');
    expect(first.querySelector('input[type="checkbox"]')).not.toBeInTheDocument();
  });

  it('renders group rows as list items with an expanded-state button', async () => {
    const { container } = render(
      <Grid storeOptions={{ withGrouping: true, grouping: ['team'] }} />
    );
    const heading = container.querySelector<HTMLElement>(
      '.mantine-DataGrid-listItem[data-group-row]'
    )!;
    expect(heading).toHaveTextContent('Squad: Red (2)');
    expect(heading).toHaveAttribute('role', 'listitem');
    expect(heading).not.toHaveAttribute('aria-expanded');
    expect(heading.querySelector('svg')).not.toBeInTheDocument();
    const toggle = heading.querySelector('button')!;
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveAttribute('tabindex', '-1');
    await userEvent.click(toggle);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(heading);
    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
    heading.focus();
    await userEvent.keyboard('{Enter}');
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(container.querySelector('.mantine-DataGrid-treeIndent')).not.toBeInTheDocument();
  });

  it('exposes the list and its items with list roles', () => {
    const view = render(<Grid />);
    const list = screen.getByRole('list');
    expect(list).toHaveClass('mantine-DataGrid-listView');
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    view.unmount();
    const { container } = render(<Grid storeOptions={{ data: [] }} emptyState="Nothing" />);
    expect(container.querySelector('.mantine-DataGrid-emptyState')).toBeInTheDocument();
    expect(container.querySelector('.mantine-DataGrid-listView')).not.toHaveAttribute('role');
  });

  it('renders the list inside a scroll container when height is set', () => {
    const { container, rerender } = render(<Grid />);
    expect(container.querySelector('[data-dg-scroll]')).not.toBeInTheDocument();
    rerender(<Grid height={200} />);
    const scroll = container.querySelector<HTMLElement>('[data-dg-scroll]')!;
    expect(scroll).toHaveClass('mantine-DataGrid-scrollContainer');
    expect(scroll.style.height).toBe('calc(12.5rem * var(--mantine-scale))');
    expect(scroll.style.overflow).toBe('auto');
    expect(scroll.querySelector('.mantine-DataGrid-listView')).toBeInTheDocument();
  });

  it('calls onScrollToBottom from the list scroll container', () => {
    const onScrollToBottom = jest.fn();
    const { container } = render(<Grid height={200} onScrollToBottom={onScrollToBottom} />);
    const scroll = container.querySelector<HTMLElement>('[data-dg-scroll]')!;
    Object.defineProperty(scroll, 'scrollHeight', { value: 1000, configurable: true });
    Object.defineProperty(scroll, 'clientHeight', { value: 200, configurable: true });
    scroll.scrollTop = 800;
    scroll.dispatchEvent(new Event('scroll'));
    expect(onScrollToBottom).toHaveBeenCalled();
  });

  it('moves focus between items with arrow keys when cell selection is enabled', async () => {
    const { container } = render(<Grid storeOptions={{ withCellSelection: true }} />);
    const items = container.querySelectorAll<HTMLElement>('.mantine-DataGrid-listItem');
    items[0].focus();
    await userEvent.keyboard('{ArrowDown}');
    expect(items[1]).toHaveFocus();
    await userEvent.keyboard('{End}');
    expect(items[2]).toHaveFocus();
    await userEvent.keyboard('{Home}');
    expect(items[0]).toHaveFocus();
  });

  it('warns that row reorder is not available in list view', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Grid storeOptions={{ onRowOrderChange: () => {} }} />);
    expect(
      warn.mock.calls.some((call) => String(call[0]).includes('row reorder is not available'))
    ).toBe(true);
    warn.mockRestore();
  });

  it('renders tree rows flat', () => {
    const treeData = [
      { id: 'a', name: 'A', team: 'Red', children: [{ id: 'a1', name: 'A1', team: 'Red' }] },
    ];
    const { container } = render(
      <Grid
        storeOptions={{ data: treeData, getSubRows: (row: any) => row.children, expanded: true }}
      />
    );
    expect(container.querySelectorAll('.mantine-DataGrid-listItem')).toHaveLength(2);
    expect(container.querySelector('.mantine-DataGrid-treeIndent')).not.toBeInTheDocument();
  });

  it('renders the resolved empty state when there are no rows and the grid is not loading', () => {
    const emptyState = jest.fn(({ rowCount }: { rowCount: number }) => (
      <span>No items ({rowCount})</span>
    ));
    const { container, rerender } = render(
      <Grid storeOptions={{ data: [] }} emptyState={emptyState} />
    );
    const empty = container.querySelector('.mantine-DataGrid-emptyState')!;
    expect(empty).toHaveAttribute('data-empty-row');
    expect(empty).toHaveTextContent('No items (0)');
    expect(container.querySelector('.mantine-DataGrid-listItem')).not.toBeInTheDocument();

    rerender(<Grid storeOptions={{ data: [] }} emptyState={emptyState} loading />);
    expect(container.querySelector('.mantine-DataGrid-emptyState')).not.toBeInTheDocument();
  });

  it('renders top pinned items first and bottom pinned items last', () => {
    const { container } = render(
      <Grid storeOptions={{ withRowPinning: true, rowPinning: { top: ['c'], bottom: ['a'] } }} />
    );
    const items = Array.from(container.querySelectorAll('.mantine-DataGrid-listItem'));
    expect(items.map((item) => item.getAttribute('data-row-id'))).toEqual(['c', 'b', 'a']);
    expect(items[0]).toHaveAttribute('data-pinned', 'top');
    expect(items[1]).not.toHaveAttribute('data-pinned');
    expect(items[2]).toHaveAttribute('data-pinned', 'bottom');
    expect(items[0]).toHaveAttribute('tabindex', '0');
    expect(items[0].parentElement).toHaveAttribute('data-list-pinned', 'top');
    expect(items[0].parentElement).toHaveAttribute('role', 'none');
    expect(items[1].parentElement).toHaveAttribute('role', 'list');
    expect(items[2].parentElement).toHaveAttribute('data-list-pinned', 'bottom');
    expect(items.map((item) => item.getAttribute('data-row-index'))).toEqual(['0', '1', '2']);
  });

  it('keeps row pinning and skips virtualization warnings when listView overrides virtualize', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const error = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { container } = render(
      <Grid
        virtualize="rows"
        height={300}
        storeOptions={{
          withRowPinning: true,
          rowPinning: { top: ['c'], bottom: [] },
          onRowOrderChange: () => {},
        }}
      />
    );
    const items = Array.from(container.querySelectorAll('.mantine-DataGrid-listItem'));
    expect(items.map((item) => item.getAttribute('data-row-id'))).toEqual(['c', 'a', 'b']);
    expect(items[0]).toHaveAttribute('data-pinned', 'top');
    expect(root(container)).not.toHaveAttribute('data-virtualized');
    const messages = [...warn.mock.calls, ...error.mock.calls].map((call) => String(call[0]));
    expect(messages.some((message) => message.includes('not supported with `virtualize`'))).toBe(
      false
    );
    warn.mockRestore();
    error.mockRestore();
  });

  it('renders the expanded row content inside expanded items', async () => {
    const onRowClick = jest.fn();
    const { container } = render(
      <Grid
        storeOptions={{ withRowExpansion: true }}
        expandOnRowClick
        onRowClick={onRowClick}
        renderExpandedRow={({ row }) => <button type="button">Details {row.original.name}</button>}
      />
    );
    expect(screen.queryByText('Details Alice')).not.toBeInTheDocument();

    const first = container.querySelector<HTMLElement>('.mantine-DataGrid-listItem')!;
    await userEvent.click(first);
    expect(first).toHaveAttribute('data-expanded', 'true');
    const panel = first.querySelector('[data-list-expanded]')!;
    expect(panel).toHaveClass('mantine-DataGrid-expandedRow');
    expect(panel).toHaveTextContent('Details Alice');
    expect(onRowClick).toHaveBeenCalledTimes(1);

    await userEvent.click(screen.getByText('Details Alice'));
    expect(onRowClick).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Details Alice')).toBeInTheDocument();
  });

  it('calls onRowDoubleClick on items but not from the expanded panel', async () => {
    const onRowDoubleClick = jest.fn();
    const { container } = render(
      <Grid
        storeOptions={{ withRowExpansion: true, expanded: { a: true } }}
        onRowDoubleClick={onRowDoubleClick}
        renderExpandedRow={({ row }) => <span>Details {row.original.name}</span>}
      />
    );
    const first = container.querySelector<HTMLElement>('.mantine-DataGrid-listItem')!;
    await userEvent.dblClick(first);
    expect(onRowDoubleClick).toHaveBeenCalledTimes(1);
    expect(onRowDoubleClick.mock.calls[0][0].id).toBe('a');
    await userEvent.dblClick(screen.getByText('Details Alice'));
    expect(onRowDoubleClick).toHaveBeenCalledTimes(1);
  });

  it('shares row state attributes with table rows', () => {
    const { container } = render(
      <Grid
        striped
        storeOptions={{
          editingMode: 'row',
          editing: { rowId: 'b', columnId: null, values: {}, status: 'saving' },
        }}
      />
    );
    const items = container.querySelectorAll('.mantine-DataGrid-listItem');
    expect(items[0]).toHaveAttribute('data-striped', 'true');
    expect(items[1]).not.toHaveAttribute('data-striped');
    expect(items[1]).toHaveAttribute('data-editing', 'true');
    expect(items[1]).toHaveAttribute('data-saving', 'true');
    expect(items[1]).toHaveAttribute('aria-busy', 'true');
    expect(items[0]).toHaveAttribute('tabindex', '0');
    expect(items[1]).toHaveAttribute('tabindex', '-1');
  });
});
