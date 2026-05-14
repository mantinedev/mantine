import type { SyncReactNode } from '../types';

export function isOneOf<T>(values: readonly T[], error?: SyncReactNode) {
  const _error = error || true;

  return (value: unknown): SyncReactNode => {
    return (values as readonly unknown[]).includes(value) ? null : _error;
  };
}
