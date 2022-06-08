export function getSplittedPath(path: unknown) {
  if (typeof path !== 'string') {
    return [];
  }

  return path.split('.');
}
