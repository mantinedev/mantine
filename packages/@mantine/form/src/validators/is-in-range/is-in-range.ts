import type { SyncReactNode } from '../types';

interface IsInRangePayload {
  min?: number;
  max?: number;
}

export function isInRange({ min, max }: IsInRangePayload, error?: SyncReactNode) {
  const _error = error || true;

  return (value: unknown): SyncReactNode => {
    if (typeof value !== 'number') {
      return _error;
    }

    let valid = true;

    if (typeof min === 'number' && value < min) {
      valid = false;
    }

    if (typeof max === 'number' && value > max) {
      valid = false;
    }

    return valid ? null : _error;
  };
}
