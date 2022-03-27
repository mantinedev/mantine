import type {
  FormErrors,
  FormRulesRecord,
  FormRules,
  FormValidationResult,
  FormFieldValidationResult,
} from '../types';
import { isFormList } from '../form-list/form-list';
import { filterErrors } from '../filter-errors/filter-errors';
import { validateListValues } from './validate-list-values';

function validateRecordRules(rules: FormRulesRecord<any>, values: Record<string, any>): FormErrors {
  return Object.keys(rules).reduce<FormErrors>((acc, key) => {
    const rule = rules[key];

    if (isFormList(values[key])) {
      return { ...acc, ...validateListValues(values, key, rules) };
    }

    if (typeof rule === 'function') {
      acc[key] = rule(values[key], values);
    }

    return acc;
  }, {});
}

function getValidationResults(errors: FormErrors) {
  const filteredErrors = filterErrors(errors);
  return { hasErrors: Object.keys(filteredErrors).length > 0, errors: filteredErrors };
}

export function validateValues(
  rules: FormRules<any>,
  values: Record<string, any>
): FormValidationResult {
  if (rules === undefined || rules === null) {
    return { hasErrors: false, errors: {} };
  }

  if (typeof rules === 'function') {
    return getValidationResults(rules(values));
  }

  return getValidationResults(validateRecordRules(rules, values));
}

export function validateFieldValue(
  field: string,
  rules: FormRules<any>,
  values: Record<string, any>
): FormFieldValidationResult {
  const results = validateValues(rules, values);
  const hasError = field in results.errors;
  return { hasError, error: hasError ? results.errors[field] : null };
}
