import { ReorderPayload } from '../types';

export function reorderErrors<T>(path: unknown, { from, to }: ReorderPayload, errors: T): T {
  const oldKeyStart = `${path}.${from}`;
  const newKeyStart = `${path}.${to}`;

  const clone: any = { ...errors };
  Object.keys(errors as any).every((key) => {
    let oldKey;
    let newKey;
    if (key.startsWith(oldKeyStart)) {
      oldKey = key;
      newKey = key.replace(oldKeyStart, newKeyStart);
    }
    if (key.startsWith(newKeyStart)) {
      oldKey = key.replace(newKeyStart, oldKeyStart);
      newKey = key;
    }
    if (oldKey && newKey) {
      const value1 = clone[oldKey];
      const value2 = clone[newKey];
      value2 === undefined ? delete clone[oldKey] : (clone[oldKey] = value2);
      value1 === undefined ? delete clone[newKey] : (clone[newKey] = value1);
      return false;
    }
    return true;
  });

  return clone;
}
