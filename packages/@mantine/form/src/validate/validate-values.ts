import { filterErrors } from '../hooks/use-form-errors/filter-errors/filter-errors';
import { getPath } from '../paths';
import { FormErrors, FormRule, FormRulesRecord, FormValidateInput } from '../types';

function getValidationResults(errors: FormErrors) {
  const filteredErrors = filterErrors(errors);
  return { hasErrors: Object.keys(filteredErrors).length > 0, errors: filteredErrors };
}

function validateRulesRecord<T>(
  rules: FormRulesRecord<T> | undefined,
  values: T,
  path = '',
  errors: FormErrors = {}
) {
  if (typeof rules !== 'object' || rules === null) {
    return errors;
  }

  return Object.keys(rules).reduce((acc, ruleKey) => {
    const rule: FormRule<any, any> = (rules as any)[ruleKey];
    const rulePath = `${path === '' ? '' : `${path}.`}${ruleKey}`;
    const value = getPath(rulePath, values);
    let arrayValidation = false;

    if (typeof rule === 'function') {
      acc[rulePath] = rule(value, values, rulePath);
    }

    if (typeof rule === 'object' && Array.isArray(value)) {
      arrayValidation = true;
      value.forEach((_item, index) =>
        validateRulesRecord(rule, values, `${rulePath}.${index}`, acc)
      );
    }

    if (typeof rule === 'object' && typeof value === 'object' && value !== null) {
      if (!arrayValidation) {
        validateRulesRecord(rule, values, rulePath, acc);
      }
    }

    return acc;
  }, errors);
}

export function validateValues<T>(validate: FormValidateInput<T> | undefined, values: T) {
  if (typeof validate === 'function') {
    return getValidationResults(validate(values));
  }

  return getValidationResults(validateRulesRecord(validate, values));
}
