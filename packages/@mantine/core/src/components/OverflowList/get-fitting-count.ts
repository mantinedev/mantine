export interface GetFittingCountInput {
  itemWidths: number[];
  totalCount: number;
  indicatorWidth: number | null;
  containerWidth: number;
  gap: number;
  maxRows: number;
  collapseFrom: 'start' | 'end';
}

export const SIZE_TOLERANCE = 0.01;

function fitsInRows(widths: number[], containerWidth: number, gap: number, maxRows: number) {
  let rows = 1;
  let rowWidth = 0;

  for (const width of widths) {
    if (width > containerWidth + SIZE_TOLERANCE) {
      return false;
    }

    if (rowWidth === 0) {
      rowWidth = width;
    } else if (rowWidth + gap + width > containerWidth + SIZE_TOLERANCE) {
      rows += 1;
      if (rows > maxRows) {
        return false;
      }
      rowWidth = width;
    } else {
      rowWidth += gap + width;
    }
  }

  return true;
}

export function getFittingCount({
  itemWidths,
  totalCount,
  indicatorWidth,
  containerWidth,
  gap,
  maxRows,
  collapseFrom,
}: GetFittingCountInput): number {
  if (maxRows < 1) {
    return 0;
  }

  for (let count = itemWidths.length; count > 0; count -= 1) {
    const visible =
      collapseFrom === 'start'
        ? itemWidths.slice(itemWidths.length - count)
        : itemWidths.slice(0, count);

    const sequence =
      count < totalCount && indicatorWidth !== null
        ? collapseFrom === 'start'
          ? [indicatorWidth, ...visible]
          : [...visible, indicatorWidth]
        : visible;

    if (fitsInRows(sequence, containerWidth, gap, maxRows)) {
      return count;
    }
  }

  return 0;
}
