interface GetDayRelativePercentInput {
  clientX: number;
  containerLeft: number;
  containerWidth: number;
  dayIndex: number;
  dayCount: number;
}

/**
 * Maps a horizontal pointer position to a percent (0-100) within a single day's
 * sub-region of a container that holds `dayCount` equal-width days side by side.
 * `dayIndex === 0` and `dayCount === 1` make it equivalent to a plain percent
 * across the whole container. The result is clamped to the `[0, 100]` range.
 */
export function getDayRelativePercent({
  clientX,
  containerLeft,
  containerWidth,
  dayIndex,
  dayCount,
}: GetDayRelativePercentInput): number {
  const dayWidth = containerWidth / dayCount;
  if (dayWidth <= 0) {
    return 0;
  }
  const dayLeft = containerLeft + dayIndex * dayWidth;
  const relativeX = clientX - dayLeft;
  return Math.max(0, Math.min(100, (relativeX / dayWidth) * 100));
}
