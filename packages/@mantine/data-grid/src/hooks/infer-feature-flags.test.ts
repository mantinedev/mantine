import { inferFeatureFlags, DataGridFeatureFlags } from './infer-feature-flags';
import { UseDataGridOptions } from '.';

const baseOptions: UseDataGridOptions<any> = {
  data: [],
  columns: [],
};

const allFalse: DataGridFeatureFlags = {
  withSorting: false,
  withFiltering: false,
  withGlobalFilter: false,
  withPagination: false,
  withColumnResizing: false,
  withColumnPinning: false,
  withColumnVisibility: false,
  withColumnReorder: false,
  withRowSelection: false,
  withRowExpansion: false,
  withGrouping: false,
  withRowPinning: false,
  withEditing: false,
  withFaceting: false,
  withTreeData: false,
  withRowReorder: false,
  withCellSelection: false,
};

describe('inferFeatureFlags', () => {
  it('returns all false for empty options', () => {
    expect(inferFeatureFlags(baseOptions)).toEqual(allFalse);
  });

  describe('withSorting', () => {
    it('infers from columns with enableSorting', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        columns: [{ accessorKey: 'name', enableSorting: true }],
      });
      expect(flags.withSorting).toBe(true);
    });

    it('is false when no columns have enableSorting', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        columns: [{ accessorKey: 'name' }],
      });
      expect(flags.withSorting).toBe(false);
    });

    it('infers from nested columns with enableSorting', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        columns: [
          {
            header: 'Person',
            columns: [
              { accessorKey: 'firstName', enableSorting: true },
              { accessorKey: 'lastName' },
            ],
          },
        ],
      });
      expect(flags.withSorting).toBe(true);
    });

    it('explicit flag overrides column inference', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        columns: [{ accessorKey: 'name', enableSorting: true }],
        withSorting: false,
      });
      expect(flags.withSorting).toBe(false);
    });
  });

  describe('withFiltering', () => {
    it('infers from column enableColumnFilter', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        columns: [{ accessorKey: 'name', enableColumnFilter: true }],
      });
      expect(flags.withFiltering).toBe(true);
    });

    it('infers from column filterFn', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        columns: [{ accessorKey: 'name', filterFn: 'includesString' }],
      });
      expect(flags.withFiltering).toBe(true);
    });

    it('infers from a custom filterFn function', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        columns: [{ accessorKey: 'name', filterFn: (() => true) as any }],
      });
      expect(flags.withFiltering).toBe(true);
    });

    it('infers from nested columns', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        columns: [
          { header: 'Group', columns: [{ accessorKey: 'name', enableColumnFilter: true }] },
        ],
      });
      expect(flags.withFiltering).toBe(true);
    });

    it('does not infer from columns without filter markers', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        columns: [{ accessorKey: 'name' }],
      });
      expect(flags.withFiltering).toBe(false);
    });

    it('does not infer from controlled state alone', () => {
      const flags = inferFeatureFlags({ ...baseOptions, columnFilters: [] });
      expect(flags.withFiltering).toBe(false);
    });

    it('explicit flag overrides inference', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        columns: [{ accessorKey: 'name', enableColumnFilter: true }],
        withFiltering: false,
      });
      expect(flags.withFiltering).toBe(false);
    });
  });

  describe('withGlobalFilter', () => {
    it('infers from globalFilter', () => {
      const flags = inferFeatureFlags({ ...baseOptions, globalFilter: '' });
      expect(flags.withGlobalFilter).toBe(true);
    });

    it('infers from onGlobalFilterChange', () => {
      const flags = inferFeatureFlags({ ...baseOptions, onGlobalFilterChange: () => {} });
      expect(flags.withGlobalFilter).toBe(true);
    });
  });

  describe('withPagination', () => {
    it('infers from pagination state', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        pagination: { pageIndex: 0, pageSize: 10 },
      });
      expect(flags.withPagination).toBe(true);
    });

    it('infers from onPaginationChange', () => {
      const flags = inferFeatureFlags({ ...baseOptions, onPaginationChange: () => {} });
      expect(flags.withPagination).toBe(true);
    });

    it('infers from pageSize', () => {
      const flags = inferFeatureFlags({ ...baseOptions, pageSize: 20 });
      expect(flags.withPagination).toBe(true);
    });

    it('infers from manualPagination true', () => {
      const flags = inferFeatureFlags({ ...baseOptions, manualPagination: true });
      expect(flags.withPagination).toBe(true);
    });

    it('does not infer from manualPagination false', () => {
      const flags = inferFeatureFlags({ ...baseOptions, manualPagination: false });
      expect(flags.withPagination).toBe(false);
    });

    it('infers from pageCount', () => {
      const flags = inferFeatureFlags({ ...baseOptions, pageCount: 5 });
      expect(flags.withPagination).toBe(true);
    });

    it('infers from rowCount', () => {
      const flags = inferFeatureFlags({ ...baseOptions, rowCount: 100 });
      expect(flags.withPagination).toBe(true);
    });
  });

  describe('withColumnResizing', () => {
    it('infers from columnSizing', () => {
      const flags = inferFeatureFlags({ ...baseOptions, columnSizing: {} });
      expect(flags.withColumnResizing).toBe(true);
    });

    it('infers from columnResizeMode', () => {
      const flags = inferFeatureFlags({ ...baseOptions, columnResizeMode: 'onChange' });
      expect(flags.withColumnResizing).toBe(true);
    });
  });

  describe('withColumnPinning', () => {
    it('infers from columnPinning', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        columnPinning: { start: ['name'], end: [] },
      });
      expect(flags.withColumnPinning).toBe(true);
    });

    it('infers from onColumnPinningChange', () => {
      const flags = inferFeatureFlags({ ...baseOptions, onColumnPinningChange: () => {} });
      expect(flags.withColumnPinning).toBe(true);
    });
  });

  describe('withColumnVisibility', () => {
    it('infers from columnVisibility', () => {
      const flags = inferFeatureFlags({ ...baseOptions, columnVisibility: { age: false } });
      expect(flags.withColumnVisibility).toBe(true);
    });

    it('infers from onColumnVisibilityChange', () => {
      const flags = inferFeatureFlags({ ...baseOptions, onColumnVisibilityChange: () => {} });
      expect(flags.withColumnVisibility).toBe(true);
    });
  });

  describe('withColumnReorder', () => {
    it('infers from columnOrder', () => {
      const flags = inferFeatureFlags({ ...baseOptions, columnOrder: ['name'] });
      expect(flags.withColumnReorder).toBe(true);
    });

    it('infers from onColumnOrderChange', () => {
      const flags = inferFeatureFlags({ ...baseOptions, onColumnOrderChange: () => {} });
      expect(flags.withColumnReorder).toBe(true);
    });
  });

  describe('withRowSelection', () => {
    it('infers from rowSelection', () => {
      const flags = inferFeatureFlags({ ...baseOptions, rowSelection: {} });
      expect(flags.withRowSelection).toBe(true);
    });

    it('infers from onRowSelectionChange', () => {
      const flags = inferFeatureFlags({ ...baseOptions, onRowSelectionChange: () => {} });
      expect(flags.withRowSelection).toBe(true);
    });
  });

  describe('withRowExpansion', () => {
    it('infers from expanded', () => {
      const flags = inferFeatureFlags({ ...baseOptions, expanded: {} });
      expect(flags.withRowExpansion).toBe(true);
    });

    it('infers from onExpandedChange', () => {
      const flags = inferFeatureFlags({ ...baseOptions, onExpandedChange: () => {} });
      expect(flags.withRowExpansion).toBe(true);
    });
  });

  describe('withGrouping', () => {
    it('infers from grouping', () => {
      const flags = inferFeatureFlags({ ...baseOptions, grouping: ['department'] });
      expect(flags.withGrouping).toBe(true);
    });

    it('infers from onGroupingChange', () => {
      const flags = inferFeatureFlags({ ...baseOptions, onGroupingChange: () => {} });
      expect(flags.withGrouping).toBe(true);
    });
  });

  describe('withRowPinning', () => {
    it('infers from rowPinning', () => {
      const flags = inferFeatureFlags({ ...baseOptions, rowPinning: { top: ['1'], bottom: [] } });
      expect(flags.withRowPinning).toBe(true);
    });

    it('infers from onRowPinningChange', () => {
      const flags = inferFeatureFlags({ ...baseOptions, onRowPinningChange: () => {} });
      expect(flags.withRowPinning).toBe(true);
    });

    it('is false by default', () => {
      const flags = inferFeatureFlags(baseOptions);
      expect(flags.withRowPinning).toBe(false);
    });
  });

  describe('withEditing', () => {
    it('infers from editingMode being set', () => {
      const flags = inferFeatureFlags({ ...baseOptions, editingMode: 'cell' });
      expect(flags.withEditing).toBe(true);
    });

    it('is false when editingMode is not set', () => {
      const flags = inferFeatureFlags(baseOptions);
      expect(flags.withEditing).toBe(false);
    });
  });

  describe('withFaceting', () => {
    it('is false by default', () => {
      const flags = inferFeatureFlags(baseOptions);
      expect(flags.withFaceting).toBe(false);
    });

    it('is true when withFaceting is explicitly true', () => {
      const flags = inferFeatureFlags({ ...baseOptions, withFaceting: true });
      expect(flags.withFaceting).toBe(true);
    });

    it('is false when withFaceting is explicitly false', () => {
      const flags = inferFeatureFlags({ ...baseOptions, withFaceting: false });
      expect(flags.withFaceting).toBe(false);
    });
  });

  describe('withTreeData', () => {
    it('is false by default', () => {
      const flags = inferFeatureFlags(baseOptions);
      expect(flags.withTreeData).toBe(false);
    });

    it('is true when getSubRows is provided', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        getSubRows: (row: any) => row.children,
      });
      expect(flags.withTreeData).toBe(true);
    });

    it('auto-enables withRowExpansion when getSubRows is provided', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        getSubRows: (row: any) => row.children,
      });
      expect(flags.withRowExpansion).toBe(true);
    });

    it('does not enable withRowExpansion when getSubRows is not provided', () => {
      const flags = inferFeatureFlags(baseOptions);
      expect(flags.withRowExpansion).toBe(false);
    });

    it('respects explicit withRowExpansion: false even with getSubRows', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        getSubRows: (row: any) => row.children,
        withRowExpansion: false,
      });
      expect(flags.withTreeData).toBe(true);
      expect(flags.withRowExpansion).toBe(false);
    });
  });

  describe('withRowReorder', () => {
    it('is false by default', () => {
      const flags = inferFeatureFlags(baseOptions);
      expect(flags.withRowReorder).toBe(false);
    });

    it('is true when withRowReorder is explicitly true', () => {
      const flags = inferFeatureFlags({ ...baseOptions, withRowReorder: true });
      expect(flags.withRowReorder).toBe(true);
    });

    it('infers from onRowOrderChange', () => {
      const flags = inferFeatureFlags({ ...baseOptions, onRowOrderChange: () => {} });
      expect(flags.withRowReorder).toBe(true);
    });

    it('suppresses sorting when withRowReorder is true', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        withRowReorder: true,
        columns: [{ accessorKey: 'name', enableSorting: true }],
      });
      expect(flags.withRowReorder).toBe(true);
      expect(flags.withSorting).toBe(false);
    });

    it('suppresses sorting when inferred from onRowOrderChange', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        onRowOrderChange: () => {},
        columns: [{ accessorKey: 'name', enableSorting: true }],
      });
      expect(flags.withRowReorder).toBe(true);
      expect(flags.withSorting).toBe(false);
    });

    it('suppresses sorting even when withSorting is explicitly true', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        withRowReorder: true,
        withSorting: true,
      });
      expect(flags.withRowReorder).toBe(true);
      expect(flags.withSorting).toBe(false);
    });

    it('is suppressed when tree data is active', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        withRowReorder: true,
        getSubRows: (row: any) => row.children,
      });
      expect(flags.withRowReorder).toBe(false);
    });

    it('is suppressed when grouping is active', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        withRowReorder: true,
        grouping: ['department'],
      });
      expect(flags.withRowReorder).toBe(false);
    });

    it('does not suppress sorting when withRowReorder is false', () => {
      const flags = inferFeatureFlags({
        ...baseOptions,
        columns: [{ accessorKey: 'name', enableSorting: true }],
      });
      expect(flags.withRowReorder).toBe(false);
      expect(flags.withSorting).toBe(true);
    });
  });

  it('does not affect unrelated flags when one feature is enabled', () => {
    const flags = inferFeatureFlags({
      ...baseOptions,
      columns: [{ accessorKey: 'name', enableSorting: true }],
    });
    expect(flags.withSorting).toBe(true);
    expect(flags.withFiltering).toBe(false);
    expect(flags.withPagination).toBe(false);
    expect(flags.withRowSelection).toBe(false);
  });
});
