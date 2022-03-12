import type { FormErrors } from '../../types';

interface JoiError {
  path: (string | number)[];
  message: string;
}

interface JoiResults {
  success: boolean;
  error: {
    details: JoiError[];
  };
}

interface JoiSchema {
  validate(values: Record<string, any>, options: { abortEarly: boolean }): JoiResults;
}

export function joiResolver(schema: any) {
  const _schema: JoiSchema = schema;
  return (values: Record<string, any>): FormErrors => {
    const parsed = _schema.validate(values, { abortEarly: false });

    if (!parsed.error) {
      return {};
    }

    const results = {};
    parsed.error.details.forEach((error) => {
      results[error.path.join('.')] = error.message;
    });

    return results;
  };
}
