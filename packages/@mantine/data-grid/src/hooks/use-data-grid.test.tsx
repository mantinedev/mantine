import { useState } from 'react';
import { act, renderHook } from '@testing-library/react';
import { useDataGrid } from '.';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
];

const data = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];

describe('@mantine/data-grid/use-data-grid size', () => {
  it('defaults size to sm', () => {
    const hook = renderHook(() => useDataGrid({ data, columns }));
    expect(hook.result.current.size).toBe('sm');
  });

  it('updates size with setSize when uncontrolled', () => {
    const hook = renderHook(() => useDataGrid({ data, columns }));
    act(() => hook.result.current.setSize('lg'));
    expect(hook.result.current.size).toBe('lg');
  });

  it('keeps the controlled size and reports changes through onSizeChange', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useDataGrid({ data, columns, size: 'md', onSizeChange: spy }));
    act(() => hook.result.current.setSize('xl'));
    expect(spy).toHaveBeenCalledWith('xl');
    expect(hook.result.current.size).toBe('md');
  });

  it('cascades size into controlSize', () => {
    const cases = { xs: 'xs', sm: 'xs', md: 'sm', lg: 'md', xl: 'md' } as const;
    for (const [size, controlSize] of Object.entries(cases)) {
      const hook = renderHook(() => useDataGrid({ data, columns, size: size as any }));
      expect(hook.result.current.controlSize).toBe(controlSize);
    }
  });
});

describe('@mantine/data-grid/use-data-grid getters', () => {
  it('returns current state from getters', () => {
    const hook = renderHook(() =>
      useDataGrid({ data, columns, withSorting: true, withFiltering: true, withGlobalFilter: true })
    );
    expect(hook.result.current.getSize()).toBe('sm');
    expect(hook.result.current.getSorting()).toEqual([]);
    expect(hook.result.current.getColumnFilters()).toEqual([]);

    act(() => hook.result.current.setSize('lg'));
    act(() => hook.result.current.table.setSorting([{ id: 'age', desc: true }]));
    act(() => hook.result.current.setColumnFilter('name', 'Ali'));
    act(() => hook.result.current.setGlobalFilter('Bob'));

    expect(hook.result.current.getSize()).toBe('lg');
    expect(hook.result.current.getControlSize()).toBe(hook.result.current.controlSize);
    expect(hook.result.current.getSorting()).toEqual([{ id: 'age', desc: true }]);
    expect(hook.result.current.getColumnFilters()).toEqual([{ id: 'name', value: 'Ali' }]);
    expect(hook.result.current.getGlobalFilter()).toBe('Bob');
    expect(hook.result.current.getPagination()).toEqual(hook.result.current.pagination);
  });

  it('keeps getters stable between renders', () => {
    const hook = renderHook(() => useDataGrid({ data, columns, withSorting: true }));
    const initial = hook.result.current;
    act(() => hook.result.current.table.setSorting([{ id: 'age', desc: false }]));
    expect(hook.result.current.getSorting).toBe(initial.getSorting);
    expect(hook.result.current.getSize).toBe(initial.getSize);
    expect(hook.result.current.getCellSelection).toBe(initial.getCellSelection);
  });

  it('keeps scrollToRow and scrollToColumn stable between renders', () => {
    const hook = renderHook(() => useDataGrid({ data, columns, withSorting: true }));
    const initial = hook.result.current;
    act(() => hook.result.current.setSize('lg'));
    act(() => hook.result.current.table.setSorting([{ id: 'age', desc: false }]));
    hook.rerender();
    expect(hook.result.current.table).not.toBe(initial.table);
    expect(hook.result.current.scrollToRow).toBe(initial.scrollToRow);
    expect(hook.result.current.scrollToColumn).toBe(initial.scrollToColumn);
  });
});

describe('@mantine/data-grid/use-data-grid grouped column order', () => {
  const groupingColumns = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'age', header: 'Age' },
  ];

  it('moves the grouped column after utility columns in the render that changes grouping', () => {
    const orders: string[][] = [];
    const hook = renderHook(() => {
      const store = useDataGrid({
        data,
        columns: groupingColumns,
        withGrouping: true,
        withRowSelection: true,
      });
      orders.push(store.table.getVisibleLeafColumns().map((column) => column.id));
      return store;
    });

    orders.length = 0;
    act(() => hook.result.current.table.setGrouping(['age']));
    expect(hook.result.current.grouping).toEqual(['age']);
    expect(orders[0]).toEqual(['__select__', 'age', 'name']);

    act(() => hook.result.current.table.resetGrouping());
    expect(hook.result.current.grouping).toEqual([]);
    expect(hook.result.current.table.getVisibleLeafColumns().map((column) => column.id)).toEqual([
      '__select__',
      'name',
      'age',
    ]);
  });
});

describe('@mantine/data-grid/use-data-grid grouping', () => {
  const groupData = [
    { name: 'Alice', team: 'A' },
    { name: 'Bob', team: 'B' },
    { name: 'Carol', team: 'A' },
  ];
  const groupColumns = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'team', header: 'Team' },
  ];
  const getLeafIds = (store: { table: { getVisibleLeafColumns: () => { id: string }[] } }) =>
    store.table.getVisibleLeafColumns().map((column) => column.id);

  it('keeps grouping when a utility column is toggled at runtime', () => {
    const hook = renderHook(
      ({ withRowNumbers }) =>
        useDataGrid({ data: groupData, columns: groupColumns, withGrouping: true, withRowNumbers }),
      { initialProps: { withRowNumbers: false } }
    );
    act(() => hook.result.current.table.setGrouping(['team']));
    expect(hook.result.current.grouping).toEqual(['team']);

    hook.rerender({ withRowNumbers: true });
    expect(hook.result.current.grouping).toEqual(['team']);
    expect(getLeafIds(hook.result.current).slice(0, 2)).toEqual(['__rowNumber__', 'team']);

    act(() => hook.result.current.table.setGrouping(['name']));
    expect(hook.result.current.grouping).toEqual(['name']);
    expect(getLeafIds(hook.result.current).slice(0, 2)).toEqual(['__rowNumber__', 'name']);

    hook.rerender({ withRowNumbers: false });
    expect(hook.result.current.grouping).toEqual(['name']);
  });

  it('supports grouping controlled through tableOptions.onGroupingChange', () => {
    const spy = jest.fn();
    const hook = renderHook(() => {
      const [grouping, setGrouping] = useState<string[]>([]);
      return useDataGrid({
        data: groupData,
        columns: groupColumns,
        withGrouping: true,
        withRowNumbers: true,
        tableOptions: {
          state: { grouping },
          onGroupingChange: (updater) => {
            spy(updater);
            setGrouping(updater);
          },
        },
      });
    });
    act(() => hook.result.current.table.setGrouping(['team']));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(hook.result.current.grouping).toEqual(['team']);
    expect(getLeafIds(hook.result.current).slice(0, 2)).toEqual(['__rowNumber__', 'team']);
  });

  it('reads grouping from tableOptions.state', () => {
    const hook = renderHook(() =>
      useDataGrid({
        data: groupData,
        columns: groupColumns,
        withGrouping: true,
        withRowNumbers: true,
        tableOptions: { state: { grouping: ['team'] } },
      })
    );
    expect(hook.result.current.grouping).toEqual(['team']);
    expect(getLeafIds(hook.result.current).slice(0, 2)).toEqual(['__rowNumber__', 'team']);
  });
});

describe('@mantine/data-grid/use-data-grid tableOptions.state', () => {
  it('keeps normalized columnOrder and columnPinning stable across re-renders', () => {
    const hook = renderHook(() =>
      useDataGrid({
        data,
        columns,
        withRowSelection: true,
        withColumnPinning: true,
        tableOptions: { state: { sorting: [] } },
      })
    );
    const firstState = hook.result.current.table.options.state!;
    const firstColumns = hook.result.current.table.getVisibleLeafColumns();
    expect(firstState.columnPinning).toEqual({ start: ['__select__'], end: [] });

    hook.rerender();

    const nextState = hook.result.current.table.options.state!;
    expect(nextState.columnOrder).toBe(firstState.columnOrder);
    expect(nextState.columnPinning).toBe(firstState.columnPinning);
    expect(hook.result.current.table.getVisibleLeafColumns()).toBe(firstColumns);
  });
});
