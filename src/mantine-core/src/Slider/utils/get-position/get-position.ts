interface GetPosition {
  value: number;
  min: number;
  max: number;
}

export function getPosition({ value, min, max }: GetPosition) {
  const position = ((value - min) / (max - min)) * 100;
  return Math.min(Math.max(position, 0), 100);
}
