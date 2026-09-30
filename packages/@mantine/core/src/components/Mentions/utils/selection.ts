import type { MentionSelectionState } from '../Mentions.types';
import type { MentionSpan } from './walk-mentions';

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
      states.set(span.markupStart, state);
    }
  }

  return states;
}
