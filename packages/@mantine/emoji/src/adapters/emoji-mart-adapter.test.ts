import { emojiMartAdapter } from './emoji-mart-adapter';

const mockEmojiMartData = {
  categories: [
    { id: 'people', emojis: ['grinning', 'thumbsup'] },
    { id: 'nature', emojis: ['dog'] },
  ],
  emojis: {
    grinning: {
      id: 'grinning',
      name: 'Grinning Face',
      keywords: ['happy', 'smile'],
      skins: [{ unified: '1f600', native: '😀' }],
      version: 1,
    },
    thumbsup: {
      id: 'thumbsup',
      name: 'Thumbs Up',
      keywords: ['like', 'ok'],
      skins: [
        { unified: '1f44d', native: '👍' },
        { unified: '1f44d-1f3fb', native: '👍🏻' },
        { unified: '1f44d-1f3fc', native: '👍🏼' },
        { unified: '1f44d-1f3fd', native: '👍🏽' },
        { unified: '1f44d-1f3fe', native: '👍🏾' },
        { unified: '1f44d-1f3ff', native: '👍🏿' },
      ],
      version: 1,
    },
    dog: {
      id: 'dog',
      name: 'Dog Face',
      keywords: ['puppy'],
      skins: [{ unified: '1f436', native: '🐶' }],
      version: 1,
    },
  },
};

describe('emojiMartAdapter', () => {
  it('transforms emoji-mart data into EmojiPickerData', () => {
    const result = emojiMartAdapter(mockEmojiMartData);

    expect(result.categories).toHaveLength(2);
    expect(result.categories[0]).toEqual({
      id: 'people',
      label: 'Smileys & People',
      emojis: ['grinning', 'thumbsup'],
    });
    expect(result.categories[1]).toEqual({
      id: 'nature',
      label: 'Animals & Nature',
      emojis: ['dog'],
    });
  });

  it('transforms emoji objects correctly', () => {
    const result = emojiMartAdapter(mockEmojiMartData);

    expect(result.emojis.grinning).toEqual({
      id: 'grinning',
      name: 'Grinning Face',
      keywords: ['happy', 'smile'],
      emoji: '😀',
      skins: undefined,
      version: 1,
    });
  });

  it('extracts skin tone variants (skipping default)', () => {
    const result = emojiMartAdapter(mockEmojiMartData);

    expect(result.emojis.thumbsup.skins).toEqual(['👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿']);
  });
});

describe('emojiMartAdapter category labels', () => {
  it('uses the same canonical labels as emojibaseAdapter', () => {
    const result = emojiMartAdapter({
      categories: [{ id: 'activity', emojis: [] }],
      emojis: {},
    });
    expect(result.categories[0].label).toBe('Activity');
  });
});
