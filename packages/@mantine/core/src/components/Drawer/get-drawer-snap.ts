import { clamp } from '@mantine/hooks';

export const SNAP_PROJECTION_MS = 100;

export function resolveSnapFraction(point: number | string, size: number): number {
  if (typeof point === 'number') {
    return point > 1 ? clamp(size > 0 ? point / size : 0, 0, 1) : clamp(point, 0, 1);
  }

  const parsed = parseFloat(point);

  if (Number.isNaN(parsed)) {
    return 1;
  }

  if (point.trim().endsWith('%')) {
    return clamp(parsed / 100, 0, 1);
  }

  return clamp(size > 0 ? parsed / size : 0, 0, 1);
}
