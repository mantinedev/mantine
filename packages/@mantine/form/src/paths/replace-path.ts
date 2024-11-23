import { getPath } from './get-path';
import { setPath } from './set-path';

export function replacePath<T>(path: unknown, item: unknown, index: number, values: T) {
  const currentValue = getPath(path, values);

  if (!Array.isArray(currentValue)) {
    return values;
  }

  if (currentValue.length <= index) {
    return values;
  }

  const cloned = [...currentValue];
  cloned[index] = item;

  return setPath(path, cloned, values);
}
