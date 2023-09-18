import { ComboboxParsedItem, ComboboxParsedItemGroup } from '../Combobox.types';

export function isEmptyComboboxData(data: ComboboxParsedItem[]) {
  if (data.length === 0) {
    return true;
  }

  for (const item of data) {
    if (!('group' in item)) {
      return false;
    }

    if ((item as ComboboxParsedItemGroup).items.length > 0) {
      return false;
    }
  }

  return true;
}
