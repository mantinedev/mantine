import type { FormErrors } from '../types';

export function filterErrors<T, K extends keyof T>(errors: FormErrors<T, K>): FormErrors<T, K> {
  if (errors === null || typeof errors !== 'object') {
    return {};
  }

  return Object.keys(errors).reduce<FormErrors<T, K>>((acc, key) => {
    const errorValue = errors[key];

    if (errorValue !== undefined && errorValue !== null) {
      acc[key] = errorValue;
    }

    return acc;
  }, {});
}
