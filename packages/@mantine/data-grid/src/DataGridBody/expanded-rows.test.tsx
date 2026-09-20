import { render, screen } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { useDataGrid, UseDataGridOptions } from '../hooks/use-data-grid';
import { mockVirtualViewport } from '../virtual-test-utils';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
];

const data = [
  { id: 'a', name: 'Alice', age: 30 },
  { id: 'b', name: 'Bob', age: 25 },
  { id: 'c', name: 'Charlie', age: 35 },
];

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<any>, 'store'> & {
  storeOptions?: Partial<UseDataGridOptions<any>>;
}) {
  const store = useDataGrid({
    data,
    columns,
    getRowId: (row: any) => row.id,
    withRowExpansion: true,
    withRowSelection: true,
    withRowNumbers: true,
    expanded: { a: true },
    ...storeOptions,
  });
  return (
    <DataGrid
      store={store}
      renderExpandedRow={({ row }) => <div>Details for {row.original.name}</div>}
      {...props}
    />
  );
}

describe('@mantine/data-grid/expanded-rows', () => {
  let restoreViewport: () => void;

  beforeEach(() => {
    restoreViewport = mockVirtualViewport();
  });

  afterEach(() => {
    restoreViewport();
  });

  it('renders a structural panel after the expanded parent in the table body', () => {
    const { container } = render(<Grid striped />);
    const parent = container.querySelector('tr[data-row-id="a"]')!;
    expect(parent).toHaveAttribute('data-expanded');
    const panel = parent.nextElementSibling as HTMLElement;
    expect(panel).toHaveAttribute('data-expanded-row');
    expect(panel).not.toHaveAttribute('data-row-id');
    expect(panel).not.toHaveAttribute('tabindex');
    expect(panel).not.toHaveAttribute('data-striped');
    expect(panel).not.toHaveAttribute('data-selected');
    const cells = panel.querySelectorAll('td');
    expect(cells).toHaveLength(4);
    expect(cells[0]).toHaveAttribute('data-utility', 'select');
    expect(cells[1]).toHaveAttribute('data-utility', 'expand');
    expect(cells[2]).toHaveAttribute('data-utility', 'rowNumber');
    expect(cells[0]).toHaveTextContent('');
    expect(cells[3]).toHaveAttribute('colspan', '2');
    expect(cells[3]).toHaveClass('mantine-DataGrid-expandedRow');
    expect(cells[3]).toHaveTextContent('Details for Alice');
    expect(container.querySelector('tr[data-row-id="b"]')).not.toHaveAttribute('data-expanded');
  });

  it('keeps the data-row index unbroken around the panel', () => {
    const { container } = render(<Grid striped />);
    const rows = container.querySelectorAll('tbody tr[data-row-id]');
    expect(rows[0]).toHaveAttribute('data-striped');
    expect(rows[1]).not.toHaveAttribute('data-striped');
    expect(rows[2]).toHaveAttribute('data-striped');
  });

  it('reflects withTintedExpandedRows on the root', () => {
    const { container } = render(<Grid withTintedExpandedRows />);
    expect(container.querySelector('.mantine-DataGrid-root')).toHaveAttribute(
      'data-tinted-expanded-rows'
    );
  });

  it('renders the same panel structure in the virtual body', () => {
    const { container } = render(<Grid virtualize="rows" height={300} />);
    const parent = container.querySelector('[role="row"][data-row-id="a"]')!;
    expect(parent).toHaveAttribute('data-expanded');
    const panel = parent.nextElementSibling as HTMLElement;
    expect(panel).toHaveAttribute('role', 'row');
    expect(panel).toHaveAttribute('data-expanded-row');
    expect(panel).not.toHaveAttribute('tabindex');
    const utilityCells = panel.querySelectorAll('[role="gridcell"][data-utility]');
    expect(utilityCells).toHaveLength(3);
    expect(panel.querySelector('.mantine-DataGrid-expandedRow')).toHaveTextContent(
      'Details for Alice'
    );
    expect(screen.getAllByText(/Details for/)).toHaveLength(1);
  });
});
