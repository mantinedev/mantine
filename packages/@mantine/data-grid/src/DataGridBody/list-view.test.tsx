import { render, screen, userEvent } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { useDataGrid, UseDataGridOptions } from '../hooks/use-data-grid';

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

  it('renders group rows as heading items without a toggle and tree rows flat', async () => {
    const { container } = render(
      <Grid storeOptions={{ withGrouping: true, grouping: ['team'] }} />
    );
    const heading = container.querySelector<HTMLElement>(
      '.mantine-DataGrid-listItem[data-group-row]'
    )!;
    expect(heading).toHaveTextContent('Squad: Red (2)');
    expect(heading.querySelector('button')).not.toBeInTheDocument();
    expect(heading.querySelector('svg')).not.toBeInTheDocument();
    expect(heading).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(heading);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(container.querySelector('.mantine-DataGrid-treeIndent')).not.toBeInTheDocument();
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
});
