import type { SyncReactNode } from '../types';

export function matches(regexp: RegExp, error?: SyncReactNode) {
  const _error = error || true;
  const expression = new RegExp(regexp.source, regexp.flags);

  return (value: unknown): SyncReactNode => {
    if (typeof value !== 'string') {
      return _error;
    }

    expression.lastIndex = 0;
    return expression.test(value) ? null : _error;
  };
}
