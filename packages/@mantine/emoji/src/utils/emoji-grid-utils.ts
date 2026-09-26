import { EmojiPickerEmoji, FlattenedRowItem } from '../types';

export function getAllEmojis(items: FlattenedRowItem[]): EmojiPickerEmoji[] {
  const emojis: EmojiPickerEmoji[] = [];
  for (const item of items) {
    if (item.type === 'row') {
      emojis.push(...item.emojis);
    }
  }
  return emojis;
}

export function getEmojiIdAtIndex(
  items: FlattenedRowItem[],
  emojiIndex: number
): string | undefined {
  let count = 0;
  for (const item of items) {
    if (item.type === 'row') {
      for (const emoji of item.emojis) {
        if (count === emojiIndex) {
          return emoji.id;
        }
        count++;
      }
    }
  }
  return undefined;
}

export function getItemEmojiOffsets(items: FlattenedRowItem[]): number[] {
  let globalEmojiIndex = 0;
  const offsets: number[] = [];
  for (const item of items) {
    offsets.push(globalEmojiIndex);
    if (item.type === 'row') {
      globalEmojiIndex += item.emojis.length;
    }
  }
  return offsets;
}

export function emojiIndexToRowIndex(items: FlattenedRowItem[], emojiIndex: number): number {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.type === 'row') {
      if (count + item.emojis.length > emojiIndex) {
        return i;
      }
      count += item.emojis.length;
    }
  }
  return 0;
}

export function applySkinTone(emoji: EmojiPickerEmoji, skinTone: number): EmojiPickerEmoji {
  if (skinTone > 0 && emoji.skins && emoji.skins[skinTone - 1]) {
    return { ...emoji, emoji: emoji.skins[skinTone - 1] };
  }
  return emoji;
}
