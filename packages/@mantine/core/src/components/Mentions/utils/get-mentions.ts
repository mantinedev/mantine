import type { MentionConfig, MentionOccurrence } from '../Mentions.types';
import { findAllMentions, getMentionPlainText, getTriggerText } from './iterate-mentions';

/** Extracts all mentions from a markup value with their markup and plain-text indices */
export function getMentions(value: string, configs: MentionConfig[]): MentionOccurrence[] {
  const mentions = findAllMentions(value, configs);
  const result: MentionOccurrence[] = [];
  let markupCursor = 0;
  let plainCursor = 0;

  for (const mention of mentions) {
    plainCursor += mention.index - markupCursor;

    result.push({
      id: mention.id,
      display: mention.display,
      index: mention.index,
      plainTextIndex: plainCursor,
      trigger: getTriggerText(mention.config),
    });

    plainCursor += getMentionPlainText(mention.config, mention.id, mention.display).length;
    markupCursor = mention.index + mention.markup.length;
  }

  return result;
}
