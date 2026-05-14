import type { SyncReactNode } from '../types';

export function matches(regexp: RegExp, error?: SyncReactNode) {
  const _error = error || true;

  return (value: unknown): SyncReactNode => {
    if (typeof value !== 'string') {
      return _error;
    }

    return regexp.test(value) ? null : _error;
  };
}
