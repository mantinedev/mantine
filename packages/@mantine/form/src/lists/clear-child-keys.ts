import { isChildPath } from '../paths';

export function clearChildKeys<T extends Record<PropertyKey, any>>(path: PropertyKey, state: T): T {
  if (state === null || typeof state !== 'object') {
    return {} as T;
  }

  const clone = { ...state };
  Object.keys(state).forEach((key) => {
    if (isChildPath(key, String(path))) {
      delete clone[key];
    }
  });

  return clone;
}
