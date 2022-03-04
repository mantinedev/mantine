import type { FormErrors } from '../types';

export function filterErrors(errors: FormErrors): FormErrors {
  if (errors === null || typeof errors !== 'object') {
    return {};
  }

  return Object.keys(errors).reduce<FormErrors>((acc, key) => {
    const errorValue = errors[key];

    if (errorValue !== undefined && errorValue !== null) {
      acc[key] = errorValue;
    }

    return acc;
  }, {});
}
