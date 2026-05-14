import type { SyncReactNode } from '../types';

interface IsUrlOptions {
  protocols?: string[];
  allowLocalhost?: boolean;
}

export function isUrl(error?: SyncReactNode): (value: unknown) => SyncReactNode;
export function isUrl(
  options: IsUrlOptions,
  error?: SyncReactNode
): (value: unknown) => SyncReactNode;
export function isUrl(optionsOrError?: IsUrlOptions | SyncReactNode, error?: SyncReactNode) {
  let _options: IsUrlOptions = {};
  let _error: SyncReactNode;

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
    _error = (optionsOrError as SyncReactNode) || true;
  }

  const protocols = _options.protocols ?? ['http', 'https'];
  const allowLocalhost = _options.allowLocalhost ?? false;

  return (value: unknown): SyncReactNode => {
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
