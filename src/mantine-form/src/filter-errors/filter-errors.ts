import type { FormErrors } from '../types';

export function filterErrors<T, K extends keyof T, V extends T[K]>(
  errors: FormErrors<T, K, V>
): FormErrors<T, K, V> {
  if (errors === null || typeof errors !== 'object') {
    return {};
  }

  return Object.keys(errors).reduce<FormErrors<T, K, V>>((acc, key) => {
    const errorValue = errors[key];

    if (errorValue !== undefined && errorValue !== null) {
      acc[key] = errorValue;
    }

    return acc;
  }, {});
}
