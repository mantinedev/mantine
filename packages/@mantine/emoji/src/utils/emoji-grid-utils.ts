import { EmojiPickerEmoji, FlattenedRowItem } from '../types';

export interface EmojiGridRow {
  itemIndex: number;
  start: number;
  length: number;
}

export interface EmojiGridModel {
  emojis: EmojiPickerEmoji[];
  rows: EmojiGridRow[];
  emojiRows: number[];
  itemOffsets: number[];
}

export type EmojiGridDirection = 'left' | 'right' | 'up' | 'down';

export function createEmojiGridModel(items: FlattenedRowItem[]): EmojiGridModel {
  const emojis: EmojiPickerEmoji[] = [];
  const rows: EmojiGridRow[] = [];
  const emojiRows: number[] = [];
  const itemOffsets: number[] = [];

  items.forEach((item, itemIndex) => {
    itemOffsets.push(emojis.length);
    if (item.type === 'row') {
      rows.push({ itemIndex, start: emojis.length, length: item.emojis.length });
      for (const emoji of item.emojis) {
        emojis.push(emoji);
        emojiRows.push(rows.length - 1);
      }
    }
  });

  return { emojis, rows, emojiRows, itemOffsets };
}

export function getNextEmojiIndex(
  model: EmojiGridModel,
  index: number,
  direction: EmojiGridDirection
): number {
  const lastIndex = model.emojis.length - 1;
  if (lastIndex < 0) {
    return -1;
  }

  const current = Math.min(Math.max(index, 0), lastIndex);

  if (direction === 'left') {
    return Math.max(current - 1, 0);
  }

  if (direction === 'right') {
    return Math.min(current + 1, lastIndex);
  }

  const rowPosition = model.emojiRows[current];
  const targetRow = model.rows[rowPosition + (direction === 'down' ? 1 : -1)];
  if (!targetRow) {
    return current;
  }

  const column = current - model.rows[rowPosition].start;
  return targetRow.start + Math.min(column, targetRow.length - 1);
}

export function getEmojiItemIndex(model: EmojiGridModel, index: number): number {
  const row = model.rows[model.emojiRows[index]];
  return row ? row.itemIndex : -1;
}

export function applySkinTone(emoji: EmojiPickerEmoji, skinTone: number): EmojiPickerEmoji {
  if (skinTone > 0 && emoji.skins && emoji.skins[skinTone - 1]) {
    return { ...emoji, emoji: emoji.skins[skinTone - 1] };
  }
  return emoji;
}
