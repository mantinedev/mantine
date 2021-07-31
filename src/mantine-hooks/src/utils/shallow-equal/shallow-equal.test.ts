import { shallowEqual } from './shallow-equal';

describe('@mantine/hooks/shallow-equal', () => {
  it('correctly compares primitive types', () => {
    expect(shallowEqual(1, 1)).toBe(true);
    expect(shallowEqual(-1.0001, -1.0001)).toBe(true);
    expect(shallowEqual('test', 'test')).toBe(true);
    expect(shallowEqual(1, 2)).toBe(false);
    expect(shallowEqual(undefined, undefined)).toBe(true);
    expect(shallowEqual(null, null)).toBe(true);
  });

  it('correctly compares object and array type', () => {
    const object = { a: 1, b: 2, c: { a: 1 } };
    const list = [1, 2, 3];
    const test = { a: 1 };
    expect(shallowEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(shallowEqual([1, 2, 3], list)).toBe(true);
    expect(shallowEqual([1, 2, 3, test], [1, 2, 3, test])).toBe(true);
    expect(shallowEqual([1, 2, 3, test], [...list, test])).toBe(true);
    expect(shallowEqual([1, 2, 3, test], [1, 2, 3, { a: 1 }])).toBe(false);
    expect(shallowEqual([1, 2, 3, 4], list)).toBe(false);
    expect(shallowEqual(object, object)).toBe(true);
    expect(shallowEqual(object, { a: 1, b: 2, c: { a: 1 } })).toBe(false);
  });
});
