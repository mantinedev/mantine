import type { FormErrors } from '../types';

export function filterErrors<T>(errors: FormErrors<T>): FormErrors<T> {
  if (errors === null || typeof errors !== 'object') {
    return {};
  }

  return Object.keys(errors).reduce<FormErrors<T>>((acc, key) => {
    const errorValue = errors[key];

    if (errorValue !== undefined && errorValue !== null) {
      acc[key] = errorValue;
    }

    return acc;
  }, {});
}
