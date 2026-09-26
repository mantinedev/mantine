import { act, renderHook } from '@testing-library/react';
import { DataGridColumnDef } from '../DataGrid.types';
import { useDataGrid } from '../hooks';
import { copyToClipboard } from './clipboard-copy';
import { getExportColumns, getExportMatrix } from './export-utils';

interface Person {
  name: string;
  age: number;
  city: string;
}

const data: Person[] = [
  { name: 'Alice', age: 30, city: 'Paris' },
  { name: 'Bob', age: 25, city: 'Berlin' },
  { name: 'Carol', age: 41, city: 'Rome' },
];

const columns: DataGridColumnDef<Person>[] = [
  {
    id: 'person',
    header: 'Person',
    columns: [
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'age', header: 'Age' },
    ],
  },
  { accessorKey: 'city', header: 'City' },
];

describe('@mantine/data-grid/export-utils', () => {
  it('exports leaf columns only for the all column scope', () => {
    const hook = renderHook(() => useDataGrid({ data, columns }));
    const ids = getExportColumns(hook.result.current.table, 'all').map((column) => column.id);
    expect(ids).toEqual(['name', 'age', 'city']);
  });

  it('includes hidden leaf columns for the all scope and excludes them for visible', () => {
    const hook = renderHook(() => useDataGrid({ data, columns }));
    act(() => hook.result.current.table.getColumn('age')!.toggleVisibility(false));
    const table = hook.result.current.table;
    expect(getExportColumns(table, 'all').map((column) => column.id)).toEqual([
      'name',
      'age',
      'city',
    ]);
    expect(getExportColumns(table, 'visible').map((column) => column.id)).toEqual(['name', 'city']);
  });

  it('exports columns in the displayed pinned order', async () => {
    const writeText = jest.fn(() => Promise.resolve());
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
    const hook = renderHook(() =>
      useDataGrid({
        data: data.slice(0, 1),
        columns,
        withColumnPinning: true,
        columnPinning: { start: ['age'], end: ['name'] },
      })
    );
    const table = hook.result.current.table;
    expect(getExportColumns(table, 'visible').map((column) => column.id)).toEqual([
      'age',
      'city',
      'name',
    ]);
    expect(getExportColumns(table, 'all').map((column) => column.id)).toEqual([
      'age',
      'city',
      'name',
    ]);
    expect(getExportMatrix(table).headers).toEqual(['Age', 'City', 'Name']);
    await copyToClipboard(table, { includeHeaders: true });
    expect(writeText).toHaveBeenCalledWith('Age\tCity\tName\n30\tParis\tAlice');
  });

  it('keeps raw cell values in raw mode and strings them otherwise', () => {
    const hook = renderHook(() => useDataGrid({ data: data.slice(0, 1), columns }));
    const table = hook.result.current.table;
    expect(getExportMatrix(table, { raw: true }).rows).toEqual([['Alice', 30, 'Paris']]);
    expect(getExportMatrix(table).rows).toEqual([['Alice', '30', 'Paris']]);
  });
});

describe('@mantine/data-grid/export-utils row order', () => {
  const flatColumns: DataGridColumnDef<Person>[] = [
    { accessorKey: 'name', header: 'Name', enableColumnFilter: true },
    { accessorKey: 'age', header: 'Age', enableSorting: true },
    { accessorKey: 'city', header: 'City' },
  ];
  const sorting = [{ id: 'age', desc: true }];
  const exportNames = (table: any, rows: 'all' | 'filtered' | 'selected') =>
    getExportMatrix(table, { rows, columns: ['name'] }).rows.map((row) => row[0]);

  it('exports all rows in the current sort order', () => {
    const hook = renderHook(() =>
      useDataGrid({
        data,
        columns: flatColumns,
        sorting,
        columnFilters: [{ id: 'name', value: 'o' }],
      })
    );
    expect(exportNames(hook.result.current.table, 'all')).toEqual(['Carol', 'Alice', 'Bob']);
  });

  it('exports filtered rows in the current sort order', () => {
    const hook = renderHook(() =>
      useDataGrid({
        data,
        columns: flatColumns,
        sorting,
        columnFilters: [{ id: 'name', value: 'o' }],
      })
    );
    expect(exportNames(hook.result.current.table, 'filtered')).toEqual(['Carol', 'Bob']);
  });

  it('exports selected rows in the current sort order', () => {
    const hook = renderHook(() =>
      useDataGrid({
        data,
        columns: flatColumns,
        sorting,
        withRowSelection: true,
        rowSelection: { '0': true, '1': true, '2': true },
      })
    );
    expect(exportNames(hook.result.current.table, 'selected')).toEqual(['Carol', 'Alice', 'Bob']);
  });

  it('keeps the data order when sorting is not enabled', () => {
    const hook = renderHook(() =>
      useDataGrid({ data, columns: flatColumns, withSorting: false, sorting })
    );
    expect(exportNames(hook.result.current.table, 'all')).toEqual(['Alice', 'Bob', 'Carol']);
    expect(exportNames(hook.result.current.table, 'filtered')).toEqual(['Alice', 'Bob', 'Carol']);
  });

  it('exports sorted data rows without group rows when grouping', () => {
    const grouped = [...data, { name: 'Dave', age: 35, city: 'Paris' }];
    const hook = renderHook(() =>
      useDataGrid({ data: grouped, columns: flatColumns, sorting, grouping: ['city'] })
    );
    const visibleLeafNames = hook.result.current.table
      .getSortedRowModel()
      .flatRows.filter((row) => !row.getIsGrouped())
      .map((row) => row.original.name);
    expect(visibleLeafNames).toEqual(['Dave', 'Alice', 'Carol', 'Bob']);
    expect(exportNames(hook.result.current.table, 'filtered')).toEqual(visibleLeafNames);
    expect(exportNames(hook.result.current.table, 'all')).toEqual([
      'Carol',
      'Dave',
      'Alice',
      'Bob',
    ]);
  });
});

describe('@mantine/data-grid/copyToClipboard', () => {
  const writeText = jest.fn(() => Promise.resolve());

  beforeEach(() => {
    writeText.mockClear();
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
  });

  it('copies all rows by default', async () => {
    const hook = renderHook(() =>
      useDataGrid({ data, columns, withRowSelection: true, pageSize: 2 })
    );
    act(() => hook.result.current.table.getRow('0').toggleSelected(true));
    await copyToClipboard(hook.result.current.table);
    expect(writeText).toHaveBeenCalledWith('Alice\t30\tParis\nBob\t25\tBerlin\nCarol\t41\tRome');
  });

  it('falls back to the current page when rows is selected and nothing is selected', async () => {
    const hook = renderHook(() =>
      useDataGrid({ data, columns, withRowSelection: true, pageSize: 2 })
    );
    await copyToClipboard(hook.result.current.table, { rows: 'selected' });
    expect(writeText).toHaveBeenCalledWith('Alice\t30\tParis\nBob\t25\tBerlin');
  });
});
