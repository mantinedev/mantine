import type { FormErrors, FormRulesRecord, FormRules, FormValidationResult } from '../types';
import { filterErrors } from '../filter-errors/filter-errors';

function validateRecordRules<T>(rules: FormRulesRecord<T>, values: T): FormErrors<T> {
  return Object.keys(rules).reduce<FormErrors<T>>((acc, key) => {
    const rule = rules[key];
    if (typeof rules[key] === 'function') {
      acc[key] = rule(values[key], values);
    }

    return acc;
  }, {});
}

function getValidationResults<T>(errors: FormErrors<T>) {
  const filteredErrors = filterErrors(errors);
  return { hasErrors: Object.keys(filteredErrors).length > 0, errors: filteredErrors };
}

export function validateValues<T>(rules: FormRules<T>, values: T): FormValidationResult<T> {
  if (rules === undefined || rules === null) {
    return { hasErrors: true, errors: {} };
  }

  if (typeof rules === 'function') {
    return getValidationResults(rules(values));
  }

  return getValidationResults(validateRecordRules(rules, values));
}
