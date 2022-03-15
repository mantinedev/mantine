import { CascaderItem } from './types';

function testItem(
  item: CascaderItem,
  value: string,
  index: number,
  indexes: number[] = []
): null | number[] {
  const match = item.value === value.slice(0, item.value.length);

  // if this section matches and has children, check them
  if (item.children && item.children.length > 0 && match) {
    for (let i = 0; i < item.children.length; i += 1) {
      const child = item.children[i];
      const result = testItem(child, value.slice(item.value.length), i, indexes);

      if (Array.isArray(result) && match) {
        indexes.unshift(index);
        return indexes;
      }
    }
  }

  // reached bottom of tree with match
  if (!item.children && match && value.length === item.value.length) {
    // return array back up tree
    indexes.unshift(index);
    return indexes;
  }
  return null;
}

/** Returns indexes of items which match the input value */
export function findSelectedValue(
  items: CascaderItem[],
  separator: string,
  value: string | null
): number[] | null {
  if (!value) return null;
  const noSeparators = value.replace(separator, '');
  let indexes = null;

  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    indexes = testItem(item, noSeparators, i);
    if (indexes) return indexes;
  }

  return indexes;
}
