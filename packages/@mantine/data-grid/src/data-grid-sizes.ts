import type { Row, RowData } from '@tanstack/react-table';
import type { MantineSize } from '@mantine/core';
import type { DataGridFeatures } from './table-features';

interface DataGridSizeValues {
  fontSize: number;
  rowHeight: number;
  cellPaddingX: number;
  cellPaddingY: number;
  utilityColumnWidth: number;
  rowNumberWidth: number;
  controlSize: number;
  iconSize: number;
  footerHeight: number;
}

export const DATA_GRID_SIZES: Record<MantineSize, DataGridSizeValues> = {
  xs: {
    fontSize: 12,
    rowHeight: 28,
    cellPaddingX: 8,
    cellPaddingY: 4,
    utilityColumnWidth: 24,
    rowNumberWidth: 32,
    controlSize: 12,
    iconSize: 14,
    footerHeight: 36,
  },
  sm: {
    fontSize: 13,
    rowHeight: 32,
    cellPaddingX: 10,
    cellPaddingY: 5,
    utilityColumnWidth: 28,
    rowNumberWidth: 36,
    controlSize: 14,
    iconSize: 16,
    footerHeight: 40,
  },
  md: {
    fontSize: 14,
    rowHeight: 36,
    cellPaddingX: 12,
    cellPaddingY: 6,
    utilityColumnWidth: 32,
    rowNumberWidth: 40,
    controlSize: 16,
    iconSize: 16,
    footerHeight: 44,
  },
  lg: {
    fontSize: 15,
    rowHeight: 44,
    cellPaddingX: 14,
    cellPaddingY: 7,
    utilityColumnWidth: 36,
    rowNumberWidth: 44,
    controlSize: 18,
    iconSize: 18,
    footerHeight: 48,
  },
  xl: {
    fontSize: 16,
    rowHeight: 52,
    cellPaddingX: 16,
    cellPaddingY: 8,
    utilityColumnWidth: 40,
    rowNumberWidth: 48,
    controlSize: 20,
    iconSize: 20,
    footerHeight: 52,
  },
};

export type DataGridControlSize = 'xs' | 'sm' | 'md';

const CONTROL_SIZE: Record<MantineSize, DataGridControlSize> = {
  xs: 'xs',
  sm: 'xs',
  md: 'sm',
  lg: 'md',
  xl: 'md',
};

export function getControlSize(size: MantineSize): DataGridControlSize {
  return CONTROL_SIZE[size];
}

interface RowHeightEstimateOptions<TData extends RowData = any> {
  estimateSize?: (index: number) => number;
  getRowHeight?: (row: Row<DataGridFeatures, TData>) => number | 'auto';
  estimateRowHeight?: number;
  size: MantineSize;
}

export function getRowHeightEstimate<TData extends RowData = any>(
  options: RowHeightEstimateOptions<TData>,
  row: Row<DataGridFeatures, TData> | undefined,
  index: number
): number {
  if (options.estimateSize) {
    return options.estimateSize(index);
  }

  if (options.getRowHeight && row) {
    const height = options.getRowHeight(row);
    if (typeof height === 'number') {
      return height;
    }
  }

  return options.estimateRowHeight ?? DATA_GRID_SIZES[options.size].rowHeight;
}
