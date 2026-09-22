import { act, renderHook } from '@testing-library/react';
import { useDataGrid } from './use-data-grid';

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

  it('does not expose density', () => {
    const hook = renderHook(() => useDataGrid({ data, columns }));
    expect((hook.result.current as any).density).toBeUndefined();
    expect((hook.result.current as any).setDensity).toBeUndefined();
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
});
