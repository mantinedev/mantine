import { movePill } from './move-pill';

describe('@mantine/core/use-pills-reorder/move-pill', () => {
  it('returns the same array when from === to', () => {
    const value = ['a', 'b', 'c'];
    expect(movePill(value, 1, 1, 'before')).toBe(value);
    expect(movePill(value, 1, 1, 'after')).toBe(value);
  });

  it('returns the same array for adjacent no-op drops', () => {
    const value = ['a', 'b', 'c'];
    expect(movePill(value, 0, 1, 'before')).toBe(value);
    expect(movePill(value, 1, 0, 'after')).toBe(value);
    expect(movePill(value, 1, 2, 'before')).toBe(value);
    expect(movePill(value, 2, 1, 'after')).toBe(value);
  });

  it('moves item forward with position="after"', () => {
    expect(movePill(['a', 'b', 'c', 'd'], 0, 3, 'after')).toEqual(['b', 'c', 'd', 'a']);
    expect(movePill(['a', 'b', 'c', 'd'], 0, 2, 'after')).toEqual(['b', 'c', 'a', 'd']);
  });

  it('moves item forward with position="before"', () => {
    expect(movePill(['a', 'b', 'c', 'd'], 0, 3, 'before')).toEqual(['b', 'c', 'a', 'd']);
    expect(movePill(['a', 'b', 'c', 'd'], 1, 3, 'before')).toEqual(['a', 'c', 'b', 'd']);
  });

  it('moves item backward with position="before"', () => {
    expect(movePill(['a', 'b', 'c', 'd'], 3, 0, 'before')).toEqual(['d', 'a', 'b', 'c']);
    expect(movePill(['a', 'b', 'c', 'd'], 2, 1, 'before')).toEqual(['a', 'c', 'b', 'd']);
  });

  it('moves item backward with position="after"', () => {
    expect(movePill(['a', 'b', 'c', 'd'], 3, 0, 'after')).toEqual(['a', 'd', 'b', 'c']);
    expect(movePill(['a', 'b', 'c', 'd'], 2, 0, 'after')).toEqual(['a', 'c', 'b', 'd']);
  });

  it('does not mutate the input array', () => {
    const original = ['a', 'b', 'c'];
    const copy = original.slice();
    movePill(original, 0, 2, 'after');
    expect(original).toEqual(copy);
  });
});
