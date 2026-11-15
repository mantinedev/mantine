import { runInNewContext } from 'node:vm';
import { deepMerge } from './deep-merge';

describe('@mantine/core/deep-merge', () => {
  it('merges given object with override correctly', () => {
    expect(deepMerge({ a: 1 }, { a: 2 })).toStrictEqual({ a: 2 });
    expect(
      deepMerge({ a: 1, b: { c: 1, d: { e: 1, f: 2 } } }, { b: { c: 2, d: { e: 2 } } })
    ).toStrictEqual({ a: 1, b: { c: 2, d: { e: 2, f: 2 } } });
  });

  it.each(['clippingAncestors', {}, null, undefined, []])(
    'preserves a DOM element overriding %p',
    (previous) => {
      const boundary = document.createElement('div');
      expect(deepMerge({ boundary: previous }, { boundary }).boundary).toBe(boundary);
    }
  );

  it('preserves non-plain object overrides by reference', () => {
    class Value {
      value = 1;
    }

    const values = [new Date(), new Map(), new Set(), /value/, new Value()];
    values.forEach((value) => {
      expect(deepMerge({ nested: { value: {} } }, { nested: { value } }).nested.value).toBe(value);
    });
  });

  it('replaces non-plain values with plain object overrides', () => {
    class Value {
      previous = true;
    }

    [new Value(), 'previous', null, undefined, [1, 2]].forEach((value) => {
      expect(deepMerge({ value }, { value: { next: true } })).toStrictEqual({
        value: { next: true },
      });
    });
  });

  it('preserves arrays, functions, null and undefined overrides', () => {
    const values = [[document.body], () => 'value', null, undefined];
    values.forEach((value) => {
      expect(deepMerge({ value: { previous: true } }, { value }).value).toBe(value);
    });
  });

  it('merges null-prototype records', () => {
    const target = Object.assign(Object.create(null), { a: 1 });
    const source = Object.assign(Object.create(null), { b: 2 });
    expect(deepMerge({ value: target }, { value: source })).toStrictEqual({
      value: { a: 1, b: 2 },
    });
  });

  it('merges plain records from another realm', () => {
    const source = runInNewContext('({ nested: { b: 2 } })');
    expect(deepMerge({ nested: { a: 1 } }, source)).toStrictEqual({ nested: { a: 1, b: 2 } });
  });

  it('does not mutate either input', () => {
    const boundary = document.createElement('div');
    const target = Object.freeze({
      nested: Object.freeze({ boundary: 'clippingAncestors', a: 1 }),
    });
    const source = Object.freeze({ nested: Object.freeze({ boundary, b: 2 }) });
    const result = deepMerge(target, source);

    expect(result.nested).toStrictEqual({ boundary, a: 1, b: 2 });
    expect(result.nested).not.toBe(target.nested);
    expect(result.nested).not.toBe(source.nested);
    expect(target.nested.boundary).toBe('clippingAncestors');
    expect(source.nested.boundary).toBe(boundary);
  });
});
