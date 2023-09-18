import {
  ComboboxData,
  ComboboxParsedItem,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxParsedItemGroup,
} from '../Combobox.types';

function parseItem(
  item: string | ComboboxItem | ComboboxItemGroup
): ComboboxItem | ComboboxParsedItemGroup {
  if (typeof item === 'string') {
    return { value: item, label: item };
  }

  if (typeof item === 'number') {
    return { value: (item as number).toString(), label: (item as number).toString() };
  }

  if ('group' in item) {
    return {
      group: item.group,
      items: item.items.map((i) => parseItem(i) as ComboboxItem),
    };
  }

  return item;
}

export function getParsedComboboxData(data: ComboboxData | undefined): ComboboxParsedItem[] {
  if (!data) {
    return [];
  }

  return data.map(parseItem);
}
