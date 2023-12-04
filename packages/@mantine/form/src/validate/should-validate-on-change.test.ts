import { FORM_INDEX } from '../form-index';
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

  it('returns correct results for fields with numbers', () => {
    expect(shouldValidateOnChange('field2', ['field2', 'other-field'])).toBe(true);
    expect(shouldValidateOnChange('other-field-2', ['field2', 'other-field-2'])).toBe(true);
  });

  it('correctly detects index reference', () => {
    expect(shouldValidateOnChange('field.2.name', [`field.${FORM_INDEX}.name`])).toBe(true);
    expect(
      shouldValidateOnChange('field.2.name.4.id', [`field.${FORM_INDEX}.name.${FORM_INDEX}.id`])
    ).toBe(true);
    expect(
      shouldValidateOnChange('field.name.4.id', [`field.${FORM_INDEX}.name.${FORM_INDEX}`])
    ).toBe(false);
  });
});
