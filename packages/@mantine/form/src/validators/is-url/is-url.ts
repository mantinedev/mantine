interface IsUrlOptions {
  protocols?: string[];
  allowLocalhost?: boolean;
}

export function isUrl(error?: React.ReactNode): (value: unknown) => React.ReactNode;
export function isUrl(
  options: IsUrlOptions,
  error?: React.ReactNode
): (value: unknown) => React.ReactNode;
export function isUrl(optionsOrError?: IsUrlOptions | React.ReactNode, error?: React.ReactNode) {
  let _options: IsUrlOptions = {};
  let _error: React.ReactNode;

  if (
    optionsOrError !== null &&
    optionsOrError !== undefined &&
    typeof optionsOrError === 'object' &&
    !Array.isArray(optionsOrError) &&
    ('protocols' in optionsOrError || 'allowLocalhost' in optionsOrError)
  ) {
    _options = optionsOrError as IsUrlOptions;
    _error = error || true;
  } else {
    _error = (optionsOrError as React.ReactNode) || true;
  }

  const protocols = _options.protocols ?? ['http', 'https'];
  const allowLocalhost = _options.allowLocalhost ?? false;

  return (value: unknown): React.ReactNode => {
    if (typeof value !== 'string') {
      return _error;
    }

    try {
      const url = new URL(value);
      const protocol = url.protocol.replace(':', '');

      if (!protocols.includes(protocol)) {
        return _error;
      }

      if (!allowLocalhost && url.hostname === 'localhost') {
        return _error;
      }

      return null;
    } catch {
      return _error;
    }
  };
}
