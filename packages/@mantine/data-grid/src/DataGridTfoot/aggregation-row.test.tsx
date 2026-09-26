import { constructAggregationFn } from '@tanstack/react-table';
import { render } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { DataGridColumnDef } from '../DataGrid.types';
import { useDataGrid, UseDataGridOptions } from '../hooks';
import { mockVirtualViewport } from '../virtual-test-utils';

interface Person {
  id: string;
  name: string;
  age: number;
  children?: Person[];
}

const data: Person[] = [
  { id: 'a', name: 'Alice', age: 30 },
  { id: 'b', name: 'Bob', age: 25 },
  { id: 'c', name: 'Charlie', age: 35 },
];

const columns: DataGridColumnDef<Person>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age', aggregationFn: 'sum', meta: { align: 'end' } },
];

function Grid({
  storeOptions,
  columns: columnsProp = columns,
  ...props
}: Omit<DataGridProps<Person>, 'store'> & {
  storeOptions?: Partial<UseDataGridOptions<Person>>;
}) {
  const store = useDataGrid<Person>({
    data,
    columns: columnsProp,
    getRowId: (row) => row.id,
    ...storeOptions,
  });
  return <DataGrid store={store} {...props} />;
}

const totalsRow = (container: HTMLElement) => {
  const rows = container.querySelectorAll('tfoot tr');
  return rows[rows.length - 1];
};

describe('@mantine/data-grid/aggregation-row', () => {
  let restoreViewport: () => void;

  beforeEach(() => {
    restoreViewport = mockVirtualViewport();
  });

  afterEach(() => {
    restoreViewport();
  });

  it('stacks the aggregation label above the value', () => {
    const { container } = render(<Grid />);
    const cell = totalsRow(container).querySelectorAll('td.mantine-DataGrid-aggregationCell')[1];
    expect(cell).toHaveClass('mantine-DataGrid-td');
    expect(cell).toHaveAttribute('data-align', 'end');
    expect(cell.querySelector('.mantine-DataGrid-aggregationLabel')).toHaveTextContent('Sum');
    expect(cell.querySelector('.mantine-DataGrid-aggregationValue')).toHaveTextContent('90');
    expect(totalsRow(container).querySelectorAll('td')[0]).toHaveTextContent('');
  });

  it('prefers meta.aggregationLabel and maps built-in functions through labels', () => {
    const { container } = render(
      <Grid
        columns={[
          { accessorKey: 'name', header: 'Name', aggregationFn: 'count' },
          {
            accessorKey: 'age',
            header: 'Age',
            aggregationFn: 'mean',
            meta: { aggregationLabel: 'Avg age' },
          },
        ]}
        labels={{ aggregationCount: 'Rows' }}
      />
    );
    const labels = Array.from(
      totalsRow(container).querySelectorAll('.mantine-DataGrid-aggregationLabel')
    ).map((el) => el.textContent);
    expect(labels).toEqual(['Rows', 'Avg age']);
  });

  it('renders no label for custom aggregation functions', () => {
    const custom = constructAggregationFn<any, Person, number, number>({
      aggregate: ({ rows, getValue }) => rows.reduce((acc, row) => acc + getValue(row), 0),
    });
    const { container } = render(
      <Grid
        columns={[
          { accessorKey: 'name', header: 'Name' },
          { accessorKey: 'age', header: 'Age', aggregationFn: custom },
        ]}
      />
    );
    expect(
      totalsRow(container).querySelector('.mantine-DataGrid-aggregationLabel')
    ).not.toBeInTheDocument();
    expect(
      totalsRow(container).querySelector('.mantine-DataGrid-aggregationValue')
    ).toHaveTextContent('90');
  });

  it('aggregates the filtered rows across all pages and includes tree parents', () => {
    const treeData: Person[] = [
      { id: 'a', name: 'Alice', age: 30, children: [{ id: 'a1', name: 'Alice jr', age: 5 }] },
      { id: 'b', name: 'Bob', age: 25 },
      { id: 'c', name: 'Charlie', age: 35 },
    ];
    const { container } = render(
      <Grid
        storeOptions={{
          data: treeData,
          getSubRows: (row) => row.children,
          pageSize: 1,
          withGlobalFilter: true,
          globalFilter: 'li',
          filterFromLeafRows: true,
        }}
      />
    );
    expect(container.querySelectorAll('tbody tr')).toHaveLength(1);
    expect(
      totalsRow(container).querySelector('.mantine-DataGrid-aggregationValue')
    ).toHaveTextContent('70');
  });

  it('excludes group rows from the aggregation scope', () => {
    const { container } = render(
      <Grid
        columns={[
          { accessorKey: 'name', header: 'Name' },
          { accessorKey: 'age', header: 'Age', aggregationFn: 'count' },
        ]}
        storeOptions={{ withGrouping: true, grouping: ['name'] }}
      />
    );
    expect(
      totalsRow(container).querySelector('.mantine-DataGrid-aggregationValue')
    ).toHaveTextContent('3');
  });

  it('renders the totals row inside the virtual grid with the grid column widths', () => {
    const { container } = render(
      <Grid
        virtualize="rows"
        height={300}
        columns={[{ accessorKey: 'name', header: 'Name', footer: 'Totals' }, columns[1]]}
      />
    );
    expect(container.querySelector('tfoot')).not.toBeInTheDocument();
    expect(container.querySelectorAll('table')).toHaveLength(0);
    const footer = container.querySelector('[role="grid"] > [data-virtual-tfoot]')!;
    expect(footer).toHaveAttribute('role', 'rowgroup');
    const rows = footer.querySelectorAll('[role="row"]');
    expect(rows).toHaveLength(2);
    expect(rows[0]).toHaveTextContent('Totals');
    const cells = rows[1].querySelectorAll('[role="gridcell"]');
    expect(cells).toHaveLength(2);
    expect(cells[1]).toHaveClass('mantine-DataGrid-virtualCell');
    expect(cells[1]).toHaveClass('mantine-DataGrid-aggregationCell');
    expect(cells[1]).toHaveAttribute('aria-colindex', '2');
    expect(cells[1]).toHaveStyle({ width: 'var(--dg-col-1)' });
    expect(cells[1].querySelector('.mantine-DataGrid-aggregationValue')).toHaveTextContent('90');
  });

  it('does not recompute totals on re-renders that keep the aggregation rows', () => {
    const aggregate = jest.fn(({ rows, getValue }) =>
      rows.reduce((acc: number, row: any) => acc + getValue(row), 0)
    );
    const spyColumns: DataGridColumnDef<Person>[] = [
      { accessorKey: 'name', header: 'Name' },
      {
        accessorKey: 'age',
        header: 'Age',
        aggregationFn: constructAggregationFn<any, Person, number, number>({ aggregate }),
      },
    ];
    const { container, rerender } = render(
      <Grid virtualize="rows" height={300} columns={spyColumns} className="a" />
    );
    const valueNode = () => container.querySelector('.mantine-DataGrid-aggregationValue');
    expect(valueNode()).toHaveTextContent('90');
    const calls = aggregate.mock.calls.length;
    expect(calls).toBeGreaterThan(0);

    rerender(<Grid virtualize="rows" height={300} columns={spyColumns} className="b" />);
    rerender(<Grid virtualize="rows" height={300} columns={spyColumns} className="c" />);
    expect(container.querySelector('.c')).toBeInTheDocument();
    expect(valueNode()).toHaveTextContent('90');
    expect(aggregate).toHaveBeenCalledTimes(calls);
  });

  it('does not compute totals for hidden columns', () => {
    const aggregate = jest.fn(({ rows, getValue }) =>
      rows.reduce((acc: number, row: any) => acc + getValue(row), 0)
    );
    const spyColumns: DataGridColumnDef<Person>[] = [
      { accessorKey: 'name', header: 'Name' },
      {
        accessorKey: 'age',
        header: 'Age',
        aggregationFn: constructAggregationFn<any, Person, number, number>({ aggregate }),
      },
    ];
    render(
      <Grid
        columns={spyColumns}
        storeOptions={{ withColumnVisibility: true, columnVisibility: { age: false } }}
      />
    );
    expect(aggregate).not.toHaveBeenCalled();
  });

  it('orders totals cells by column pinning and pins them', () => {
    const { container } = render(
      <Grid
        storeOptions={{ withColumnPinning: true, columnPinning: { start: ['age'], end: [] } }}
      />
    );
    const cells = totalsRow(container).querySelectorAll('td');
    expect(cells[0]).toHaveAttribute('data-column-id', 'age');
    expect(cells[0]).toHaveAttribute('data-pinned', 'start');
    expect(cells[0].querySelector('.mantine-DataGrid-aggregationValue')).toHaveTextContent('90');
    expect(cells[1]).toHaveAttribute('data-column-id', 'name');
  });

  describe('column footer rows', () => {
    it('renders no column footer row when no column defines footer', () => {
      const { container } = render(<Grid />);
      expect(container.querySelectorAll('tfoot tr')).toHaveLength(1);
      expect(container.querySelector('tfoot tr td[class*="aggregationCell"]')).toBeInTheDocument();
    });

    it('renders the column footer row before the totals row when a column defines footer', () => {
      const { container } = render(
        <Grid columns={[{ accessorKey: 'name', header: 'Name', footer: 'Totals' }, columns[1]]} />
      );
      const rows = container.querySelectorAll('tfoot tr');
      expect(rows).toHaveLength(2);
      expect(rows[0]).toHaveTextContent('Totals');
      expect(rows[1].querySelector('[class*="aggregationValue"]')).toHaveTextContent('90');
    });
  });
});
