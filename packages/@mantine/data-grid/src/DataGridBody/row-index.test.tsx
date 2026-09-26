import { render } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { useDataGrid, UseDataGridOptions } from '../hooks';
import { mockVirtualViewport } from '../virtual-test-utils';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'team', header: 'Team' },
];

const data = [
  { id: 'a', name: 'Alice', team: 'Red' },
  { id: 'b', name: 'Bob', team: 'Red' },
  { id: 'c', name: 'Charlie', team: 'Blue' },
  { id: 'd', name: 'Dana', team: 'Blue' },
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
    withRowNumbers: true,
    ...storeOptions,
  });
  return <DataGrid store={store} striped {...props} />;
}

const numberOf = (row: Element) => row.querySelector('[data-utility="rowNumber"]')!.textContent;

describe('@mantine/data-grid/row-index', () => {
  let restoreViewport: () => void;

  beforeEach(() => {
    restoreViewport = mockVirtualViewport();
  });

  afterEach(() => {
    restoreViewport();
  });

  it('runs one index over data rows around group rows', () => {
    const { container } = render(
      <Grid storeOptions={{ withGrouping: true, grouping: ['team'], expanded: true }} />
    );
    const rows = Array.from(container.querySelectorAll('tbody tr[data-row-id]'));
    expect(rows.map((row) => row.hasAttribute('data-group-row'))).toEqual([
      true,
      false,
      false,
      true,
      false,
      false,
    ]);
    expect(rows.map((row) => row.hasAttribute('data-striped'))).toEqual([
      false,
      true,
      false,
      false,
      true,
      false,
    ]);
    expect(rows.map(numberOf)).toEqual(['', '1', '2', '', '3', '4']);
  });

  it('skips pinned rows', () => {
    const { container } = render(
      <Grid storeOptions={{ withRowPinning: true, rowPinning: { top: ['b'], bottom: [] } }} />
    );
    const rows = Array.from(container.querySelectorAll('tbody tr[data-row-id]'));
    expect(rows[0]).toHaveAttribute('data-pinned', 'top');
    expect(rows[0]).not.toHaveAttribute('data-striped');
    expect(numberOf(rows[0])).toBe('');
    expect(rows.slice(1).map(numberOf)).toEqual(['1', '2', '3']);
    expect(rows.slice(1).map((row) => row.hasAttribute('data-striped'))).toEqual([
      true,
      false,
      true,
    ]);
  });

  it('stripes even rows of the same index on request', () => {
    const { container } = render(<Grid striped="even" />);
    const rows = Array.from(container.querySelectorAll('tbody tr[data-row-id]'));
    expect(rows.map((row) => row.hasAttribute('data-striped'))).toEqual([false, true, false, true]);
  });

  it('uses the same index in the virtual body', () => {
    const { container } = render(
      <Grid
        storeOptions={{ withGrouping: true, grouping: ['team'], expanded: true }}
        virtualize="rows"
        height={300}
      />
    );
    const rows = Array.from(container.querySelectorAll('[role="row"][data-row-id]'));
    expect(rows.map((row) => row.hasAttribute('data-striped'))).toEqual([
      false,
      true,
      false,
      false,
      true,
      false,
    ]);
    expect(rows.map(numberOf)).toEqual(['', '1', '2', '', '3', '4']);
  });
});
