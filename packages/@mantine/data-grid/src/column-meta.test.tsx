import { render, screen, userEvent } from '@mantine-tests/core';
import { getExportColumns, getExportHeaders } from './export/export-utils';
import { getColumnLabel } from './get-column-label';
import {
  createDataGridColumnHelper,
  DataGrid,
  DataGridColumnDef,
  DataGridProps,
  DataGridStore,
  useDataGrid,
  UseDataGridOptions,
} from './index';

interface Person {
  name: string;
  age: number;
}

const helper = createDataGridColumnHelper<Person>();

const data: Person[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];

let lastStore: DataGridStore<Person> | null = null;

function Grid({
  columns,
  storeOptions,
  ...props
}: Omit<DataGridProps<Person>, 'store' | 'columns'> & {
  columns: DataGridColumnDef<Person>[];
  storeOptions?: Partial<UseDataGridOptions<Person>>;
}) {
  const store = useDataGrid<Person>({ data, columns, ...storeOptions });
  lastStore = store;
  return <DataGrid store={store} {...props} />;
}

describe('@mantine/data-grid/column-meta', () => {
  describe('meta.align', () => {
    const columns: DataGridColumnDef<Person>[] = [
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'age', header: 'Age', meta: { align: 'end' }, aggregationFn: 'sum' },
    ];

    it('reflects align on header, body and tfoot cells', () => {
      const { container } = render(<Grid columns={columns} />);
      expect(container.querySelector('th[data-align="end"]')).toHaveTextContent('Age');
      expect(container.querySelectorAll('tbody td[data-align="end"]')).toHaveLength(data.length);
      expect(container.querySelector('tfoot td[data-align="end"]')).toBeInTheDocument();
      expect(container.querySelector('th[data-align="start"]')).not.toBeInTheDocument();
    });

    it('reflects align on virtual cells', () => {
      const { container } = render(<Grid columns={columns} virtualize="rows" height={200} />);
      expect(
        container.querySelector('[role="columnheader"][data-align="end"]')
      ).toBeInTheDocument();
    });
  });

  describe('meta.formatAggregatedValue', () => {
    it('formats the totals row value', () => {
      const { container } = render(
        <Grid
          columns={[
            { accessorKey: 'name', header: 'Name' },
            {
              accessorKey: 'age',
              header: 'Age',
              aggregationFn: 'sum',
              meta: {
                aggregationLabel: 'Total',
                formatAggregatedValue: (value, rows) => `${value} years / ${rows.length} people`,
              },
            },
          ]}
        />
      );
      expect(container.querySelector('tfoot .mantine-DataGrid-aggregationLabel')).toHaveTextContent(
        'Total'
      );
      expect(container.querySelector('tfoot .mantine-DataGrid-aggregationValue')).toHaveTextContent(
        '55 years / 2 people'
      );
    });
  });

  describe('actions column', () => {
    const columns: DataGridColumnDef<Person>[] = [
      { accessorKey: 'name', header: 'Name', enableSorting: true },
      helper.display({
        id: 'actions',
        meta: { type: 'actions' },
        cell: ({ row }) => <button type="button">Edit {row.original.name}</button>,
      }),
    ];

    it('applies the actions column defaults', () => {
      const { container } = render(<Grid columns={columns} storeOptions={{ withSorting: true }} />);
      const column = lastStore!.table.getColumn('actions')!;
      expect(column.getSize()).toBe(80);
      expect(column.getCanSort()).toBe(false);
      expect(column.getCanResize()).toBe(false);
      expect(column.columnDef.meta?.align).toBe('end');

      const th = container.querySelector('th[data-actions]');
      expect(th).toBeInTheDocument();
      expect(th).toHaveTextContent('');
      expect(th).toHaveAttribute('data-align', 'end');
      expect(container.querySelectorAll('td[data-actions][data-align="end"]')).toHaveLength(
        data.length
      );
      expect(screen.getByRole('button', { name: 'Edit Alice' })).toBeInTheDocument();
    });

    it('keeps a user supplied header and alignment', () => {
      render(
        <Grid
          columns={[
            { accessorKey: 'name', header: 'Name' },
            helper.display({
              id: 'actions',
              header: 'Actions',
              meta: { type: 'actions', align: 'start' },
              cell: () => null,
            }),
          ]}
        />
      );
      expect(screen.getByText('Actions')).toBeInTheDocument();
      expect(lastStore!.table.getColumn('actions')!.columnDef.meta?.align).toBe('start');
    });

    it('is excluded from export', () => {
      render(<Grid columns={columns} />);
      expect(getExportHeaders(getExportColumns(lastStore!.table, 'all'))).toEqual(['Name']);
    });
  });

  describe('getColumnLabel', () => {
    it('prefers meta.label, then a string header, then the id', () => {
      render(
        <Grid
          columns={[
            { accessorKey: 'name', header: 'Name', meta: { label: 'Full name' } },
            { accessorKey: 'age', header: 'Age' },
            helper.display({ id: 'actions', header: () => <span>x</span> }),
          ]}
        />
      );
      const [name, age, actions] = lastStore!.table.getAllLeafColumns();
      expect(getColumnLabel(name)).toBe('Full name');
      expect(getColumnLabel(age)).toBe('Age');
      expect(getColumnLabel(actions)).toBe('actions');
    });

    it('feeds export headers and the column visibility menu', async () => {
      render(
        <Grid
          columns={[
            { accessorKey: 'name', header: 'Name', meta: { label: 'Full name' } },
            { accessorKey: 'age', header: 'Age' },
          ]}
          storeOptions={{ withColumnVisibility: true }}
        >
          <DataGrid.Toolbar>
            <DataGrid.ColumnVisibilityToggle />
          </DataGrid.Toolbar>
        </Grid>
      );
      expect(getExportHeaders(getExportColumns(lastStore!.table, undefined))).toEqual([
        'Full name',
        'Age',
      ]);
      await userEvent.click(screen.getByRole('button', { name: 'Columns' }));
      const menu = await screen.findByRole('menu');
      expect(menu).toHaveTextContent('Full name');
    });

    it('labels list view items', () => {
      render(
        <Grid
          columns={[{ accessorKey: 'name', header: 'Name', meta: { label: 'Full name' } }]}
          listView
        />
      );
      expect(screen.getAllByText('Full name')).toHaveLength(data.length);
    });
  });
});
