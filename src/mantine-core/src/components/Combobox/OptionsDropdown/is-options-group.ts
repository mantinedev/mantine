import { ComboboxParsedItem, ComboboxParsedItemGroup } from '../Combobox.types';

export function isOptionsGroup(item: ComboboxParsedItem): item is ComboboxParsedItemGroup {
  return 'group' in item;
}
