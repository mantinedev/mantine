export function getSplittedPath(path: string) {
  if (typeof path !== 'string') {
    return [];
  }

  return path.split('.');
}
