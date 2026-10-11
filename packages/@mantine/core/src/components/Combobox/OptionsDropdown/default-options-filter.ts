import { Primitive } from '../../../core';
import { ComboboxItem, ComboboxParsedItem } from '../Combobox.types';
import { isOptionsGroup } from './is-options-group';

export interface FilterOptionsInput<Value extends Primitive = Primitive> {
  options: ComboboxParsedItem<Value>[];
  search: string;
  limit: number;
}

export function defaultOptionsFilter({
  options,
  search,
  limit,
}: FilterOptionsInput): ComboboxParsedItem<Primitive>[] {
  const parsedSearch = search.trim().toLowerCase();
  const result: ComboboxParsedItem<Primitive>[] = [];
  let optionsCount = 0;

  for (let i = 0; i < options.length; i += 1) {
    const item = options[i];

    if (optionsCount >= limit) {
      return result;
    }

    if (isOptionsGroup(item)) {
      const items = defaultOptionsFilter({
        options: item.items,
        search,
        limit: limit - optionsCount,
      }) as ComboboxItem[];

      optionsCount += items.length;
      result.push({ group: item.group, items });
    } else if (item.label.toLowerCase().includes(parsedSearch)) {
      optionsCount += 1;
      result.push(item);
    }
  }

  return result;
}
