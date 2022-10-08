function escapeRegex(value: string) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&');
}

export function highlighter(value: string, _highlight: string | string[]) {
  if (_highlight == null) {
    return [{ chunk: value, highlighted: false }];
  }

  const highlight = Array.isArray(_highlight)
    ? _highlight.map(escapeRegex)
    : escapeRegex(_highlight);

  const shouldHighlight = Array.isArray(highlight)
    ? highlight.filter((part) => part.trim().length > 0).length > 0
    : highlight.trim() !== '';

  if (!shouldHighlight) {
    return [{ chunk: value, highlighted: false }];
  }

  const matcher =
    typeof highlight === 'string'
      ? highlight.trim()
      : highlight
          .filter((part) => part.trim().length !== 0)
          .map((part) => part.trim())
          .join('|');

  const re = new RegExp(`(${matcher})`, 'gi');
  const chunks = value
    .split(re)
    .map((part) => ({ chunk: part, highlighted: re.test(part) }))
    .filter(({ chunk }) => chunk);

  return chunks;
}
