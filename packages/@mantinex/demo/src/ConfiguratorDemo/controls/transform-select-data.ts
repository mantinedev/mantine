import { upperFirst } from '@mantine/hooks';

interface SelectDataItem {
  label: string;
  value: string;
}

export type SelectData = (string | SelectDataItem)[];

export function transformSelectData(data: SelectData): SelectDataItem[] {
  return data.map((item) => {
    if (typeof item === 'string') {
      return { label: upperFirst(item), value: item };
    }

    return { value: item.value, label: upperFirst(item.label) };
  });
}
