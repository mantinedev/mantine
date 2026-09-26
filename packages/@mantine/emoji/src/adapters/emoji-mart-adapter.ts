import { EmojiPickerCategory, EmojiPickerData, EmojiPickerEmoji } from '../types';

interface EmojiMartSkin {
  unified: string;
  native: string;
}

interface EmojiMartEmoji {
  id: string;
  name: string;
  keywords: string[];
  skins: EmojiMartSkin[];
  version: number;
}

interface EmojiMartCategory {
  id: string;
  emojis: string[];
}

interface EmojiMartData {
  categories: EmojiMartCategory[];
  emojis: Record<string, EmojiMartEmoji>;
}

const CATEGORY_LABELS: Record<string, string> = {
  frequent: 'Frequently Used',
  people: 'Smileys & People',
  nature: 'Animals & Nature',
  foods: 'Food & Drink',
  activity: 'Activity',
  places: 'Travel & Places',
  objects: 'Objects',
  symbols: 'Symbols',
  flags: 'Flags',
};

export function emojiMartAdapter(data: EmojiMartData): EmojiPickerData {
  const emojis: Record<string, EmojiPickerEmoji> = {};

  for (const [id, emojiMartEmoji] of Object.entries(data.emojis)) {
    const defaultSkin = emojiMartEmoji.skins[0];
    const skinVariants =
      emojiMartEmoji.skins.length > 1
        ? emojiMartEmoji.skins.slice(1).map((s) => s.native)
        : undefined;

    emojis[id] = {
      id,
      name: emojiMartEmoji.name,
      keywords: emojiMartEmoji.keywords,
      emoji: defaultSkin.native,
      skins: skinVariants,
      version: emojiMartEmoji.version,
    };
  }

  const categories: EmojiPickerCategory[] = data.categories.map((cat) => ({
    id: cat.id,
    label: CATEGORY_LABELS[cat.id] || cat.id,
    emojis: cat.emojis,
  }));

  return { categories, emojis };
}
