import * as pkg from './index';
import { DataGrid } from './index';

const RUNTIME_EXPORTS = [
  'DATA_GRID_SIZES',
  'DEFAULT_LABELS',
  'DataGrid',
  'DataGridBody',
  'DataGridCell',
  'DataGridColumnMenu',
  'DataGridColumnVisibilityToggle',
  'DataGridExportButton',
  'DataGridFooter',
  'DataGridGlobalFilter',
  'DataGridGroupRow',
  'DataGridHeader',
  'DataGridListView',
  'DataGridProvider',
  'DataGridRow',
  'DataGridRowCount',
  'DataGridSelectionBar',
  'DataGridTfoot',
  'DataGridToolbar',
  'DataGridVirtualBody',
  'UTILITY_COLUMN_IDS',
  'autosizeColumns',
  'booleanOperators',
  'buildCsvString',
  'buildExcelXml',
  'copyToClipboard',
  'createDataGridColumnHelper',
  'createOperatorFilterFn',
  'dataGridFeatures',
  'editingFeature',
  'escapeCsvValue',
  'exportToCsv',
  'exportToExcel',
  'exportToPrint',
  'flexRender',
  'formatCsv',
  'formatLabel',
  'fuzzyFilter',
  'fuzzySort',
  'getColumnLabel',
  'getControlSize',
  'getRowHeightEstimate',
  'numberOperators',
  'renderLabel',
  'stringOperators',
  'useDataGrid',
  'useDataGridContext',
  'useDataGridState',
];

const STATICS = [
  'Header',
  'Body',
  'VirtualBody',
  'Tfoot',
  'Footer',
  'Toolbar',
  'GlobalFilter',
  'ColumnVisibilityToggle',
  'ExportButton',
  'RowCount',
  'SelectionBar',
  'ColumnMenu',
];

const REMOVED_STATICS = ['DensityToggle', 'Pagination', 'StatusBar'];

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
    expect(Object.keys(pkg.DEFAULT_LABELS)).toHaveLength(54);
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
    ].forEach((key) => expect(pkg.DEFAULT_LABELS).not.toHaveProperty(key));
  });
});
