import { MentionConfig } from '../Mentions.types';

export interface FoundMention {
  config: MentionConfig;
  markup: string;
  index: number;
  id: string;
  display: string;
}

/** Returns the trigger string of a config, or an empty string for `RegExp` triggers */
export function getTriggerText(config: MentionConfig): string {
  return typeof config.trigger === 'string' ? config.trigger : '';
}

/** Plain-text representation of a single mention, with the trigger prefix only when `withTrigger` is set */
export function getMentionPlainText(
  config: MentionConfig,
  id: string,
  display: string,
  idOnly = false
): string {
  const base = idOnly ? id : config.displayTransform(id, display);
  return (config.withTrigger ? getTriggerText(config) : '') + base;
}

/** Finds all non-overlapping mentions in the value across every configured serializer, sorted by index */
export function findAllMentions(value: string, configs: MentionConfig[]): FoundMention[] {
  const all: FoundMention[] = [];

  for (const config of configs) {
    for (const match of config.serializer.findAll(value)) {
      if (match.markup.length === 0) {
        continue;
      }

      all.push({
        config,
        markup: match.markup,
        index: match.index,
        id: String(match.id),
        display: match.display == null ? String(match.id) : String(match.display),
      });
    }
  }

  all.sort((a, b) => a.index - b.index);

  const result: FoundMention[] = [];
  let cursor = 0;

  for (const mention of all) {
    if (mention.index >= cursor) {
      result.push(mention);
      cursor = mention.index + mention.markup.length;
    }
  }

  return result;
}
