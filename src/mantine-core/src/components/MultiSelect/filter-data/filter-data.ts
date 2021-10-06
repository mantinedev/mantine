import type { SelectItem } from '../../Select/types';

interface FilterData {
  data: SelectItem[];
  limit: number;
  searchable: boolean;
  searchValue: string;
  filter(value: string, selected: boolean, item: SelectItem): boolean;
  value: string[];
}

export function filterData({ data, searchable, limit, searchValue, filter, value }: FilterData) {
  if (!searchable && value.length === 0) {
    return data;
  }

  if (!searchable) {
    const result = [];
    for (let i = 0; i < data.length; i += 1) {
      if (!value.some((val) => val === data[i].value && !data[i].disabled)) {
        result.push(data[i]);
      }
    }

    return result;
  }

  const result = [];
  for (let i = 0; i < data.length; i += 1) {
    if (
      filter(
        searchValue,
        value.some((val) => val === data[i].value && !data[i].disabled),
        data[i]
      )
    ) {
      result.push(data[i]);
    }

    if (result.length >= limit) {
      break;
    }
  }

  return result;
}
