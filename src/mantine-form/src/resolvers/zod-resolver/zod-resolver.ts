function parsePath(path: (string | number)[]) {
  return path.join('.');
}

export function zodResolver(schema: any) {
  return (values: Record<string, any>) => {
    const parsed = schema.safeParse(values);

    if (parsed.success) {
      return {};
    }

    const results = {};
    const { errors } = parsed.error;

    errors.forEach((error) => {
      results[parsePath(error.path)] = error.message || error.code;
    });

    return results;
  };
}
