import { emojibaseAdapter } from './emojibase-adapter';

const mockEmojibaseData = [
  {
    label: 'grinning face',
    hexcode: '1F600',
    emoji: '😀',
    tags: ['happy', 'smile'],
    group: 0,
    order: 1,
    version: 1,
  },
  {
    label: 'thumbs up',
    hexcode: '1F44D',
    emoji: '👍',
    tags: ['like', 'ok'],
    group: 1,
    order: 188,
    version: 0.6,
    skins: [
      { hexcode: '1F44D-1F3FB', emoji: '👍🏻' },
      { hexcode: '1F44D-1F3FC', emoji: '👍🏼' },
      { hexcode: '1F44D-1F3FD', emoji: '👍🏽' },
      { hexcode: '1F44D-1F3FE', emoji: '👍🏾' },
      { hexcode: '1F44D-1F3FF', emoji: '👍🏿' },
    ],
  },
  {
    label: 'dog face',
    hexcode: '1F436',
    emoji: '🐶',
    tags: ['puppy', 'pet'],
    group: 3,
    order: 500,
    version: 0.6,
  },
];

const mockMessages = {
  groups: [
    { key: 'smileys-emotion', message: 'Smileys & Emotion', order: 0 },
    { key: 'people-body', message: 'People & Body', order: 1 },
    { key: 'component', message: 'Component', order: 2 },
    { key: 'animals-nature', message: 'Animals & Nature', order: 3 },
  ],
};

describe('emojibaseAdapter', () => {
  it('groups emojis by category using messages', () => {
    const result = emojibaseAdapter(mockEmojibaseData, mockMessages);
    const categoryIds = result.categories.map((c) => c.id);
    expect(categoryIds).toContain('people');
    expect(categoryIds).toContain('nature');
  });

  it('transforms emoji objects correctly', () => {
    const result = emojibaseAdapter(mockEmojibaseData, mockMessages);

    expect(result.emojis['1F600']).toEqual({
      id: '1F600',
      name: 'grinning face',
      keywords: ['happy', 'smile'],
      emoji: '😀',
      skins: undefined,
      version: 1,
    });
  });

  it('extracts skin tone variants', () => {
    const result = emojibaseAdapter(mockEmojibaseData, mockMessages);

    expect(result.emojis['1F44D'].skins).toEqual(['👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿']);
  });
});
