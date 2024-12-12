interface IsInRangePayload {
  min?: number;
  max?: number;
}

export function isInRange({ min, max }: IsInRangePayload, error?: React.ReactNode) {
  const _error = error || true;

  return (value: unknown): React.ReactNode => {
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
