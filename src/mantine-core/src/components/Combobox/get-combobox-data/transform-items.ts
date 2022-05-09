import { ComboboxItem, ComboboxItemData } from '../types';

export function transformItems(items: ComboboxItem[]): ComboboxItemData[] {
  return items.map((item) => (typeof item === 'string' ? { value: item, label: item } : item));
}
