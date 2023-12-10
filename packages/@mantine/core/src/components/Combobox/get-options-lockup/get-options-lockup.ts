import { ComboboxItem, ComboboxParsedItem } from '../Combobox.types';

export function getOptionsLockup(options: ComboboxParsedItem[]): Record<string, ComboboxItem> {
  return options.reduce<Record<string, ComboboxItem>>((acc, item) => {
    if ('group' in item) {
      return { ...acc, ...getOptionsLockup(item.items) };
    }

    acc[(item as any).value] = item;

    return acc;
  }, {});
}

export function getLabelsLockup(options: ComboboxParsedItem[]): Record<string, string> {
  return options.reduce<Record<string, string>>((acc, item) => {
    if ('group' in item) {
      return { ...acc, ...getLabelsLockup(item.items) };
    }

    acc[(item as any).label] = item as any;

    return acc;
  }, {});
}
