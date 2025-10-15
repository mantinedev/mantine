import { Primitive } from '../../../core';
import { ComboboxItem, ComboboxParsedItem } from '../Combobox.types';

export function getOptionsLockup<Value extends Primitive = string>(
  options: ComboboxParsedItem<Value>[]
): Record<PropertyKey, ComboboxItem<Value>> {
  return options.reduce<Record<string, ComboboxItem<Value>>>((acc, item) => {
    if ('group' in item) {
      return { ...acc, ...getOptionsLockup(item.items) };
    }

    acc[`${item.value}`] = item;

    return acc;
  }, {});
}
