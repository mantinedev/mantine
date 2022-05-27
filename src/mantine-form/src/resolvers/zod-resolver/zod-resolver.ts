import type { FormErrors } from '../../types';

interface ZodError {
  path: (string | number)[];
  message: string;
}

interface ZodResults {
  success: boolean;
  error: {
    errors: ZodError[];
  };
}

interface ZodSchema {
  safeParse(values: Record<string, any>): ZodResults;
}

export function zodResolver<T extends Record<string, any>>(schema: any, transform?: (values: Record<string, any>) => Record<string, any>) {
  const _schema: ZodSchema = transform ? transform(schema) : schema;

  return (values: T): FormErrors => {
    const parsed = _schema.safeParse(values);

    if (parsed.success) {
      return {};
    }

    const results = {};

    parsed.error.errors.forEach((error) => {
      results[error.path.join('.')] = error.message;
    });

    return results;
  };
}
