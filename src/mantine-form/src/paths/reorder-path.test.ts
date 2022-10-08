import { reorderPath } from './reorder-path';

describe('@mantine/form/reorder-path', () => {
  it('reorders array items at given root path', () => {
    expect(reorderPath('a', { from: 2, to: 0 }, { a: [1, 2, 3] })).toStrictEqual({ a: [3, 1, 2] });
    expect(reorderPath('a', { from: 1, to: 2 }, { a: [1, 2, 3] })).toStrictEqual({ a: [1, 3, 2] });
  });

  it('reorders array items at given nested path', () => {
    expect(
      reorderPath('a.0.b', { from: 2, to: 0 }, { a: [{ b: [1, 2, 3] }, { b: [1, 2, 3] }] })
    ).toStrictEqual({
      a: [{ b: [3, 1, 2] }, { b: [1, 2, 3] }],
    });

    expect(
      reorderPath('a.1.b', { from: 1, to: 2 }, { a: [{ b: [1, 2, 3] }, { b: [1, 2, 3] }] })
    ).toStrictEqual({
      a: [{ b: [1, 2, 3] }, { b: [1, 3, 2] }],
    });
  });

  it('returns unchanged object if path does not exist', () => {
    expect(reorderPath('c', { from: 1, to: 2 }, { a: 1, b: 2 })).toStrictEqual({ a: 1, b: 2 });
    expect(reorderPath('a.c', { from: 1, to: 2 }, { a: 1, b: 2 })).toStrictEqual({ a: 1, b: 2 });
  });

  it('returns unchanged object if value at path is not an array', () => {
    expect(reorderPath('a.c', { from: 1, to: 2 }, { a: { c: 1 }, b: 2 })).toStrictEqual({
      a: { c: 1 },
      b: 2,
    });
  });
});
