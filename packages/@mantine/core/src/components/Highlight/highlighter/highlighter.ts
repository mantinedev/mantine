function escapeRegex(value: string) {
  return value.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
}

export function foldAccents(text: string): string {
  return text.normalize('NFD').replace(/\p{M}/gu, '');
}

function foldAccentsWithMap(text: string): { folded: string; map: number[] } {
  let folded = '';
  const map: number[] = [];
  let i = 0;

  while (i < text.length) {
    const cp = text.codePointAt(i)!;
    const cpStr = String.fromCodePoint(cp);
    const foldedCp = foldAccents(cpStr);
    for (let j = 0; j < foldedCp.length; j += 1) {
      map.push(i);
    }
    folded += foldedCp;
    i += cpStr.length;
  }

  map.push(text.length);
  return { folded, map };
}

function getAccentInsensitiveChunks(value: string, re: RegExp): HighlightChunk[] {
  const { folded, map } = foldAccentsWithMap(value);
  const chunks: HighlightChunk[] = [];
  let lastOrigEnd = 0;
  let match: RegExpExecArray | null;

  while ((match = re.exec(folded)) !== null) {
    const foldedStart = match.index;
    const foldedEnd = foldedStart + match[0].length;
    const origStart = map[foldedStart];
    const origEnd = map[foldedEnd];

    if (origStart > lastOrigEnd) {
      chunks.push({ chunk: value.slice(lastOrigEnd, origStart), highlighted: false });
    }
    chunks.push({ chunk: value.slice(origStart, origEnd), highlighted: true });
    lastOrigEnd = origEnd;

    if (match[0].length === 0) {
      re.lastIndex += 1;
    }
  }

  if (lastOrigEnd < value.length) {
    chunks.push({ chunk: value.slice(lastOrigEnd), highlighted: false });
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
  options: HighlighterOptions = {}
): HighlightChunk[] {
  if (_highlight == null) {
    return [{ chunk: value, highlighted: false }];
  }

  const { wholeWord = false, caseInsensitive = true, accentInsensitive = true } = options;

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

  const pattern = wholeWord
    ? `(?<![\\p{L}\\p{N}_])(${matcher})(?![\\p{L}\\p{N}_])`
    : `(${matcher})`;
  const flags = ['g', caseInsensitive ? 'i' : '', wholeWord ? 'u' : ''].join('');
  const re = new RegExp(pattern, flags);

  if (accentInsensitive) {
    return getAccentInsensitiveChunks(value, re);
  }

  return value
    .split(re)
    .map((part, index) => ({ chunk: part, highlighted: index % 2 === 1 }))
    .filter(({ chunk }) => chunk);
}
