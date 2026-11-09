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
      { hexcode: '1F44D-1F3FB', emoji: '👍🏻', tone: 1 },
      { hexcode: '1F44D-1F3FC', emoji: '👍🏼', tone: 2 },
      { hexcode: '1F44D-1F3FD', emoji: '👍🏽', tone: 3 },
      { hexcode: '1F44D-1F3FE', emoji: '👍🏾', tone: 4 },
      { hexcode: '1F44D-1F3FF', emoji: '👍🏿', tone: 5 },
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

describe('emojibaseAdapter with emojibase-data structure', () => {
  const data = [
    { label: 'regional indicator A', hexcode: '1F1E6', emoji: '🇦', version: 2 },
    { label: 'light skin tone', hexcode: '1F3FB', emoji: '🏻', group: 2, order: 400, version: 1 },
    {
      label: 'flag: Andorra',
      hexcode: '1F1E6-1F1E9',
      emoji: '🇦🇩',
      group: 9,
      order: 900,
      version: 2,
    },
    { label: 'soccer ball', hexcode: '26BD', emoji: '⚽', group: 6, order: 700, version: 5.2 },
    { label: 'globe', hexcode: '1F30D', emoji: '🌍', group: 5, order: 600, version: 0.7 },
    { label: 'grinning face', hexcode: '1F600', emoji: '😀', group: 0, order: 2, version: 1 },
    {
      label: 'handshake',
      hexcode: '1F91D',
      emoji: '🤝',
      group: 1,
      order: 1,
      version: 3,
      skins: [
        { emoji: '🤝🏿', tone: 5 },
        { emoji: '🫱🏻‍🫲🏼', tone: [1, 2] },
        { emoji: '🤝🏻', tone: 1 },
        { emoji: '🤝🏼', tone: [2, 2] },
        { emoji: '🤝🏽', tone: 3 },
        { emoji: '🫱🏾‍🫲🏿', tone: [4, 5] },
        { emoji: '🤝🏾', tone: 4 },
      ],
    },
  ];

  it('maps travel and activity groups to the correct categories', () => {
    const result = emojibaseAdapter(data, mockMessages);
    expect(result.categories.find((c) => c.id === 'places')!.emojis).toEqual(['1F30D']);
    expect(result.categories.find((c) => c.id === 'activity')!.emojis).toEqual(['26BD']);
  });

  it('skips component and ungrouped entries', () => {
    const result = emojibaseAdapter(data, mockMessages);
    expect(result.emojis['1F3FB']).toBeUndefined();
    expect(result.emojis['1F1E6']).toBeUndefined();
    expect(result.categories.flatMap((c) => c.emojis)).not.toContain('1F3FB');
    expect(result.categories.flatMap((c) => c.emojis)).not.toContain('1F1E6');
  });

  it('emits categories in canonical order and emojis in emojibase order', () => {
    const result = emojibaseAdapter(data, mockMessages);
    expect(result.categories.map((c) => c.id)).toEqual(['people', 'activity', 'places', 'flags']);
    expect(result.categories[0].emojis).toEqual(['1F91D', '1F600']);
    expect(result.categories[1].label).toBe('Activity');
  });

  it('keeps only uniform skin tones ordered from light to dark', () => {
    const result = emojibaseAdapter(data, mockMessages);
    expect(result.emojis['1F91D'].skins).toEqual(['🤝🏻', '🤝🏼', '🤝🏽', '🤝🏾', '🤝🏿']);
  });
});
