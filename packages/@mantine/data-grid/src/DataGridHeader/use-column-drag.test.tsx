import { useRef } from 'react';
import { renderHook } from '@testing-library/react';
import { DataGridColumnDef } from '../DataGrid.types';
import { useDataGrid } from '../hooks';
import { useColumnDrag } from './use-column-drag';

interface Person {
  name: string;
  age: number;
  city: string;
}

const data: Person[] = [{ name: 'Alice', age: 30, city: 'Paris' }];

const allColumns: DataGridColumnDef<any>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
  { accessorKey: 'city', header: 'City' },
];

function useHarness({
  columns,
  withColumnReorder,
}: {
  columns: DataGridColumnDef<any>[];
  withColumnReorder: boolean;
}) {
  const store = useDataGrid<any>({ data, columns, withColumnReorder });
  const rootRef = useRef<HTMLDivElement>(null);
  const drag = useColumnDrag({ store, rootRef });
  return { store, drag };
}

const headerOf = (store: ReturnType<typeof useDataGrid<any>>, columnId: string) =>
  store.table
    .getHeaderGroups()
    .flatMap((group) => group.headers)
    .find((header) => header.column.id === columnId)!;

describe('@mantine/data-grid/use-column-drag', () => {
  it('does not register header cells when column reorder is disabled', () => {
    const { result } = renderHook(() =>
      useHarness({ columns: allColumns, withColumnReorder: false })
    );
    const header = headerOf(result.current.store, 'name');
    expect(result.current.drag.registerHeaderCell(header)).toBeUndefined();
  });

  it('does not register group headers', () => {
    const { result } = renderHook(() =>
      useHarness({
        columns: [{ id: 'info', header: 'Info', columns: allColumns }],
        withColumnReorder: true,
      })
    );
    const group = result.current.store.table.getHeaderGroups()[0].headers[0];
    expect(result.current.drag.registerHeaderCell(group)).toBeUndefined();
    expect(result.current.drag.registerHeaderCell(headerOf(result.current.store, 'age'))).toEqual(
      expect.any(Function)
    );
  });

  it('keeps the ref of a header that stays rendered and drops headers that are gone', () => {
    const { result, rerender } = renderHook(
      (props: { columns: DataGridColumnDef<any>[] }) =>
        useHarness({ columns: props.columns, withColumnReorder: true }),
      { initialProps: { columns: allColumns } }
    );
    const nameRef = result.current.drag.registerHeaderCell(headerOf(result.current.store, 'name'));
    const cityRef = result.current.drag.registerHeaderCell(headerOf(result.current.store, 'city'));

    rerender({ columns: allColumns.slice(0, 2) });
    expect(result.current.drag.registerHeaderCell(headerOf(result.current.store, 'name'))).toBe(
      nameRef
    );

    rerender({ columns: allColumns });
    expect(result.current.drag.registerHeaderCell(headerOf(result.current.store, 'city'))).not.toBe(
      cityRef
    );
  });
});
