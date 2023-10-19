import type { FormErrors } from '../../types';

interface ZodError {
  path: (string | number)[];
  message: string;
}

interface ZodParseSuccess {
  success: true;
}

interface ZodParseError {
  success: false;
  error: {
    errors: ZodError[];
  };
}

interface ZodSchema<T extends Record<string, any>> {
  safeParse: (values: T) => ZodParseSuccess | ZodParseError;
}

export function zodResolver<T extends Record<string, any>>(schema: ZodSchema<T>) {
  return (values: T): FormErrors => {
    const parsed = schema.safeParse(values);

    if (parsed.success) {
      return {};
    }

    const results: Record<string, any> = {};

    (parsed as ZodParseError).error.errors.forEach((error) => {
      results[error.path.join('.')] = error.message;
    });

    return results;
  };
}
