import isEqual from 'fast-deep-equal';
import { getPath } from '../paths';
import type { FormStatus } from '../types';

export function getUpdatedDirty(
  current: FormStatus,
  path: PropertyKey,
  values: unknown,
  snapshot: unknown,
  clear = false
): FormStatus {
  const key = String(path);
  const isDirty = (field: string) => !isEqual(getPath(field, values), getPath(field, snapshot));
  const result = { ...current };

  for (const field of Object.keys(current)) {
    if (field.startsWith(`${key}.`)) {
      delete result[field];
    } else if (key.startsWith(`${field}.`)) {
      result[field] = isDirty(field);
    }
  }

  if (clear) {
    delete result[key];
  } else {
    result[key] = isDirty(key);
  }

  return result;
}
