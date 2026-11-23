import { EmojiPickerData } from '../types';
import { searchEmojis } from './search-emojis';

const testData: EmojiPickerData = {
  categories: [
    { id: 'people', label: 'Smileys & People', emojis: ['grinning', 'thumbsup', 'wave'] },
    { id: 'nature', label: 'Animals & Nature', emojis: ['dog', 'cat'] },
  ],
  emojis: {
    grinning: { id: 'grinning', name: 'Grinning Face', keywords: ['happy', 'smile'], emoji: '😀' },
    thumbsup: {
      id: 'thumbsup',
      name: 'Thumbs Up',
      keywords: ['like', 'approve', 'ok'],
      emoji: '👍',
      skins: ['👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿'],
    },
    wave: { id: 'wave', name: 'Waving Hand', keywords: ['hello', 'hi', 'bye'], emoji: '👋' },
    dog: { id: 'dog', name: 'Dog Face', keywords: ['puppy', 'pet'], emoji: '🐶' },
    cat: { id: 'cat', name: 'Cat Face', keywords: ['kitten', 'pet'], emoji: '🐱' },
  },
};

describe('searchEmojis', () => {
  it('returns empty array when query is empty', () => {
    const results = searchEmojis(testData, '');
    expect(results).toEqual([]);
  });

  it('matches by name prefix', () => {
    const results = searchEmojis(testData, 'grin');
    expect(results.map((e) => e.id)).toEqual(['grinning']);
  });

  it('matches by keyword prefix', () => {
    const results = searchEmojis(testData, 'hel');
    expect(results.map((e) => e.id)).toEqual(['wave']);
  });

  it('matches by exact id', () => {
    const results = searchEmojis(testData, 'dog');
    expect(results.map((e) => e.id)).toEqual(['dog']);
  });

  it('is case-insensitive', () => {
    const results = searchEmojis(testData, 'THUMB');
    expect(results.map((e) => e.id)).toEqual(['thumbsup']);
  });

  it('matches keyword shared across categories', () => {
    const results = searchEmojis(testData, 'pet');
    expect(results.map((e) => e.id)).toEqual(['dog', 'cat']);
  });

  it('returns empty array for no matches', () => {
    const results = searchEmojis(testData, 'zzzzz');
    expect(results).toEqual([]);
  });
});
