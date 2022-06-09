import { filterErrors } from '../filter-errors';
import { getPath } from '../paths';
import { FormValidateInput, FormErrors, FormRulesRecord } from '../types2';

function getValidationResults(errors: FormErrors) {
  const filteredErrors = filterErrors(errors);
  return { hasErrors: Object.keys(filteredErrors).length > 0, errors: filteredErrors };
}

function validateRulesRecord<T>(
  rules: FormRulesRecord<T>,
  values: T,
  path = '',
  errors: FormErrors = {}
) {
  return Object.keys(rules).reduce((acc, ruleKey) => {
    const rule = rules[ruleKey];
    const rulePath = `${path === '' ? '' : `${path}.`}${ruleKey}`;
    const value = getPath(rulePath, values);

    if (typeof rule === 'function') {
      acc[rulePath] = rule(value, values);
    }

    if (typeof rule === 'object' && Array.isArray(value)) {
      value.forEach((_item, index) =>
        validateRulesRecord(rule, values, `${rulePath}.${index}`, acc)
      );
    }

    if (typeof rule === 'object' && typeof value === 'object' && value !== null) {
      validateRulesRecord(rule, values, rulePath, acc);
    }

    return acc;
  }, errors);
}

export function validateValues<T>(validate: FormValidateInput<T>, values: T) {
  if (typeof validate === 'function') {
    return getValidationResults(validate(values));
  }

  return getValidationResults(validateRulesRecord(validate, values));
}
