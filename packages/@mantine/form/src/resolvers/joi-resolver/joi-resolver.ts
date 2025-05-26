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
  validate: (values: Record<string, any>, options: { abortEarly: boolean }) => JoiResults;
}

/** @deprecated Use https://github.com/mantinedev/mantine-form-joi-resolver */
export function joiResolver(schema: any, options?: any) {
  const _schema: JoiSchema = schema;
  return (values: Record<string, any>): FormErrors => {
    const parsed = _schema.validate(values, { abortEarly: false, ...options });

    if (!parsed.error) {
      return {};
    }

    const results: Record<string, any> = {};
    parsed.error.details.forEach((error) => {
      results[error.path.join('.')] = error.message;
    });

    return results;
  };
}
