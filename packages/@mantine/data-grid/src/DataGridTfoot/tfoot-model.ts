import { useMemo, type ReactNode } from 'react';
import type { Row } from '@tanstack/react-table';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridFeatures } from '../table-features';

type GridRow = Row<DataGridFeatures, any>;

const NO_ROWS: GridRow[] = [];

export function useTfootModel() {
  const ctx = useDataGridContext();
  const aggregatedColumnIds = useMemo(
    () => new Set(ctx.aggregatedColumnIds),
    [ctx.aggregatedColumnIds]
  );
  const withAggregation = aggregatedColumnIds.size > 0;
  const filteredRowModel = withAggregation ? ctx.table.getFilteredRowModel() : null;
  const aggregationRows = useMemo(
    () =>
      filteredRowModel
        ? filteredRowModel.flatRows.filter(
            (row) => row.original !== undefined && !row.getIsGrouped()
          )
        : NO_ROWS,
    [filteredRowModel]
  );

  const leafColumns = ctx.table.getVisibleLeafColumns();
  const aggregationValues = useMemo(() => {
    const values = new Map<string, ReactNode>();
    if (!withAggregation) {
      return values;
    }

    leafColumns.forEach((column) => {
      if (!aggregatedColumnIds.has(column.id)) {
        return;
      }

      const formatAggregatedValue = column.columnDef.meta?.formatAggregatedValue;
      const rawValue = column.getAggregationValue({ rows: aggregationRows });
      values.set(
        column.id,
        formatAggregatedValue
          ? formatAggregatedValue(rawValue, aggregationRows)
          : String(rawValue ?? '')
      );
    });
    return values;
  }, [withAggregation, leafColumns, aggregatedColumnIds, aggregationRows]);

  const footerGroups = ctx.table
    .getFooterGroups()
    .filter((group) =>
      group.headers.some(
        (header) => !header.isPlaceholder && header.column.columnDef.footer !== undefined
      )
    );

  return {
    footerGroups,
    aggregatedColumnIds,
    aggregationValues,
    withAggregation,
    rowCount: footerGroups.length + (withAggregation ? 1 : 0),
  };
}

export type TfootModel = ReturnType<typeof useTfootModel>;
