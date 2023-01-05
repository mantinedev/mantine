function numberToPx(value: unknown) {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  return `${value}`;
}

export function calc(value: unknown, operation: string) {
  return `calc(${numberToPx(value)} ${operation})`;
}
