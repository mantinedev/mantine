import { shallowCompare } from './shallow-compare';

describe('@mantine/hooks/shallow-compare', () => {
  it('correctly compares primitive types', () => {
    expect(shallowCompare(1, 1)).toBe(true);
    expect(shallowCompare(-1.0001, -1.0001)).toBe(true);
    expect(shallowCompare('test', 'test')).toBe(true);
    const number = 1;
    const string = 'test';
    expect(shallowCompare(number, 1)).toBe(true);
    expect(shallowCompare(string, 'test')).toBe(true);
    expect(shallowCompare(1, 2)).toBe(false);
    expect(shallowCompare(undefined, undefined)).toBe(true);
    expect(shallowCompare(null, null)).toBe(true);
    expect(shallowCompare(NaN, NaN)).toBe(true);
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
    expect(shallowCompare([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(shallowCompare([1, 2, 3], arr)).toBe(true);
    expect(shallowCompare([1, 2, 3, test], [1, 2, 3, test])).toBe(true);
    expect(shallowCompare([1, 2, 3, test], [...arr, test])).toBe(true);
    expect(shallowCompare([1, 2, 3, test], [1, 2, 3, { a: 1 }])).toBe(false);
    expect(shallowCompare([1, 2, 3, 4], arr)).toBe(false);
    expect(shallowCompare(obj, obj)).toBe(true);
    expect(shallowCompare(obj, {
        a: 1,
        b: 2,
        c: {
            a: 1,
        },
    })).toBe(false);
  });
});
