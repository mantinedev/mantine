export function findClosestNumber(value: number, numbers: number[]): number {
  if (numbers.length === 0) {
    return value;
  }

  return numbers.reduce((prev, curr) =>
    Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
  );
}
