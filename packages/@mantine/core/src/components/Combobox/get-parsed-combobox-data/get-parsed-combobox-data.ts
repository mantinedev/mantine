import {
  ComboboxData,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxParsedItem,
  ComboboxParsedItemGroup,
  ComboboxStringData,
  ComboboxStringItem,
} from '../Combobox.types';

function parseItem(
  item: string | ComboboxItem | ComboboxStringItem | ComboboxItemGroup
): ComboboxItem | ComboboxParsedItemGroup {
  if (typeof item === 'string') {
    return { value: item, label: item };
  }

  if ('value' in item && !('label' in item)) {
    return { value: item.value, label: item.value, disabled: item.disabled };
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

export function getParsedComboboxData(
  data: ComboboxData | ComboboxStringData | undefined
): ComboboxParsedItem[] {
  if (!data) {
    return [];
  }

  return data.map((item) => parseItem(item as ComboboxItem));
}
