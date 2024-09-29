import { getSplittedPath } from './get-splitted-path';

export function getPath(path: unknown, values: unknown): unknown {
  const splittedPath = getSplittedPath(path);

  if (splittedPath.length === 0 || typeof values !== 'object' || values === null) {
    return undefined;
  }

  let value = values[splittedPath[0] as keyof typeof values];
  for (let i = 1; i < splittedPath.length; i += 1) {
    if (value == null) {
      break;
    }

    value = value[splittedPath[i]];
  }

  return value;
}
