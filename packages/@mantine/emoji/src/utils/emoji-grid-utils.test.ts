import { EmojiPickerEmoji, FlattenedRowItem } from '../types';
import {
  applySkinTone,
  createEmojiGridModel,
  getEmojiItemIndex,
  getNextEmojiIndex,
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

const e = (id: string): EmojiPickerEmoji => ({ id, name: id, keywords: [], emoji: '😀' });

const boundaryItems: FlattenedRowItem[] = [
  { type: 'header', categoryId: 'a', label: 'A' },
  { type: 'row', emojis: [e('a0'), e('a1'), e('a2')] },
  { type: 'row', emojis: [e('a3')] },
  { type: 'header', categoryId: 'b', label: 'B' },
  { type: 'row', emojis: [e('b0'), e('b1'), e('b2')] },
  { type: 'row', emojis: [e('b3'), e('b4'), e('b5')] },
];

describe('createEmojiGridModel', () => {
  it('collects emojis, rows and item offsets', () => {
    const model = createEmojiGridModel(items);
    expect(model.emojis).toEqual([emojiA, emojiB, emojiC, emojiD]);
    expect(model.rows).toEqual([
      { itemIndex: 1, start: 0, length: 2 },
      { itemIndex: 2, start: 2, length: 1 },
      { itemIndex: 4, start: 3, length: 1 },
    ]);
    expect(model.emojiRows).toEqual([0, 0, 1, 2]);
    expect(model.itemOffsets).toEqual([0, 0, 2, 3, 3]);
  });

  it('maps emoji index to virtualizer item index', () => {
    const model = createEmojiGridModel(items);
    expect(getEmojiItemIndex(model, 0)).toBe(1);
    expect(getEmojiItemIndex(model, 2)).toBe(2);
    expect(getEmojiItemIndex(model, 3)).toBe(4);
    expect(getEmojiItemIndex(model, 10)).toBe(-1);
  });
});

describe('getNextEmojiIndex', () => {
  const model = createEmojiGridModel(boundaryItems);
  const id = (index: number) => model.emojis[index].id;

  it('keeps the column when moving down across a category boundary', () => {
    expect(id(getNextEmojiIndex(model, 3, 'down'))).toBe('b0');
  });

  it('clamps the column to a shorter target row', () => {
    expect(id(getNextEmojiIndex(model, 2, 'down'))).toBe('a3');
    expect(id(getNextEmojiIndex(model, 6, 'up'))).toBe('a3');
  });

  it('moves up across a category boundary keeping the column', () => {
    expect(id(getNextEmojiIndex(model, 5, 'up'))).toBe('a3');
    expect(id(getNextEmojiIndex(model, 3, 'up'))).toBe('a0');
  });

  it('stays in place at the first and last rows', () => {
    expect(getNextEmojiIndex(model, 1, 'up')).toBe(1);
    expect(getNextEmojiIndex(model, 9, 'down')).toBe(9);
  });

  it('moves left and right through the flat list, clamped at the ends', () => {
    expect(id(getNextEmojiIndex(model, 3, 'right'))).toBe('b0');
    expect(id(getNextEmojiIndex(model, 4, 'left'))).toBe('a3');
    expect(getNextEmojiIndex(model, 0, 'left')).toBe(0);
    expect(getNextEmojiIndex(model, 9, 'right')).toBe(9);
  });

  it('handles a single column grid', () => {
    const single = createEmojiGridModel([
      { type: 'header', categoryId: 'a', label: 'A' },
      { type: 'row', emojis: [e('x')] },
      { type: 'row', emojis: [e('y')] },
    ]);
    expect(getNextEmojiIndex(single, 0, 'down')).toBe(1);
    expect(getNextEmojiIndex(single, 1, 'up')).toBe(0);
  });

  it('returns -1 for an empty grid', () => {
    expect(getNextEmojiIndex(createEmojiGridModel([]), 0, 'down')).toBe(-1);
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
