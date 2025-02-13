import { getBoundaries } from './get-boundaries';

describe('getBoundaries', () => {
  it('returns the provided domain if it is an array', () => {
    expect(getBoundaries({ data: { a: 1, b: 2, c: 3 }, domain: [0, 10] })).toEqual([0, 10]);
  });

  it('returns the min and max values from the data if domain is not provided', () => {
    expect(getBoundaries({ data: { a: 1, b: 2, c: 3 } })).toEqual([1, 3]);
  });

  it('returns the min and max values from the data if domain is undefined', () => {
    expect(getBoundaries({ data: { a: 1, b: 2, c: 3 }, domain: undefined })).toEqual([1, 3]);
  });

  it('handles negative values in the data', () => {
    expect(getBoundaries({ data: { a: -1, b: -2, c: -3 } })).toEqual([-3, -1]);
  });

  it('handles a mix of positive and negative values in the data', () => {
    expect(getBoundaries({ data: { a: -1, b: 2, c: -3, d: 4 } })).toEqual([-3, 4]);
  });

  it('handles a single value in the data', () => {
    expect(getBoundaries({ data: { a: 5 } })).toEqual([5, 5]);
  });

  it('handles an empty data object', () => {
    expect(getBoundaries({ data: {} })).toEqual([Infinity, -Infinity]);
  });
});
