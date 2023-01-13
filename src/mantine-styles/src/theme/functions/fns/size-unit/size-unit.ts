export function sizeUnit(value: unknown) {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  return `${value}`;
}
