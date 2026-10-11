interface GetPosition {
  value: number;
  min: number;
  max: number;
}

export function getPosition({ value, min, max }: GetPosition) {
  if (max === min) {
    return 0;
  }

  const position = ((value - min) / (max - min)) * 100;
  return Math.min(Math.max(position, 0), 100);
}
