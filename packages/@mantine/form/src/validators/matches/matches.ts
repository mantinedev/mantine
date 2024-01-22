import React from 'react';

export function matches(regexp: RegExp, error?: React.ReactNode) {
  const _error = error || true;

  return (value: unknown) => {
    if (typeof value !== 'string') {
      return _error;
    }

    return regexp.test(value) ? null : _error;
  };
}
