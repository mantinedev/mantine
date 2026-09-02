import {
  formatValue,
  getAllExpandablePaths,
  getDefaultExpandedPaths,
  getTypeLabel,
  getValueType,
  PATH_SEPARATOR,
  safeStringify,
  serializePath,
} from './json-viewer-utils';

describe('serializePath', () => {
  it('joins segments with PATH_SEPARATOR', () => {
    expect(serializePath(['a', 'b', 'c'])).toBe(`a${PATH_SEPARATOR}b${PATH_SEPARATOR}c`);
  });

  it('returns empty string for empty array', () => {
    expect(serializePath([])).toBe('');
  });

  it('handles single segment', () => {
    expect(serializePath(['root'])).toBe('root');
  });

  it('preserves dots in keys without collision', () => {
    const path1 = serializePath(['a.b']);
    const path2 = serializePath(['a', 'b']);
    expect(path1).not.toBe(path2);
  });
});

describe('getValueType', () => {
  it('returns null for null', () => {
    expect(getValueType(null)).toBe('null');
  });

  it('returns array for arrays', () => {
    expect(getValueType([1, 2])).toBe('array');
  });

  it('returns object for plain objects', () => {
    expect(getValueType({ a: 1 })).toBe('object');
  });

  it('returns string for strings', () => {
    expect(getValueType('hello')).toBe('string');
  });

  it('returns number for numbers', () => {
    expect(getValueType(42)).toBe('number');
  });

  it('returns boolean for booleans', () => {
    expect(getValueType(true)).toBe('boolean');
  });

  it('returns undefined for undefined', () => {
    expect(getValueType(undefined)).toBe('undefined');
  });
});

describe('getTypeLabel', () => {
  it('returns int for integers', () => {
    expect(getTypeLabel(42)).toBe('int');
  });

  it('returns float for decimals', () => {
    expect(getTypeLabel(3.14)).toBe('float');
  });

  it('returns bool for booleans', () => {
    expect(getTypeLabel(true)).toBe('bool');
  });

  it('returns string for strings', () => {
    expect(getTypeLabel('hello')).toBe('string');
  });

  it('returns null for null', () => {
    expect(getTypeLabel(null)).toBe('null');
  });

  it('returns array for arrays', () => {
    expect(getTypeLabel([1])).toBe('array');
  });

  it('returns object for objects', () => {
    expect(getTypeLabel({ a: 1 })).toBe('object');
  });
});

describe('formatValue', () => {
  it('formats null', () => {
    expect(formatValue(null, true, false)).toEqual({ display: 'null', collapsed: false });
  });

  it('formats undefined', () => {
    expect(formatValue(undefined, true, false)).toEqual({ display: 'undefined', collapsed: false });
  });

  it('formats boolean', () => {
    expect(formatValue(true, true, false)).toEqual({ display: 'true', collapsed: false });
  });

  it('formats number', () => {
    expect(formatValue(42, true, false)).toEqual({ display: '42', collapsed: false });
  });

  it('formats string with quotes', () => {
    expect(formatValue('hello', true, false)).toEqual({ display: '"hello"', collapsed: false });
  });

  it('formats string without quotes', () => {
    expect(formatValue('hello', false, false)).toEqual({ display: 'hello', collapsed: false });
  });

  it('truncates long strings', () => {
    const result = formatValue('abcdefghij', true, 5);
    expect(result.display).toBe('"abcde..."');
    expect(result.collapsed).toBe(true);
  });

  it('does not truncate short strings', () => {
    const result = formatValue('abc', true, 5);
    expect(result.display).toBe('"abc"');
    expect(result.collapsed).toBe(false);
  });

  it('truncates without quotes', () => {
    const result = formatValue('abcdefghij', false, 5);
    expect(result.display).toBe('abcde...');
    expect(result.collapsed).toBe(true);
  });
});

describe('safeStringify', () => {
  it('stringifies objects', () => {
    expect(safeStringify({ a: 1 })).toBe('{\n  "a": 1\n}');
  });

  it('stringifies primitives', () => {
    expect(safeStringify('hello')).toBe('"hello"');
    expect(safeStringify(42)).toBe('42');
    expect(safeStringify(null)).toBe('null');
  });

  it('replaces circular references with [Circular]', () => {
    const obj: any = { a: 1 };
    obj.self = obj;
    expect(safeStringify(obj)).toBe('{\n  "a": 1,\n  "self": "[Circular]"\n}');
  });

  it('serializes shared (non-circular) references in full', () => {
    const shared = { x: 1 };
    expect(safeStringify({ a: shared, b: shared })).toBe(
      '{\n  "a": {\n    "x": 1\n  },\n  "b": {\n    "x": 1\n  }\n}'
    );
  });

  it('serializes bigint values as strings', () => {
    expect(safeStringify({ a: BigInt(1) })).toBe('{\n  "a": "1"\n}');
    expect(safeStringify(BigInt(42))).toBe('"42"');
  });
});

describe('getAllExpandablePaths', () => {
  it('returns empty array for primitives', () => {
    expect(getAllExpandablePaths('hello')).toEqual([]);
    expect(getAllExpandablePaths(42)).toEqual([]);
    expect(getAllExpandablePaths(null)).toEqual([]);
  });

  it('returns root path for empty object', () => {
    expect(getAllExpandablePaths({})).toEqual(['']);
  });

  it('returns paths for nested objects', () => {
    const paths = getAllExpandablePaths({ a: { b: 1 } });
    expect(paths).toContain('');
    expect(paths).toContain(serializePath(['a']));
  });

  it('returns paths for arrays', () => {
    const paths = getAllExpandablePaths([{ x: 1 }]);
    expect(paths).toContain('');
    expect(paths).toContain(serializePath(['0']));
  });

  it('includes chunk paths when groupArraysAfterLength is set', () => {
    const arr = Array.from({ length: 10 }, (_, i) => i);
    const paths = getAllExpandablePaths(arr, [], 3);
    expect(paths).toContain(serializePath(['[0...2]']));
    expect(paths).toContain(serializePath(['[3...5]']));
    expect(paths).toContain(serializePath(['[6...8]']));
    expect(paths).toContain(serializePath(['[9...9]']));
  });

  it('recurses into nested expandable values', () => {
    const paths = getAllExpandablePaths({ a: { b: { c: 1 } } });
    expect(paths).toContain(serializePath(['a', 'b']));
  });

  it('terminates on circular references', () => {
    const cyclic: any = { a: { b: 1 } };
    cyclic.self = cyclic;
    cyclic.a.parent = cyclic;
    expect(() => getAllExpandablePaths(cyclic)).not.toThrow();
    expect(getAllExpandablePaths(cyclic)).toEqual(['', serializePath(['a'])]);
  });

  it('expands shared (non-circular) references at every path', () => {
    const shared = { x: { y: 1 } };
    const paths = getAllExpandablePaths({ a: shared, b: shared });
    expect(paths).toContain(serializePath(['a', 'x']));
    expect(paths).toContain(serializePath(['b', 'x']));
  });
});

describe('getDefaultExpandedPaths', () => {
  it('returns empty for primitives', () => {
    expect(getDefaultExpandedPaths('hello', 1)).toEqual([]);
  });

  it('returns root for depth 1', () => {
    const paths = getDefaultExpandedPaths({ a: 1 }, 1);
    expect(paths).toEqual(['']);
  });

  it('returns nothing for depth 0', () => {
    expect(getDefaultExpandedPaths({ a: 1 }, 0)).toEqual([]);
  });

  it('expands multiple levels', () => {
    const paths = getDefaultExpandedPaths({ a: { b: { c: 1 } } }, 2);
    expect(paths).toContain('');
    expect(paths).toContain(serializePath(['a']));
    expect(paths).not.toContain(serializePath(['a', 'b']));
  });

  it('expands deeply for large depth', () => {
    const paths = getDefaultExpandedPaths({ a: { b: { c: 1 } } }, 10);
    expect(paths).toContain(serializePath(['a', 'b']));
  });

  it('includes chunk paths when groupArraysAfterLength is set', () => {
    const arr = Array.from({ length: 10 }, (_, i) => i);
    const paths = getDefaultExpandedPaths(arr, 1, [], 0, 3);
    expect(paths).toContain(serializePath(['[0...2]']));
  });

  it('terminates on circular references', () => {
    const cyclic: any = { a: { b: 1 } };
    cyclic.self = cyclic;
    expect(() => getDefaultExpandedPaths(cyclic, 50)).not.toThrow();
    expect(getDefaultExpandedPaths(cyclic, 50)).toEqual(['', serializePath(['a'])]);
  });
});
