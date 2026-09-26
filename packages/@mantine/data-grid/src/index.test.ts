import * as pkg from './index';
import { DataGrid } from './index';

const RUNTIME_EXPORTS = [
  'DEFAULT_LABELS',
  'DataGrid',
  'DataGridColumnMenu',
  'DataGridColumnVisibilityToggle',
  'DataGridExportButton',
  'DataGridFooter',
  'DataGridGlobalFilter',
  'DataGridRowCount',
  'DataGridSelectionBar',
  'DataGridToolbar',
  'UTILITY_COLUMN_IDS',
  'autosizeColumns',
  'booleanOperators',
  'copyToClipboard',
  'createDataGridColumnHelper',
  'createOperatorFilterFn',
  'dataGridFeatures',
  'editingFeature',
  'exportToCsv',
  'exportToExcel',
  'exportToPrint',
  'flexRender',
  'formatCsv',
  'fuzzyFilter',
  'fuzzySort',
  'getColumnLabel',
  'numberOperators',
  'stringOperators',
  'useDataGrid',
  'useDataGridState',
];

const STATICS = [
  'Footer',
  'Toolbar',
  'GlobalFilter',
  'ColumnVisibilityToggle',
  'ExportButton',
  'RowCount',
  'SelectionBar',
  'ColumnMenu',
];

const REMOVED_STATICS = [
  'DensityToggle',
  'Pagination',
  'StatusBar',
  'Header',
  'Body',
  'VirtualBody',
  'Tfoot',
];

describe('@mantine/data-grid/index', () => {
  it('exports exactly the documented runtime surface', () => {
    expect(Object.keys(pkg).sort()).toEqual([...RUNTIME_EXPORTS].sort());
  });

  it('exposes the compound components as DataGrid statics', () => {
    STATICS.forEach((name) => {
      expect((DataGrid as any)[name]).toBeDefined();
    });
    REMOVED_STATICS.forEach((name) => {
      expect((DataGrid as any)[name]).toBeUndefined();
    });
  });

  it('keeps the utility column ids stable', () => {
    expect(pkg.UTILITY_COLUMN_IDS).toEqual({
      reorder: '__reorder__',
      select: '__select__',
      expand: '__expand__',
      rowNumber: '__rowNumber__',
    });
  });

  it('ships the final labels shape', () => {
    expect(Object.keys(pkg.DEFAULT_LABELS)).toHaveLength(52);
    expect(pkg.DEFAULT_LABELS.selectGroup).toBe('Select group');
    [
      'paginationRowsPerPage',
      'paginationOf',
      'filterPlaceholder',
      'emptyStateText',
      'statusBarTotalRows',
      'statusBarFilteredRows',
      'statusBarSelectedRows',
      'densityCompact',
      'densityDefault',
      'densityComfortable',
      'densityToggleLabel',
      'booleanFilterTrue',
      'booleanFilterFalse',
      'groupCollapse',
      'groupExpand',
      'editSave',
      'editCancel',
    ].forEach((key) => expect(pkg.DEFAULT_LABELS).not.toHaveProperty(key));
  });
});
