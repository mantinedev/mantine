import { createSafeContext, GetStylesApi } from '../../core';
import type { TableFactory } from './Table';

export interface TableContextValue {
  getStyles: GetStylesApi<TableFactory>;
  stickyHeader: boolean | undefined;
  striped: 'odd' | 'even' | undefined;
  highlightOnHover: boolean | undefined;
  withColumnBorders: boolean | undefined;
  withRowBorders: boolean | undefined;
  captionSide: 'top' | 'bottom';
}

export const [TableProvider, useTableContext] = createSafeContext<TableContextValue>(
  'Table component was not found in the tree'
);
