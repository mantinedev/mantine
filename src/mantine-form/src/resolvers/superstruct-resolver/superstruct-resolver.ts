import type { FormErrors } from '../../types';

export function superstructResolver(schema: any) {
  function structValidation(values: Record<string, any>): FormErrors {
    const formErrors: FormErrors = {};

    const [err] = schema.validate(values);
    if (!err) {
      return formErrors;
    }

    for (const fieldFailure of err.failures()) {
      const fieldName = fieldFailure.path.join(' ');
      formErrors[fieldFailure.path.join('.')] = `${fieldName}: ${fieldFailure.message}`;
    }

    return formErrors;
  };

  return structValidation;
}
