import type { SelectItem } from '../types';

interface FilterData {
  data: SelectItem[];
  limit: number;
  searchable: boolean;
  searchValue: string;
  filter(value: string, item: SelectItem): boolean;
}

export function filterData({ data, searchable, limit, searchValue, filter }: FilterData) {
  if (!searchable) {
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
