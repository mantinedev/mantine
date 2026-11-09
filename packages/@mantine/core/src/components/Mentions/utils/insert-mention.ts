import { getMarkupRange } from './map-plain-text-index';
import type { MentionConfig } from './types';
import { getMentionPlainText, type MentionWalk } from './walk-mentions';

interface InsertMentionInput {
  walk: MentionWalk;
  config: MentionConfig;
  queryStart: number;
  queryEnd: number;
  id: string;
  display: string;
  appendSpace: boolean;
}

export function insertMention({
  walk,
  config,
  queryStart,
  queryEnd,
  id,
  display,
  appendSpace,
}: InsertMentionInput) {
  const { markupStart, markupEnd } = getMarkupRange(walk, queryStart, queryEnd);
  const after = walk.value.slice(markupEnd);
  const space = appendSpace && !after.startsWith(' ') ? ' ' : '';
  const markup = config.serializer.insert({ id, display });

  return {
    value: walk.value.slice(0, markupStart) + markup + space + after,
    caret: queryStart + getMentionPlainText(config, id, display).length + (appendSpace ? 1 : 0),
  };
}
