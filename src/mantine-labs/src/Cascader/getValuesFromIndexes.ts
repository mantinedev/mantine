import { CascaderItem } from './types';

export function getValuesFromIndexes(
  data: CascaderItem[],
  indexes: number[],
  separator: string
) {
  if (!indexes) return '';
  let currData = data;
  const values = indexes.map((i) => {
    const instanceData = [...currData];

    currData = instanceData[i].children;
    return instanceData[i].value;
  });
  return values.join(separator);
}
