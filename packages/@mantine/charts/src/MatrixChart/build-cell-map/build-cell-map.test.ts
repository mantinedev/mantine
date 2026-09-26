import { buildCellMap, getCellKey } from './build-cell-map';

describe('getCellKey', () => {
  it('produces unique keys for values that would collide with naive delimiters', () => {
    const key1 = getCellKey('a::b', 'c');
    const key2 = getCellKey('a', 'b::c');
    expect(key1).not.toBe(key2);
  });

  it('produces consistent keys', () => {
    expect(getCellKey('x', 'y')).toBe(getCellKey('x', 'y'));
  });
});

describe('buildCellMap', () => {
  it('builds a map from data array', () => {
    const data = [
      { x: 'a', y: '1', value: 10 },
      { x: 'b', y: '2', value: 20 },
    ];
    const map = buildCellMap(data);
    expect(map.size).toBe(2);
    expect(map.get(getCellKey('a', '1'))).toEqual({ x: 'a', y: '1', value: 10 });
    expect(map.get(getCellKey('b', '2'))).toEqual({ x: 'b', y: '2', value: 20 });
  });

  it('returns empty map for empty data', () => {
    expect(buildCellMap([]).size).toBe(0);
  });

  it('last entry wins for duplicate keys', () => {
    const data = [
      { x: 'a', y: '1', value: 10 },
      { x: 'a', y: '1', value: 99 },
    ];
    const map = buildCellMap(data);
    expect(map.get(getCellKey('a', '1'))!.value).toBe(99);
  });
});
