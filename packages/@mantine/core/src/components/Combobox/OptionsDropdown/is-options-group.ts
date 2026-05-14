import { Primitive } from '../../../core';
import { ComboboxParsedItem, ComboboxParsedItemGroup } from '../Combobox.types';

export function isOptionsGroup(
  item: ComboboxParsedItem<Primitive>
): item is ComboboxParsedItemGroup<Primitive> {
  return 'group' in item;
}
