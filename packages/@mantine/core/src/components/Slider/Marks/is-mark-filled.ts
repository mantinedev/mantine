interface IsMarkFilled {
  mark: { value: number; label?: any };
  offset?: number | undefined;
  value: number;
  inverted?: boolean | undefined;
  startPointValue?: number | undefined;
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
