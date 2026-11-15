function isPlainObject(item: unknown) {
  if (!item || typeof item !== 'object') {
    return false;
  }

  const prototype = Object.getPrototypeOf(item);
  return (
    prototype === null ||
    (Object.hasOwn(prototype, 'constructor') &&
      typeof prototype.constructor === 'function' &&
      Function.prototype.toString.call(prototype.constructor) ===
        Function.prototype.toString.call(Object))
  );
}

export function deepMerge<T extends object>(target: T, source: any): T {
  const result: Record<string, any> = { ...target };
  const _source: Record<string, any> = source;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isPlainObject(_source[key]) && isPlainObject(result[key])) {
        result[key] = deepMerge(result[key], _source[key]);
      } else {
        result[key] = _source[key];
      }
    });
  }

  return result as T;
}
