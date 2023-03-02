import React from 'react';

export function matchesField(field: string, error?: React.ReactNode) {
  const _error = error || true;

  return (value: unknown, values: Record<string, unknown>) => {
    if (!values || !(field in values)) {
      return _error;
    }

    return value === values[field] ? null : _error;
  };
}
