import { Primitive } from '../../../core';
import {
  ComboboxData,
  ComboboxGenericData,
  ComboboxGenericItem,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxParsedItem,
  ComboboxParsedItemGroup,
} from '../Combobox.types';

function parseItem<Value extends Primitive = string>(
  item:
    | Primitive
    | ComboboxItem<Value>
    | ComboboxGenericItem<Value>
    | ComboboxItemGroup<Value | ComboboxGenericItem<Value> | ComboboxItem<Value>>
): ComboboxItem<Value> | ComboboxParsedItemGroup<Value> {
  if (typeof item === 'string') {
    return { value: item as Value, label: item };
  }

  if (typeof item === 'object' && 'value' in item && !('label' in item)) {
    return { value: item.value, label: `${item.value}`, disabled: item.disabled };
  }

  if (typeof item === 'object' && 'group' in item) {
    return {
      group: item.group,
      items: item.items.map((i) => parseItem<Value>(i) as ComboboxItem<Value>),
    };
  }

  if (typeof item === 'number' || typeof item === 'bigint' || typeof item === 'boolean') {
    return { value: item as Value, label: `${item}` };
  }

  return item;
}

export function getParsedComboboxData<Value extends Primitive = string>(
  data: ComboboxData<Value> | ComboboxGenericData<Value> | undefined
): ComboboxParsedItem<Value>[] {
  if (!data) {
    return [];
  }

  return data.map((item) => parseItem<Value>(item));
}
