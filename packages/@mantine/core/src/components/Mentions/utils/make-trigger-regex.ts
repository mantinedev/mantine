import { escapeRegex } from './escape-regex';

export interface MakeTriggerRegexOptions {
  /** If set, the query is allowed to contain whitespace @default false */
  allowSpaceInQuery?: boolean;

  /** If set, accents are ignored when the query is matched against the data, reserved for filtering @default false */
  ignoreAccents?: boolean;
}

/**
 * Builds an anchored trigger regex used to detect the active query in the text before the caret.
 * The resulting regex has two capture groups: the full match to replace (trigger + query) and the query.
 */
export function makeTriggerRegex(
  trigger: string | RegExp = '@',
  options: MakeTriggerRegexOptions = {}
): RegExp {
  if (trigger instanceof RegExp) {
    return trigger;
  }

  const { allowSpaceInQuery } = options;
  const escapedTrigger = escapeRegex(trigger);
  const queryPattern = allowSpaceInQuery ? `[^${escapedTrigger}]*` : `[^\\s${escapedTrigger}]*`;

  return new RegExp(`(?:^|\\s)(${escapedTrigger}(${queryPattern}))$`);
}
