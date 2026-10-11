const UNSAFE_PATH_SEGMENTS = new Set(['__proto__', 'constructor', 'prototype']);

export function getSplittedPath(path: unknown) {
  if (typeof path !== 'string') {
    return [];
  }

  const splittedPath = path.split('.');

  if (splittedPath.some((segment) => UNSAFE_PATH_SEGMENTS.has(segment))) {
    return [];
  }

  return splittedPath;
}
