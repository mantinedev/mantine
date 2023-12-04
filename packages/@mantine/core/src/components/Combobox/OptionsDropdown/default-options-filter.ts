import { ComboboxItem, ComboboxParsedItem } from '../Combobox.types';
import { isOptionsGroup } from './is-options-group';

export interface FilterOptionsInput {
  options: ComboboxParsedItem[];
  search: string;
  limit: number;
}

export function defaultOptionsFilter({
  options,
  search,
  limit,
}: FilterOptionsInput): ComboboxParsedItem[] {
  const parsedSearch = search.trim().toLowerCase();
  const result: ComboboxParsedItem[] = [];

  for (let i = 0; i < options.length; i += 1) {
    const item = options[i];

    if (result.length === limit) {
      return result;
    }

    if (isOptionsGroup(item)) {
      result.push({
        group: item.group,
        items: defaultOptionsFilter({
          options: item.items,
          search,
          limit: limit - result.length,
        }) as ComboboxItem[],
      });
    }

    if (!isOptionsGroup(item)) {
      if (item.label.toLowerCase().includes(parsedSearch)) {
        result.push(item);
      }
    }
  }

  return result;
}
