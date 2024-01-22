import { FormFieldValidationResult, FormValidateInput } from '../types';
import { validateValues } from './validate-values';

export function validateFieldValue<T>(
  path: unknown,
  rules: FormValidateInput<T> | undefined,
  values: T
): FormFieldValidationResult {
  if (typeof path !== 'string') {
    return { hasError: false, error: null };
  }

  const results = validateValues(rules, values);
  const pathInError = Object.keys(results.errors).find((errorKey) =>
    path.split('.').every((pathPart, i) => pathPart === errorKey.split('.')[i])
  );
  return { hasError: !!pathInError, error: pathInError ? results.errors[pathInError] : null };
}
