function getSplittedPath(path: string) {
  if (typeof path !== 'string') {
    return [];
  }

  return path.split('.');
}

export function getPath(path: string, values: unknown) {
  const splittedPath = getSplittedPath(path);

  if (splittedPath.length === 0) {
    return undefined;
  }

  let value = values[splittedPath[0]];
  for (let i = 1; i < splittedPath.length; i += 1) {
    if (value === undefined) {
      break;
    }

    value = value[splittedPath[i]];
  }

  return value;
}
