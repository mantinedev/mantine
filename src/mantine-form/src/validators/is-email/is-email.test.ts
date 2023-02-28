import { isEmail } from './is-email';

const TEST_ERROR = 'email-error';

describe('@mantine/form/isEmail', () => {
  it('detects incorrect email', () => {
    const validator = isEmail(TEST_ERROR);
    expect(validator('')).toBe(TEST_ERROR);
    expect(validator('test')).toBe(TEST_ERROR);
    expect(validator('test@test')).toBe(TEST_ERROR);
    expect(validator('test@test.')).toBe(TEST_ERROR);
    expect(validator('test@test.c')).toBe(TEST_ERROR);
  });

  it('detects correct email', () => {
    const validator = isEmail(TEST_ERROR);
    expect(validator('test@email.com')).toBe(null);
    expect(validator('another@test.cn')).toBe(null);
    expect(validator('another@test.party')).toBe(null);
  });
});
