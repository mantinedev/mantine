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

    if (typeof rule === 'function') {
      acc[rulePath] = rule(getPath(rulePath, values), values);
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
