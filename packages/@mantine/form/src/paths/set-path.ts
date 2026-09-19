import { getSplittedPath } from './get-splitted-path';

export function setPath<T>(path: unknown, value: unknown, values: T): T {
  const splittedPath = getSplittedPath(path);

  if (splittedPath.length === 0) {
    return values;
  }

  function cloneStep(current: any, index: number): any {
    if (index === splittedPath.length) {
      return value;
    }

    const key = splittedPath[index];
    const isArr = Array.isArray(current);
    const copy = isArr ? [...(current || [])] : { ...(current || {}) };
    copy[key] = cloneStep(copy[key], index + 1);
    return copy;
  }

  return cloneStep(values, 0);
}
