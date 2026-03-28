import { isOneOf } from './is-one-of';

const TEST_ERROR = 'is-one-of-error';

describe('@mantine/form/isOneOf', () => {
  it('detects valid values from string list', () => {
    const validator = isOneOf(['admin', 'user', 'moderator'], TEST_ERROR);
    expect(validator('admin')).toBe(null);
    expect(validator('user')).toBe(null);
    expect(validator('moderator')).toBe(null);
  });

  it('detects invalid values from string list', () => {
    const validator = isOneOf(['admin', 'user', 'moderator'], TEST_ERROR);
    expect(validator('guest')).toBe(TEST_ERROR);
    expect(validator('')).toBe(TEST_ERROR);
    expect(validator('Admin')).toBe(TEST_ERROR);
  });

  it('works with number values', () => {
    const validator = isOneOf([1, 2, 3], TEST_ERROR);
    expect(validator(1)).toBe(null);
    expect(validator(2)).toBe(null);
    expect(validator(4)).toBe(TEST_ERROR);
    expect(validator(0)).toBe(TEST_ERROR);
  });

  it('uses strict equality', () => {
    const validator = isOneOf([1, 2, 3], TEST_ERROR);
    expect(validator('1')).toBe(TEST_ERROR);
    expect(validator(true)).toBe(TEST_ERROR);
  });

  it('works with boolean values', () => {
    const validator = isOneOf([true], TEST_ERROR);
    expect(validator(true)).toBe(null);
    expect(validator(false)).toBe(TEST_ERROR);
  });

  it('works with null values', () => {
    const validator = isOneOf([null, 'a'], TEST_ERROR);
    expect(validator(null)).toBe(null);
    expect(validator('a')).toBe(null);
    expect(validator(undefined)).toBe(TEST_ERROR);
  });

  it('rejects all values when list is empty', () => {
    const validator = isOneOf([], TEST_ERROR);
    expect(validator('anything')).toBe(TEST_ERROR);
    expect(validator(null)).toBe(TEST_ERROR);
    expect(validator(undefined)).toBe(TEST_ERROR);
  });

  it('returns true as default error', () => {
    const validator = isOneOf(['a', 'b']);
    expect(validator('c')).toBe(true);
    expect(validator('a')).toBe(null);
  });
});
