import type { ResolvedMentionSource } from './resolve-sources';
import type { MentionSpan } from './utils/walk-mentions';

export interface ActiveMentionQuery {
  sourceIndex: number;
  query: string;
  queryStart: number;
  queryEnd: number;
}

export function detectQuery(
  plainText: string,
  caret: number,
  sources: ResolvedMentionSource[],
  spans: MentionSpan[] = []
): ActiveMentionQuery | null {
  const before = plainText.slice(0, caret);
  let active: ActiveMentionQuery | null = null;

  for (const source of sources) {
    const match = before.match(source.regex);
    const full = match?.groups?.mentionsFull ?? match?.[1];
    if (!match || full === undefined) {
      continue;
    }

    const query = match.groups?.mentionsQuery ?? match[2] ?? '';
    const queryStart = before.length - full.length;

    if (!active || queryStart > active.queryStart) {
      active = { sourceIndex: source.sourceIndex, query, queryStart, queryEnd: caret };
    }
  }

  if (!active) {
    return null;
  }

  const queryStart = active.queryStart;
  const overlapsMention = spans.some(
    (span) => span.plainStart < caret && span.plainEnd > queryStart
  );

  return overlapsMention ? null : active;
}

export function isQueryInText(
  query: ActiveMentionQuery,
  plainText: string,
  sources: ResolvedMentionSource[],
  spans: MentionSpan[] = []
): boolean {
  if (query.queryEnd > plainText.length) {
    return false;
  }

  const detected = detectQuery(plainText, query.queryEnd, sources, spans);
  return (
    detected !== null &&
    detected.sourceIndex === query.sourceIndex &&
    detected.queryStart === query.queryStart &&
    detected.query === query.query
  );
}
