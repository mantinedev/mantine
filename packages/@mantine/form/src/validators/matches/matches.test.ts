import { matches } from './matches';

const TEST_ERROR = 'matches-error';

describe('@mantine/form/matches', () => {
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

  it('returns the same result on repeated calls with global and sticky regexps', () => {
    const globalValidator = matches(/^\d+$/g, TEST_ERROR);
    expect(globalValidator('123')).toBe(null);
    expect(globalValidator('123')).toBe(null);
    expect(globalValidator('123')).toBe(null);
    expect(globalValidator('test')).toBe(TEST_ERROR);
    expect(globalValidator('123')).toBe(null);

    const stickyValidator = matches(/\d+/y, TEST_ERROR);
    expect(stickyValidator('123')).toBe(null);
    expect(stickyValidator('123')).toBe(null);
  });
});
