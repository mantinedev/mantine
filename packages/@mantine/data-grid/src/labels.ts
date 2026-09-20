export interface DataGridLabels {
  paginationRowsPerPage: string;
  paginationOf: string;
  filterPlaceholder: string;
  globalFilterPlaceholder: string;
  emptyStateText: string;
  statusBarTotalRows: string;
  statusBarFilteredRows: string;
  statusBarSelectedRows: string;
  columnVisibilityLabel: string;
  rowNumber: string;
  selectAll: string;
  selectRow: string;
  expandRow: string;
  collapseRow: string;
  groupCollapse: string;
  groupExpand: string;
  editSave: string;
  editCancel: string;
  booleanFilterTrue: string;
  booleanFilterFalse: string;
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
}

export const DEFAULT_LABELS: DataGridLabels = {
  paginationRowsPerPage: '{count} / page',
  paginationOf: 'of',
  filterPlaceholder: 'Filter...',
  globalFilterPlaceholder: 'Search...',
  emptyStateText: 'No data available',
  statusBarTotalRows: '{count} total rows',
  statusBarFilteredRows: '{count} filtered',
  statusBarSelectedRows: '{count} selected',
  columnVisibilityLabel: 'Toggle column visibility',
  rowNumber: '#',
  selectAll: 'Select all rows',
  selectRow: 'Select row',
  expandRow: 'Expand row',
  collapseRow: 'Collapse row',
  groupCollapse: 'Collapse group',
  groupExpand: 'Expand group',
  editSave: 'Save',
  editCancel: 'Cancel',
  booleanFilterTrue: 'Yes',
  booleanFilterFalse: 'No',
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
};
