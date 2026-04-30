export function isOneOf<T>(values: readonly T[], error?: React.ReactNode) {
  const _error = error || true;

  return (value: unknown): React.ReactNode => {
    return (values as readonly unknown[]).includes(value) ? null : _error;
  };
}
