import { getDomain } from './get-domain';

describe('getDomain', () => {
  it('returns provided domain when given', () => {
    expect(getDomain([], [0, 100])).toEqual([0, 100]);
  });

  it('calculates min and max from data', () => {
    const data = [
      { x: 'a', y: '1', value: 3 },
      { x: 'b', y: '1', value: 7 },
      { x: 'c', y: '1', value: 1 },
    ];
    expect(getDomain(data)).toEqual([1, 7]);
  });

  it('ignores null values', () => {
    const data = [
      { x: 'a', y: '1', value: null },
      { x: 'b', y: '1', value: 5 },
      { x: 'c', y: '1', value: 2 },
    ];
    expect(getDomain(data)).toEqual([2, 5]);
  });

  it('returns [0, 0] for empty data', () => {
    expect(getDomain([])).toEqual([0, 0]);
  });

  it('returns [0, 0] when all values are null', () => {
    const data = [
      { x: 'a', y: '1', value: null },
      { x: 'b', y: '1', value: null },
    ];
    expect(getDomain(data)).toEqual([0, 0]);
  });

  it('handles single value', () => {
    const data = [{ x: 'a', y: '1', value: 5 }];
    expect(getDomain(data)).toEqual([5, 5]);
  });

  it('handles negative values', () => {
    const data = [
      { x: 'a', y: '1', value: -3 },
      { x: 'b', y: '1', value: -1 },
    ];
    expect(getDomain(data)).toEqual([-3, -1]);
  });

  it('ignores NaN and Infinity values', () => {
    const data = [
      { x: 'a', y: '1', value: 10 },
      { x: 'b', y: '1', value: NaN },
      { x: 'c', y: '1', value: Infinity },
      { x: 'd', y: '1', value: -Infinity },
      { x: 'e', y: '1', value: 4 },
    ];
    expect(getDomain(data)).toEqual([4, 10]);
  });

  it('returns [0, 0] when all values are non-finite', () => {
    const data = [
      { x: 'a', y: '1', value: NaN },
      { x: 'b', y: '1', value: Infinity },
    ];
    expect(getDomain(data)).toEqual([0, 0]);
  });

  it('does not throw on datasets larger than the argument limit', () => {
    const data = Array.from({ length: 200_000 }, (_, index) => ({
      x: `x-${index}`,
      y: '1',
      value: index,
    }));
    expect(getDomain(data)).toEqual([0, 199_999]);
  });
});
