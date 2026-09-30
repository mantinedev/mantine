/*
 * Derived from react-mentions 4.4.10 (https://github.com/signavio/react-mentions)
 * — BSD-3-Clause, Copyright (c) 2018 Signavio GmbH. See ../LICENSE for the full license text.
 *
 * Local changes compared to react-mentions 4.4.10:
 * - Derived from the spans of walkMentions instead of an iterateMentionsMarkup callback
 * - getIdText renders each mention with its id (react-mentions getPlainText renders display)
 * - The trigger prefix is part of the plain text only when withTrigger is set
 * - TypeScript types adjusted for the Mantine build, formatted with oxfmt
 */

import type { MentionConfig } from './types';
import { walkMentions, type MentionWalk } from './walk-mentions';

export function getPlainText(value: string, configs: MentionConfig[]): string {
  return walkMentions(value, configs).plainText;
}

export function getIdText({ value, spans }: MentionWalk, configs: MentionConfig[]): string {
  let result = '';
  let markupCursor = 0;

  for (const span of spans) {
    result += value.slice(markupCursor, span.markupStart);
    result += (configs[span.sourceIndex].withTrigger ? span.trigger : '') + span.id;
    markupCursor = span.markupEnd;
  }

  return result + value.slice(markupCursor);
}
