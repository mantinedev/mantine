import { getPath } from '../paths';
import { FormFieldValidationResult, FormValidateInput } from '../types';
import { getRuleForPath } from './get-rule-for-path';
import { validateValues } from './validate-values';

const defaultResolveError = (err: unknown): React.ReactNode =>
  err instanceof Error ? err.message : String(err);

function fieldResultFromErrors(
  path: string,
  errors: Record<string, React.ReactNode>
): FormFieldValidationResult {
  const pathInError = Object.keys(errors).find((errorKey) =>
    path.split('.').every((pathPart, i) => pathPart === errorKey.split('.')[i])
  );
  return { hasError: !!pathInError, error: pathInError ? errors[pathInError] : null };
}

export function validateFieldValue<T>(
  path: unknown,
  rules: FormValidateInput<T> | undefined,
  values: T,
  resolveValidationError: (error: unknown) => React.ReactNode = defaultResolveError,
  signal: AbortSignal = new AbortController().signal
): FormFieldValidationResult | Promise<FormFieldValidationResult> {
  if (typeof path !== 'string') {
    return { hasError: false, error: null };
  }

  if (typeof rules === 'function') {
    const results = validateValues(rules, values, resolveValidationError, signal);
    if (results instanceof Promise) {
      return results.then((r) => fieldResultFromErrors(path, r.errors));
    }
    return fieldResultFromErrors(path, results.errors);
  }

  const rule = getRuleForPath(path, rules);

  if (rule) {
    const value = getPath(path, values);
    try {
      const result = rule(value, values, path, signal);
      if (result instanceof Promise) {
        return result.then(
          (error) => {
            if (error) {
              return { hasError: true, error };
            }
            return { hasError: false, error: null };
          },
          (err) => ({ hasError: true, error: resolveValidationError(err) })
        );
      }
      if (result) {
        return { hasError: true, error: result };
      }
      return { hasError: false, error: null };
    } catch (err) {
      const error = resolveValidationError(err);
      return { hasError: true, error };
    }
  }

  const results = validateValues(rules, values, resolveValidationError, signal);
  if (results instanceof Promise) {
    return results.then((r) => fieldResultFromErrors(path, r.errors));
  }
  return fieldResultFromErrors(path, results.errors);
}
