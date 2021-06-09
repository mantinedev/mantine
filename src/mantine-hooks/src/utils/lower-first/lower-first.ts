export function lowerFirst(value: string) {
  return typeof value !== 'string' ? '' : value.charAt(0).toLowerCase() + value.slice(1);
}
