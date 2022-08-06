import { getSplittedPath } from './get-splitted-path';

export function setPath<T>(path: unknown, value: unknown, values: T) {
  const splittedPath = getSplittedPath(path);

  if (splittedPath.length === 0) {
    return values;
  }

  if (splittedPath.length === 1) {
    values[splittedPath[0]] = value;
    return values;
  }

  let val = values[splittedPath[0]];

  for (let i = 1; i < splittedPath.length - 1; i += 1) {
    if (val === undefined) {
      return values;
    }

    val = val[splittedPath[i]];
  }

  val[splittedPath[splittedPath.length - 1]] = value;

  return values;
}
