import { ReorderPayload } from '../types';

function isItemKey(key: string, keyStart: string) {
  return key === keyStart || key.startsWith(`${keyStart}.`);
}

export function reorderErrors<T>(path: unknown, { from, to }: ReorderPayload, errors: T): T {
  const oldKeyStart = `${path}.${from}`;
  const newKeyStart = `${path}.${to}`;

  const clone: any = { ...errors };
  const processedKeys = new Set<string>();

  Object.keys(errors as any).forEach((key) => {
    if (processedKeys.has(key)) {
      return;
    }

    let oldKey;
    let newKey;

    if (isItemKey(key, oldKeyStart)) {
      oldKey = key;
      newKey = key.replace(oldKeyStart, newKeyStart);
    } else if (isItemKey(key, newKeyStart)) {
      oldKey = key.replace(newKeyStart, oldKeyStart);
      newKey = key;
    }

    if (oldKey && newKey) {
      const value1 = clone[oldKey];
      const value2 = clone[newKey];

      value2 === undefined ? delete clone[oldKey] : (clone[oldKey] = value2);
      value1 === undefined ? delete clone[newKey] : (clone[newKey] = value1);

      processedKeys.add(oldKey);
      processedKeys.add(newKey);
    }
  });

  return clone;
}
