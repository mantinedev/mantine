import { normalizeRadialValue } from '@mantine/hooks';

export function getLastRadialStep(step: number) {
  return normalizeRadialValue((Math.ceil(360 / step) - 1) * step, step);
}

export function stepRadialValue(value: number, step: number, direction: 1 | -1) {
  const next = value + direction * step;

  if (next < 0) {
    return getLastRadialStep(step);
  }

  if (next >= 360) {
    return 0;
  }

  return normalizeRadialValue(next, step);
}
