function isObject(item: unknown) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

export function deepMerge<T extends object>(target: T, source: any): T {
  const result: Record<string, any> = { ...target };
  const _source: Record<string, any> = source;

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(_source[key])) {
        if (!(key in target)) {
          result[key] = _source[key];
        } else {
          result[key] = deepMerge(result[key], _source[key]);
        }
      } else {
        result[key] = _source[key];
      }
    });
  }

  return result as T;
}
