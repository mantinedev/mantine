import { clearListState } from './clear-list-state';

/**
 * Gets the part of the key after the path which can be an index
 */
function getIndexFromKeyAfterPath(key: string, path: string): number {
  const split = key.substring(path.length + 1).split('.')[0];
  return parseInt(split, 10);
}

/**
 * Changes the indices of every error that is after the given `index` with the given `change` at the given `path`.
 * This requires that the errors are in the format of `path.index` and that the index is a number.
 */
export function changeErrorIndices<T extends Record<PropertyKey, any>>(
  path: PropertyKey,
  index: number | undefined,
  errors: T,
  change: 1 | -1
): T {
  if (index === undefined) {
    return errors;
  }
  const pathString = `${String(path)}`;
  let clearedErrors = errors;
  // Remove all errors if the corresponding item was removed
  if (change === -1) {
    clearedErrors = clearListState(`${pathString}.${index}`, clearedErrors);
  }

  const cloned = { ...clearedErrors };
  const changedKeys = new Set<string>();
  Object.entries(clearedErrors)
    .filter(([key]) => {
      if (!key.startsWith(`${pathString}.`)) {
        return false;
      }
      const currIndex = getIndexFromKeyAfterPath(key, pathString);
      if (Number.isNaN(currIndex)) {
        return false;
      }
      return currIndex >= index;
    })
    .forEach(([key, value]) => {
      const currIndex = getIndexFromKeyAfterPath(key, pathString);

      const newKey: keyof T = key.replace(
        `${pathString}.${currIndex}`,
        `${pathString}.${currIndex + change}`
      );
      cloned[newKey] = value;
      changedKeys.add(newKey);
      if (!changedKeys.has(key)) {
        delete cloned[key];
      }
    });

  return cloned;
}
