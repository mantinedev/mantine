import type { FormErrors } from '../types';

export function clearListErrors(field: PropertyKey, errors: FormErrors) {
  if (errors === null || typeof errors !== 'object') {
    return {};
  }

  const clone = { ...errors };
  Object.keys(errors).forEach((errorKey) => {
    if (errorKey.includes(`${String(field)}.`)) {
      delete clone[errorKey];
    }
  });

  return clone;
}
