const DAYS_IN_WEEK = 7;
const COLUMN_WIDTH = 100 / DAYS_IN_WEEK;

/**
 * Builds a map from a full week-day index (0–6, relative to the first day of
 * the week) to its visible column index. Hidden columns are mapped to -1.
 */
export function getVisibleColumnMap(hiddenColumns: number[]): number[] {
  const hidden = new Set(hiddenColumns);
  const map: number[] = [];
  let column = 0;

  for (let index = 0; index < DAYS_IN_WEEK; index += 1) {
    if (hidden.has(index)) {
      map.push(-1);
    } else {
      map.push(column);
      column += 1;
    }
  }

  return map;
}

export interface VisibleColumnSpan {
  startOffset: number;
  width: number;
}

/**
 * Clips a span defined by full week-day indices (`startColumn`–`endColumn`,
 * inclusive) to the visible columns, returning one entry per contiguous run of
 * visible columns. Offsets and widths are expressed in percent of the visible
 * grid width.
 */
export function clipSpanToVisibleColumns(
  startColumn: number,
  endColumn: number,
  visibleColumnMap: number[],
  columnsCount: number
): VisibleColumnSpan[] {
  if (columnsCount <= 0) {
    return [];
  }

  const spans: VisibleColumnSpan[] = [];
  let runStart: number | null = null;
  let runEnd: number | null = null;

  const flush = () => {
    if (runStart !== null && runEnd !== null) {
      spans.push({
        startOffset: (runStart / columnsCount) * 100,
        width: ((runEnd - runStart + 1) / columnsCount) * 100,
      });
      runStart = null;
      runEnd = null;
    }
  };

  for (let index = startColumn; index <= endColumn; index += 1) {
    const visible = visibleColumnMap[index];

    if (visible === undefined || visible === -1) {
      flush();
      continue;
    }

    if (runStart === null) {
      runStart = visible;
    }

    runEnd = visible;
  }

  flush();

  return spans;
}

export { DAYS_IN_WEEK, COLUMN_WIDTH };
