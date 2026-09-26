import { EmojiPickerCategory, EmojiPickerData, EmojiPickerEmoji } from '../types';

interface EmojibaseSkin {
  hexcode: string;
  emoji: string;
}

interface EmojibaseEmoji {
  label: string;
  hexcode: string;
  emoji: string;
  tags?: string[];
  group: number;
  order: number;
  version: number;
  skins?: EmojibaseSkin[];
}

interface EmojibaseGroupMessage {
  key: string;
  message: string;
  order: number;
}

interface EmojibaseMessages {
  groups: EmojibaseGroupMessage[];
}

const GROUP_TO_CANONICAL: Record<number, string> = {
  0: 'people',
  1: 'people',
  2: 'people',
  3: 'nature',
  4: 'foods',
  5: 'activity',
  6: 'places',
  7: 'objects',
  8: 'symbols',
  9: 'flags',
};

const CANONICAL_LABELS: Record<string, string> = {
  people: 'Smileys & People',
  nature: 'Animals & Nature',
  foods: 'Food & Drink',
  activity: 'Activities',
  places: 'Travel & Places',
  objects: 'Objects',
  symbols: 'Symbols',
  flags: 'Flags',
};

export function emojibaseAdapter(
  data: EmojibaseEmoji[],
  messages: EmojibaseMessages
): EmojiPickerData {
  const emojis: Record<string, EmojiPickerEmoji> = {};
  const categoryMap = new Map<string, { label: string; emojis: string[] }>();

  const groupLabels = new Map<number, string>();
  for (const group of messages.groups) {
    groupLabels.set(group.order, group.message);
  }

  for (const emojibaseEmoji of data) {
    const id = emojibaseEmoji.hexcode;
    const skinVariants =
      emojibaseEmoji.skins && emojibaseEmoji.skins.length > 0
        ? emojibaseEmoji.skins.map((s) => s.emoji)
        : undefined;

    emojis[id] = {
      id,
      name: emojibaseEmoji.label,
      keywords: emojibaseEmoji.tags || [],
      emoji: emojibaseEmoji.emoji,
      skins: skinVariants,
      version: emojibaseEmoji.version,
    };

    const canonicalId = GROUP_TO_CANONICAL[emojibaseEmoji.group] || 'objects';

    if (!categoryMap.has(canonicalId)) {
      const label =
        CANONICAL_LABELS[canonicalId] || groupLabels.get(emojibaseEmoji.group) || canonicalId;
      categoryMap.set(canonicalId, { label, emojis: [] });
    }
    categoryMap.get(canonicalId)!.emojis.push(id);
  }

  const categories: EmojiPickerCategory[] = Array.from(categoryMap.entries()).map(
    ([id, { label, emojis: emojiIds }]) => ({
      id,
      label,
      emojis: emojiIds,
    })
  );

  return { categories, emojis };
}
