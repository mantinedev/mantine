import { getSplittedPath } from './get-splitted-path';

function shallowCopy<T>(value: T): T {
  if (Array.isArray(value)) {
    return [...value] as T;
  }

  return Object.assign(Object.create(Object.getPrototypeOf(value)), value);
}

function isContainer(value: unknown): value is Record<string, any> {
  return (
    Array.isArray(value) ||
    (typeof value === 'object' &&
      value !== null &&
      Object.prototype.toString.call(value) === '[object Object]')
  );
}

export function setPath<T>(path: unknown, value: unknown, values: T): T {
  const splittedPath = getSplittedPath(path);

  if (splittedPath.length === 0 || !isContainer(values)) {
    return values;
  }

  const cloned: any = shallowCopy(values);
  let cursor = cloned;

  for (let i = 0; i < splittedPath.length - 1; i += 1) {
    const next = cursor[splittedPath[i]];

    if (!isContainer(next)) {
      return cloned;
    }

    cursor[splittedPath[i]] = shallowCopy(next);
    cursor = cursor[splittedPath[i]];
  }

  cursor[splittedPath[splittedPath.length - 1]] = value;

  return cloned;
}
