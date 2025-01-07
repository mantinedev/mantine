interface HasLengthOptions {
  max?: number;
  min?: number;
}

type HasLengthPayload = HasLengthOptions | number;

function isLengthValid(payload: HasLengthPayload, value: any) {
  if (typeof payload === 'number') {
    return value.length === payload;
  }

  const { max, min } = payload;
  let valid = true;

  if (typeof max === 'number' && value.length > max) {
    valid = false;
  }

  if (typeof min === 'number' && value.length < min) {
    valid = false;
  }

  return valid;
}

export function hasLength(payload: HasLengthPayload, error?: React.ReactNode) {
  const _error = error || true;

  return (value: unknown): React.ReactNode => {
    if (typeof value === 'string') {
      return isLengthValid(payload, value.trim()) ? null : _error;
    }

    if (typeof value === 'object' && value !== null && 'length' in value) {
      return isLengthValid(payload, value) ? null : _error;
    }

    return _error;
  };
}
