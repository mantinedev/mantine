/*
 * Derived from react-mentions 4.4.10 (https://github.com/signavio/react-mentions)
 * — BSD-3-Clause, Copyright (c) 2018 Signavio GmbH. See ../LICENSE for the full license text.
 *
 * Local changes compared to react-mentions 4.4.10:
 * - Derived from the spans of a walkMentions result passed by the caller instead of an
 *   iterateMentionsMarkup callback over the value
 * - The NULL direction is removed, an index inside a mention maps to its START or END
 * - mapMarkupIndex maps in the opposite direction (markup index to plain-text index),
 *   getMarkupRange maps a plain-text range to the markup range that keeps mentions whole
 * - TypeScript types adjusted for the Mantine build, formatted with oxfmt
 */

import type { MentionMapDirection } from './types';
import type { MentionWalk } from './walk-mentions';

export function mapPlainTextIndex(
  walk: MentionWalk,
  plainTextIndex: number,
  direction: MentionMapDirection = 'START'
): number {
  let markupCursor = 0;
  let plainCursor = 0;

  for (const span of walk.spans) {
    if (plainTextIndex <= span.plainStart) {
      return markupCursor + (plainTextIndex - plainCursor);
    }

    if (plainTextIndex < span.plainEnd) {
      return direction === 'START' ? span.markupStart : span.markupEnd;
    }

    markupCursor = span.markupEnd;
    plainCursor = span.plainEnd;
  }

  return markupCursor + (plainTextIndex - plainCursor);
}

export function mapMarkupIndex(walk: MentionWalk, markupIndex: number): number {
  let markupCursor = 0;
  let plainCursor = 0;

  for (const span of walk.spans) {
    if (markupIndex <= span.markupStart) {
      return plainCursor + (markupIndex - markupCursor);
    }

    if (markupIndex < span.markupEnd) {
      return span.plainStart;
    }

    markupCursor = span.markupEnd;
    plainCursor = span.plainEnd;
  }

  return plainCursor + (markupIndex - markupCursor);
}

export function getMarkupRange(walk: MentionWalk, start: number, end: number) {
  return {
    markupStart: mapPlainTextIndex(walk, start, 'START'),
    markupEnd: mapPlainTextIndex(walk, end, 'END'),
  };
}
