export interface DataGridLocalization {
  paginationRowsPerPage: string;
  paginationOf: string;
  filterPlaceholder: string;
  globalFilterPlaceholder: string;
  emptyStateText: string;
  statusBarTotalRows: string;
  statusBarFilteredRows: string;
  statusBarSelectedRows: string;
  columnVisibilityLabel: string;
  densityCompact: string;
  densityDefault: string;
  densityComfortable: string;
  densityToggleLabel: string;
  groupCollapse: string;
  groupExpand: string;
  editSave: string;
  editCancel: string;
}

export const DEFAULT_LOCALIZATION: DataGridLocalization = {
  paginationRowsPerPage: '{count} / page',
  paginationOf: 'of',
  filterPlaceholder: 'Filter...',
  globalFilterPlaceholder: 'Search...',
  emptyStateText: 'No data available',
  statusBarTotalRows: '{count} total rows',
  statusBarFilteredRows: '{count} filtered',
  statusBarSelectedRows: '{count} selected',
  columnVisibilityLabel: 'Toggle column visibility',
  densityCompact: 'Compact',
  densityDefault: 'Default',
  densityComfortable: 'Comfortable',
  densityToggleLabel: 'Toggle density',
  groupCollapse: 'Collapse group',
  groupExpand: 'Expand group',
  editSave: 'Save',
  editCancel: 'Cancel',
};
