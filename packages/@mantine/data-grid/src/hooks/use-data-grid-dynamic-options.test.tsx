import type { SortingState } from '@tanstack/react-table';
import { act, renderHook } from '@testing-library/react';
import type { UseDataGridOptions } from './use-data-grid.types';
import { useDataGrid } from '.';

interface Person {
  name: string;
  age: number;
  team: string;
}

const columns = [
  { accessorKey: 'name', header: 'Name', enableSorting: true },
  { accessorKey: 'age', header: 'Age', enableSorting: true },
  { accessorKey: 'team', header: 'Team' },
];

const data: Person[] = [
  { name: 'Alice', age: 30, team: 'a' },
  { name: 'Bob', age: 25, team: 'b' },
  { name: 'Carol', age: 35, team: 'a' },
];

function renderGrid(initial: Partial<UseDataGridOptions<Person>>) {
  return renderHook(
    (props: Partial<UseDataGridOptions<Person>>) =>
      useDataGrid<Person>({ data, columns, ...props }),
    { initialProps: initial }
  );
}

const names = (hook: ReturnType<typeof renderGrid>) =>
  hook.result.current.table.getRowModel().rows.map((row) => row.original.name);

describe('@mantine/data-grid/use-data-grid features enabled after mount', () => {
  it('paginates when pagination is enabled after mount', () => {
    const hook = renderGrid({});
    expect(names(hook)).toHaveLength(3);
    hook.rerender({ pageSize: 1 });
    expect(hook.result.current.withPagination).toBe(true);
    expect(names(hook)).toEqual(['Alice']);
  });

  it('stops paginating when pagination is disabled after mount', () => {
    const hook = renderGrid({ pageSize: 1 });
    expect(names(hook)).toEqual(['Alice']);
    hook.rerender({});
    expect(names(hook)).toHaveLength(3);
  });

  it('sorts when sorting is enabled after mount', () => {
    const sorting: SortingState = [{ id: 'age', desc: false }];
    const hook = renderGrid({ withSorting: false, sorting });
    expect(names(hook)).toEqual(['Alice', 'Bob', 'Carol']);
    hook.rerender({ withSorting: true, sorting });
    expect(names(hook)).toEqual(['Bob', 'Alice', 'Carol']);
  });

  it('groups rows when grouping is enabled after mount', () => {
    const hook = renderGrid({});
    hook.rerender({ withGrouping: true, grouping: ['team'] });
    const rows = hook.result.current.table.getRowModel().rows;
    expect(rows.map((row) => row.getIsGrouped())).toEqual([true, true]);
  });

  it('filters rows when filtering is enabled after mount', () => {
    const columnFilters = [{ id: 'name', value: 'bob' }];
    const hook = renderGrid({ withFiltering: false, columnFilters });
    expect(names(hook)).toHaveLength(3);
    hook.rerender({ withFiltering: true, columnFilters });
    expect(names(hook)).toEqual(['Bob']);
  });

  it('does not paginate, sort or group when the features are off', () => {
    const hook = renderGrid({
      withSorting: false,
      sorting: [{ id: 'age', desc: true }],
      data: Array.from({ length: 25 }, (_, index) => ({
        name: `n${index}`,
        age: index,
        team: 'a',
      })),
    });
    expect(names(hook)).toHaveLength(25);
    expect(names(hook)[0]).toBe('n0');
  });
});

describe('@mantine/data-grid/use-data-grid removed options', () => {
  it('releases controlled sorting', () => {
    const onSortingChange = jest.fn();
    const hook = renderGrid({ withSorting: true, sorting: [], onSortingChange });
    act(() => hook.result.current.table.setSorting([{ id: 'age', desc: false }]));
    expect(onSortingChange).toHaveBeenCalledTimes(1);
    expect(hook.result.current.sorting).toEqual([]);

    hook.rerender({ withSorting: true });
    act(() => hook.result.current.table.setSorting([{ id: 'age', desc: false }]));
    expect(onSortingChange).toHaveBeenCalledTimes(1);
    expect(hook.result.current.sorting).toEqual([{ id: 'age', desc: false }]);
    expect(names(hook)).toEqual(['Bob', 'Alice', 'Carol']);
  });

  it('stops expanding rows when row expansion is turned off', () => {
    const hook = renderGrid({ withRowExpansion: true });
    expect(hook.result.current.table.getRowModel().rows[0].getCanExpand()).toBe(true);
    hook.rerender({ withRowExpansion: false });
    expect(hook.result.current.table.getRowModel().rows[0].getCanExpand()).toBe(false);
  });

  it('restores the default grouped column mode when utility columns are removed', () => {
    const hook = renderGrid({ withGrouping: true, grouping: ['team'], withRowSelection: true });
    expect(hook.result.current.table.options.groupedColumnMode).toBe(false);
    hook.rerender({ withGrouping: true, grouping: ['team'] });
    expect(hook.result.current.table.options.groupedColumnMode).toBe('reorder');
  });

  it('restores a removed tableOptions key to its default', () => {
    const hook = renderGrid({ tableOptions: { maxLeafRowFilterDepth: 1 } });
    hook.rerender({});
    expect(hook.result.current.table.options.maxLeafRowFilterDepth).toBe(100);
  });
});

describe('@mantine/data-grid/use-data-grid pagination', () => {
  const manyRows = (count: number) =>
    Array.from({ length: count }, (_, index) => ({ name: `n${index}`, age: index, team: 'a' }));

  it('keeps the page index of manual pagination without rowCount or pageCount', () => {
    const hook = renderGrid({ manualPagination: true, pageSize: 10, data: manyRows(10) });
    act(() => hook.result.current.table.setPageIndex(1));
    expect(hook.result.current.pagination.pageIndex).toBe(1);
  });

  it('clamps the page index of manual pagination to pageCount', () => {
    const hook = renderGrid({
      manualPagination: true,
      pageSize: 10,
      pageCount: 2,
      data: manyRows(10),
    });
    act(() => hook.result.current.table.setPageIndex(4));
    expect(hook.result.current.pagination.pageIndex).toBe(1);
  });

  it('keeps a restored page index of manual pagination while the total is unknown', () => {
    const hook = renderGrid({
      manualPagination: true,
      pageSize: 10,
      pageCount: -1,
      data: manyRows(10),
      tableOptions: { initialState: { pagination: { pageIndex: 5, pageSize: 10 } } },
    });
    expect(hook.result.current.pagination.pageIndex).toBe(5);
  });

  it('applies pageSize changes after mount', () => {
    const data = manyRows(25);
    const hook = renderGrid({ pageSize: 5, data });
    expect(names(hook)).toHaveLength(5);
    act(() => hook.result.current.table.setPageIndex(2));
    hook.rerender({ pageSize: 10, data });
    expect(hook.result.current.pagination).toEqual({ pageIndex: 1, pageSize: 10 });
    expect(names(hook)[0]).toBe('n10');
  });

  it('applies pageSize when pagination is enabled after mount', () => {
    const data = manyRows(25);
    const hook = renderGrid({ data });
    hook.rerender({ pageSize: 3, data });
    expect(names(hook)).toHaveLength(3);
    expect(hook.result.current.pagination).toEqual({ pageIndex: 0, pageSize: 3 });
  });

  it('does not override pageSize changes made through the table', () => {
    const data = manyRows(25);
    const hook = renderGrid({ pageSize: 5, data });
    act(() => hook.result.current.table.setPageSize(20));
    hook.rerender({ pageSize: 5, data });
    expect(hook.result.current.pagination.pageSize).toBe(20);
  });

  it('does not change controlled pagination when pageSize changes', () => {
    const data = manyRows(25);
    const pagination = { pageIndex: 0, pageSize: 5 };
    const hook = renderGrid({ pageSize: 5, pagination, data });
    hook.rerender({ pageSize: 10, pagination, data });
    expect(hook.result.current.pagination).toEqual(pagination);
  });

  it('does not write pageSize changes into an external pagination atom', () => {
    const data = manyRows(25);
    let value = { pageIndex: 0, pageSize: 5 };
    const listeners = new Set<(next: typeof value) => void>();
    const paginationAtom: any = {
      get: () => value,
      set: (next: typeof value | ((prev: typeof value) => typeof value)) => {
        value = typeof next === 'function' ? next(value) : next;
        listeners.forEach((listener) => listener(value));
      },
      subscribe: (listener: (next: typeof value) => void) => {
        listeners.add(listener);
        return { unsubscribe: () => listeners.delete(listener) };
      },
    };
    const tableOptions = { atoms: { pagination: paginationAtom } };
    const hook = renderGrid({ pageSize: 5, data, tableOptions });
    hook.rerender({ pageSize: 10, data, tableOptions });
    expect(paginationAtom.get()).toEqual({ pageIndex: 0, pageSize: 5 });
  });
});

describe('@mantine/data-grid/use-data-grid utility columns toggled after mount', () => {
  const leafIds = (hook: ReturnType<typeof renderGrid>) =>
    hook.result.current.table.getVisibleLeafColumns().map((column) => column.id);

  it('keeps the current column order and pinning when a utility column is turned on', () => {
    const hook = renderGrid({ withColumnPinning: true });
    act(() => {
      hook.result.current.table.setColumnOrder(['team', 'age', 'name']);
      hook.result.current.table.getColumn('team')!.pin('start');
    });
    expect(leafIds(hook)).toEqual(['team', 'age', 'name']);

    hook.rerender({ withColumnPinning: true, withRowSelection: true });
    expect(hook.result.current.table.store.state.columnOrder).toEqual([
      '__select__',
      'team',
      'age',
      'name',
    ]);
    expect(hook.result.current.table.store.state.columnPinning).toEqual({
      start: ['__select__', 'team'],
      end: [],
    });
  });

  it('hands the user column order and pinning back when utility columns are turned off', () => {
    const hook = renderGrid({ withColumnPinning: true, withRowSelection: true });
    act(() => {
      hook.result.current.table.setColumnOrder(['__select__', 'team', 'age', 'name']);
      hook.result.current.table.getColumn('age')!.pin('end');
    });

    hook.rerender({ withColumnPinning: true });
    expect(hook.result.current.table.store.state.columnOrder).toEqual(['team', 'age', 'name']);
    expect(hook.result.current.table.store.state.columnPinning).toEqual({
      start: [],
      end: ['age'],
    });
  });

  it('hands back the user column order, not the grid-forced grouped order, when utility columns are turned off', () => {
    const hook = renderGrid({ withRowSelection: true, grouping: ['team'] });
    expect(leafIds(hook)).toEqual(['__select__', 'team', 'name', 'age']);

    hook.rerender({ grouping: ['team'] });
    expect(hook.result.current.columnOrder).not.toContain('team');

    hook.rerender({ grouping: [] });
    expect(leafIds(hook)).toEqual(['name', 'age', 'team']);
  });

  it('hands back a user column order changed while grouped', () => {
    const hook = renderGrid({ withRowSelection: true, grouping: ['team'] });
    act(() => hook.result.current.table.setColumnOrder(['__select__', 'age', 'name', 'team']));

    hook.rerender({ grouping: ['team'] });
    hook.rerender({ grouping: [] });
    expect(leafIds(hook)).toEqual(['age', 'name', 'team']);
    expect(hook.result.current.columnOrder).toEqual(['age', 'name', 'team']);
  });

  it('does not override controlled column order and pinning', () => {
    const columnOrder = ['team', 'age', 'name'];
    const columnPinning = { start: ['team'], end: [] };
    const onColumnOrderChange = jest.fn();
    const onColumnPinningChange = jest.fn();
    const props = {
      withColumnPinning: true,
      columnOrder,
      columnPinning,
      onColumnOrderChange,
      onColumnPinningChange,
    };
    const hook = renderGrid({ ...props, withRowSelection: true });
    hook.rerender(props);
    expect(hook.result.current.table.store.state.columnOrder).toBe(columnOrder);
    expect(hook.result.current.table.store.state.columnPinning).toBe(columnPinning);
    expect(onColumnOrderChange).not.toHaveBeenCalled();
    expect(onColumnPinningChange).not.toHaveBeenCalled();
  });
});
