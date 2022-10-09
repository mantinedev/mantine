import { CascaderItem } from './types';

/** Returns indexes of items which match the input value */
export function findSelectedValue(items: CascaderItem[], value: string[] | null): number[] | null {
  if (!value) return null;
  const indexes = [];

  // var to store current list of items we are checking
  let currItems = items;

  for (let i = 0; i < value.length; i += 1) {
    const val = value[i];

    // see if any items in list match current value
    const matchIdx = currItems.findIndex((item) => item.value === val);
    const match = currItems[matchIdx];

    // if not end func and return null
    if (!match) {
      return null;
    }

    // if match add the index to array and change currItems to be the children of the found item
    indexes.push(matchIdx);
    currItems = match.children;
  }

  return indexes;
}
