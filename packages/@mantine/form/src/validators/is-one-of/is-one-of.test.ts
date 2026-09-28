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

  it('uses strict equality for non-string values', () => {
    const validator = isOneOf([1, 2, 3], TEST_ERROR);
    expect(validator(1)).toBe(null);
    expect(validator('1')).toBe(TEST_ERROR);
    expect(validator(true)).toBe(TEST_ERROR);
  });

  it('returns true as default error', () => {
    const validator = isOneOf(['a', 'b']);
    expect(validator('c')).toBe(true);
    expect(validator('a')).toBe(null);
  });
});
