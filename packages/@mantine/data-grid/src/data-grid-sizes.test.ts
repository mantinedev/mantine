import { DATA_GRID_SIZES, getControlSize, getRowHeightEstimate } from './data-grid-sizes';

describe('@mantine/data-grid/data-grid-sizes', () => {
  it('locks the per-size table', () => {
    expect(DATA_GRID_SIZES.xs).toEqual({
      fontSize: 12,
      rowHeight: 28,
      cellPaddingX: 8,
      cellPaddingY: 4,
      utilityColumnWidth: 24,
      rowNumberWidth: 32,
      controlSize: 12,
      iconSize: 14,
      footerHeight: 36,
    });
    expect(DATA_GRID_SIZES.sm.rowHeight).toBe(32);
    expect(DATA_GRID_SIZES.md.rowHeight).toBe(36);
    expect(DATA_GRID_SIZES.lg.rowHeight).toBe(44);
    expect(DATA_GRID_SIZES.xl).toEqual({
      fontSize: 16,
      rowHeight: 52,
      cellPaddingX: 16,
      cellPaddingY: 8,
      utilityColumnWidth: 40,
      rowNumberWidth: 48,
      controlSize: 20,
      iconSize: 20,
      footerHeight: 52,
    });
  });

  it('cascades the chrome control size', () => {
    expect(getControlSize('xs')).toBe('xs');
    expect(getControlSize('sm')).toBe('xs');
    expect(getControlSize('md')).toBe('sm');
    expect(getControlSize('lg')).toBe('md');
    expect(getControlSize('xl')).toBe('md');
  });

  describe('getRowHeightEstimate', () => {
    const row = { id: 'a' } as any;

    it('prefers estimateSize from the virtual scroll config', () => {
      expect(
        getRowHeightEstimate(
          { estimateSize: () => 99, getRowHeight: () => 50, estimateRowHeight: 40, size: 'sm' },
          row,
          0
        )
      ).toBe(99);
    });

    it('falls back to a numeric getRowHeight', () => {
      expect(
        getRowHeightEstimate({ getRowHeight: () => 50, estimateRowHeight: 40, size: 'sm' }, row, 0)
      ).toBe(50);
    });

    it('skips getRowHeight when it returns auto', () => {
      expect(
        getRowHeightEstimate(
          { getRowHeight: () => 'auto', estimateRowHeight: 40, size: 'sm' },
          row,
          0
        )
      ).toBe(40);
    });

    it('falls back to the size row height', () => {
      expect(getRowHeightEstimate({ size: 'lg' }, row, 0)).toBe(44);
      expect(getRowHeightEstimate({ size: 'sm' }, undefined, 0)).toBe(32);
    });
  });
});
