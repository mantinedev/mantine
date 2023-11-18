import { deepMerge } from './deep-merge';

describe('@mantine/core/deep-merge', () => {
  it('merges given object with override correctly', () => {
    expect(deepMerge({ a: 1 }, { a: 2 })).toStrictEqual({ a: 2 });
    expect(
      deepMerge({ a: 1, b: { c: 1, d: { e: 1, f: 2 } } }, { b: { c: 2, d: { e: 2 } } })
    ).toStrictEqual({ a: 1, b: { c: 2, d: { e: 2, f: 2 } } });
  });
});
