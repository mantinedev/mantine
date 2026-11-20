import { matches } from './matches';

const TEST_ERROR = 'matches-error';

describe('@mantine/form/matches', () => {
  it.each(['g', 'y', 'gy'])('validates repeatedly with the %s flag', (flags) => {
    const regexp = new RegExp('^\\d+$', flags);
    regexp.lastIndex = 2;
    const validator = matches(regexp, TEST_ERROR);

    expect(validator('123')).toBe(null);
    expect(validator('123')).toBe(null);
    expect(validator('test')).toBe(TEST_ERROR);
    expect(validator('123')).toBe(null);
    expect(regexp.lastIndex).toBe(2);
  });

  it('preserves sticky matching behavior', () => {
    const validator = matches(/\d+/y, TEST_ERROR);
    expect(validator('a123')).toBe(TEST_ERROR);
    expect(validator('123a')).toBe(null);
    expect(validator('123a')).toBe(null);
  });

  it('correctly detects values that do not match', () => {
    const validator = matches(/^\d+$/, TEST_ERROR);
    expect(validator('test')).toBe(TEST_ERROR);
    expect(validator('12test')).toBe(TEST_ERROR);
    expect(validator('test21')).toBe(TEST_ERROR);
  });

  it('correctly detects values that match', () => {
    const validator = matches(/^\d+$/, TEST_ERROR);
    expect(validator('1')).toBe(null);
    expect(validator('1234')).toBe(null);
  });
});
