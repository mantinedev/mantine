import { act, renderHook } from '@testing-library/react';
import { useDataGrid } from '../hooks';
import { canReorderColumn, getReorderNeighbours, isReorderTarget, moveColumn } from './move-column';

const columns = [
  { accessorKey: 'a', header: 'A' },
  { accessorKey: 'b', header: 'B' },
  { accessorKey: 'c', header: 'C' },
  { accessorKey: 'd', header: 'D' },
];

function getNeighbours(start: string[]) {
  const hook = renderHook(() =>
    useDataGrid<any>({
      data: [{ a: '1', b: '2', c: '3', d: '4' }],
      columns,
      withColumnReorder: true,
      columnPinning: { start, end: [] },
    })
  );
  const table = hook.result.current.table;
  return (id: string) => {
    const neighbours = getReorderNeighbours(table.getColumn(id)!, table, false);
    return [neighbours.previous?.id, neighbours.next?.id];
  };
}

describe('@mantine/data-grid/move-column getReorderNeighbours', () => {
  it('uses render order around a pinned start column', () => {
    const neighbours = getNeighbours(['c']);
    expect(neighbours('c')).toEqual([undefined, undefined]);
    expect(neighbours('a')).toEqual([undefined, 'b']);
    expect(neighbours('b')).toEqual(['a', 'd']);
    expect(neighbours('d')).toEqual(['b', undefined]);
  });

  it('uses the pinning order inside the pinned start side', () => {
    const neighbours = getNeighbours(['d', 'a']);
    expect(neighbours('d')).toEqual([undefined, 'a']);
    expect(neighbours('a')).toEqual(['d', undefined]);
    expect(neighbours('b')).toEqual([undefined, 'c']);
    expect(neighbours('c')).toEqual(['b', undefined]);
  });
});

describe('@mantine/data-grid/move-column moveColumn', () => {
  function visibleIds(table: any) {
    return table.getVisibleLeafColumns().map((column: any) => column.id);
  }

  it('moves columns when grouping and a utility column leave a partial stored order', () => {
    const hook = renderHook(() =>
      useDataGrid<any>({
        data: [{ a: '1', b: '2', c: '3', d: '4' }],
        columns,
        withColumnReorder: true,
        withRowSelection: true,
        withGrouping: true,
        tableOptions: { initialState: { grouping: ['c'] } },
      })
    );

    expect(hook.result.current.table.store.state.columnOrder).toEqual(['__select__', 'c']);
    expect(visibleIds(hook.result.current.table)).toEqual(['__select__', 'c', 'a', 'b', 'd']);

    act(() => moveColumn(hook.result.current.table, 'a', 'b', 'end'));
    expect(visibleIds(hook.result.current.table)).toEqual(['__select__', 'c', 'b', 'a', 'd']);

    act(() => moveColumn(hook.result.current.table, 'd', 'b', 'start'));
    expect(visibleIds(hook.result.current.table)).toEqual(['__select__', 'c', 'd', 'b', 'a']);
  });

  it('does not reorder around grouped columns that TanStack displays first', () => {
    const hook = renderHook(() =>
      useDataGrid<any>({
        data: [{ a: '1', b: '2', c: '3' }],
        columns: columns.slice(0, 3),
        withColumnReorder: true,
        withGrouping: true,
        tableOptions: { initialState: { grouping: ['c'] } },
      })
    );
    const store = hook.result.current;
    const table = store.table;
    expect(visibleIds(table)).toEqual(['c', 'a', 'b']);
    expect(store.groupedColumnsFirst).toBe(true);

    const neighbours = (id: string) => {
      const result = getReorderNeighbours(table.getColumn(id)!, table, store.groupedColumnsFirst);
      return [result.previous?.id, result.next?.id];
    };
    expect(neighbours('a')).toEqual([undefined, 'b']);
    expect(neighbours('c')).toEqual([undefined, undefined]);
    expect(isReorderTarget(table.getColumn('a')!, table.getColumn('c')!, true)).toBe(false);
    expect(isReorderTarget(table.getColumn('c')!, table.getColumn('a')!, true)).toBe(false);

    act(() => moveColumn(hook.result.current.table, 'b', 'a', 'start'));
    expect(visibleIds(hook.result.current.table)).toEqual(['c', 'b', 'a']);
  });

  it('does not reorder around grouped columns the grid keeps after utility columns', () => {
    const hook = renderHook(() =>
      useDataGrid<any>({
        data: [{ a: '1', b: '2', c: '3' }],
        columns: columns.slice(0, 3),
        withColumnReorder: true,
        withGrouping: true,
        withRowSelection: true,
        grouping: ['b'],
      })
    );
    const store = hook.result.current;
    const table = store.table;
    expect(visibleIds(table)).toEqual(['__select__', 'b', 'a', 'c']);
    expect(store.groupedColumnsFirst).toBe(true);

    const neighbours = (id: string) => {
      const result = getReorderNeighbours(table.getColumn(id)!, table, store.groupedColumnsFirst);
      return [result.previous?.id, result.next?.id];
    };
    expect(neighbours('b')).toEqual([undefined, undefined]);
    expect(neighbours('a')).toEqual([undefined, 'c']);
    expect(canReorderColumn(table.getColumn('b')!, store.groupedColumnsFirst)).toBe(false);
    expect(
      isReorderTarget(table.getColumn('c')!, table.getColumn('b')!, store.groupedColumnsFirst)
    ).toBe(false);
  });

  it('keeps grouped columns reorderable with groupedColumnMode false', () => {
    const hook = renderHook(() =>
      useDataGrid<any>({
        data: [{ a: '1', b: '2', c: '3' }],
        columns: columns.slice(0, 3),
        withColumnReorder: true,
        withGrouping: true,
        withRowSelection: true,
        groupedColumnMode: false,
        grouping: ['b'],
      })
    );
    const store = hook.result.current;
    expect(store.groupedColumnsFirst).toBe(false);
    expect(canReorderColumn(store.table.getColumn('b')!, store.groupedColumnsFirst)).toBe(true);
  });

  it('does not persist the grid-forced grouped position when moving columns', () => {
    const hook = renderHook(
      ({ grouping }: { grouping: string[] }) =>
        useDataGrid<any>({
          data: [{ a: '1', b: '2', c: '3', d: '4' }],
          columns,
          withColumnReorder: true,
          withGrouping: true,
          withRowSelection: true,
          grouping,
        }),
      { initialProps: { grouping: ['b'] } }
    );
    expect(visibleIds(hook.result.current.table)).toEqual(['__select__', 'b', 'a', 'c', 'd']);

    act(() => moveColumn(hook.result.current.table, 'd', 'a', 'start'));
    expect(visibleIds(hook.result.current.table)).toEqual(['__select__', 'b', 'd', 'a', 'c']);

    hook.rerender({ grouping: [] });
    expect(visibleIds(hook.result.current.table)).toEqual(['__select__', 'd', 'a', 'b', 'c']);
  });

  it('emits a controlled column order without the grid-forced grouped position', () => {
    const onColumnOrderChange = jest.fn();
    const hook = renderHook(() =>
      useDataGrid<any>({
        data: [{ a: '1', b: '2', c: '3', d: '4' }],
        columns,
        withGrouping: true,
        withRowSelection: true,
        grouping: ['b'],
        columnOrder: ['a', 'b', 'c', 'd'],
        onColumnOrderChange,
      })
    );
    expect(visibleIds(hook.result.current.table)).toEqual(['__select__', 'b', 'a', 'c', 'd']);

    act(() => moveColumn(hook.result.current.table, 'd', 'a', 'start'));
    expect(onColumnOrderChange).toHaveBeenCalledTimes(1);
    const updater = onColumnOrderChange.mock.calls[0][0];
    const next = typeof updater === 'function' ? updater(['a', 'b', 'c', 'd']) : updater;
    expect(next).toEqual(['d', 'a', 'b', 'c']);
  });

  it('moves columns missing from a partial controlled column order', () => {
    const onColumnOrderChange = jest.fn();
    const hook = renderHook(() =>
      useDataGrid<any>({
        data: [{ a: '1', b: '2', c: '3', d: '4' }],
        columns,
        columnOrder: ['c'],
        onColumnOrderChange,
      })
    );

    act(() => moveColumn(hook.result.current.table, 'b', 'a', 'start'));
    expect(onColumnOrderChange).toHaveBeenCalledTimes(1);
    const updater = onColumnOrderChange.mock.calls[0][0];
    const next = typeof updater === 'function' ? updater(['c']) : updater;
    expect(next).toEqual(['c', 'b', 'a', 'd']);
  });
});
