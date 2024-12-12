export function matches(regexp: RegExp, error?: React.ReactNode) {
  const _error = error || true;

  return (value: unknown): React.ReactNode => {
    if (typeof value !== 'string') {
      return _error;
    }

    return regexp.test(value) ? null : _error;
  };
}
