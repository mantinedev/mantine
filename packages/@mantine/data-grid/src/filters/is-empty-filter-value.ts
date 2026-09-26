export function isEmptyFilterValue(value: unknown): boolean {
  return value === undefined || value === null || value === '';
}
