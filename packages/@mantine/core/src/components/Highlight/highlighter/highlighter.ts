function escapeRegex(value: string) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&');
}

export interface HighlightChunk {
  chunk: string;
  highlighted: boolean;
  color?: string;
}

export interface HighlighterOptions {
  wholeWord?: boolean;
}

export function highlighter(
  value: string,
  _highlight: string | string[],
  options: HighlighterOptions = {}
): HighlightChunk[] {
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
          .sort((a, b) => b.length - a.length)
          .join('|');

  const pattern = options.wholeWord ? `\\b(${matcher})\\b` : `(${matcher})`;
  const re = new RegExp(pattern, 'gi');
  const chunks = value
    .split(re)
    .map((part, index) => ({ chunk: part, highlighted: index % 2 === 1 }))
    .filter(({ chunk }) => chunk);

  return chunks;
}
