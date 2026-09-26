import { EmojiPickerData, FlattenedRowItem } from '../types';
import { flattenEmojiData } from './flatten-emoji-data';

const testData: EmojiPickerData = {
  categories: [
    { id: 'people', label: 'Smileys', emojis: ['a', 'b', 'c', 'd', 'e'] },
    { id: 'nature', label: 'Nature', emojis: ['f', 'g'] },
  ],
  emojis: {
    a: { id: 'a', name: 'A', keywords: [], emoji: '😀' },
    b: { id: 'b', name: 'B', keywords: [], emoji: '😃' },
    c: { id: 'c', name: 'C', keywords: [], emoji: '😄' },
    d: { id: 'd', name: 'D', keywords: [], emoji: '😁' },
    e: { id: 'e', name: 'E', keywords: [], emoji: '😆' },
    f: { id: 'f', name: 'F', keywords: [], emoji: '🐶' },
    g: { id: 'g', name: 'G', keywords: [], emoji: '🐱' },
  },
};

describe('flattenEmojiData', () => {
  it('creates header + row items with correct chunking', () => {
    const result = flattenEmojiData(testData, 3);

    expect(result).toEqual([
      { type: 'header', categoryId: 'people', label: 'Smileys' },
      { type: 'row', emojis: [testData.emojis.a, testData.emojis.b, testData.emojis.c] },
      { type: 'row', emojis: [testData.emojis.d, testData.emojis.e] },
      { type: 'header', categoryId: 'nature', label: 'Nature' },
      { type: 'row', emojis: [testData.emojis.f, testData.emojis.g] },
    ]);
  });

  it('skips categories with no valid emojis', () => {
    const data: EmojiPickerData = {
      categories: [
        { id: 'empty', label: 'Empty', emojis: ['missing'] },
        { id: 'nature', label: 'Nature', emojis: ['f'] },
      ],
      emojis: { f: { id: 'f', name: 'F', keywords: [], emoji: '🐶' } },
    };
    const result = flattenEmojiData(data, 3);

    expect(result).toEqual([
      { type: 'header', categoryId: 'nature', label: 'Nature' },
      { type: 'row', emojis: [data.emojis.f] },
    ]);
  });

  it('applies category label overrides', () => {
    const result = flattenEmojiData(testData, 3, { people: 'Custom Label' });
    const header = result[0] as Extract<FlattenedRowItem, { type: 'header' }>;
    expect(header.label).toBe('Custom Label');
  });
});
