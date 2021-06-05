interface GetFilledPosition {
  value: number;
  min: number;
  max: number;
}

export function getFilledPosition({ value, min, max }: GetFilledPosition) {
  const position = ((value - min) / (max - min)) * 100;
  return Math.min(Math.max(position, 0), 100);
}
