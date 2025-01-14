import { isNotEmptyHTML } from './is-not-empty-html';

describe('@mantine/form/isNotEmptyHTML', () => {
  it('correctly handles strings', () => {
    const validator = isNotEmptyHTML('test-error');

    expect(validator('<div>test-input</div>')).toBe(null);
    expect(validator('test-input')).toBe(null);

    expect(validator('')).toBe('test-error');
    expect(validator(' ')).toBe('test-error');
    expect(validator('<div></div>')).toBe('test-error');
    expect(validator('<div> </div>')).toBe('test-error');
    expect(validator('<div><b><i></b></i></div>')).toBe('test-error');
  });

  it('returns error if value is not a string', () => {
    const validator = isNotEmptyHTML('test-error');
    expect(validator(null)).toBe('test-error');
    expect(validator(undefined)).toBe('test-error');
    expect(validator(false)).toBe('test-error');
    expect(validator([])).toBe('test-error');
    expect(validator({})).toBe('test-error');
  });
});
