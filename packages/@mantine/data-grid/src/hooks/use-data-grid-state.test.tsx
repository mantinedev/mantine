import { act, renderHook } from '@testing-library/react';
import { useDataGrid } from './use-data-grid';
import { useDataGridState } from './use-data-grid-state';

const columns = [{ accessorKey: 'name', header: 'Name' }];
const data: any[] = [{ name: 'Alice' }];

function useGridWithPersistedSize(key: string) {
  const store = useDataGrid({ data, columns });
  useDataGridState({
    stateStorageKey: key,
    persistedState: ['size'],
    table: store.table,
    size: store.size,
    onSizeRestore: store.setSize,
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
});
