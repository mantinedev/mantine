import { getPath } from './get-path';
import { setPath } from './set-path';

export function removePath<T>(path: unknown, index: number, values: T) {
  const currentValue = getPath(path, values);

  if (!Array.isArray(currentValue)) {
    return values;
  }

  return setPath(
    path,
    currentValue.filter((_, itemIndex) => itemIndex !== index),
    values
  );
}
