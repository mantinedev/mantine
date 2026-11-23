export const CANONICAL_CATEGORY_IDS = [
  'frequent',
  'people',
  'nature',
  'foods',
  'activity',
  'places',
  'objects',
  'symbols',
  'flags',
] as const;

export type CanonicalCategoryId = (typeof CANONICAL_CATEGORY_IDS)[number];

export const CANONICAL_CATEGORY_LABELS: Record<CanonicalCategoryId, string> = {
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

export const CANONICAL_CATEGORY_ICONS: Record<CanonicalCategoryId, string> = {
  frequent: '🕐',
  people: '😀',
  nature: '🐻',
  foods: '🍔',
  activity: '⚽',
  places: '🚗',
  objects: '💡',
  symbols: '♻️',
  flags: '🏳️',
};

export function isCanonicalCategoryId(id: string): id is CanonicalCategoryId {
  return (CANONICAL_CATEGORY_IDS as readonly string[]).includes(id);
}

export function getCanonicalCategoryLabel(id: string) {
  return isCanonicalCategoryId(id) ? CANONICAL_CATEGORY_LABELS[id] : undefined;
}

export function getCanonicalCategoryIcon(id: string) {
  return isCanonicalCategoryId(id) ? CANONICAL_CATEGORY_ICONS[id] : undefined;
}
