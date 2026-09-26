import { renderHook } from '@testing-library/react';
import { hasUnknownPageCount } from './has-unknown-page-count';
import { useDataGrid } from './hooks';

const columns = [{ accessorKey: 'a', header: 'A' }];

function getTable(options: Record<string, unknown>) {
  const hook = renderHook(() =>
    useDataGrid<any>({ data: [{ a: '1' }], columns, pageSize: 10, ...options })
  );
  return hook.result.current.table;
}

describe('@mantine/data-grid/has-unknown-page-count', () => {
  it('treats missing and negative pageCount under manual pagination without rowCount as unknown', () => {
    expect(hasUnknownPageCount(getTable({ manualPagination: true }))).toBe(true);
    expect(hasUnknownPageCount(getTable({ manualPagination: true, pageCount: -1 }))).toBe(true);
  });

  it('treats a known pageCount, rowCount or client pagination as known', () => {
    expect(hasUnknownPageCount(getTable({ manualPagination: true, pageCount: 4 }))).toBe(false);
    expect(hasUnknownPageCount(getTable({ manualPagination: true, rowCount: 40 }))).toBe(false);
    expect(hasUnknownPageCount(getTable({}))).toBe(false);
  });
});
