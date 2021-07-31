import { shallowEqual } from './shallow-equal';

describe('@mantine/hooks/shallow-equal', () => {
  it('correctly compares primitive types', () => {
    expect(shallowEqual(1, 1)).toBe(true);
    expect(shallowEqual(-1.0001, -1.0001)).toBe(true);
    expect(shallowEqual('test', 'test')).toBe(true);
    const number = 1;
    const string = 'test';
    expect(shallowEqual(number, 1)).toBe(true);
    expect(shallowEqual(string, 'test')).toBe(true);
    expect(shallowEqual(1, 2)).toBe(false);
    expect(shallowEqual(undefined, undefined)).toBe(true);
    expect(shallowEqual(null, null)).toBe(true);
    expect(shallowEqual(NaN, NaN)).toBe(true);
  });

  it('correctly compares object and array type', () => {
    const obj = {
      a: 1,
      b: 2,
      c: {
        a: 1,
      },
    };
    const arr = [1, 2, 3];
    const test = { a: 1 };
    expect(shallowEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(shallowEqual([1, 2, 3], arr)).toBe(true);
    expect(shallowEqual([1, 2, 3, test], [1, 2, 3, test])).toBe(true);
    expect(shallowEqual([1, 2, 3, test], [...arr, test])).toBe(true);
    expect(shallowEqual([1, 2, 3, test], [1, 2, 3, { a: 1 }])).toBe(false);
    expect(shallowEqual([1, 2, 3, 4], arr)).toBe(false);
    expect(shallowEqual(obj, obj)).toBe(true);
    expect(
      shallowEqual(obj, {
        a: 1,
        b: 2,
        c: {
          a: 1,
        },
      })
    ).toBe(false);
  });
});
