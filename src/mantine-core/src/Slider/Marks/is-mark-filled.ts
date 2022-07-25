interface IsMarkFilled {
  mark: { value: number; label?: any };
  offset?: number;
  value: number;
}

export function isMarkFilled({ mark, offset, value }: IsMarkFilled) {
  return typeof offset === 'number'
    ? mark.value >= offset && mark.value <= value
    : mark.value <= value;
}
