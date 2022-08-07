import { FormValidateInput, FormFieldValidationResult } from '../types';
import { validateValues } from './validate-values';

export function validateFieldValue<T>(
  path: unknown,
  rules: FormValidateInput<T>,
  values: T
): FormFieldValidationResult {
  if (typeof path !== 'string') {
    return { hasError: false, error: null };
  }

  const results = validateValues(rules, values);
  const hasError = path in results.errors;
  return { hasError, error: hasError ? results.errors[path] : null };
}
