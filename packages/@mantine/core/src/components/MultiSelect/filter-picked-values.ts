import { Primitive } from '../../core';
import { ComboboxParsedItem, isOptionsGroup } from '../Combobox';

interface FilterPickedTagsInput {
  data: ComboboxParsedItem<Primitive>[];
  value: Primitive[];
}

function normalizeValue(value: Primitive) {
  return typeof value === 'string' ? value.trim().toLowerCase() : value;
}

export function filterPickedValues({ data, value }: FilterPickedTagsInput) {
  const normalizedValue = value.map(normalizeValue);

  const filtered = data.reduce<ComboboxParsedItem<Primitive>[]>((acc, item) => {
    if (isOptionsGroup(item)) {
      acc.push({
        group: item.group,
        items: item.items.filter(
          (option) => normalizedValue.indexOf(normalizeValue(option.value)) === -1
        ),
      });
    } else if (normalizedValue.indexOf(normalizeValue(item.value)) === -1) {
      acc.push(item);
    }

    return acc;
  }, []);

  return filtered;
}
