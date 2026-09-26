import { EmojiPickerData, EmojiPickerEmoji } from '../types';

export function searchEmojis(data: EmojiPickerData, query: string): EmojiPickerEmoji[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    return [];
  }

  const results: EmojiPickerEmoji[] = [];
  const seen = new Set<string>();

  for (const category of data.categories) {
    for (const emojiId of category.emojis) {
      if (seen.has(emojiId)) {
        continue;
      }

      const emoji = data.emojis[emojiId];
      if (!emoji) {
        continue;
      }

      const matches =
        emoji.id === trimmed ||
        emoji.name.toLowerCase().includes(trimmed) ||
        emoji.keywords.some((kw) => kw.toLowerCase().startsWith(trimmed));

      if (matches) {
        results.push(emoji);
        seen.add(emojiId);
      }
    }
  }

  return results;
}
