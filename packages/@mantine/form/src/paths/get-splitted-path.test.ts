import { getSplittedPath } from './get-splitted-path';

describe('@mantine/form/get-splitted-path', () => {
  it('splits dot-notation path into segments', () => {
    expect(getSplittedPath('a.b.0.c')).toStrictEqual(['a', 'b', '0', 'c']);
  });

  it('returns empty array for non-string paths', () => {
    expect(getSplittedPath(undefined)).toStrictEqual([]);
    expect(getSplittedPath(null)).toStrictEqual([]);
    expect(getSplittedPath(0)).toStrictEqual([]);
    expect(getSplittedPath(Symbol('test'))).toStrictEqual([]);
  });

  it('returns empty array for paths that contain prototype-polluting segments', () => {
    expect(getSplittedPath('__proto__')).toStrictEqual([]);
    expect(getSplittedPath('__proto__.polluted')).toStrictEqual([]);
    expect(getSplittedPath('a.__proto__.polluted')).toStrictEqual([]);
    expect(getSplittedPath('constructor.prototype.polluted')).toStrictEqual([]);
    expect(getSplittedPath('a.constructor.prototype.polluted')).toStrictEqual([]);
    expect(getSplittedPath('prototype.polluted')).toStrictEqual([]);
  });

  it('keeps segments that only contain unsafe words as a substring', () => {
    expect(getSplittedPath('my__proto__field.constructorName')).toStrictEqual([
      'my__proto__field',
      'constructorName',
    ]);
  });
});
