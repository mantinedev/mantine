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
