function removeHtmlTags(input: string): string {
  return input.replace(/<\/?[^>]+(>|$)/g, '');
}

export function isNotEmptyHTML(error?: React.ReactNode) {
  const _error = error || true;

  return (value: unknown): React.ReactNode => {
    if (typeof value === 'string') {
      return removeHtmlTags(value).trim().length > 0 ? null : _error;
    }

    return _error;
  };
}
