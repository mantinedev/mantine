import { insertPath } from './insert-path';

describe('@mantine/form/insert-path', () => {
  it('inserts item at given index', () => {
    expect(insertPath('a', 4, 1, { a: [1, 2, 3] })).toStrictEqual({ a: [1, 4, 2, 3] });
  });

  it('appends item to the end of the list if index is undefined', () => {
    expect(insertPath('a', 4, undefined, { a: [1, 2, 3] })).toStrictEqual({ a: [1, 2, 3, 4] });
  });

  it('supports nested lists', () => {
    expect(
      insertPath('a.1.b', 4, undefined, {
        a: [{ b: [1, 2, 3] }, { b: [1, 2, 3] }],
      })
    ).toStrictEqual({
      a: [{ b: [1, 2, 3] }, { b: [1, 2, 3, 4] }],
    });
  });
});
