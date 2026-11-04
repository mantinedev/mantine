import type {
  MentionDisplayTransform,
  MentionOccurrence,
  MentionSourceConfig,
} from './Mentions.types';
import { createMarkupSerializer, DEFAULT_MENTION_MARKUP } from './utils/create-markup-serializer';
import { findMentionOccurrences } from './utils/find-mention-occurrences';
import type { MentionConfig } from './utils/types';

const defaultDisplayTransform: MentionDisplayTransform = (_id, display) => display;

function getDefaultMarkup(trigger: string | RegExp): string {
  return typeof trigger === 'string' ? `${trigger}[__display__](__id__)` : DEFAULT_MENTION_MARKUP;
}

export function toMentionConfig(input: MentionSourceConfig): MentionConfig {
  const trigger = input.trigger ?? '@';
  const displayTransform = input.displayTransform ?? defaultDisplayTransform;

  const serializer =
    input.markup && typeof input.markup !== 'string'
      ? input.markup
      : createMarkupSerializer(input.markup ?? getDefaultMarkup(trigger));

  return { trigger, serializer, displayTransform, withTrigger: input.withTrigger ?? false };
}

/**
 * Parses a markup value into structured mentions. Use it to extract mentions on submit or for
 * validation. By default it uses a single `@[__display__](__id__)` source.
 */
export function getMentions(
  value: string,
  config: MentionSourceConfig[] = [{}]
): MentionOccurrence[] {
  return findMentionOccurrences(value, config.map(toMentionConfig));
}
