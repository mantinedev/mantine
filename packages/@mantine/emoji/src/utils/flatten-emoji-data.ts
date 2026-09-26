import { EmojiPickerData, EmojiPickerEmoji, FlattenedRowItem } from '../types';

function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export function flattenEmojiData(
  data: EmojiPickerData,
  columns: number,
  categoryLabels?: Record<string, string>
): FlattenedRowItem[] {
  const items: FlattenedRowItem[] = [];

  for (const category of data.categories) {
    const emojis: EmojiPickerEmoji[] = [];
    for (const emojiId of category.emojis) {
      const emoji = data.emojis[emojiId];
      if (emoji) {
        emojis.push(emoji);
      }
    }

    if (emojis.length === 0) {
      continue;
    }

    const label = categoryLabels?.[category.id] ?? category.label;
    items.push({ type: 'header', categoryId: category.id, label });

    const rows = chunkArray(emojis, columns);
    for (const row of rows) {
      items.push({ type: 'row', emojis: row });
    }
  }

  return items;
}
