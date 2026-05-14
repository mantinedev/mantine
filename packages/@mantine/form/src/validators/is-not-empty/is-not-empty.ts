import type { SyncReactNode } from '../types';

export function isNotEmpty(error?: SyncReactNode) {
  const _error = error || true;

  return (value: unknown): SyncReactNode => {
    if (typeof value === 'string') {
      return value.trim().length > 0 ? null : _error;
    }

    if (Array.isArray(value)) {
      return value.length > 0 ? null : _error;
    }

    if (value === null || value === undefined) {
      return _error;
    }

    if (value === false) {
      return _error;
    }

    return null;
  };
}
