import { ComboboxItem, ComboboxItemGroup, ComboboxData, ComboboxParsedItem } from '../Combobox';

function isComboboxItem(item: string | ComboboxItem | ComboboxItemGroup): item is ComboboxItem {
  return (item as ComboboxItem).value !== undefined && (item as ComboboxItem).label !== undefined;
}

function isComboboxItemGroup(
  item: string | ComboboxItem | ComboboxItemGroup,
): item is ComboboxItemGroup {
  return (
    (item as ComboboxItemGroup).group !== undefined &&
    Array.isArray((item as ComboboxItemGroup).items)
  );
}

export function convertToComboboxParsedItem(_data: ComboboxData): ComboboxParsedItem[] {
  const convertedData: ComboboxParsedItem[] = [];

  for (const item of _data) {
    if (isComboboxItem(item)) {
      convertedData.push(item);
    } else if (isComboboxItemGroup(item)) {
      const items = item.items.filter(isComboboxItem);

      convertedData.push({
        group: item.group,
        items,
      });
    }
  }

  return convertedData;
}

interface IGetCreateModifiedData {
  search: string,
  createable: boolean | undefined,
  parsedData: ComboboxParsedItem[],
  optionsLockup: Record<string, ComboboxItem>,
  _value: string | null,
}

export const createLabel = (search: string) => `+ Create ${search}`;

export function getOptionExists(
  parsedData: ComboboxParsedItem[],
  search: string,
) {
  const lowerSearch = search.toLowerCase();

  const optionExists = parsedData?.some((item) => {
    if (typeof item === 'object' && 'group' in item) {
      return item.items.some(
        (groupItem) =>
          groupItem.label.toLowerCase() === lowerSearch ||
          groupItem.value.toLowerCase() === lowerSearch,
      );
    }
    return (
      typeof item === 'object' &&
      (item.label.toLowerCase() === lowerSearch ||
        item.value.toLowerCase() === lowerSearch)
    );
  });

  return optionExists ?? false;
}

export const addNewOptionToData = ({
  search,
  createable,
  parsedData,
  optionsLockup,
  _value,
}: IGetCreateModifiedData) => {
  const seenValues = new Set();
  const uniqueData = parsedData.filter((item) => {
    if ('value' in item && seenValues.has(item.value)) {
      return false;
    }
    'value' in item && seenValues.add(item.value);
    return true;
  });
  const parsedValue: ComboboxParsedItem[] = search
    ? convertToComboboxParsedItem([
      { label: createLabel(search), value: search },
    ])
    : [];

  const isOptionSelected =
    _value && optionsLockup[_value] && optionsLockup[_value].label === search;

  const shouldAddNewItem =
    createable &&
    search &&
    search.trim() !== '' && !isOptionSelected;

  if (shouldAddNewItem) {
    return [...uniqueData, ...parsedValue];
  }

  const valueIsNullAndNotInData = _value === null && !uniqueData.some((item) => 'value' in item && item.value === _value);

  if (valueIsNullAndNotInData) {
    return uniqueData.filter((item) => 'value' in item && item.value !== _value);
  }

  return uniqueData;
};
