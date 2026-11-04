/*
 * Derived from react-mentions 4.4.10 (https://github.com/signavio/react-mentions)
 * — BSD-3-Clause, Copyright (c) 2018 Signavio GmbH. See ../LICENSE for the full license text.
 *
 * Local changes compared to react-mentions 4.4.10:
 * - Renamed from getMentions to findMentionOccurrences (the public getMentions wraps it)
 * - Derived from the spans of walkMentions instead of an iterateMentionsMarkup callback
 * - Each occurrence also carries the trigger of the source that produced it
 * - TypeScript types adjusted for the Mantine build, formatted with oxfmt
 */

import type { MentionOccurrence } from '../Mentions.types';
import type { MentionConfig } from './types';
import { walkMentions, type MentionSpan } from './walk-mentions';

export function toMentionOccurrence(span: MentionSpan): MentionOccurrence {
  return {
    id: span.id,
    display: span.display,
    index: span.markupStart,
    plainTextIndex: span.plainStart,
    trigger: span.trigger,
  };
}

export function findMentionOccurrences(
  value: string,
  configs: MentionConfig[]
): MentionOccurrence[] {
  return walkMentions(value, configs).spans.map(toMentionOccurrence);
}
