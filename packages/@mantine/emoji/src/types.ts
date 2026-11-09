export interface EmojiPickerEmoji {
  id: string;
  name: string;
  keywords: string[];
  emoji: string;
  skins?: string[];
  version?: number;
}

export interface EmojiPickerCategory {
  id: string;
  label: string;
  emojis: string[];
}

export interface EmojiPickerData {
  categories: EmojiPickerCategory[];
  emojis: Record<string, EmojiPickerEmoji>;
}

export interface EmojiPickerLabels {
  search?: string;
  skinTone?: string;
  noResults?: string;
  skinToneLight?: string;
  skinToneMediumLight?: string;
  skinToneMedium?: string;
  skinToneMediumDark?: string;
  skinToneDark?: string;
  skinToneDefault?: string;
  searchResults?: string;
  preview?: string;
  clearSearch?: string;
  emojis?: string;
}

export const DEFAULT_LABELS: Required<EmojiPickerLabels> = {
  search: 'Search emojis',
  skinTone: 'Skin tone',
  noResults: 'No emojis found',
  skinToneLight: 'Light skin tone',
  skinToneMediumLight: 'Medium-light skin tone',
  skinToneMedium: 'Medium skin tone',
  skinToneMediumDark: 'Medium-dark skin tone',
  skinToneDark: 'Dark skin tone',
  skinToneDefault: 'Default skin tone',
  searchResults: 'Search Results',
  preview: 'Emoji preview',
  clearSearch: 'Clear search',
  emojis: 'Emojis',
};

export type FlattenedRowItem =
  | { type: 'header'; categoryId: string; label: string }
  | { type: 'row'; emojis: EmojiPickerEmoji[] };
