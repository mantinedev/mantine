import { MentionConfig, MentionMapDirection } from '../Mentions.types';
import { findAllMentions, getMentionPlainText } from './iterate-mentions';

/**
 * Converts a caret offset in the plain text to an offset in the markup string.
 * Mentions are atomic: an index that falls strictly inside a mention snaps to its start or end
 * (based on `direction`), or returns `null` when `direction` is `'NULL'`.
 */
export function mapPlainTextIndex(
  value: string,
  configs: MentionConfig[],
  plainTextIndex: number,
  direction: MentionMapDirection = 'START'
): number | null {
  const mentions = findAllMentions(value, configs);
  let markupCursor = 0;
  let plainCursor = 0;

  for (const mention of mentions) {
    const gapLength = mention.index - markupCursor;

    // Index falls inside the plain-text gap before the mention (inclusive of the gap end)
    if (plainTextIndex <= plainCursor + gapLength) {
      return markupCursor + (plainTextIndex - plainCursor);
    }

    plainCursor += gapLength;
    markupCursor = mention.index;

    const mentionPlainLength = getMentionPlainText(
      mention.config,
      mention.id,
      mention.display
    ).length;
    const mentionMarkupLength = mention.markup.length;

    if (plainTextIndex < plainCursor + mentionPlainLength) {
      if (plainTextIndex === plainCursor) {
        return markupCursor;
      }

      if (direction === 'START') {
        return markupCursor;
      }

      if (direction === 'END') {
        return markupCursor + mentionMarkupLength;
      }

      return null;
    }

    plainCursor += mentionPlainLength;
    markupCursor += mentionMarkupLength;
  }

  return markupCursor + (plainTextIndex - plainCursor);
}
