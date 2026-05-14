import type { SyncReactNode } from '../types';

export function matchesField<T>(field: keyof T, error?: SyncReactNode) {
  const _error = error || true;

  return (value: unknown, values: T): SyncReactNode => {
    if (!values || !(field in (values as any))) {
      return _error;
    }

    return value === values[field] ? null : _error;
  };
}
