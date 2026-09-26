import { canReorderRows, reorderVisibleRows, RowDropEdge } from './row-reorder';

interface VisibleRow {
  id: string;
  depth?: number;
  grouped?: boolean;
}

function createTable(coreIds: string[], visibleRows: (string | VisibleRow)[] = coreIds) {
  const toRow = (row: string | VisibleRow) => {
    const { id, depth = 0, grouped = false } = typeof row === 'string' ? { id: row } : row;
    return { id, depth, original: { id }, getIsGrouped: () => grouped, getIsPinned: () => false };
  };
  return {
    getCoreRowModel: () => ({ rows: coreIds.map(toRow) }),
    getRowModel: () => ({ rows: visibleRows.map(toRow) }),
  } as any;
}

const ids = (rows: { id: string }[] | null) => rows?.map((row) => row.id) ?? null;

describe('@mantine/data-grid/reorderVisibleRows', () => {
  it('inserts the row before the target row by default', () => {
    expect(ids(reorderVisibleRows(createTable(['a', 'b', 'c', 'd']), 'a', 'c'))).toEqual([
      'b',
      'a',
      'c',
      'd',
    ]);
    expect(ids(reorderVisibleRows(createTable(['a', 'b', 'c', 'd']), 'd', 'b'))).toEqual([
      'a',
      'd',
      'b',
      'c',
    ]);
  });

  it('inserts the row after the target row with the after edge', () => {
    expect(ids(reorderVisibleRows(createTable(['a', 'b', 'c', 'd']), 'a', 'c', 'after'))).toEqual([
      'b',
      'c',
      'a',
      'd',
    ]);
    expect(ids(reorderVisibleRows(createTable(['a', 'b', 'c', 'd']), 'd', 'a', 'after'))).toEqual([
      'a',
      'd',
      'b',
      'c',
    ]);
  });

  it('moves a row to the last position when dropped after the last row', () => {
    expect(ids(reorderVisibleRows(createTable(['a', 'b', 'c', 'd']), 'a', 'd', 'after'))).toEqual([
      'b',
      'c',
      'd',
      'a',
    ]);
  });

  it('moves a row below the next row when dropped after it', () => {
    expect(ids(reorderVisibleRows(createTable(['a', 'b', 'c']), 'a', 'b', 'after'))).toEqual([
      'b',
      'a',
      'c',
    ]);
  });

  it('moves a row above the previous row when dropped before it', () => {
    expect(ids(reorderVisibleRows(createTable(['a', 'b', 'c']), 'c', 'b', 'before'))).toEqual([
      'a',
      'c',
      'b',
    ]);
  });

  it('returns null when the drop position keeps the current order', () => {
    const table = createTable(['a', 'b', 'c']);
    expect(reorderVisibleRows(table, 'a', 'b', 'before')).toBeNull();
    expect(reorderVisibleRows(table, 'b', 'a', 'after')).toBeNull();
  });

  it('keeps rows hidden by filtering in their core positions', () => {
    const table = createTable(['a', 'x', 'b', 'y', 'c'], ['a', 'b', 'c']);
    expect(ids(reorderVisibleRows(table, 'c', 'a'))).toEqual(['c', 'x', 'a', 'y', 'b']);
  });

  it('fills the visible core positions in the new visible order when rows are sorted', () => {
    const table = createTable(['a', 'x', 'b', 'y', 'c'], ['c', 'a', 'b']);
    expect(ids(reorderVisibleRows(table, 'b', 'c'))).toEqual(['b', 'x', 'c', 'y', 'a']);
  });

  it('returns null when the source or target row is not visible or both are the same', () => {
    const table = createTable(['a', 'b', 'c'], ['a', 'b']);
    expect(reorderVisibleRows(table, 'c', 'a')).toBeNull();
    expect(reorderVisibleRows(table, 'a', 'c')).toBeNull();
    expect(reorderVisibleRows(table, 'a', 'a')).toBeNull();
  });

  it('ignores tree sub-rows when lining up visible rows with core rows', () => {
    const table = createTable(
      ['a', 'b', 'c'],
      ['a', { id: 'a.0', depth: 1 }, { id: 'a.1', depth: 1 }, 'b', 'c']
    );
    const reordered = reorderVisibleRows(table, 'c', 'a') as { id: string }[] | null;
    expect(ids(reordered)).toEqual(['c', 'a', 'b']);
    expect(reordered!.every(Boolean)).toBe(true);
  });

  it('returns null when the source or target is a tree sub-row', () => {
    const table = createTable(['a', 'b'], ['a', { id: 'a.0', depth: 1 }, 'b']);
    expect(reorderVisibleRows(table, 'a.0', 'b')).toBeNull();
    expect(reorderVisibleRows(table, 'b', 'a.0')).toBeNull();
  });

  it('returns null for group rows and grouped leaf rows', () => {
    const table = createTable(
      ['a', 'b', 'c'],
      [
        { id: 'team:Red', grouped: true },
        { id: 'a', depth: 1 },
        { id: 'b', depth: 1 },
        { id: 'team:Blue', grouped: true },
        { id: 'c', depth: 1 },
      ]
    );
    expect(reorderVisibleRows(table, 'team:Blue', 'team:Red')).toBeNull();
    expect(reorderVisibleRows(table, 'b', 'a')).toBeNull();
    expect(reorderVisibleRows(table, 'c', 'team:Red')).toBeNull();
  });
});

describe('@mantine/data-grid/canReorderRows', () => {
  it('matches whether the drop changes the visible order for every source, target and edge', () => {
    const order = ['a', 'b', 'c', 'd', 'e'];
    const edges: RowDropEdge[] = ['before', 'after'];
    order.forEach((source) =>
      order.forEach((target) =>
        edges.forEach((edge) => {
          const next = order.filter((id) => id !== source);
          next.splice(next.indexOf(target) + (edge === 'after' ? 1 : 0), 0, source);
          const changed = source !== target && next.some((id, index) => id !== order[index]);
          expect(canReorderRows(order, source, target, edge)).toBe(changed);
        })
      )
    );
  });

  it('rejects rows that are not in the visible order', () => {
    expect(canReorderRows(['a', 'b'], 'x', 'a', 'before')).toBe(false);
    expect(canReorderRows(['a', 'b'], 'a', 'x', 'after')).toBe(false);
  });
});
