import type { Column, Row } from '@tanstack/react-table';

export interface RowSpanMap {
  get(rowIndex: number, columnId: string): number | undefined;
}

export function computeRowSpans(rows: Row<any>[], columns: Column<any, any>[]): RowSpanMap {
  const spanColumns = columns.filter((col) => col.columnDef.meta?.rowSpan === true);

  if (spanColumns.length === 0) {
    return { get: () => undefined };
  }

  const map = new Map<string, number>();

  for (const col of spanColumns) {
    const columnId = col.id;
    let groupStart = 0;

    while (groupStart < rows.length) {
      const startValue = rows[groupStart].getValue(columnId);
      let groupEnd = groupStart + 1;

      while (groupEnd < rows.length && rows[groupEnd].getValue(columnId) === startValue) {
        groupEnd++;
      }

      const groupSize = groupEnd - groupStart;
      map.set(`${groupStart}:${columnId}`, groupSize);

      for (let i = groupStart + 1; i < groupEnd; i++) {
        map.set(`${i}:${columnId}`, 0);
      }

      groupStart = groupEnd;
    }
  }

  return {
    get: (rowIndex: number, columnId: string) => map.get(`${rowIndex}:${columnId}`),
  };
}
