interface ClampResizeSizeInput {
  size: number;
  min: number | undefined;
  max: number | undefined;
  viewportMax: number;
}

export function clampResizeSize({ size, min, max, viewportMax }: ClampResizeSizeInput) {
  const upperBound = Math.min(max ?? Number.POSITIVE_INFINITY, viewportMax);
  const lowerBound = Math.min(min ?? 0, upperBound);
  return Math.max(lowerBound, Math.min(size, upperBound));
}

export function getCollapseState(size: number, collapseThreshold: number | undefined) {
  if (collapseThreshold === undefined) {
    return false;
  }

  return size < collapseThreshold;
}
