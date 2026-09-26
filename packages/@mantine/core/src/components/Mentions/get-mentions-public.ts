import { MentionOccurrence } from './Mentions.types';
import { MentionSourceConfig, toMentionConfig } from './resolve-sources';
import { getMentions as getMentionsFromConfigs } from './utils/get-mentions';

/**
 * Parses a markup value into structured mentions. Use it to extract mentions on submit or for
 * validation. By default it uses a single `@[__display__](__id__)` source.
 */
export function getMentions(
  value: string,
  config: MentionSourceConfig[] = [{}]
): MentionOccurrence[] {
  return getMentionsFromConfigs(value, config.map(toMentionConfig));
}
