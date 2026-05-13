function escapeRegex(value: string) {
  return value.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
}

function foldAccents(text: string): string {
  return text.normalize('NFD').replace(/\p{M}/gu, '');
}


function getAccentInsensitiveChunks(value: string, re: RegExp): HighlightChunk[] {
  const foldedValue = foldAccents(value);
  const chunks: HighlightChunk[] = [];
  let lastEnd = 0;
  let match: RegExpExecArray | null;

  while ((match = re.exec(foldedValue)) !== null) {
    const start = match.index;
    const end = start + match[0].length;

    if (start > lastEnd) {
      chunks.push({ chunk: value.slice(lastEnd, start), highlighted: false });
    }
    chunks.push({ chunk: value.slice(start, end), highlighted: true });
    lastEnd = end;
  }

  if (lastEnd < value.length) {
    chunks.push({ chunk: value.slice(lastEnd), highlighted: false });
  }

  return chunks.filter(({ chunk }) => chunk);
}

export interface HighlightChunk {
  chunk: string;
  highlighted: boolean;
  color?: string;
}

export interface HighlighterOptions {
  wholeWord?: boolean;
  caseInsensitive?: boolean;
  accentInsensitive?: boolean;
}

export function highlighter(
  value: string,
  _highlight: string | string[],
  options: HighlighterOptions = {
    wholeWord: false,
    caseInsensitive: true,
    accentInsensitive: true,
  }
): HighlightChunk[] {
  if (_highlight == null) {
    return [{ chunk: value, highlighted: false }];
  }

  const accentInsensitive = options.accentInsensitive;
  const prepareTerm = (term: string) =>
    accentInsensitive ? foldAccents(escapeRegex(term)) : escapeRegex(term);

  const highlight = Array.isArray(_highlight)
    ? _highlight.map(prepareTerm)
    : prepareTerm(_highlight);

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

  const pattern = options.wholeWord
    ? `(?<![\\p{L}\\p{N}_])(${matcher})(?![\\p{L}\\p{N}_])`
    : `(${matcher})`;
  const flags = ['g', options.caseInsensitive ? 'i' : '', options.wholeWord ? 'u' : ''].join('');
  const re = new RegExp(pattern, flags);

  if (accentInsensitive) {
    return getAccentInsensitiveChunks(value, re);
  }

  return value
    .split(re)
    .map((part, index) => ({ chunk: part, highlighted: index % 2 === 1 }))
    .filter(({ chunk }) => chunk);
}
