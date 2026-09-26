import { getUniqueValues } from './get-unique-values';

describe('getUniqueValues', () => {
  it('returns provided labels when given', () => {
    const labels = ['A', 'B', 'C'];
    expect(getUniqueValues([], 'x', labels)).toBe(labels);
  });

  it('extracts unique x values in insertion order', () => {
    const data = [
      { x: 'a', y: '1', value: 1 },
      { x: 'b', y: '1', value: 2 },
      { x: 'a', y: '2', value: 3 },
      { x: 'c', y: '1', value: 4 },
    ];
    expect(getUniqueValues(data, 'x')).toEqual(['a', 'b', 'c']);
  });

  it('extracts unique y values in insertion order', () => {
    const data = [
      { x: 'a', y: '2', value: 1 },
      { x: 'a', y: '1', value: 2 },
      { x: 'b', y: '2', value: 3 },
      { x: 'b', y: '3', value: 4 },
    ];
    expect(getUniqueValues(data, 'y')).toEqual(['2', '1', '3']);
  });

  it('returns empty array for empty data', () => {
    expect(getUniqueValues([], 'x')).toEqual([]);
  });
});
