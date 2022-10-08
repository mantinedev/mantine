import { shouldValidateOnChange } from './should-validate-on-change';

describe('@mantine/form/should-validate-on-change', () => {
  it('returns correct results for boolean input', () => {
    expect(shouldValidateOnChange('field', true)).toBe(true);
    expect(shouldValidateOnChange('field', false)).toBe(false);
  });

  it('returns correct results for array input', () => {
    expect(shouldValidateOnChange('field', ['field', 'other-field'])).toBe(true);
    expect(shouldValidateOnChange('field', ['other-field', 'other-field-2'])).toBe(false);
  });
});
