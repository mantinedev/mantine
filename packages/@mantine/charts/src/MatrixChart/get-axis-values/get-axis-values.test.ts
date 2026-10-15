import { getAxisValues } from './get-axis-values';

describe('getAxisValues', () => {
  it('returns provided labels when given', () => {
    const labels = ['A', 'B', 'C'];
    expect(getAxisValues([], 'x', labels)).toBe(labels);
  });

  it('extracts unique x values in insertion order', () => {
    const data = [
      { x: 'a', y: '1', value: 1 },
      { x: 'b', y: '1', value: 2 },
      { x: 'a', y: '2', value: 3 },
      { x: 'c', y: '1', value: 4 },
    ];
    expect(getAxisValues(data, 'x')).toEqual(['a', 'b', 'c']);
  });

  it('extracts unique y values in insertion order', () => {
    const data = [
      { x: 'a', y: '2', value: 1 },
      { x: 'a', y: '1', value: 2 },
      { x: 'b', y: '2', value: 3 },
      { x: 'b', y: '3', value: 4 },
    ];
    expect(getAxisValues(data, 'y')).toEqual(['2', '1', '3']);
  });

  it('returns empty array for empty data', () => {
    expect(getAxisValues([], 'x')).toEqual([]);
  });
});
