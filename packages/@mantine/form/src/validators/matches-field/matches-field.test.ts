import { matchesField } from './matches-field';

const TEST_ERROR = 'matches-field-error';

describe('@mantine/form/matches-field', () => {
  it('correctly detects values that do not match', () => {
    const validator = matchesField('testField', TEST_ERROR);
    expect(validator('test-value', { testField: 'test-value-1' })).toBe(TEST_ERROR);
    expect(validator(undefined, { testField2: 'test-value' })).toBe(TEST_ERROR);
  });

  it('correctly detects values that match', () => {
    const validator = matchesField('testField', TEST_ERROR);
    expect(validator('test-value', { testField: 'test-value' })).toBe(null);
  });
});
