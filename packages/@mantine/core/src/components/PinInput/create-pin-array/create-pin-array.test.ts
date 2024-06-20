import { createPinArray } from './create-pin-array';

describe('@mantine/core/PinInput/create-pin-array', () => {
  it('creates an array of empty strings if value is not provided', () => {
    expect(createPinArray(4, '')).toStrictEqual(['', '', '', '']);
    expect(createPinArray(4, undefined as any)).toStrictEqual(['', '', '', '']);
    expect(createPinArray(4, null as any)).toStrictEqual(['', '', '', '']);
  });

  it('splits value into chars', () => {
    expect(createPinArray(2, 'abcd')).toStrictEqual(['a', 'b']);
    expect(createPinArray(2, 'a')).toStrictEqual(['a', '']);
    expect(createPinArray(4, 'abcd')).toStrictEqual(['a', 'b', 'c', 'd']);
    expect(createPinArray(5, 'ab de')).toStrictEqual(['a', 'b', '', 'd', 'e']);
    expect(createPinArray(5, 'abc')).toStrictEqual(['a', 'b', 'c', '', '']);
  });

  it('returns empty array if length is less than 1', () => {
    expect(createPinArray(0, 'ab')).toStrictEqual([]);
    expect(createPinArray(-10, 'ab')).toStrictEqual([]);
  });
});
