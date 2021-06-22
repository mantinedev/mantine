import { omitStyles } from './omit-styles';

describe('@mantine/core/omit-styles', () => {
  it('omits given keys from styles object', () => {
    const styles = { root: 'root', test1: 'test1', test2: 'test2', test3: 'test3' };
    expect(omitStyles(['root', 'test3'], styles)).toEqual({ test1: 'test1', test2: 'test2' });
    expect(omitStyles(['root'], styles)).toEqual({
      test1: 'test1',
      test2: 'test2',
      test3: 'test3',
    });
    expect(omitStyles([], styles)).toEqual({
      root: 'root',
      test1: 'test1',
      test2: 'test2',
      test3: 'test3',
    });
  });

  it('returns null if styles object is not passed', () => {
    expect(omitStyles(['root'], null)).toBe(null);
    expect(omitStyles(['root'], undefined)).toBe(null);
  });
});
