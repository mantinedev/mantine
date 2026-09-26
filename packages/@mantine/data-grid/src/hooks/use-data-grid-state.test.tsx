import { act, renderHook } from '@testing-library/react';
import type { MantineSize } from '@mantine/core';
import { useDataGridState } from './use-data-grid-state';
import { useDataGrid } from '.';

const columns = [{ accessorKey: 'name', header: 'Name' }];
const data: any[] = [{ name: 'Alice' }];

function useGridWithPersistedSize(key: string) {
  const store = useDataGrid({ data, columns });
  useDataGridState({
    stateStorageKey: key,
    persistedState: ['size'],
    store,
  });
  return store;
}

function useGridWithPersistedFields(
  key: string | undefined,
  persistedState: ('size' | 'sorting')[]
) {
  const store = useDataGrid({ data, columns, withSorting: true });
  useDataGridState({
    stateStorageKey: key,
    persistedState,
    store,
  });
  return store;
}

describe('@mantine/data-grid/use-data-grid-state size', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    localStorage.clear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('persists size under the size key', () => {
    const hook = renderHook(() => useGridWithPersistedSize('dg-size-persist'));
    act(() => hook.result.current.setSize('lg'));
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(JSON.parse(localStorage.getItem('dg-size-persist')!)).toEqual({ size: 'lg' });
  });

  it('restores size from storage', () => {
    localStorage.setItem('dg-size-restore', JSON.stringify({ size: 'xl' }));
    const hook = renderHook(() => useGridWithPersistedSize('dg-size-restore'));
    expect(hook.result.current.size).toBe('xl');
  });

  it('restores the saved state of a new storage key', () => {
    localStorage.setItem('dg-size-key-a', JSON.stringify({ size: 'xl' }));
    localStorage.setItem('dg-size-key-b', JSON.stringify({ size: 'xs' }));
    const hook = renderHook(({ storageKey }) => useGridWithPersistedSize(storageKey), {
      initialProps: { storageKey: 'dg-size-key-a' },
    });
    expect(hook.result.current.size).toBe('xl');

    hook.rerender({ storageKey: 'dg-size-key-b' });
    expect(hook.result.current.size).toBe('xs');
  });

  it('flushes the pending write to the previous key when the storage key changes', () => {
    localStorage.setItem('dg-size-flush-b', JSON.stringify({ size: 'xs' }));
    const hook = renderHook(({ storageKey }) => useGridWithPersistedSize(storageKey), {
      initialProps: { storageKey: 'dg-size-flush-a' },
    });
    act(() => hook.result.current.setSize('lg'));
    act(() => {
      jest.advanceTimersByTime(100);
    });

    hook.rerender({ storageKey: 'dg-size-flush-b' });
    expect(JSON.parse(localStorage.getItem('dg-size-flush-a')!)).toEqual({ size: 'lg' });
    expect(hook.result.current.size).toBe('xs');

    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(JSON.parse(localStorage.getItem('dg-size-flush-a')!)).toEqual({ size: 'lg' });
    expect(JSON.parse(localStorage.getItem('dg-size-flush-b')!)).toEqual({ size: 'xs' });
  });

  it('flushes the pending write on unmount', () => {
    const hook = renderHook(() => useGridWithPersistedSize('dg-size-unmount'));
    act(() => hook.result.current.setSize('lg'));
    hook.unmount();
    expect(JSON.parse(localStorage.getItem('dg-size-unmount')!)).toEqual({ size: 'lg' });
  });

  it('flushes the state observed under the previous key when the key and controlled state change together', () => {
    const useGrid = ({ storageKey, sorting }: { storageKey: string; sorting: any[] }) => {
      const store = useDataGrid({ data, columns, sorting, onSortingChange: () => {} });
      useDataGridState({
        stateStorageKey: storageKey,
        persistedState: ['sorting'],
        store,
      });
      return store;
    };

    const sortingA = [{ id: 'name', desc: false }];
    const sortingB = [{ id: 'name', desc: true }];
    const hook = renderHook(useGrid, {
      initialProps: { storageKey: 'dg-view-a', sorting: sortingA },
    });

    hook.rerender({ storageKey: 'dg-view-b', sorting: sortingB });
    expect(JSON.parse(localStorage.getItem('dg-view-a')!)).toEqual({ sorting: sortingA });

    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(JSON.parse(localStorage.getItem('dg-view-a')!)).toEqual({ sorting: sortingA });
    expect(JSON.parse(localStorage.getItem('dg-view-b')!)).toEqual({ sorting: sortingB });
  });
  it('does not overwrite the saved state with pre-restore values when unmounted before the restore re-render', () => {
    localStorage.setItem('dg-size-strict', JSON.stringify({ size: 'xl' }));
    const onSizeRestore = jest.fn();
    const hook = renderHook(() => {
      const store = useDataGrid({ data, columns, size: 'sm', onSizeChange: onSizeRestore });
      useDataGridState({
        stateStorageKey: 'dg-size-strict',
        persistedState: ['size'],
        store,
      });
      return store;
    });

    expect(onSizeRestore).toHaveBeenCalledWith('xl');
    hook.unmount();
    expect(JSON.parse(localStorage.getItem('dg-size-strict')!)).toEqual({ size: 'xl' });
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(JSON.parse(localStorage.getItem('dg-size-strict')!)).toEqual({ size: 'xl' });
  });

  it('does not write the previous key state into the new key before its restore is applied', () => {
    localStorage.setItem('dg-size-switch-b', JSON.stringify({ size: 'xs' }));
    const onSizeRestore = jest.fn();
    const hook = renderHook(
      ({ storageKey, size }: { storageKey: string; size: MantineSize }) => {
        const store = useDataGrid({ data, columns, size, onSizeChange: onSizeRestore });
        useDataGridState({
          stateStorageKey: storageKey,
          persistedState: ['size'],
          store,
        });
        return store;
      },
      { initialProps: { storageKey: 'dg-size-switch-a', size: 'sm' as MantineSize } }
    );
    hook.rerender({ storageKey: 'dg-size-switch-a', size: 'lg' });

    hook.rerender({ storageKey: 'dg-size-switch-b', size: 'lg' });
    expect(onSizeRestore).toHaveBeenCalledWith('xs');
    hook.unmount();
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(JSON.parse(localStorage.getItem('dg-size-switch-a')!)).toEqual({ size: 'lg' });
    expect(JSON.parse(localStorage.getItem('dg-size-switch-b')!)).toEqual({ size: 'xs' });
  });

  it('persists changes made after a restore', () => {
    localStorage.setItem('dg-size-after-restore', JSON.stringify({ size: 'xl' }));
    const hook = renderHook(() => useGridWithPersistedSize('dg-size-after-restore'));
    expect(hook.result.current.size).toBe('xl');
    act(() => hook.result.current.setSize('xs'));
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(JSON.parse(localStorage.getItem('dg-size-after-restore')!)).toEqual({ size: 'xs' });
  });

  it('persists while the host re-renders more often than the debounce delay', () => {
    const hook = renderHook(() => useGridWithPersistedSize('dg-size-rerender'), {
      initialProps: { tick: 0 },
    });
    act(() => hook.result.current.setSize('lg'));
    for (let tick = 1; tick <= 10; tick += 1) {
      act(() => {
        jest.advanceTimersByTime(100);
      });
      hook.rerender({ tick });
    }
    expect(JSON.parse(localStorage.getItem('dg-size-rerender')!)).toEqual({ size: 'lg' });
  });

  it('restores only the newly added fields when the persisted field list grows', () => {
    localStorage.setItem(
      'dg-fields-grow',
      JSON.stringify({ size: 'xl', sorting: [{ id: 'name', desc: true }] })
    );
    const hook = renderHook(({ fields }) => useGridWithPersistedFields('dg-fields-grow', fields), {
      initialProps: { fields: ['size'] as ('size' | 'sorting')[] },
    });
    expect(hook.result.current.size).toBe('xl');
    expect(hook.result.current.sorting).toEqual([]);
    act(() => hook.result.current.setSize('xs'));

    hook.rerender({ fields: ['size', 'sorting'] });
    expect(hook.result.current.sorting).toEqual([{ id: 'name', desc: true }]);
    expect(hook.result.current.size).toBe('xs');
  });

  it('restores into a replacement store under the same key and fields', () => {
    localStorage.setItem(
      'dg-store-swap',
      JSON.stringify({ size: 'xl', sorting: [{ id: 'name', desc: true }] })
    );
    const hook = renderHook(
      ({ useSecond }) => {
        const first = useDataGrid({ data, columns, withSorting: true });
        const second = useDataGrid({ data, columns, withSorting: true });
        const store = useSecond ? second : first;
        useDataGridState({
          stateStorageKey: 'dg-store-swap',
          persistedState: ['size', 'sorting'],
          store,
        });
        return store;
      },
      { initialProps: { useSecond: false } }
    );
    expect(hook.result.current.size).toBe('xl');
    expect(hook.result.current.sorting).toEqual([{ id: 'name', desc: true }]);

    hook.rerender({ useSecond: true });
    expect(hook.result.current.size).toBe('xl');
    expect(hook.result.current.sorting).toEqual([{ id: 'name', desc: true }]);
  });

  it('flushes the previous store pending write before restoring into a replacement store', () => {
    localStorage.setItem('dg-store-swap-flush', JSON.stringify({ size: 'xl' }));
    const hook = renderHook(
      ({ useSecond }) => {
        const first = useDataGrid({ data, columns });
        const second = useDataGrid({ data, columns });
        const store = useSecond ? second : first;
        useDataGridState({
          stateStorageKey: 'dg-store-swap-flush',
          persistedState: ['size'],
          store,
        });
        return store;
      },
      { initialProps: { useSecond: false } }
    );
    act(() => hook.result.current.setSize('lg'));
    act(() => {
      jest.advanceTimersByTime(100);
    });
    hook.rerender({ useSecond: true });
    expect(hook.result.current.size).toBe('lg');
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(JSON.parse(localStorage.getItem('dg-store-swap-flush')!)).toEqual({ size: 'lg' });
  });

  it('restores again after persistence is disabled and re-enabled', () => {
    localStorage.setItem('dg-fields-toggle', JSON.stringify({ size: 'xl' }));
    const hook = renderHook(({ storageKey }) => useGridWithPersistedFields(storageKey, ['size']), {
      initialProps: { storageKey: 'dg-fields-toggle' as string | undefined },
    });
    expect(hook.result.current.size).toBe('xl');
    hook.rerender({ storageKey: undefined });
    act(() => hook.result.current.setSize('xs'));
    hook.rerender({ storageKey: 'dg-fields-toggle' });
    expect(hook.result.current.size).toBe('xl');
  });

  it('cancels the pending write when the persisted field list becomes empty', () => {
    const hook = renderHook(
      ({ fields }) => useGridWithPersistedFields('dg-fields-disable', fields),
      { initialProps: { fields: ['size'] as ('size' | 'sorting')[] } }
    );
    act(() => hook.result.current.setSize('lg'));
    act(() => {
      jest.advanceTimersByTime(100);
    });
    hook.rerender({ fields: [] });
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(localStorage.getItem('dg-fields-disable')).toBeNull();
  });

  it('cancels the pending write when the storage key is removed', () => {
    const hook = renderHook(({ storageKey }) => useGridWithPersistedFields(storageKey, ['size']), {
      initialProps: { storageKey: 'dg-fields-remove-key' as string | undefined },
    });
    act(() => hook.result.current.setSize('lg'));
    act(() => {
      jest.advanceTimersByTime(100);
    });
    hook.rerender({ storageKey: undefined });
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(localStorage.getItem('dg-fields-remove-key')).toBeNull();
  });
});

const groupingColumns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'age', header: 'Age' },
];
const groupingData: any[] = [{ name: 'Alice', status: 'active', age: 30 }];

function useGroupedGridWithPersistedOrder(key: string) {
  const store = useDataGrid({
    data: groupingData,
    columns: groupingColumns,
    withGrouping: true,
    withRowSelection: true,
  });
  useDataGridState({ stateStorageKey: key, persistedState: ['columnOrder'], store });
  return store;
}

function getVisibleColumnIds(store: ReturnType<typeof useGroupedGridWithPersistedOrder>) {
  return store.table.getVisibleLeafColumns().map((column) => column.id);
}

describe('@mantine/data-grid/use-data-grid-state column order with grouping', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    localStorage.clear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('does not persist or expose the grid-forced position of grouped columns', () => {
    const hook = renderHook(() => useGroupedGridWithPersistedOrder('dg-order-grouping'));
    act(() => hook.result.current.table.setGrouping(['age']));
    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(getVisibleColumnIds(hook.result.current)).toEqual([
      '__select__',
      'age',
      'name',
      'status',
    ]);
    expect(hook.result.current.columnOrder).not.toContain('age');
    expect(hook.result.current.getColumnOrder()).not.toContain('age');
    const saved = JSON.parse(localStorage.getItem('dg-order-grouping')!);
    expect(saved.columnOrder).not.toContain('age');

    hook.unmount();
    const remounted = renderHook(() => useGroupedGridWithPersistedOrder('dg-order-grouping'));
    act(() => remounted.result.current.table.setGrouping(['age']));
    act(() => remounted.result.current.table.setGrouping([]));
    expect(getVisibleColumnIds(remounted.result.current)).toEqual([
      '__select__',
      'name',
      'status',
      'age',
    ]);
  });

  it('persists a user column order without the grouped position', () => {
    const hook = renderHook(() => useGroupedGridWithPersistedOrder('dg-order-grouping-user'));
    act(() => hook.result.current.table.setColumnOrder(['__select__', 'status', 'name', 'age']));
    act(() => hook.result.current.table.setGrouping(['name']));
    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(getVisibleColumnIds(hook.result.current)).toEqual([
      '__select__',
      'name',
      'status',
      'age',
    ]);
    expect(JSON.parse(localStorage.getItem('dg-order-grouping-user')!).columnOrder).toEqual([
      '__select__',
      'status',
      'name',
      'age',
    ]);
  });
});
