/*
 * Derived from react-mentions 4.4.10 (https://github.com/signavio/react-mentions)
 * — BSD-3-Clause, Copyright (c) 2018 Signavio GmbH. See ../LICENSE for the full license text.
 *
 * Local changes compared to react-mentions 4.4.10:
 * - Standalone module instead of a helper inside MentionsInput
 * - A query with allowSpaceInQuery never crosses a newline
 * - A RegExp trigger with fewer than two capture groups is wrapped into the anchored
 *   trigger + query shape instead of being used as is, the g and y flags are dropped
 * - The built regexes name their groups mentionsFull and mentionsQuery
 * - TypeScript types adjusted for the Mantine build, formatted with oxfmt
 */

import { escapeRegex } from './escape-regex';

export interface MakeTriggerRegexOptions {
  /** If set, the query is allowed to contain whitespace, it never crosses a newline @default false */
  allowSpaceInQuery?: boolean;
}

function countCaptureGroups(regex: RegExp) {
  return new RegExp(`${regex.source}|`).exec('')!.length - 1;
}

function withoutStatefulFlags(regex: RegExp) {
  const flags = regex.flags.replace(/[gy]/g, '');
  return flags === regex.flags ? regex : new RegExp(regex.source, flags);
}

/**
 * Builds an anchored trigger regex used to detect the active query in the text before the caret.
 * The resulting regex has two capture groups: the full match to replace (trigger + query) and the query.
 * A `RegExp` trigger with fewer than two capture groups matches the trigger itself and is wrapped
 * into that shape. A `RegExp` with two or more capture groups is used as is: it must be anchored
 * to the end of the text (`$`), group 1 must capture the trigger and the query and group 2 the query.
 */
export function makeTriggerRegex(
  trigger: string | RegExp = '@',
  options: MakeTriggerRegexOptions = {}
): RegExp {
  const { allowSpaceInQuery } = options;

  if (trigger instanceof RegExp) {
    if (countCaptureGroups(trigger) >= 2) {
      return withoutStatefulFlags(trigger);
    }

    const notTrigger = `(?!${trigger.source})`;
    const queryPattern = allowSpaceInQuery ? `(?:${notTrigger}[^\\n])*` : `(?:${notTrigger}\\S)*`;
    return new RegExp(
      `(?:^|\\s)(?<mentionsFull>(?:${trigger.source})(?<mentionsQuery>${queryPattern}))$`,
      withoutStatefulFlags(trigger).flags
    );
  }

  const escapedTrigger = escapeRegex(trigger);
  const queryPattern = allowSpaceInQuery ? `[^\\n${escapedTrigger}]*` : `[^\\s${escapedTrigger}]*`;

  return new RegExp(
    `(?:^|\\s)(?<mentionsFull>${escapedTrigger}(?<mentionsQuery>${queryPattern}))$`
  );
}
