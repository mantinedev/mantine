import { isJSONString } from './is-json-string';

describe('@mantine/form/isJSONString', () => {
  it('correctly validates JSON strings', () => {
    const validator = isJSONString('test-error');

    expect(validator('{"key": ""}')).toBe(null);
    expect(validator('{"key": "value"}')).toBe(null);
    expect(validator('{"key": 1}')).toBe(null);
    expect(validator('{"key": true}')).toBe(null);
    expect(validator('[{"key": false}]')).toBe(null);

    expect(validator('')).toBe('test-error');
    expect(validator(' ')).toBe('test-error');
    expect(validator('{"key": "value"')).toBe('test-error');
    expect(validator('{"key": value}')).toBe('test-error');
  });

  it('returns error if value is not a string', () => {
    const validator = isJSONString('test-error');
    expect(validator(null)).toBe('test-error');
    expect(validator(undefined)).toBe('test-error');
    expect(validator(false)).toBe('test-error');
    expect(validator([])).toBe('test-error');
    expect(validator({})).toBe('test-error');
  });
});
