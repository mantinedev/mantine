import type { MentionSpan } from './get-mention-model';
import { ResolvedMentionSource } from './resolve-sources';

export interface ActiveMentionQuery {
  sourceIndex: number;
  query: string;
  /** Plain-text index of the trigger character */
  queryStart: number;
  /** Plain-text index at the end of the matched trigger + query (the caret) */
  queryEnd: number;
}

/**
 * Scans backwards from the caret to find the nearest trigger that opens a dropdown and returns the
 * active query. Returns `null` when the caret is not positioned after a trigger, or when the trigger
 * belongs to an existing mention (so the dropdown does not reopen inside an already inserted mention).
 */
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
    if (!match) {
      continue;
    }

    const full = match[1];
    const query = match[2] ?? '';
    const queryStart = before.length - full.length;

    if (!active || queryStart > active.queryStart) {
      active = { sourceIndex: source.index, query, queryStart, queryEnd: caret };
    }
  }

  if (active) {
    const insideMention = spans.some(
      (span) => active!.queryStart >= span.plainStart && active!.queryStart < span.plainEnd
    );
    if (insideMention) {
      return null;
    }
  }

  return active;
}
