import { act } from 'react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { getExportColumns, getExportHeaders } from '../export/export-utils';
import { useDataGrid, UseDataGridOptions } from '../hooks/use-data-grid';
import {
  normalizeColumnOrder,
  normalizeColumnPinning,
  UTILITY_COLUMN_IDS,
} from './utility-columns';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
];

const data = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'Dana', age: 41 },
];

let lastStore: ReturnType<typeof useDataGrid> | null = null;

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<any>, 'store'> & {
  storeOptions: Partial<UseDataGridOptions<any>>;
}) {
  const store = useDataGrid({ data, columns, ...storeOptions });
  lastStore = store;
  return <DataGrid store={store} {...props} />;
}

describe('@mantine/data-grid/utility-columns', () => {
  describe('normalizeColumnOrder', () => {
    it('prepends missing utility ids in their default order', () => {
      expect(normalizeColumnOrder(['age', 'name'], ['__select__', '__rowNumber__'])).toEqual([
        '__select__',
        '__rowNumber__',
        'age',
        'name',
      ]);
    });

    it('keeps an explicit utility position', () => {
      expect(
        normalizeColumnOrder(
          ['__rowNumber__', '__select__', 'age'],
          ['__select__', '__rowNumber__']
        )
      ).toEqual(['__rowNumber__', '__select__', 'age']);
    });

    it('returns an empty order untouched', () => {
      expect(normalizeColumnOrder([], ['__select__'])).toEqual([]);
    });

    it('moves grouped columns right after the utility block', () => {
      expect(normalizeColumnOrder([], ['__select__'], ['team'])).toEqual(['__select__', 'team']);
      expect(normalizeColumnOrder(['name', 'team', 'age'], ['__select__'], ['age'])).toEqual([
        '__select__',
        'age',
        'name',
        'team',
      ]);
    });
  });

  describe('normalizeColumnPinning', () => {
    it('forces utility ids to the head of start and out of end', () => {
      expect(
        normalizeColumnPinning({ start: ['name'], end: ['__select__'] }, [
          '__select__',
          '__rowNumber__',
        ])
      ).toEqual({ start: ['__select__', '__rowNumber__', 'name'], end: [] });
    });
  });

  it('injects the selection column as a display column with utility meta', () => {
    const { container } = render(<Grid storeOptions={{ withRowSelection: true }} />);
    const leaf = lastStore!.table.getAllLeafColumns();
    expect(leaf[0].id).toBe(UTILITY_COLUMN_IDS.select);
    expect(leaf[0].columnDef.meta?.utility).toBe('select');
    expect(leaf[0].getCanSort()).toBe(false);
    expect(leaf[0].getCanHide()).toBe(false);
    expect(container.querySelector('th[data-utility="select"]')).toBeInTheDocument();
    expect(container.querySelectorAll('td[data-utility="select"]')).toHaveLength(data.length);
  });

  it('sizes utility columns from the size table', () => {
    const { container } = render(
      <Grid storeOptions={{ withRowSelection: true, withRowNumbers: true, size: 'md' }} />
    );
    expect(container.querySelector('th[data-utility="select"]')).toHaveStyle({ width: '32px' });
    expect(container.querySelector('th[data-utility="rowNumber"]')).toHaveStyle({ width: '40px' });
  });

  it('orders utility columns reorder, select, expand, rowNumber', () => {
    render(
      <Grid
        storeOptions={{
          onRowOrderChange: () => {},
          withRowSelection: true,
          withRowExpansion: true,
          withRowNumbers: true,
        }}
      />
    );
    expect(lastStore!.table.getVisibleLeafColumns().map((c) => c.id)).toEqual([
      '__reorder__',
      '__select__',
      '__expand__',
      '__rowNumber__',
      'name',
      'age',
    ]);
  });

  it('keeps utility columns first when columnOrder omits them', () => {
    render(<Grid storeOptions={{ withRowSelection: true, columnOrder: ['age', 'name'] }} />);
    expect(lastStore!.table.getVisibleLeafColumns().map((c) => c.id)).toEqual([
      '__select__',
      'age',
      'name',
    ]);
  });

  it('keeps utility columns first after setColumnOrder', () => {
    render(<Grid storeOptions={{ withRowSelection: true, withColumnReorder: true }} />);
    act(() => lastStore!.table.setColumnOrder(['age', 'name']));
    expect(lastStore!.table.getVisibleLeafColumns().map((c) => c.id)).toEqual([
      '__select__',
      'age',
      'name',
    ]);
  });

  it('pins utility columns at the head of the start side', () => {
    render(
      <Grid
        storeOptions={{
          withRowSelection: true,
          withRowNumbers: true,
          columnPinning: { start: ['name'], end: [] },
        }}
      />
    );
    expect(lastStore!.columnPinning.start).toEqual(['__select__', '__rowNumber__', 'name']);
    expect(lastStore!.table.getColumn('__select__')!.getIsPinned()).toBe('start');
  });

  it('numbers data rows continuously across pages', async () => {
    const { container } = render(<Grid storeOptions={{ withRowNumbers: true, pageSize: 2 }} />);
    const numbers = () =>
      Array.from(container.querySelectorAll('td[data-utility="rowNumber"]')).map(
        (el) => el.textContent
      );
    expect(screen.getByText('#')).toBeInTheDocument();
    expect(numbers()).toEqual(['1', '2']);
    act(() => lastStore!.table.nextPage());
    await screen.findByText('Charlie');
    expect(numbers()).toEqual(['3', '4']);
  });

  it('labels the selection controls', () => {
    render(<Grid storeOptions={{ withRowSelection: true }} />);
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox', { name: 'Select row' })).toHaveLength(data.length);
  });

  it('labels the expand toggle', async () => {
    render(
      <Grid
        storeOptions={{ withRowExpansion: true }}
        renderExpandedRow={({ row }) => <div>Details for {row.original.name}</div>}
      />
    );
    const toggle = screen.getAllByRole('button', { name: 'Expand row' })[0];
    await userEvent.click(toggle);
    expect(screen.getByText('Details for Alice')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Collapse row' })).toBeInTheDocument();
  });

  it('renders a draggable grip in the reorder column', () => {
    const { container } = render(<Grid storeOptions={{ onRowOrderChange: () => {} }} />);
    const grip = container.querySelector('td[data-utility="reorder"] [draggable="true"]');
    expect(grip).toBeInTheDocument();
    expect(grip).toHaveAttribute('aria-label', 'Drag to reorder');
  });

  it('renders no grip in virtualized grids where row reorder is unsupported', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const { container } = render(
      <Grid storeOptions={{ onRowOrderChange: () => {} }} virtualize="rows" height={200} />
    );
    expect(container.querySelector('[draggable="true"]')).not.toBeInTheDocument();
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('row reorder'));
    warn.mockRestore();
  });

  it('gives utility columns empty tfoot cells', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          withRowSelection: true,
          columns: [
            { accessorKey: 'name', header: 'Name' },
            { accessorKey: 'age', header: 'Age', aggregationFn: 'sum' },
          ],
        }}
      />
    );
    const rows = container.querySelectorAll('tfoot tr');
    expect(rows[rows.length - 1].querySelectorAll('td')).toHaveLength(3);
    expect(rows[rows.length - 1].querySelector('td[data-utility="select"]')).toBeInTheDocument();
  });

  it('renders utility cells on group rows', () => {
    const { container } = render(
      <Grid storeOptions={{ withRowSelection: true, grouping: ['age'] }} />
    );
    const groupRow = container.querySelector('tr[data-group-row]')!;
    expect(groupRow.querySelectorAll('td')).toHaveLength(3);
    expect(groupRow.querySelector('td[data-utility="select"] input')).toBeInTheDocument();
  });

  it('renders utility header cells in the virtual header', () => {
    const { container } = render(
      <Grid storeOptions={{ withRowSelection: true }} virtualize="rows" height={200} />
    );
    expect(
      container.querySelector('[role="columnheader"][data-utility="select"]')
    ).toBeInTheDocument();
  });

  it('hides utility columns from the column visibility menu', async () => {
    render(
      <Grid storeOptions={{ withRowSelection: true, withColumnVisibility: true }}>
        <DataGrid.Toolbar>
          <DataGrid.ColumnVisibilityToggle />
        </DataGrid.Toolbar>
      </Grid>
    );
    await userEvent.click(screen.getByRole('button', { name: 'Columns' }));
    const menu = await screen.findByRole('menu');
    expect(menu).toHaveTextContent('Name');
    expect(menu).toHaveTextContent('Age');
    expect(menu).not.toHaveTextContent('__select__');
  });

  it('excludes utility columns from export', () => {
    render(<Grid storeOptions={{ withRowSelection: true, withRowNumbers: true }} />);
    expect(getExportHeaders(getExportColumns(lastStore!.table, undefined))).toEqual([
      'Name',
      'Age',
    ]);
    expect(getExportHeaders(getExportColumns(lastStore!.table, 'all'))).toEqual(['Name', 'Age']);
  });

  it('keeps the tree toggle in the first data column', () => {
    const treeData = [{ name: 'Root', age: 1, children: [{ name: 'Leaf', age: 2 }] }];
    const { container } = render(
      <Grid
        storeOptions={{
          data: treeData,
          withRowSelection: true,
          getSubRows: (row: any) => row.children,
        }}
      />
    );
    expect(container.querySelector('td[data-utility="expand"]')).not.toBeInTheDocument();
    const firstDataCell = container.querySelector('tbody tr td:not([data-utility])');
    expect(firstDataCell!.querySelector('button[aria-label="Expand row"]')).toBeInTheDocument();
  });
});
