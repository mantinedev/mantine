import { computeRowSpans } from './compute-row-spans';

const mockRow = (index: number, values: Record<string, any>) => ({
  getValue: (columnId: string) => values[columnId],
  index,
});

const mockColumn = (id: string, rowSpan: boolean) => ({
  id,
  columnDef: { meta: { rowSpan } },
});

describe('computeRowSpans', () => {
  it('returns no spans when no columns have rowSpan meta', () => {
    const rows = [mockRow(0, { name: 'A' }), mockRow(1, { name: 'B' })];
    const columns = [mockColumn('name', false)];
    const result = computeRowSpans(rows as any, columns as any);
    expect(result.get(0, 'name')).toBeUndefined();
    expect(result.get(1, 'name')).toBeUndefined();
  });

  it('correctly computes spans for consecutive equal values', () => {
    const rows = [
      mockRow(0, { status: 'active' }),
      mockRow(1, { status: 'active' }),
      mockRow(2, { status: 'inactive' }),
    ];
    const columns = [mockColumn('status', true)];
    const result = computeRowSpans(rows as any, columns as any);
    expect(result.get(0, 'status')).toBe(2);
    expect(result.get(1, 'status')).toBe(0);
    expect(result.get(2, 'status')).toBe(1);
  });

  it('handles groups of different sizes', () => {
    const rows = [
      mockRow(0, { cat: 'A' }),
      mockRow(1, { cat: 'A' }),
      mockRow(2, { cat: 'A' }),
      mockRow(3, { cat: 'B' }),
      mockRow(4, { cat: 'C' }),
      mockRow(5, { cat: 'C' }),
    ];
    const columns = [mockColumn('cat', true)];
    const result = computeRowSpans(rows as any, columns as any);
    expect(result.get(0, 'cat')).toBe(3);
    expect(result.get(1, 'cat')).toBe(0);
    expect(result.get(2, 'cat')).toBe(0);
    expect(result.get(3, 'cat')).toBe(1);
    expect(result.get(4, 'cat')).toBe(2);
    expect(result.get(5, 'cat')).toBe(0);
  });

  it('each unique value starts a new group', () => {
    const rows = [mockRow(0, { val: 'X' }), mockRow(1, { val: 'Y' }), mockRow(2, { val: 'X' })];
    const columns = [mockColumn('val', true)];
    const result = computeRowSpans(rows as any, columns as any);
    expect(result.get(0, 'val')).toBe(1);
    expect(result.get(1, 'val')).toBe(1);
    expect(result.get(2, 'val')).toBe(1);
  });

  it('handles mixed columns (some with rowSpan, some without)', () => {
    const rows = [
      mockRow(0, { name: 'Alice', dept: 'Eng' }),
      mockRow(1, { name: 'Bob', dept: 'Eng' }),
      mockRow(2, { name: 'Carol', dept: 'Sales' }),
    ];
    const columns = [mockColumn('name', false), mockColumn('dept', true)];
    const result = computeRowSpans(rows as any, columns as any);
    expect(result.get(0, 'name')).toBeUndefined();
    expect(result.get(1, 'name')).toBeUndefined();
    expect(result.get(0, 'dept')).toBe(2);
    expect(result.get(1, 'dept')).toBe(0);
    expect(result.get(2, 'dept')).toBe(1);
  });

  it('handles a single row', () => {
    const rows = [mockRow(0, { col: 'A' })];
    const columns = [mockColumn('col', true)];
    const result = computeRowSpans(rows as any, columns as any);
    expect(result.get(0, 'col')).toBe(1);
  });

  it('handles all rows with the same value', () => {
    const rows = [
      mockRow(0, { x: 'same' }),
      mockRow(1, { x: 'same' }),
      mockRow(2, { x: 'same' }),
      mockRow(3, { x: 'same' }),
    ];
    const columns = [mockColumn('x', true)];
    const result = computeRowSpans(rows as any, columns as any);
    expect(result.get(0, 'x')).toBe(4);
    expect(result.get(1, 'x')).toBe(0);
    expect(result.get(2, 'x')).toBe(0);
    expect(result.get(3, 'x')).toBe(0);
  });
});
