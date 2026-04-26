import { computeAggregation } from './compute-aggregation';

function mockRow(values: Record<string, unknown>) {
  return { getValue: (id: string) => values[id] } as any;
}

function mockColumn(id: string, meta?: Record<string, unknown>) {
  return { id, columnDef: { meta } } as any;
}

describe('computeAggregation', () => {
  const rows = [
    mockRow({ name: 'Alice', age: 30, score: 80 }),
    mockRow({ name: 'Bob', age: 25, score: 90 }),
    mockRow({ name: 'Charlie', age: 35, score: 70 }),
  ];

  it('returns empty result when no columns have aggregationFn', () => {
    const columns = [mockColumn('name'), mockColumn('age')];
    const result = computeAggregation(rows, columns);
    expect(result.hasAny()).toBe(false);
    expect(result.get('name')).toBeUndefined();
  });

  it('computes sum', () => {
    const columns = [mockColumn('age', { aggregationFn: 'sum' })];
    const result = computeAggregation(rows, columns);
    expect(result.get('age')?.value).toBe(90);
  });

  it('computes min', () => {
    const columns = [mockColumn('age', { aggregationFn: 'min' })];
    const result = computeAggregation(rows, columns);
    expect(result.get('age')?.value).toBe(25);
  });

  it('computes max', () => {
    const columns = [mockColumn('age', { aggregationFn: 'max' })];
    const result = computeAggregation(rows, columns);
    expect(result.get('age')?.value).toBe(35);
  });

  it('computes mean', () => {
    const columns = [mockColumn('age', { aggregationFn: 'mean' })];
    const result = computeAggregation(rows, columns);
    expect(result.get('age')?.value).toBe(30);
  });

  it('computes median with odd count', () => {
    const columns = [mockColumn('age', { aggregationFn: 'median' })];
    const result = computeAggregation(rows, columns);
    expect(result.get('age')?.value).toBe(30);
  });

  it('computes median with even count', () => {
    const evenRows = [
      mockRow({ v: 10 }),
      mockRow({ v: 20 }),
      mockRow({ v: 30 }),
      mockRow({ v: 40 }),
    ];
    const columns = [mockColumn('v', { aggregationFn: 'median' })];
    const result = computeAggregation(evenRows, columns);
    expect(result.get('v')?.value).toBe(25);
  });

  it('computes count', () => {
    const columns = [mockColumn('name', { aggregationFn: 'count' })];
    const result = computeAggregation(rows, columns);
    expect(result.get('name')?.value).toBe(3);
  });

  it('computes uniqueCount', () => {
    const dupeRows = [
      mockRow({ dept: 'Eng' }),
      mockRow({ dept: 'Sales' }),
      mockRow({ dept: 'Eng' }),
    ];
    const columns = [mockColumn('dept', { aggregationFn: 'uniqueCount' })];
    const result = computeAggregation(dupeRows, columns);
    expect(result.get('dept')?.value).toBe(2);
  });

  it('supports custom function', () => {
    const columns = [
      mockColumn('score', {
        aggregationFn: (values: number[]) => values.filter((v) => v >= 80).length,
      }),
    ];
    const result = computeAggregation(rows, columns);
    expect(result.get('score')?.value).toBe(2);
  });

  it('includes aggregationLabel', () => {
    const columns = [mockColumn('age', { aggregationFn: 'sum', aggregationLabel: 'Total' })];
    const result = computeAggregation(rows, columns);
    expect(result.get('age')?.label).toBe('Total');
  });

  it('handles multiple columns', () => {
    const columns = [
      mockColumn('age', { aggregationFn: 'sum' }),
      mockColumn('score', { aggregationFn: 'mean' }),
      mockColumn('name'),
    ];
    const result = computeAggregation(rows, columns);
    expect(result.hasAny()).toBe(true);
    expect(result.get('age')?.value).toBe(90);
    expect(result.get('score')?.value).toBe(80);
    expect(result.get('name')).toBeUndefined();
  });

  it('returns undefined for numeric fns on empty rows', () => {
    const columns = [mockColumn('age', { aggregationFn: 'min' })];
    const result = computeAggregation([], columns);
    expect(result.get('age')?.value).toBeUndefined();
  });

  it('ignores non-numeric values for numeric fns', () => {
    const mixedRows = [mockRow({ v: 10 }), mockRow({ v: 'text' }), mockRow({ v: 20 })];
    const columns = [mockColumn('v', { aggregationFn: 'sum' })];
    const result = computeAggregation(mixedRows, columns);
    expect(result.get('v')?.value).toBe(30);
  });
});
