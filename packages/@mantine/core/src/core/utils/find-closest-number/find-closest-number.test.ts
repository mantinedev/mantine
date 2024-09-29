import { findClosestNumber } from './find-closest-number';

describe('@mantine/core/find-closes-number', () => {
  it('returns the exact number if it exists in the array', () => {
    const result = findClosestNumber(5, [1, 3, 5, 7, 9]);
    expect(result).toBe(5);
  });

  it('returns the closest number when the exact number does not exist', () => {
    const result = findClosestNumber(6, [1, 3, 5, 7, 9]);
    expect(result).toBe(5);
  });

  it('returns the smaller number when two numbers are equally close', () => {
    const result = findClosestNumber(6, [1, 4, 8, 10]);
    expect(result).toBe(4);
  });

  it('handles negative numbers correctly', () => {
    const result = findClosestNumber(-2, [-10, -5, 0, 3, 5]);
    expect(result).toBe(0);
  });

  it('returns the only number if the array contains just one number', () => {
    const result = findClosestNumber(10, [7]);
    expect(result).toBe(7);
  });

  it('returns value when the array is empty', () => {
    const result = findClosestNumber(10, []);
    expect(result).toBe(10);
  });
});
