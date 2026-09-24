export function shallowEqual(a: unknown, b: unknown, depth = 1): boolean {
  if (Object.is(a, b)) {
    return true;
  }

  if (depth === 0 || typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return false;
  }

  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i += 1) {
      if (!shallowEqual(a[i], b[i], depth - 1)) {
        return false;
      }
    }

    return true;
  }

  const aKeys = Object.keys(a);

  if (aKeys.length !== Object.keys(b).length) {
    return false;
  }

  for (const key of aKeys) {
    if (!Object.hasOwn(b, key) || !shallowEqual((a as any)[key], (b as any)[key], depth - 1)) {
      return false;
    }
  }

  return true;
}
