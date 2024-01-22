import { getPath } from './get-path';
import { setPath } from './set-path';

export function insertPath<T>(path: unknown, value: unknown, index: number | undefined, values: T) {
  const currentValue = getPath(path, values);

  if (!Array.isArray(currentValue)) {
    return values;
  }

  const cloned = [...currentValue];
  cloned.splice(typeof index === 'number' ? index : cloned.length, 0, value);

  return setPath(path, cloned, values);
}
