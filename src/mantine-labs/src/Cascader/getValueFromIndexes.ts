import { CascaderItem } from './types';

export function getValueFromIndexes(data: CascaderItem[], indexes: number[]): string[] {
  if (!indexes) return null;
  let currData = data;
  const values: string[] = [];

  for (let i = 0; i < indexes.length; i += 1) {
    values.push(currData[indexes[i]].value);
    if (!currData[indexes[i]].children) break;
    currData = currData[indexes[i]].children;
  }

  return values;
}
