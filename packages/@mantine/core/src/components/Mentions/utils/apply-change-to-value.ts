/*
 * Derived from react-mentions 4.4.10 (https://github.com/signavio/react-mentions)
 * — BSD-3-Clause, Copyright (c) 2018 Signavio GmbH. See ../LICENSE for the full license text.
 *
 * Local changes compared to react-mentions 4.4.10:
 * - The diff fallback runs whenever the selection-based edit does not reproduce the plain text
 *   reported by the browser (stale selection, spellcheck, autocomplete), not only when the
 *   splice keeps every mention intact, and its splice snaps to mention boundaries so mentions
 *   stay atomic
 * - Returns the new value together with removedMention and the caret position of the splice
 *   that was applied
 * - Takes the walkMentions result of the current value instead of re-parsing the value
 * - TypeScript types adjusted for the Mantine build, formatted with oxfmt
 */

import { getMarkupRange, mapMarkupIndex } from './map-plain-text-index';
import type { MentionConfig } from './types';
import { walkMentions, type MentionWalk } from './walk-mentions';

export interface MentionsSelection {
  selectionStartBefore: number;
  selectionEndBefore: number;
  selectionEndAfter: number;
}

export interface ApplyChangeResult {
  value: string;
  removedMention: boolean;
  caretPlainTextIndex: number;
}

interface PlainTextSplice {
  start: number;
  end: number;
  insert: string;
}

function spliceString(str: string, start: number, end: number, insert: string): string {
  return str.slice(0, start) + insert + str.slice(end);
}

function getSelectionSplice(
  oldPlainText: string,
  plainText: string,
  selection: MentionsSelection
): PlainTextSplice {
  const { selectionEndAfter, selectionEndBefore } = selection;
  let { selectionStartBefore } = selection;

  if (
    selectionStartBefore === selectionEndBefore &&
    selectionEndBefore === selectionEndAfter &&
    oldPlainText.length === plainText.length
  ) {
    selectionStartBefore -= 1;
  }

  const insert = plainText.slice(selectionStartBefore, selectionEndAfter);
  const start = Math.min(selectionStartBefore, selectionEndAfter);
  let end = selectionEndBefore;

  if (selectionStartBefore === selectionEndAfter) {
    end = Math.max(
      selectionEndBefore,
      selectionStartBefore + (oldPlainText.length - plainText.length)
    );
  }

  return { start, end, insert };
}

function getDiffSplice(oldPlainText: string, plainText: string): PlainTextSplice {
  let start = 0;
  const minLength = Math.min(oldPlainText.length, plainText.length);
  while (start < minLength && oldPlainText[start] === plainText[start]) {
    start += 1;
  }

  let oldEnd = oldPlainText.length;
  let newEnd = plainText.length;
  while (oldEnd > start && newEnd > start && oldPlainText[oldEnd - 1] === plainText[newEnd - 1]) {
    oldEnd -= 1;
    newEnd -= 1;
  }

  return { start, end: oldEnd, insert: plainText.slice(start, newEnd) };
}

function reproducesPlainText(oldPlainText: string, plainText: string, splice: PlainTextSplice) {
  return (
    splice.start >= 0 &&
    splice.start <= splice.end &&
    splice.end <= oldPlainText.length &&
    spliceString(oldPlainText, splice.start, splice.end, splice.insert) === plainText
  );
}

export function applyChangeToValue(
  walk: MentionWalk,
  plainTextValue: string,
  selection: MentionsSelection,
  configs: MentionConfig[]
): ApplyChangeResult {
  const oldPlainTextValue = walk.plainText;
  const selectionSplice = getSelectionSplice(oldPlainTextValue, plainTextValue, selection);
  const splice = reproducesPlainText(oldPlainTextValue, plainTextValue, selectionSplice)
    ? selectionSplice
    : getDiffSplice(oldPlainTextValue, plainTextValue);

  const { markupStart, markupEnd } = getMarkupRange(walk, splice.start, splice.end);
  const newValue = spliceString(walk.value, markupStart, markupEnd, splice.insert);

  const removedMention = walkMentions(newValue, configs).spans.length < walk.spans.length;
  const caretPlainTextIndex = mapMarkupIndex(walk, markupStart) + splice.insert.length;

  return { value: newValue, removedMention, caretPlainTextIndex };
}
