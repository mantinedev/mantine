import type { FormErrors } from '../../types';

type StructFailure = {
  value: any;
  key: any;
  type: string;
  refinement: string | undefined;
  message: string;
  explanation?: string;
  branch: Array<any>;
  path: Array<any>;
};

type StructValidaationError = {
  failures: () => Array<StructFailure>;
};

export function superstructResolver(schema: any) {
  function structValidation(values: Record<string, any>): FormErrors {
    const formErrors: FormErrors = {};

    const [err]: [StructValidaationError | null, unknown] = schema.validate(values);
    if (!err) {
      return formErrors;
    }

    err.failures().forEach((fieldFailure) => {
      const fieldName = fieldFailure.path.join(' ');
      formErrors[fieldFailure.path.join('.')] = `${fieldName}: ${fieldFailure.message}`;
    });

    return formErrors;
  }

  return structValidation;
}
