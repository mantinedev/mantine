interface IsMarkFilled {
  mark: { value: number; label?: any };
  offset?: number;
  value: number;
  inverted?: boolean;
  startPointValue?: number;
}

export function isMarkFilled({
  mark,
  offset,
  value,
  inverted = false,
  startPointValue,
}: IsMarkFilled) {
  if (typeof startPointValue === 'number' && !inverted) {
    return (
      (mark.value >= startPointValue && mark.value <= value) ||
      (mark.value <= startPointValue && mark.value >= value)
    );
  }

  return inverted
    ? typeof offset === 'number'
      ? mark.value <= offset || mark.value >= value
      : mark.value >= value
    : typeof offset === 'number'
      ? mark.value >= offset && mark.value <= value
      : mark.value <= value;
}
