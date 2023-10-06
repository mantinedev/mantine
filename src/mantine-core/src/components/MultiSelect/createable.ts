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
  _searchValue: string,
  createable: boolean | undefined,
  data: ComboboxData | undefined,
}

export const createLabel = (_searchValue: string) => `+ Create ${_searchValue}`;

export const addNewOptionToData = ({
  _searchValue,
  createable,
  data,
}: IGetCreateModifiedData) => {
  const parsedValue: ComboboxParsedItem[] = _searchValue
    ? convertToComboboxParsedItem([
        { label: createLabel(_searchValue), value: _searchValue },
      ])
    : [];

  const shouldAddNewItem =
    createable && _searchValue && _searchValue.trim() !== '';
  return shouldAddNewItem
    ? [...(data ? convertToComboboxParsedItem(data) : []), ...parsedValue]
    : data
    ? convertToComboboxParsedItem(data)
    : [];
};
