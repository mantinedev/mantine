import { EmojiPickerEmoji, FlattenedRowItem } from '../types';
import {
  applySkinTone,
  emojiIndexToRowIndex,
  getAllEmojis,
  getEmojiIdAtIndex,
  getItemEmojiOffsets,
} from './emoji-grid-utils';

const emojiA: EmojiPickerEmoji = { id: 'a', name: 'A', keywords: [], emoji: '😀' };
const emojiB: EmojiPickerEmoji = { id: 'b', name: 'B', keywords: [], emoji: '😃' };
const emojiC: EmojiPickerEmoji = { id: 'c', name: 'C', keywords: [], emoji: '😄' };
const emojiD: EmojiPickerEmoji = {
  id: 'd',
  name: 'D',
  keywords: [],
  emoji: '👍',
  skins: ['👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿'],
};

const items: FlattenedRowItem[] = [
  { type: 'header', categoryId: 'people', label: 'People' },
  { type: 'row', emojis: [emojiA, emojiB] },
  { type: 'row', emojis: [emojiC] },
  { type: 'header', categoryId: 'nature', label: 'Nature' },
  { type: 'row', emojis: [emojiD] },
];

describe('getAllEmojis', () => {
  it('extracts all emojis from flattened items', () => {
    expect(getAllEmojis(items)).toEqual([emojiA, emojiB, emojiC, emojiD]);
  });

  it('returns empty array for header-only items', () => {
    expect(getAllEmojis([{ type: 'header', categoryId: 'x', label: 'X' }])).toEqual([]);
  });
});

describe('getEmojiIdAtIndex', () => {
  it('returns emoji id at given flat index', () => {
    expect(getEmojiIdAtIndex(items, 0)).toBe('a');
    expect(getEmojiIdAtIndex(items, 1)).toBe('b');
    expect(getEmojiIdAtIndex(items, 2)).toBe('c');
    expect(getEmojiIdAtIndex(items, 3)).toBe('d');
  });

  it('returns undefined for out-of-range index', () => {
    expect(getEmojiIdAtIndex(items, 10)).toBeUndefined();
  });
});

describe('getItemEmojiOffsets', () => {
  it('returns emoji offset for each item', () => {
    expect(getItemEmojiOffsets(items)).toEqual([0, 0, 2, 3, 3]);
  });
});

describe('emojiIndexToRowIndex', () => {
  it('maps flat emoji index to virtualizer row index', () => {
    expect(emojiIndexToRowIndex(items, 0)).toBe(1);
    expect(emojiIndexToRowIndex(items, 1)).toBe(1);
    expect(emojiIndexToRowIndex(items, 2)).toBe(2);
    expect(emojiIndexToRowIndex(items, 3)).toBe(4);
  });

  it('returns 0 for out-of-range index', () => {
    expect(emojiIndexToRowIndex(items, 100)).toBe(0);
  });
});

describe('applySkinTone', () => {
  it('returns original emoji when skinTone is 0', () => {
    expect(applySkinTone(emojiD, 0)).toBe(emojiD);
  });

  it('applies skin tone variant', () => {
    expect(applySkinTone(emojiD, 1)).toEqual({ ...emojiD, emoji: '👍🏻' });
    expect(applySkinTone(emojiD, 3)).toEqual({ ...emojiD, emoji: '👍🏽' });
  });

  it('returns original emoji when no skins available', () => {
    expect(applySkinTone(emojiA, 2)).toBe(emojiA);
  });

  it('returns original emoji when skin tone index is out of range', () => {
    expect(applySkinTone(emojiD, 10)).toBe(emojiD);
  });
});
