export function isJSONString(error?: React.ReactNode) {
  const _error = error || true;

  return (value: unknown): React.ReactNode => {
    if (typeof value === 'string') {
      try {
        JSON.parse(value);
        return null;
      } catch (e) {
        return _error;
      }
    }

    return _error;
  };
}
