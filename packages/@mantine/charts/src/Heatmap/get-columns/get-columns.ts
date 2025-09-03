export type HeatmapColumn =
  | { type: 'spacer' }
  | { type: 'column'; month: number; weekIndex: number };

/**
 * Builds a list of visual columns for the heatmap. When `splitMonths` is false,
 * there is exactly one column per week. When `splitMonths` is true, weeks that
 * span two months are split into two columns and a spacer column is inserted
 * between different months.
 */
export function getColumns(
  datesRange: (string | null)[][],
  splitMonths?: boolean
): HeatmapColumn[] {
  if (!splitMonths) {
    return datesRange.map((week, weekIndex) => {
      // Determine month for labeling purposes: pick first non-null day
      const firstDay = week.find((d) => d !== null)! as string;
      const month = new Date(firstDay).getMonth();
      return { type: 'column', month, weekIndex } as HeatmapColumn;
    });
  }

  const tmp: HeatmapColumn[] = [];
  datesRange.forEach((week, weekIndex) => {
    const months = week.map((d) => (d ? new Date(d).getMonth() : null));
    let firstMonth: number | null = null;
    let boundaryIndex: number | null = null;
    for (let i = 0; i < months.length; i += 1) {
      if (months[i] === null) {
        continue;
      }
      if (firstMonth === null) {
        firstMonth = months[i]!;
      } else if (months[i] !== firstMonth) {
        boundaryIndex = i;
        break;
      }
    }

    if (firstMonth === null) {
      return; // should not happen
    }

    if (boundaryIndex === null) {
      tmp.push({ type: 'column', month: firstMonth, weekIndex });
    } else {
      // Find nextMonth as first non-null month from boundaryIndex
      let nextMonth: number | null = null;
      for (let i = boundaryIndex; i < months.length; i += 1) {
        if (months[i] !== null) {
          nextMonth = months[i]!;
          break;
        }
      }
      if (nextMonth === null) {
        tmp.push({ type: 'column', month: firstMonth, weekIndex });
      } else {
        tmp.push({ type: 'column', month: firstMonth, weekIndex });
        tmp.push({ type: 'column', month: nextMonth, weekIndex });
      }
    }
  });

  // Insert spacer between adjacent columns when month changes
  const columns: HeatmapColumn[] = [];
  for (let i = 0; i < tmp.length; i += 1) {
    if (i > 0 && (tmp[i] as any).month !== (tmp[i - 1] as any).month) {
      columns.push({ type: 'spacer' });
    }
    columns.push(tmp[i]);
  }

  return columns;
}

export function getFirstMonthColumnIndex(columns: HeatmapColumn[], month: number): number {
  for (let i = 0; i < columns.length; i += 1) {
    const c = columns[i];
    if (c.type === 'column' && c.month === month) {
      return i;
    }
  }

  return -1;
}
