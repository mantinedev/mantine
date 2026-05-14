import type { SyncReactNode } from '../types';

export function isJSONString(error?: SyncReactNode) {
  const _error = error || true;

  return (value: unknown): SyncReactNode => {
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
