import type { SelectItem } from '../types';

interface FilterData {
  data: SelectItem[];
  limit: number;
  searchable: boolean;
  searchValue: string;
  filterDataOnExactSearchMatch: boolean;
  value: string;
  filter(value: string, item: SelectItem): boolean;
}

export function filterData({
  data,
  searchable,
  limit,
  searchValue,
  filter,
  value,
  filterDataOnExactSearchMatch,
}: FilterData) {
  if (!searchable) {
    return data;
  }

  const selected = value != null ? data.find((item) => item.value === value) || null : null;

  if (selected && !filterDataOnExactSearchMatch && selected?.label === searchValue) {
    return data;
  }

  const result = [];

  for (let i = 0; i < data.length; i += 1) {
    if (filter(searchValue, data[i])) {
      result.push(data[i]);
    }

    if (result.length >= limit) {
      break;
    }
  }

  return result;
}
