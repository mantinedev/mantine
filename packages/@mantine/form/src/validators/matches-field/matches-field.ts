export function matchesField<T>(field: keyof T, error?: React.ReactNode) {
  const _error = error || true;

  return (value: unknown, values: T): React.ReactNode => {
    if (!values || !(field in (values as any))) {
      return _error;
    }

    return value === values[field] ? null : _error;
  };
}
