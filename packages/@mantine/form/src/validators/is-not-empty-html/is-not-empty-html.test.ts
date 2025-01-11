import { isNotEmptyHTML } from './is-not-empty-html';

describe('@mantine/form/isNotEmptyHTML', () => {
  it('works correctly', () => {
    const validator = isNotEmptyHTML('test-error');

    expect(validator('<div>test-input</div>')).toBe(null);
    expect(validator('test-input')).toBe(null);

    expect(validator('')).toBe('test-error');
    expect(validator(' ')).toBe('test-error');
    expect(validator('<div></div>')).toBe('test-error');
    expect(validator('<div> </div>')).toBe('test-error');
    expect(validator('<div><b><i></b></i></div>')).toBe('test-error');
  });
});
