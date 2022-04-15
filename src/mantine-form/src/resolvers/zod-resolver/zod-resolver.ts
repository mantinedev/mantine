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
  safeParseAsync(values: Record<string, any>): Promise<ZodResults>;
}

export function zodResolver<T extends Record<string, any>>(schema: any) {
  const _schema: ZodSchema = schema;

  return async (values: T): Promise<FormErrors> => {
    const parsed = await _schema.safeParseAsync(values);
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
