import { getPath } from '../paths';
import { FormFieldValidationResult, FormValidateInput } from '../types';
import { getRuleForPath } from './get-rule-for-path';
import { validateValues } from './validate-values';

const defaultResolveError = (err: unknown): React.ReactNode =>
  err instanceof Error ? err.message : String(err);

export async function validateFieldValue<T>(
  path: unknown,
  rules: FormValidateInput<T> | undefined,
  values: T,
  resolveValidationError: (error: unknown) => React.ReactNode = defaultResolveError,
  signal: AbortSignal = new AbortController().signal
): Promise<FormFieldValidationResult> {
  if (typeof path !== 'string') {
    return { hasError: false, error: null };
  }

  if (typeof rules === 'function') {
    const results = await validateValues(rules, values, resolveValidationError, signal);
    const pathInError = Object.keys(results.errors).find((errorKey) =>
      path.split('.').every((pathPart, i) => pathPart === errorKey.split('.')[i])
    );
    return { hasError: !!pathInError, error: pathInError ? results.errors[pathInError] : null };
  }

  const rule = getRuleForPath(path, rules);

  if (rule) {
    const value = getPath(path, values);
    try {
      const result = rule(value, values, path, signal);
      const error = result instanceof Promise ? await result : result;
      if (error) {
        return { hasError: true, error };
      }
      return { hasError: false, error: null };
    } catch (err) {
      const error = resolveValidationError(err);
      return { hasError: true, error };
    }
  }

  const results = await validateValues(rules, values, resolveValidationError, signal);
  const pathInError = Object.keys(results.errors).find((errorKey) =>
    path.split('.').every((pathPart, i) => pathPart === errorKey.split('.')[i])
  );
  return { hasError: !!pathInError, error: pathInError ? results.errors[pathInError] : null };
}
