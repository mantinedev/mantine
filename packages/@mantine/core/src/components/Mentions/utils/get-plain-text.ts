import type { MentionConfig } from '../Mentions.types';
import { findAllMentions, getMentionPlainText } from './iterate-mentions';

export interface GetPlainTextOptions {
  /** If set, each mention is rendered with its id instead of its display text */
  idOnly?: boolean;
}

/** Converts a markup value into the plain text visible to the user */
export function getPlainText(
  value: string,
  configs: MentionConfig[],
  options: GetPlainTextOptions = {}
): string {
  const mentions = findAllMentions(value, configs);
  let result = '';
  let cursor = 0;

  for (const mention of mentions) {
    result += value.slice(cursor, mention.index);
    result += getMentionPlainText(mention.config, mention.id, mention.display, options.idOnly);
    cursor = mention.index + mention.markup.length;
  }

  result += value.slice(cursor);
  return result;
}
