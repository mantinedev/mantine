export function isChildPath(path: string, parent: string) {
  return path.startsWith(`${parent}.`);
}

export function isSameOrChildPath(path: string, parent: string) {
  return path === parent || isChildPath(path, parent);
}
