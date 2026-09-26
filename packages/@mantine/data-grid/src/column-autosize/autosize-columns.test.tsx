import { act } from '@testing-library/react';
import { render } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { DataGridColumnDef } from '../DataGrid.types';
import { DataGridStore, useDataGrid, UseDataGridOptions } from '../hooks';
import { mockVirtualViewport } from '../virtual-test-utils';
import { autosizeColumns } from './autosize-columns';

interface Person {
  id: string;
  name: string;
  age: number;
  city: string;
  country: string;
}

const data: Person[] = [
  { id: 'a', name: 'Alice', age: 30, city: 'Paris', country: 'France' },
  { id: 'b', name: 'Bob', age: 25, city: 'Berlin', country: 'Germany' },
  { id: 'c', name: 'Carol', age: 41, city: 'Rome', country: 'Italy' },
];

const columns: DataGridColumnDef<Person>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
  { accessorKey: 'city', header: 'City' },
  { accessorKey: 'country', header: 'Country' },
];

const CONTENT_SIZING = { name: 100, age: 60, city: 120, country: 140 };

let lastStore: DataGridStore<Person> | null = null;

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<Person>, 'store'> & { storeOptions?: Partial<UseDataGridOptions<Person>> }) {
  const store = useDataGrid<Person>({
    data,
    columns,
    getRowId: (row) => row.id,
    ...storeOptions,
  });
  lastStore = store;
  return <DataGrid store={store} {...props} />;
}

interface MeasureSnapshot {
  rows: number;
  cells: number;
  rowspan: boolean;
}

function mockContentWidths() {
  const snapshots: MeasureSnapshot[] = [];
  const cellTags: string[][] = [];
  const rowDisplays: string[] = [];
  const spy = jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockImplementation(function (this: HTMLElement) {
      const measureTable = this.closest('table[aria-hidden="true"]');
      let width = 60;
      if (measureTable && this.parentElement?.tagName === 'TR') {
        const rows = Array.from(measureTable.querySelectorAll('tr'));
        if (snapshots.length === 0) {
          snapshots.push({
            rows: rows.length,
            cells: measureTable.querySelectorAll('tr > *').length,
            rowspan: !!measureTable.querySelector('[rowspan]'),
          });
          rowDisplays.push(...rows.map((row) => row.style.display));
          cellTags.push(
            ...rows.map((row) =>
              Array.from(row.children).map(
                (cell) => `${cell.tagName}>${cell.firstElementChild?.getAttribute('role') ?? ''}`
              )
            )
          );
        }
        const index = Array.from(this.parentElement.children).indexOf(this);
        width = Math.max(
          ...rows.map((row) => (row.children[index]?.textContent?.trim().length ?? 0) * 20)
        );
      }
      return { width, height: 20, top: 0, left: 0, right: width, bottom: 20 } as DOMRect;
    });

  return { snapshots, cellTags, rowDisplays, restore: () => spy.mockRestore() };
}

describe('@mantine/data-grid/autosizeColumns', () => {
  let restoreViewport: () => void;
  let widths: ReturnType<typeof mockContentWidths>;

  beforeEach(() => {
    restoreViewport = mockVirtualViewport();
    widths = mockContentWidths();
  });

  afterEach(() => {
    widths.restore();
    restoreViewport();
    lastStore = null;
  });

  it('builds a measuring table with one row per source row and one cell per column', () => {
    const { container } = render(<Grid />);
    act(() => autosizeColumns(lastStore!.table, container));

    expect(widths.snapshots).toEqual([
      { rows: data.length + 1, cells: (data.length + 1) * columns.length, rowspan: false },
    ]);
    expect(lastStore!.columnSizing).toEqual(CONTENT_SIZING);
    expect(container.querySelectorAll('table')).toHaveLength(1);
  });

  it('measures cells of virtualized grids by column id', () => {
    const { container } = render(<Grid virtualize="rows" height={300} />);
    act(() => autosizeColumns(lastStore!.table, container));

    expect(widths.snapshots[0].rows).toBe(data.length + 1);
    expect(lastStore!.columnSizing).toEqual(CONTENT_SIZING);
    expect(container.querySelector('table[aria-hidden="true"]')).not.toBeInTheDocument();
  });

  it('wraps each virtualized div cell clone in its own table cell', () => {
    const { container } = render(<Grid virtualize="rows" height={300} />);
    act(() => autosizeColumns(lastStore!.table, container));

    expect(widths.cellTags).toEqual([
      columns.map(() => 'TD>columnheader'),
      ...data.map(() => columns.map(() => 'TD>gridcell')),
    ]);
    expect(widths.rowDisplays).toEqual(Array(data.length + 1).fill('table-row'));
  });

  it('measures pinned end columns by id instead of position', () => {
    const { container } = render(
      <Grid
        storeOptions={{ withColumnPinning: true, columnPinning: { start: [], end: ['name'] } }}
      />
    );
    act(() => autosizeColumns(lastStore!.table, container));

    expect(lastStore!.columnSizing).toEqual(CONTENT_SIZING);
  });

  it('strips rowspan and colspan from measured clones', () => {
    const { container } = render(<Grid />);
    container.querySelector('td[data-column-id="city"]')!.setAttribute('rowspan', '2');
    act(() => autosizeColumns(lastStore!.table, container));

    expect(widths.snapshots[0].rowspan).toBe(false);
  });

  it('does not credit the width of cells spanning several columns to their first column', () => {
    const { container } = render(<Grid />);
    const spanningCell = container.querySelector<HTMLElement>('td[data-column-id="city"]')!;
    spanningCell.setAttribute('colspan', '2');
    spanningCell.textContent = 'x'.repeat(20);
    act(() => autosizeColumns(lastStore!.table, container));

    expect(lastStore!.columnSizing).toEqual(CONTENT_SIZING);
  });

  it('measures column footer cells', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          columns: columns.map((column) =>
            'accessorKey' in column && column.accessorKey === 'name'
              ? { ...column, footer: 'x'.repeat(10) }
              : column
          ),
        }}
      />
    );
    expect(container.querySelector('tfoot td[data-column-id="name"]')).toBeInTheDocument();
    act(() => autosizeColumns(lastStore!.table, container));

    expect(lastStore!.columnSizing).toEqual({ ...CONTENT_SIZING, name: 200 });
  });

  it('ignores expanded row panels', () => {
    const { container } = render(
      <Grid
        storeOptions={{ withRowExpansion: true, expanded: { a: true } }}
        renderExpandedRow={() => 'x'.repeat(40)}
      />
    );
    act(() =>
      autosizeColumns(lastStore!.table, container, {
        columnIds: ['name', 'age', 'city', 'country'],
      })
    );

    expect(widths.snapshots[0].rows).toBe(data.length + 1);
    expect(lastStore!.columnSizing).toEqual(CONTENT_SIZING);
  });

  it('ignores cells of nested grids', () => {
    const { container } = render(
      <Grid
        storeOptions={{ withRowExpansion: true, expanded: { a: true } }}
        renderExpandedRow={() => (
          <DataGrid
            data={[{ id: 'n', name: 'x'.repeat(20), age: 1, city: 'x', country: 'x' }]}
            columns={columns}
          />
        )}
      />
    );
    act(() => autosizeColumns(lastStore!.table, container, { columnIds: ['name'] }));

    expect(lastStore!.columnSizing).toEqual({ name: 100 });
  });

  it('measures a nested grid rendered inside an expanded row of an outer grid', () => {
    let nestedStore: DataGridStore<Person> | null = null;
    function NestedGrid() {
      const store = useDataGrid<Person>({ data, columns, getRowId: (row) => row.id });
      nestedStore = store;
      return <DataGrid store={store} data-testid="nested-grid" />;
    }

    const { getByTestId } = render(
      <Grid
        storeOptions={{ withRowExpansion: true, expanded: { a: true } }}
        renderExpandedRow={() => <NestedGrid />}
      />
    );
    act(() => autosizeColumns(nestedStore!.table, getByTestId('nested-grid')));

    expect(nestedStore!.columnSizing).toEqual(CONTENT_SIZING);
  });
});

describe('@mantine/data-grid/autosizeColumns toolbar table', () => {
  let restoreViewport: () => void;
  let widths: ReturnType<typeof mockContentWidths>;

  beforeEach(() => {
    restoreViewport = mockVirtualViewport();
    widths = mockContentWidths();
  });

  afterEach(() => {
    widths.restore();
    restoreViewport();
    lastStore = null;
  });

  it.each([undefined, 'rows' as const])(
    'measures the grid instead of a table rendered in the toolbar (virtualize=%s)',
    (virtualize) => {
      const { container } = render(
        <Grid virtualize={virtualize} height={virtualize ? 300 : undefined}>
          <DataGrid.Toolbar>
            <table>
              <tbody>
                <tr>
                  <td>toolbar</td>
                </tr>
              </tbody>
            </table>
          </DataGrid.Toolbar>
        </Grid>
      );
      const root = container.querySelector<HTMLElement>('.mantine-DataGrid-root')!;
      act(() => autosizeColumns(lastStore!.table, root));

      expect(lastStore!.columnSizing).toEqual(CONTENT_SIZING);
    }
  );
});

describe('@mantine/data-grid/autosizeColumns empty cell groups', () => {
  let restoreViewport: () => void;
  let widths: ReturnType<typeof mockContentWidths>;

  beforeEach(() => {
    restoreViewport = mockVirtualViewport();
    widths = mockContentWidths();
  });

  afterEach(() => {
    widths.restore();
    restoreViewport();
    lastStore = null;
  });

  it('leaves columns without rendered cells unchanged', () => {
    const { container } = render(<Grid />);
    act(() => lastStore!.table.setColumnSizing({ country: 300 }));
    container
      .querySelectorAll('[data-column-id="country"]')
      .forEach((cell) => cell.removeAttribute('data-column-id'));
    act(() => autosizeColumns(lastStore!.table, container));

    expect(lastStore!.columnSizing).toEqual({ ...CONTENT_SIZING, country: 300 });
  });

  it('does not shrink columns of an empty grid when headers are excluded', () => {
    const { container } = render(<Grid storeOptions={{ data: [] }} />);
    act(() => lastStore!.table.setColumnSizing({ name: 200, age: 150 }));
    act(() => autosizeColumns(lastStore!.table, container, { includeHeaders: false }));

    expect(lastStore!.columnSizing).toEqual({ name: 200, age: 150 });
  });
});
