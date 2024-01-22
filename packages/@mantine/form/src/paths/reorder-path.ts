import { ReorderPayload } from '../types';
import { getPath } from './get-path';
import { setPath } from './set-path';

export function reorderPath<T>(path: unknown, { from, to }: ReorderPayload, values: T) {
  const currentValue = getPath(path, values);

  if (!Array.isArray(currentValue)) {
    return values;
  }

  const cloned = [...currentValue];
  const item = currentValue[from];
  cloned.splice(from, 1);
  cloned.splice(to, 0, item);

  return setPath(path, cloned, values);
}
