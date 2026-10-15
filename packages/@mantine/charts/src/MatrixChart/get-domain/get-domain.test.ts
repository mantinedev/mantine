import { getDataRange, getDomain } from './get-domain';

describe('getDataRange', () => {
  it('calculates min and max from cells', () => {
    const cells = [
      { x: 'a', y: '1', value: 3 },
      { x: 'b', y: '1', value: 7 },
      { x: 'c', y: '1', value: 1 },
    ];
    expect(getDataRange(cells)).toEqual([1, 7]);
  });

  it('ignores missing cells and null values', () => {
    const cells = [undefined, { x: 'a', y: '1', value: null }, { x: 'b', y: '1', value: 5 }];
    expect(getDataRange(cells)).toEqual([5, 5]);
  });

  it('returns null when there are no finite values', () => {
    expect(getDataRange([])).toBeNull();
    expect(getDataRange([undefined, { x: 'a', y: '1', value: null }])).toBeNull();
    expect(
      getDataRange([
        { x: 'a', y: '1', value: NaN },
        { x: 'b', y: '1', value: Infinity },
      ])
    ).toBeNull();
  });

  it('handles negative values', () => {
    const cells = [
      { x: 'a', y: '1', value: -3 },
      { x: 'b', y: '1', value: -1 },
    ];
    expect(getDataRange(cells)).toEqual([-3, -1]);
  });

  it('ignores NaN and Infinity values', () => {
    const cells = [
      { x: 'a', y: '1', value: 10 },
      { x: 'b', y: '1', value: NaN },
      { x: 'c', y: '1', value: Infinity },
      { x: 'd', y: '1', value: -Infinity },
      { x: 'e', y: '1', value: 4 },
    ];
    expect(getDataRange(cells)).toEqual([4, 10]);
  });

  it('does not throw on datasets larger than the argument limit', () => {
    const cells = Array.from({ length: 200_000 }, (_, index) => ({
      x: `x-${index}`,
      y: '1',
      value: index,
    }));
    expect(getDataRange(cells)).toEqual([0, 199_999]);
  });
});

describe('getDomain', () => {
  it('returns the custom domain when both bounds are finite', () => {
    expect(getDomain([1, 5], [0, 100])).toEqual([0, 100]);
    expect(getDomain(null, [10, 0])).toEqual([10, 0]);
  });

  it('falls back to the data range when the custom domain is not finite', () => {
    expect(getDomain([1, 5], [NaN, 10])).toEqual([1, 5]);
    expect(getDomain([1, 5], [0, Infinity])).toEqual([1, 5]);
  });

  it('returns the data range when no domain is given', () => {
    expect(getDomain([1, 5])).toEqual([1, 5]);
  });

  it('returns [0, 0] when there is no data range and no domain', () => {
    expect(getDomain(null)).toEqual([0, 0]);
  });
});
