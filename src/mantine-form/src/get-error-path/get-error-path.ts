export function getErrorPath(path: (string | number | symbol)[]) {
  return path.join('.');
}
