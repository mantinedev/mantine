import { CascaderItem } from './types';

export function getItem(data: CascaderItem[], nesting: number, indexes: number[]): CascaderItem {
  if (indexes === null || nesting < 0 || nesting >= indexes.length) return null;
  let currData = data;

  if (nesting === 0) return currData[indexes[0]];
  for (let i = 0; i < nesting; i += 1) {
    currData = currData[indexes[i]].children;
    if (i + 1 === nesting && currData) return currData[indexes[i + 1]];
  }

  return null;
}
