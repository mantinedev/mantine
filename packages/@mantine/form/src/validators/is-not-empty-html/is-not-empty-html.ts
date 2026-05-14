import type { SyncReactNode } from '../types';

function removeHtmlTags(input: string): string {
  return input.replace(/<\/?[^>]+(>|$)/g, '');
}

export function isNotEmptyHTML(error?: SyncReactNode) {
  const _error = error || true;

  return (value: unknown): SyncReactNode => {
    if (typeof value === 'string') {
      return removeHtmlTags(value).trim().length > 0 ? null : _error;
    }

    return _error;
  };
}
