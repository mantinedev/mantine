import {
  CANONICAL_CATEGORY_IDS,
  CANONICAL_CATEGORY_LABELS,
  CanonicalCategoryId,
} from '../categories';
import { EmojiPickerCategory, EmojiPickerData, EmojiPickerEmoji } from '../types';

interface EmojibaseSkin {
  emoji: string;
  tone?: number | number[];
}

interface EmojibaseEmoji {
  label: string;
  hexcode: string;
  emoji: string;
  tags?: string[];
  group?: number;
  order?: number;
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

const GROUP_TO_CANONICAL: Record<number, Exclude<CanonicalCategoryId, 'frequent'>> = {
  0: 'people',
  1: 'people',
  3: 'nature',
  4: 'foods',
  5: 'places',
  6: 'activity',
  7: 'objects',
  8: 'symbols',
  9: 'flags',
};

const CATEGORY_ORDER = CANONICAL_CATEGORY_IDS.filter(
  (id): id is Exclude<CanonicalCategoryId, 'frequent'> => id !== 'frequent'
);

function getUniformTone(tone: EmojibaseSkin['tone']) {
  if (typeof tone === 'number') {
    return tone;
  }

  if (Array.isArray(tone) && tone.length > 0 && tone.every((t) => t === tone[0])) {
    return tone[0];
  }

  return null;
}

function getSkinVariants(skins: EmojibaseSkin[] | undefined) {
  if (!skins || skins.length === 0) {
    return undefined;
  }

  const byTone = new Map<number, string>();
  for (const skin of skins) {
    const tone = getUniformTone(skin.tone);
    if (tone !== null && !byTone.has(tone)) {
      byTone.set(tone, skin.emoji);
    }
  }

  const variants = [1, 2, 3, 4, 5].map((tone) => byTone.get(tone));
  return variants.every((variant) => variant !== undefined) ? (variants as string[]) : undefined;
}

export function emojibaseAdapter(
  data: EmojibaseEmoji[],
  messages: EmojibaseMessages
): EmojiPickerData {
  const emojis: Record<string, EmojiPickerEmoji> = {};
  const categoryEmojis = new Map<string, EmojibaseEmoji[]>();

  const groupLabels = new Map<number, string>();
  for (const group of messages.groups) {
    groupLabels.set(group.order, group.message);
  }

  for (const emojibaseEmoji of data) {
    if (emojibaseEmoji.group === undefined) {
      continue;
    }

    const canonicalId = GROUP_TO_CANONICAL[emojibaseEmoji.group];
    if (!canonicalId) {
      continue;
    }

    const id = emojibaseEmoji.hexcode;
    emojis[id] = {
      id,
      name: emojibaseEmoji.label,
      keywords: emojibaseEmoji.tags || [],
      emoji: emojibaseEmoji.emoji,
      skins: getSkinVariants(emojibaseEmoji.skins),
      version: emojibaseEmoji.version,
    };

    if (!categoryEmojis.has(canonicalId)) {
      categoryEmojis.set(canonicalId, []);
    }
    categoryEmojis.get(canonicalId)!.push(emojibaseEmoji);
  }

  const categories: EmojiPickerCategory[] = [];
  for (const canonicalId of CATEGORY_ORDER) {
    const items = categoryEmojis.get(canonicalId);
    if (!items) {
      continue;
    }

    items.sort(
      (a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER)
    );
    categories.push({
      id: canonicalId,
      label:
        CANONICAL_CATEGORY_LABELS[canonicalId] || groupLabels.get(items[0].group!) || canonicalId,
      emojis: items.map((item) => item.hexcode),
    });
  }

  return { categories, emojis };
}
