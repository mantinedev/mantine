import { klona } from 'klona';
import { getSplittedPath } from './get-splitted-path';

export function setPath<T>(path: unknown, value: unknown, values: T) {
  const splittedPath = getSplittedPath(path);

  if (splittedPath.length === 0) {
    return values;
  }

  const cloned = klona(values);

  if (splittedPath.length === 1) {
    cloned[splittedPath[0]] = value;
    return cloned;
  }

  let val = cloned[splittedPath[0]];

  for (let i = 1; i < splittedPath.length - 1; i += 1) {
    if (val === undefined) {
      return cloned;
    }

    val = val[splittedPath[i]];
  }

  val[splittedPath[splittedPath.length - 1]] = value;

  return cloned;
}
