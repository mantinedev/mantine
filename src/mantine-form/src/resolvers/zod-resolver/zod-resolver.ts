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

export function zodResolver(schema: any) {
  const _schema: ZodSchema = schema;

  return (values: Record<string, any>) => {
    const parsed = _schema.safeParse(values);

    if (parsed.success) {
      return {};
    }

    const results = {};
    const { errors } = parsed.error;

    errors.forEach((error) => {
      results[error.path.join('.')] = error.message;
    });

    return results;
  };
}
