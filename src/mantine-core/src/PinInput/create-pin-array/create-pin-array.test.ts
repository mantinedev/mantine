import { createPinArray } from './create-pin-array';

describe('@mantine/core/PinInput/create-pin-array', () => {
  it('creates an array of empty strings if value is not provided', () => {
    expect(createPinArray(4, '')).toStrictEqual(['', '', '', '']);
    expect(createPinArray(4, null)).toStrictEqual(['', '', '', '']);
    expect(createPinArray(4, undefined)).toStrictEqual(['', '', '', '']);
  });

  it('splits value into chars', () => {
    expect(createPinArray(2, 'abcd')).toStrictEqual(['a', 'b']);
    expect(createPinArray(2, 'a')).toStrictEqual(['a', '']);
    expect(createPinArray(4, 'abcd')).toStrictEqual(['a', 'b', 'c', 'd']);
  });

  it('returns empty array if length is less than 1', () => {
    expect(createPinArray(0, 'ab')).toStrictEqual([]);
    expect(createPinArray(-10, 'ab')).toStrictEqual([]);
  });
});
