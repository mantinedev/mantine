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
    if (limit) {
      if (limit >= data.length) {
        return data;
      }
      const firstIndex = data.indexOf(selected);
      const lastIndex = firstIndex + limit;
      const firstIndexOffset = lastIndex - data.length;
      if (firstIndexOffset > 0) {
        return data.slice(firstIndex - firstIndexOffset);
      }
      return data.slice(firstIndex, lastIndex);
    }
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
