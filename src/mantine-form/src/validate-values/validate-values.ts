import type {
  FormErrors,
  FormRulesRecord,
  FormRules,
  FormValidationResult,
  FormFieldValidationResult,
} from '../types';
import { filterErrors } from '../filter-errors/filter-errors';

function validateRecordRules<T, K extends keyof T, V extends T[K]>(
  rules: FormRulesRecord<T>,
  values: T
): FormErrors<T, K, V> {
  return Object.keys(rules).reduce<FormErrors<T, K, V>>((acc, key) => {
    const rule = rules[key];
    if (typeof rules[key] === 'function') {
      acc[key] = rule(values[key], values);
    }

    return acc;
  }, {});
}

function getValidationResults<T, K extends keyof T, V extends T[K]>(errors: FormErrors<T, K, V>) {
  const filteredErrors = filterErrors(errors);
  return { hasErrors: Object.keys(filteredErrors).length > 0, errors: filteredErrors };
}

export function validateValues<T, K extends keyof T, V extends T[K]>(
  rules: FormRules<T, K, V>,
  values: T
): FormValidationResult<T, K, V> {
  if (rules === undefined || rules === null) {
    return { hasErrors: true, errors: {} };
  }

  if (typeof rules === 'function') {
    return getValidationResults(rules(values));
  }

  return getValidationResults(validateRecordRules(rules, values));
}

export function validateFieldValue<T, K extends keyof T, V extends T[K]>(
  field: keyof T,
  rules: FormRules<T, K, V>,
  values: T
): FormFieldValidationResult {
  const results = validateValues(rules, values);
  const valid = !(field in results.errors);
  return { valid, error: valid ? null : results.errors[field] };
}
