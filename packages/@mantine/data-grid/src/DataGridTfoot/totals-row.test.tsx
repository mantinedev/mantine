import { constructAggregationFn } from '@tanstack/react-table';
import { render } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import type { DataGridColumnDef } from '../DataGrid.types';
import { useDataGrid, UseDataGridOptions } from '../hooks/use-data-grid';
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

describe('@mantine/data-grid/totals-row', () => {
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

  it('renders the totals row under virtualization', () => {
    const { container } = render(<Grid virtualize="rows" height={300} />);
    expect(
      totalsRow(container).querySelector('.mantine-DataGrid-aggregationValue')
    ).toHaveTextContent('90');
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
