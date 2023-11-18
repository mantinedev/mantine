import { removePath } from './remove-path';

describe('@mantine/form/remove-path', () => {
  it('removes list item at given path (root property)', () => {
    expect(removePath('a', 1, { a: [1, 2, 3] })).toStrictEqual({ a: [1, 3] });
  });

  it('returns unchanged list when path does not exist', () => {
    expect(removePath('a.d.a', 1, { a: [1, 2, 3] })).toStrictEqual({ a: [1, 2, 3] });
    expect(removePath('b.c.d.0', 1, { a: [1, 2, 3] })).toStrictEqual({ a: [1, 2, 3] });
  });

  it('removes list item at give path (nested lists)', () => {
    expect(removePath('a.0.b', 1, { a: [{ b: [1, 2, 3] }, { b: [1, 2, 3] }] })).toStrictEqual({
      a: [{ b: [1, 3] }, { b: [1, 2, 3] }],
    });
  });
});
