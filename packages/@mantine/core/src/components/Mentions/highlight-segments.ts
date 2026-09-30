import type { MentionSelectionState } from './Mentions.types';
import type { ResolvedMentionSource } from './resolve-sources';
import type { MentionSpan } from './utils/walk-mentions';

export interface HighlightTextSegment {
  type: 'text';
  text: string;
}

export interface HighlightMentionSegment {
  type: 'mention';
  text: string;
  key: string;
  id: string;
  display: string;
  trigger: string;
  plainStart: number;
  plainEnd: number;
  className?: string;
  style?: React.CSSProperties;
  selectionState: MentionSelectionState | null;
}

export type HighlightSegment = HighlightTextSegment | HighlightMentionSegment;

export function buildHighlightSegments(
  plainText: string,
  spans: MentionSpan[],
  sources: ResolvedMentionSource[],
  selectionStates: Map<number, MentionSelectionState>
): HighlightSegment[] {
  const segments: HighlightSegment[] = [];
  let cursor = 0;

  for (const span of spans) {
    if (span.plainStart > cursor) {
      segments.push({ type: 'text', text: plainText.slice(cursor, span.plainStart) });
    }

    const source = sources[span.sourceIndex];
    segments.push({
      type: 'mention',
      text: span.rendered,
      key: String(span.markupStart),
      id: span.id,
      display: span.display,
      trigger: span.trigger,
      plainStart: span.plainStart,
      plainEnd: span.plainEnd,
      className: source?.props.className,
      style: source?.props.style,
      selectionState: selectionStates.get(span.markupStart) ?? null,
    });

    cursor = span.plainEnd;
  }

  if (cursor < plainText.length) {
    segments.push({ type: 'text', text: plainText.slice(cursor) });
  }

  return segments;
}
