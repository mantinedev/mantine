import type { FormErrors } from '../types';

export type RulesRecord<T> = {
  [P in keyof T]?: (value: T[P], values: T) => boolean;
};

export type Rules<T> = ((values: T) => FormErrors<T>) | RulesRecord<T>;

interface ValidateReturnType<T> {
  hasErrors: boolean;
  errors: FormErrors<T>;
}

function filterErrors<T>(errors: FormErrors<T>): FormErrors<T> {
  return Object.keys(errors).reduce<FormErrors<T>>((acc, key) => {
    const errorValue = errors[key];

    if (errorValue !== undefined && errorValue !== null) {
      acc[key] = errorValue;
    }

    return acc;
  }, {});
}

function validateRecordRules<T>(rules: RulesRecord<T>, values: T): FormErrors<T> {
  return Object.keys(rules).reduce<FormErrors<T>>((acc, key) => {
    const rule = rules[key];
    if (typeof rules[key] === 'function') {
      acc[key] = rule(values[key], values);
    }

    return acc;
  }, {});
}

function getValidationResults<T>(errors: FormErrors<T>) {
  return { hasErrors: Object.keys(errors).length > 0, errors: filterErrors(errors) };
}

export function validateValues<T>(rules: Rules<T>, values: T): ValidateReturnType<T> {
  if (rules === undefined || rules === null) {
    return { hasErrors: true, errors: {} };
  }

  if (typeof rules === 'function') {
    return getValidationResults(rules(values));
  }

  return getValidationResults(validateRecordRules(rules, values));
}
