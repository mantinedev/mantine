export interface DataGridLabels {
  globalFilterPlaceholder: string;
  columnVisibilityLabel: string;
  rowNumber: string;
  selectAll: string;
  selectRow: string;
  /** Accessible label of the group row checkbox that toggles the selection of the group's rows */
  selectGroup: string;
  expandRow: string;
  collapseRow: string;
  columnMenuSortAsc: string;
  columnMenuSortDesc: string;
  columnMenuClearSort: string;
  columnMenuPinLeft: string;
  columnMenuPinRight: string;
  columnMenuUnpin: string;
  columnMenuHide: string;
  columnMenuGroupBy: string;
  columnMenuUngroup: string;
  columnMenuResetSize: string;
  dragToReorder: string;
  columnMenu: string;
  columnMenuMoveLeft: string;
  columnMenuMoveRight: string;
  pageSize: string;
  pageSizeLabel: string;
  footerRange: string;
  footerRangeLong: string;
  footerRows: string;
  footerSelected: string;
  footerPage: string;
  footerPageUnknownTotal: string;
  paginationPrevious: string;
  paginationNext: string;
  exportLabel: string;
  exportCsv: string;
  exportExcel: string;
  exportPrint: string;
  exportCopy: string;
  rowCount: string;
  rowCountFiltered: string;
  selectionBarSelected: string;
  selectionBarClear: string;
  aggregationSum: string;
  aggregationCount: string;
  aggregationMean: string;
  aggregationMin: string;
  aggregationMax: string;
  aggregationMedian: string;
  aggregationUnique: string;
  aggregationUniqueCount: string;
  aggregationExtent: string;
  saveRow: string;
  cancelRow: string;
}

export const DEFAULT_LABELS: DataGridLabels = {
  globalFilterPlaceholder: 'Search...',
  columnVisibilityLabel: 'Columns',
  rowNumber: '#',
  selectAll: 'Select all rows',
  selectRow: 'Select row',
  selectGroup: 'Select group',
  expandRow: 'Expand row',
  collapseRow: 'Collapse row',
  columnMenuSortAsc: 'Sort ascending',
  columnMenuSortDesc: 'Sort descending',
  columnMenuClearSort: 'Clear sort',
  columnMenuPinLeft: 'Pin to left',
  columnMenuPinRight: 'Pin to right',
  columnMenuUnpin: 'Unpin',
  columnMenuHide: 'Hide column',
  columnMenuGroupBy: 'Group by this column',
  columnMenuUngroup: 'Ungroup',
  columnMenuResetSize: 'Reset column size',
  dragToReorder: 'Drag to reorder',
  columnMenu: 'Column menu',
  columnMenuMoveLeft: 'Move left',
  columnMenuMoveRight: 'Move right',
  pageSize: '{count} / page',
  pageSizeLabel: 'Rows per page',
  footerRange: '{from}–{to} of {total}',
  footerRangeLong: 'Showing {from}–{to} of {total}',
  footerRows: '{count} rows',
  footerSelected: '{count} selected',
  footerPage: 'Page {page} of {total}',
  footerPageUnknownTotal: 'Page {page}',
  paginationPrevious: 'Previous page',
  paginationNext: 'Next page',
  exportLabel: 'Export',
  exportCsv: 'CSV',
  exportExcel: 'Excel',
  exportPrint: 'Print',
  exportCopy: 'Copy to clipboard',
  rowCount: '{count} rows',
  rowCountFiltered: '{filtered} of {count} rows',
  selectionBarSelected: '{count} selected',
  selectionBarClear: 'Clear selection',
  aggregationSum: 'Sum',
  aggregationCount: 'Count',
  aggregationMean: 'Average',
  aggregationMin: 'Min',
  aggregationMax: 'Max',
  aggregationMedian: 'Median',
  aggregationUnique: 'Unique',
  aggregationUniqueCount: 'Unique count',
  aggregationExtent: 'Range',
  saveRow: 'Save',
  cancelRow: 'Cancel',
};
