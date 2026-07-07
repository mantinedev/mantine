import type { HighlightSegment, MentionSelectionState } from './MentionsHighlighter';
import type { ResolvedMentionSource } from './resolve-sources';
import { findAllMentions, getMentionPlainText, getTriggerText } from './utils/iterate-mentions';

export interface MentionSpan {
  /** Markup index, unique per mention, used as a React key */
  index: number;
  sourceIndex: number;
  id: string;
  display: string;
  trigger: string;
  plainStart: number;
  plainEnd: number;
  rendered: string;
}

export interface MentionModel {
  plainText: string;
  spans: MentionSpan[];
}

/** Computes the plain text and mention spans of a markup value in a single pass */
export function getMentionModel(value: string, sources: ResolvedMentionSource[]): MentionModel {
  const configs = sources.map((source) => source.config);
  const found = findAllMentions(value, configs);

  let plainText = '';
  let markupCursor = 0;
  let plainCursor = 0;
  const spans: MentionSpan[] = [];

  for (const mention of found) {
    const gap = value.slice(markupCursor, mention.index);
    plainText += gap;
    plainCursor += gap.length;

    const rendered = getMentionPlainText(mention.config, mention.id, mention.display);
    const source = sources.find((item) => item.config === mention.config)!;

    spans.push({
      index: mention.index,
      sourceIndex: source.index,
      id: mention.id,
      display: mention.display,
      trigger: getTriggerText(mention.config),
      plainStart: plainCursor,
      plainEnd: plainCursor + rendered.length,
      rendered,
    });

    plainText += rendered;
    plainCursor += rendered.length;
    markupCursor = mention.index + mention.markup.length;
  }

  plainText += value.slice(markupCursor);
  return { plainText, spans };
}

/** Computes the caret-aware selection state of each mention span */
export function getSelectionStates(
  spans: MentionSpan[],
  selectionStart: number,
  selectionEnd: number
): Map<number, MentionSelectionState> {
  const states = new Map<number, MentionSelectionState>();

  for (const span of spans) {
    let state: MentionSelectionState | null = null;

    if (selectionStart === selectionEnd) {
      const caret = selectionStart;
      if (caret > span.plainStart && caret < span.plainEnd) {
        state = 'inside';
      } else if (caret === span.plainStart || caret === span.plainEnd) {
        state = 'boundary';
      }
    } else if (selectionStart < span.plainEnd && selectionEnd > span.plainStart) {
      state =
        selectionStart <= span.plainStart && selectionEnd >= span.plainEnd ? 'full' : 'partial';
    }

    if (state) {
      states.set(span.index, state);
    }
  }

  return states;
}

/** Builds the highlighter render segments from the plain text, spans and current selection state */
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
      key: String(span.index),
      id: span.id,
      display: span.display,
      trigger: span.trigger,
      className: source?.props.className,
      style: source?.props.style,
      selectionState: selectionStates.get(span.index) ?? null,
    });

    cursor = span.plainEnd;
  }

  if (cursor < plainText.length) {
    segments.push({ type: 'text', text: plainText.slice(cursor) });
  }

  return segments;
}
